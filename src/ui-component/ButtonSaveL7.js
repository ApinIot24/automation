import * as React from 'react';
import Button from '@mui/material/Button';
// import { useNavigate } from "react-router-dom"; // Uncomment if using navigation
import PropTypes from 'prop-types';
import axios from 'axios';
import dayjs from 'dayjs';
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
  const [severity, setSeverity] = React.useState('error'); // Default to error severity

  const validateInput = () => {
    // Check for empty inputs
    if (!lhp.shift || !lhp.sku || !lhp.plan || !lhp.real || !lhp.ach) {
      setMessage("Input cannot be empty or wrong.");
      setSeverity("error"); // Set severity to error
      setOpen(true);
      return false;
    }
    if (!lhp.users_input) {
      setMessage("User (NIK) Not Found. Please refresh the browser.");
      setSeverity("error");
      setOpen(true);
      return false;
    }
    return true; // Valid input
  };

  const routeChange = () => {
    const formattedDowntime = downtime.map(entry => ({
      time_start: entry.time_start ? dayjs(entry.time_start).format('HH:mm:ss') : null,
      time_stop: entry.time_stop ? dayjs(entry.time_stop).format('HH:mm:ss') : null,
      total_dt: entry.total_dt,
      kendala: entry.kendala,
    }));
    if (!validateInput()) return; // Stop if validation fails
    const payload = {
      ...lhp,
      downtime: formattedDowntime // Include downtime in the payload
    }
    axios.post('http://10.37.12.17:3000/lhpl7', payload)
      .then(response => {
        console.log("Data saved:", response);
        setMessage("LHP successfully saved to the database. Thank you for your input! and this id lhp: " + response.data.id); 
        setSeverity("success"); // Set severity to success
        setOpen(true);
        // navigate(path); // Uncomment if using navigation
      })
      .catch(error => {
        console.error("Error:", error);
        setMessage("Request failed. Please try again.");
        setSeverity("error"); // Set severity to error
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
        autoHideDuration={5000000}
      >
        <Alert
          onClose={handleClose}
          severity={severity} // Dynamic severity
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
  lhp: PropTypes.object.isRequired // Ensure lhp is an object
};

export default ButtonSave;
