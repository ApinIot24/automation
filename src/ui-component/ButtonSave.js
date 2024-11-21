import * as React from 'react';
import Button from '@mui/material/Button';
// import { useNavigate } from "react-router-dom"; // Uncomment if using navigation
import dayjs from 'dayjs';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Alert, Snackbar } from '@mui/material';

// ==============================|| BUTTON SAVE ||============================== //
const ButtonSave = ({ lhp, downtime }) => {
  // let navigate = useNavigate(); // Uncomment if using navigation
  const [state] = React.useState({
    vertical: 'top',
    horizontal: 'center',
  });
  const { vertical, horizontal } = state;
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState('');
  const [severity, setSeverity] = React.useState('error'); // Default severity to error


  const validateInput = () => {
    // Check for empty inputs
    if (!lhp.shift || !lhp.sku || !lhp.plan || !lhp.realdatetime || !lhp.ach || !lhp.real) {
      setMessage("Input cannot be empty or wrong.");
      setSeverity("error");
      setOpen(true);
      return false; // Input is not valid
    }
    if (!lhp.users_input) {
      setMessage("User (NIK) Not Found. Please refresh the browser.");
      setSeverity("error");
      setOpen(true);
      return false; // Input is not valid
    }
    return true; // Input is valid
  };

  const routeChange = () => {
    const formattedDowntime = downtime.map(entry => {
      // Validasi: Jika kendala terisi, pastikan time_start dan time_stop juga terisi
      // if (entry.kendala && (!entry.time_start || !entry.time_stop)) {
      //   setMessage("Error: Please ensure both 'time_start' and 'time_stop' are filled when 'kendala' is provided.");
      //   setSeverity("error");
      //   setOpen(true);
      //   return null; // Kembalikan null jika kondisi tidak terpenuhi
      // }
  
      // Lanjutkan pemformatan jika validasi lolos
      return {
        time_start: entry.time_start ? dayjs(entry.time_start).format('HH:mm:ss') : null,
        time_stop: entry.time_stop ? dayjs(entry.time_stop).format('HH:mm:ss') : null,
        total_dt: entry.total_dt,
        kategori_downtime: entry.kategori_downtime,
        unit_mesin: entry.unit_mesin,
        part_mesin: entry.part_mesin,
        kendala: entry.kendala,
        speed_oven_plan: entry.speed_oven_plan,
        speed_oven_reduce: entry.speed_oven_reduce,
        total_sbl: entry.total_sbl,
        penyebab: entry.penyebab,
        perbaikan: entry.perbaikan,
      };
    }).filter(Boolean); // Menghapus entry null jika ada
  
    // Periksa apakah validasi input lolos
    if (!validateInput() || !formattedDowntime.length) return; // Stop jika validasi gagal atau formattedDowntime kosong
  
    const payload = {
      ...lhp,
      downtime: formattedDowntime // Sertakan downtime dalam payload
    };
  
    axios.post('http://10.37.12.17:3000/lhp', payload)
      .then(response => {
        console.log("Data saved:", response);
        setMessage("LHP successfully saved to the database. Thank you for your input! and this id lhp: " + response.data.id);
        setSeverity("success"); // Set severity ke success
        setOpen(true);
        // navigate(path); // Uncomment jika perlu
      })
      .catch(error => {
        console.error("Error:", error);
        // Memeriksa apakah ada respons dan pesan kesalahan dari server
        const errorMessage = error.response && error.response.data && error.response.data.message
          ? error.response.data.message
          : "Request failed. Please try again."; // Pesan default jika tidak ada pesan khusus dari server
        setMessage(errorMessage); // Menggunakan pesan spesifik dari server jika ada
        setSeverity("error"); // Set severity ke error
        setOpen(true);
      });
  };
  

  const handleClose = (reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={routeChange} variant="contained" disableElevation>
        Submit
      </Button>
      <Snackbar
        onClose={handleClose}
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        key={vertical + horizontal}
        autoHideDuration={500000}
      >
        <Alert
          onClose={handleClose}
          severity={severity} // Use the severity state
          variant="filled"
          sx={{ width: '100%' }}
        >
          {message} {/* Display the message */}
        </Alert>
      </Snackbar>
    </div>
  );
};

ButtonSave.propTypes = {
  lhp: PropTypes.object.isRequired
};

export default ButtonSave;
