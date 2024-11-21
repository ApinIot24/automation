import * as React from 'react';
import { useEffect, useState } from 'react';
import {
  Alert, Grid, Snackbar, Slide
} from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import axios from 'axios';
import dayjs from 'dayjs';
import MainCard from 'ui-component/cards/MainCard';
// import { gridSpacing } from 'store/constant';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const BscLine5Downtime = () => {
  const [startDate, setStartDate] = useState(dayjs(new Date()));
  const [endDate, setEndDate] = useState(dayjs(new Date()));
  const [openSnack, setOpenSnack] = useState(false);
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const fetchData = (url) => {
    setLoading(true);
    axios.get(url)
      .then(response => {
        const dataolah = response.data.map((row, index) => ({
          ...row,
          id: index + 1
        }));
        setData(dataolah); // Menyimpan data dengan id (nomor urut) di state
      })
      .catch(error => {
        console.error(error);
        setOpenSnack(true);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    const formattedStartDate = dayjs(startDate).format('YYYY-MM-DD');
    const formattedEndDate = dayjs(endDate).format('YYYY-MM-DD');
    fetchData(`http://10.37.12.17:3000/downtime_daily_l5/range/${formattedStartDate}/${formattedEndDate}/l5`);
  }, [startDate, endDate]);

  const handleCloseSnack = (reason) => {
    if (reason === 'clickaway') return;
    setOpenSnack(false);
  };

  const columns = [
    { field: 'id', headerName: 'No.', width: 90 },
    { field: 'users_input', headerName: 'User Input', width: 90 },
    { field: 'time_start', headerName: 'Time Start', width: 100 },
    { field: 'time_stop', headerName: 'Time End', width: 100 },
    { field: 'total_dt', headerName: 'Time Downtime', width: 100 },
    { field: 'unit_mesin', headerName: 'Unit Mesin', width: 70 },
    { field: 'part_mesin', headerName: 'Part Mesin', width: 70 },
    { field: 'kendala', headerName: 'Kendala', width: 500 },
    { field: 'penyebab', headerName: 'penyebab', width: 500 },
    { field: 'perbaikan', headerName: 'perbaikan', width: 500 },
    { field: 'realdatetime', headerName: 'Tanggal', width: 100 },
    { field: 'grup', headerName: 'Line', width: 100 },
  ];

  return (
    <MainCard title="Report LHP Line 5" >
      <Grid container spacing={1} alignItems="center">
        <Grid item mb={5} mt={-10} xs={12} sm={3}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Start Date"
              value={startDate}
              onChange={(newValue) => setStartDate(newValue)}
              fullWidth
            />
          </LocalizationProvider>
        </Grid>
        <Grid item mb={5} mt={-10} xs={12} sm={3}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="End Date"
              value={endDate}
              onChange={(newValue) => setEndDate(newValue)}
              fullWidth
            />
          </LocalizationProvider>
        </Grid>
      </Grid>
      <Grid item sx={{ mb: 5, mt: 2 }} xs={12} >
        <DataGrid
          rows={data}
          columns={columns}
          loading={isLoading}
          slots={{ toolbar: GridToolbar }}
        />
      </Grid>

      <Snackbar
        open={openSnack}
        autoHideDuration={5000}
        onClose={handleCloseSnack}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        TransitionComponent={Transition}
      >
        <Alert onClose={handleCloseSnack} severity="error" variant="filled" sx={{ width: '100%' }}>
          cannot show data in table
        </Alert>
      </Snackbar>
      <Snackbar
        open={isLoading}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert severity="primary" variant="filled" sx={{ width: '100%' }}>
          loading
        </Alert>
      </Snackbar>
    </MainCard>
  );
};

export default BscLine5Downtime;
