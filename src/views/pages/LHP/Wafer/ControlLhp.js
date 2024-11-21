import * as React from 'react';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { Grid, TextField, Button, Snackbar, Alert, Slide } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ControlLhp = ({ label }) => {
  const [openSnack, setOpenSnack] = useState(false);
  const [snackMessage, setSnackMessage] = useState('');
  const [snackSeverity, setSnackSeverity] = useState('success');
  const [formData, setFormData] = useState({
    namaProduk: '',
    speedOven: '',
    beratSheetUtuh: '',
    beratSheet1Book: '',
    beratBook: '',
    perPcsSheet: '',
    perPcsCream: '',
    perPcsCoklat: '',
    perPcsKarton: '',
    planningPerMenitSheet: '',
    planningPerMenitCream: '',
    planningPerMenitCoklat: ''
  });
  // Mengambil data dari backend saat komponen pertama kali di-load
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://10.37.12.17:3000/control_lhp/l${label}`);
        if (response.status === 200) {
          setFormData(response.data); // Mengisi formData dengan data yang diterima dari server
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [label]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.put(`http://10.37.12.17:3000/control_lhp/l${label}`, formData);

      if (response.status === 200) {
        setSnackMessage('Data updated successfully');
        setSnackSeverity('success');
      } else {
        setSnackMessage('Failed to update data');
        setSnackSeverity('error');
      }
    } catch (error) {
      console.error('Error:', error);
      setSnackMessage('Error updating data');
      setSnackSeverity('error');
    } finally {
      setOpenSnack(true);
    }
  };

  const handleCloseSnack = (reason) => {
    if (reason === 'clickaway') return;
    setOpenSnack(false);
  };

  return (
    <MainCard title={`Control LHP Line ${label}`}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Nama Produk"
            name="namaProduk"
            value={formData.namaProduk}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Speed Oven"
            name="speedOven"
            value={formData.speedOven}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Berat 1 Sheet Utuh"
            name="beratSheetUtuh"
            value={formData.beratSheetUtuh}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Berat Sheet 1 Book"
            name="beratSheet1Book"
            value={formData.beratSheet1Book}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Berat Book"
            name="beratBook"
            value={formData.beratBook}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Per 1 Pcs Produk (gr) Sheet"
            name="perPcsSheet"
            value={formData.perPcsSheet}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Per 1 Pcs Produk (gr) Cream"
            name="perPcsCream"
            value={formData.perPcsCream}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Per 1 Pcs Produk (gr) Coklat"
            name="perPcsCoklat"
            value={formData.perPcsCoklat}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Per 1 Pcs Karton"
            name="perPcsKarton"
            value={formData.perPcsKarton}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Planning per Menit Sheet"
            name="planningPerMenitSheet"
            value={formData.planningPerMenitSheet}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Planning per Menit Cream"
            name="planningPerMenitCream"
            value={formData.planningPerMenitCream}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Planning per Menit Coklat"
            name="planningPerMenitCoklat"
            value={formData.planningPerMenitCoklat}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Grid>
      </Grid>

      <Snackbar
        open={openSnack}
        autoHideDuration={5000}
        onClose={handleCloseSnack}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        TransitionComponent={Transition}
      >
        <Alert
          onClose={handleCloseSnack}
          severity={snackSeverity}
          variant="filled"
          sx={{ width: '100%' }}
        >
          {snackMessage}
        </Alert>
      </Snackbar>
    </MainCard>
  );
};

export default ControlLhp;
