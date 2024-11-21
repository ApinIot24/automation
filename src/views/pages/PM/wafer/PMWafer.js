import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import MainCard from 'ui-component/cards/MainCard';
import UploadWafer from 'views/pages/PM/wafer/uploadWafer';
import PMTableWafer from 'views/pages/PM/wafer/PMTableWafer';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import axios from 'axios';

const PMWafer = () => {
  const [value, setValue] = useState('0');
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    // Logika inisialisasi jika diperlukan
  }, []);

  const handleDeleteAll = async () => {
    try {
      await axios.delete('http://10.37.12.17:3000/api/delete_all_wafer');
      alert('Semua data berhasil dihapus.');
    } catch (error) {
      console.error('Error deleting all data:', error);
      alert('Terjadi kesalahan saat menghapus data.');
    }
    setOpenDeleteDialog(false);
  };

  const requestNotificationPermission = () => {
    console.log('Meminta izin notifikasi...');
    if (Notification.permission !== 'granted' && Notification.permission !== 'denied') {
      Notification.requestPermission().then((permission) => {
        console.log('Hasil izin:', permission);
        if (permission === 'granted') {
          console.log('Izin notifikasi diberikan');
        } else {
          console.log('Izin notifikasi ditolak');
        }
      });
    } else {
      console.log(`Izin sudah ${Notification.permission}`);
    }
  };

  return (
    <MainCard title="PM Wafer">
      <Dialog
        open={openDeleteDialog}
        onClose={() => setOpenDeleteDialog(false)}
      >
        <DialogTitle>Konfirmasi Hapus Semua Data</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Apakah Anda yakin ingin menghapus semua data? Tindakan ini tidak dapat dibatalkan.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDeleteDialog(false)} color="primary">
            Batal
          </Button>
          <Button onClick={handleDeleteAll} color="error" autoFocus>
            Hapus Semua
          </Button>
        </DialogActions>
      </Dialog>

      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
          >
            <Tab label="Home" value="0" />
            <Tab label="Table PM 1" value="1" />
            <Tab label="Table PM 2" value="2" />
            <Tab label="Table PM 6" value="3" />
            <Tab label="Table PM 7" value="4" />
          </TabList>
        </Box>
        <TabPanel value="0">
          <Button
            variant="contained"
            color="error"
            onClick={() => setOpenDeleteDialog(true)}
            sx={{ marginBottom: 2 }}
          >
            Delete All Data
          </Button>
          <UploadWafer label="Upload All WAFER" url="http://10.37.12.17:3000/api/import/wafer" />
          <UploadWafer label="Upload WAFER LINE 1" url="http://10.37.12.17:3000/api/import/wafer/1" />
          <UploadWafer label="Upload WAFER LINE 2" url="http://10.37.12.17:3000/api/import/wafer/2" />
          <UploadWafer label="Upload WAFER LINE 6" url="http://10.37.12.17:3000/api/import/wafer/6" />
          <UploadWafer label="Upload WAFER LINE 7" url="http://10.37.12.17:3000/api/import/wafer/7" />
          <Button
            variant="contained"
            onClick={requestNotificationPermission}
            sx={{ marginTop: 2 }}
          >
            Izinkan Notifikasi
          </Button>
        </TabPanel>
        <TabPanel value="1">
          <PMTableWafer group={1} />
        </TabPanel>
        <TabPanel value="2">
          <PMTableWafer group={2} />
        </TabPanel>
        <TabPanel value="3">
          <PMTableWafer group={6} />
        </TabPanel>
        <TabPanel value="4">
          <PMTableWafer group={7} />
        </TabPanel>
      </TabContext>
    </MainCard>
  );
};

export default PMWafer;
