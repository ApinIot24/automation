import * as React from 'react';
import { useState } from 'react';
import {
  Alert, Button, Grid, Snackbar, Slide, TextField
} from '@mui/material';
import axios from 'axios';
import MainCard from 'ui-component/cards/MainCard';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const UploadBiscuit = ({ label, url }) => {  // Perbaikan di sini: menggunakan destructuring props
  const [openSnack, setOpenSnack] = useState(false);
  const [snackMessage, setSnackMessage] = useState('');
  const [snackSeverity, setSnackSeverity] = useState('error');
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState('');
  const [isLoading, setLoading] = useState(false);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setFileName(selectedFile.name);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      setSnackMessage('Silakan pilih file terlebih dahulu!');
      setSnackSeverity('warning');
      setOpenSnack(true);
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    setLoading(true);
    try {
      await axios.post(url, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setSnackMessage('File berhasil diunggah dan diimpor ke PostgreSQL!');
      setSnackSeverity('success');
      setOpenSnack(true);
    } catch (error) {
      setSnackMessage('Gagal mengunggah file. Coba lagi.');
      setSnackSeverity('error');
      setOpenSnack(true);
    } finally {
      setLoading(false);
    }
  };

  const handleCloseSnack = () => {
    setOpenSnack(false);
  };

  return (
    <MainCard title={label} sx={{ m: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={8}>
          <TextField
            label="Pilih File"
            value={fileName}
            variant="outlined"
            fullWidth
            disabled
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Button
            variant="contained"
            component="label"
            fullWidth
          >
            Pilih File
            <input
              type="file"
              hidden
              accept=".xlsx"
              onChange={handleFileChange}
            />
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleUpload}
            disabled={isLoading}
          >
            Unggah dan Impor
          </Button>
        </Grid>
      </Grid>

      {/* Snackbar untuk menampilkan pesan sukses atau error */}
      <Snackbar
        open={openSnack}
        autoHideDuration={5000} // Disarankan durasi lebih pendek
        onClose={handleCloseSnack}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        TransitionComponent={Transition}
      >
        <Alert onClose={handleCloseSnack} severity={snackSeverity} variant="filled" sx={{ width: '100%' }}>
          {snackMessage}
        </Alert>
      </Snackbar>

      {/* Snackbar untuk menampilkan loading */}
      {isLoading && (
        <Snackbar
          open={isLoading}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
          <Alert severity="info" variant="filled" sx={{ width: '100%' }}>
            Memuat...
          </Alert>
        </Snackbar>
      )}
    </MainCard>
  );
};

export default UploadBiscuit;
