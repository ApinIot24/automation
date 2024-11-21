import * as React from 'react';
import { useEffect, useState } from 'react';
import {
  Alert, Box, Grid, Snackbar, Typography, FormControl, TextField, Select, MenuItem, InputLabel,
  CardContent, Dialog, Divider, AppBar, Toolbar, IconButton, DialogContent, Slide
} from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { styled } from '@mui/material/styles';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LineChart, BarChart, ChartsReferenceLine } from '@mui/x-charts';
import axios from 'axios';
import dayjs from 'dayjs';
import ButtonBack from 'ui-component/ButtonBack';
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';
import CloseIcon from '@mui/icons-material/Close';

// Styling for cards
const CardWrapper = styled(MainCard)(() => ({
  backgroundColor: 'whitesmoke',
  color: '#fff',
  overflow: 'hidden',
  marginRight: 4,
  position: 'relative',
}));

// Transition for dialogs
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const TableLhpL5 = () => {
  // State management
  const [valuedate, setValueDate] = useState(dayjs(new Date()));
  const [openSnack, setOpenSnack] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [chartData, setChartData] = useState({
    rmE1c: [0],
    rmE2c: [0],
    rmE3c: [0],
    rmE4c: [0],
    rmE5c: [0],
    rmE6c: [0],
    rmE7c: [0],
    rmE8c: [0],
    rmE9c: [0],
    rmE10c: [0],
    rmE11c: [0],
    rmE12c: [0],
    regulerc: [0],
    planningc: [0],
    rmdc: [0],
    rfeedingc: [0],
    rpackTablec: [0],
    rovenc: [0],
  });

  const [shiftDetails, setShiftDetails] = useState({
    shift: '',
    sku: '',
    reguler: '',
    hold: '',
    bubuk: '',
    output: '',
    output_kg: '',
    rmd: '',
    rfeeding: '',
    sampahpacking: '',
    rpackinner: '',
    rmE1: '',
    rmE2: '',
    rmE3: '',
    rmE4: '',
    rmE5: '',
    rmE6: '',
    rmE7: '',
    rmE8: '',
    rmE9: '',
    rmE10: '',
    rmE11: '',
    rmE12: '',
    roll: '',
    rpackTable: '',
    rejectpacking: '',
    rejectstacking: '',
    rejectcoolingconveyor: '',
    rmtotal: '',
    roven: '',
    soven: '',
    mcbks: '',
    ptable: '',
    serbuk: '',
    tampungan: '',
    total: '',
    brtpack: '',
    batch: '',
    batch_buat: '',
    wipkulitawal: '',
    wipkulitakhir: '',
    wipselisih: '',
    wipkulit: '',
    viawal: '',
    viambil: '',
    viakhir: '',
    vireturn: '',
    viinner: '',
    virainner: '',
    viE1: '',
    viE2: '',
    viE3: '',
    viE4: '',
    viE5: '',
    viE6: '',
    viE7: '',
    viE8: '',
    viE9: '',
    viE10: '',
    viE11: '',
    viE12: '',
    variance: '',
    variance_batch: '',
    variance_fg: '',
    berat_basah: '',
    berat_kering: '',
    krkawal: '',
    krawal: '',
    krakhir: '',
    krpakai: '',
    kreturn: '',
    kreject: '',
    kendala: {},
    batch_tuang: '',
    batch_cetak: '',
    wip_adonan_awal: '',
    wip_adonan_akhir: '',
    wip_adonan_selisih: '',
    wip_adonan_kulit: '',
    adonan_gagal_kg: '',
    adonan_gagal_kulit: ''
  });

  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const apiEndpoints = {
    lhpdaily: 'http://10.37.12.17:3000/lhpl5_daily/l5',
    lhpDetail: 'http://10.37.12.17:3000/lhpl5/detail/'
  };

  // Fetch data from API
  const fetchData = (url) => {
    setLoading(true);
    axios.get(url)
      .then(response => {
        const dataolah = response.data;
        setData(dataolah);
        updateChartData(dataolah);
      })
      .catch(error => {
        console.error(error);
        setOpenSnack(true);
      })
      .finally(() => setLoading(false));
  };

  // Update chart data state for 3 shifts
  const updateChartData = (data) => {
    setChartData({
      rmE1c: data.map(item => item.rmall?.rmE1 || 0),
      rmE2c: data.map(item => item.rmall?.rmE2 || 0),
      rmE3c: data.map(item => item.rmall?.rmE3 || 0),
      rmE4c: data.map(item => item.rmall?.rmE4 || 0),
      rmE5c: data.map(item => item.rmall?.rmE5 || 0),
      rmE6c: data.map(item => item.rmall?.rmE6 || 0),
      rmE7c: data.map(item => item.rmall?.rmE7 || 0),
      rmE8c: data.map(item => item.rmall?.rmE8 || 0),
      rmE9c: data.map(item => item.rmall?.rmE9 || 0),
      rmE10c: data.map(item => item.rmall?.rmE10 || 0),
      rmE11c: data.map(item => item.rmall?.rmE11 || 0),
      rmE12c: data.map(item => item.rmall?.rmE12 || 0),
      regulerc: data.map(item => item.reguler || 0),
      planningc: data.map(item => item.planning || 0),
      rpackTablec: data.map(item => item.rpacktable || 0),
      rovenc: data.map(item => item.roven || 0),
      rmdc: data.map(item => item.rmd || 0),
      rfeedingc: data.map(item => item.rfeeding || 0)
    });
  };

  // Initial data fetch on component mount
  useEffect(() => {
    fetchData(apiEndpoints.lhpdaily);
  }, []);

  // Handle date change
  const handleDateChange = (newValue) => {
    setValueDate(newValue);
    const formattedDate = dayjs(newValue).format('YYYY-MM-DD');
    fetchData(`http://10.37.12.17:3000/lhpl5_daily/date/${formattedDate}/l5`);
  };

  // Columns for DataGrid
  const generateKendalaColumns = (maxKendalaCount) => {
    const columns = [
      { field: 'id', headerName: 'ID', width: 50 },
      { field: 'users_input', headerName: 'User Input', width: 200 },
      { field: 'shift', headerName: 'Time', width: 100 },
      { field: 'sku', headerName: 'Sku', width: 200 },
      { field: 'reguler', headerName: 'Release', width: 50 },
      { field: 'planning', headerName: 'Planning', width: 50 },
      { field: 'hold', headerName: 'Hold', width: 50 },
      { field: 'output', headerName: 'Output', width: 50 },
      { field: 'output_kg', headerName: 'Output Kg', width: 50 },
      { field: 'bubuk', headerName: 'BUBUK', width: 50 },
      { field: 'berat_basah', headerName: 'Berat Basah', width: 50 },
      { field: 'berat_kering', headerName: 'Berat Kering', width: 50 },
      { field: 'rmd', headerName: 'Rmd', width: 50 },
      { field: 'rfeeding', headerName: 'Rfeeding', width: 50 },
      { field: 'roll', headerName: 'Roll', width: 50 },
      { field: 'sampahpacking', headerName: 'Sampah Packing', width: 50 },
      {
        field: 'rmE1', headerName: 'RM E1', width: 50,
        valueGetter: (value, row) => `${row.rmall.rmE1 || ''}`
      },
      {
        field: 'rmE2', headerName: 'RM E2', width: 50,
        valueGetter: (value, row) => `${row.rmall.rmE2 || ''}`
      },
      {
        field: 'rmE3', headerName: 'RM E3', width: 50,
        valueGetter: (value, row) => `${row.rmall.rmE3 || ''}`
      },
      {
        field: 'rmE4', headerName: 'RM E4', width: 50,
        valueGetter: (value, row) => `${row.rmall.rmE4 || ''}`
      },
      {
        field: 'rmE5', headerName: 'RM E5', width: 50,
        valueGetter: (value, row) => `${row.rmall.rmE5 || ''}`
      },
      {
        field: 'rmE6', headerName: 'RM E6', width: 50,
        valueGetter: (value, row) => `${row.rmall.rmE6 || ''}`
      },
      {
        field: 'rmE7', headerName: 'RM E7', width: 50,
        valueGetter: (value, row) => `${row.rmall.rmE7 || ''}`
      },
      {
        field: 'rmE8', headerName: 'RM E8', width: 50,
        valueGetter: (value, row) => `${row.rmall.rmE8 || ''}`
      },
      {
        field: 'rmE9', headerName: 'RM E9', width: 50,
        valueGetter: (value, row) => `${row.rmall.rmE9 || ''}`
      },
      {
        field: 'rmE10', headerName: 'RM E10', width: 50,
        valueGetter: (value, row) => `${row.rmall.rmE10 || ''}`
      },
      {
        field: 'rmE11', headerName: 'RM E11', width: 50,
        valueGetter: (value, row) => `${row.rmall.rmE11 || ''}`
      },
      {
        field: 'rmE12', headerName: 'RM E12', width: 50,
        valueGetter: (value, row) => `${row.rmall.rmE12 || ''}`
      },
      { field: 'rpacktable', headerName: 'Rpacktable', width: 50 },
      { field: 'rejectpacking', headerName: 'Reject Packing', width: 50 },
      { field: 'rejectstacking', headerName: 'Reject Stacking', width: 50 },
      { field: 'rejectcoolingconveyor', headerName: 'Reject Cooling Conveyor', width: 50 },
      { field: 'rmtotal', headerName: 'Rmtotal', width: 50 },
      { field: 'roven', headerName: 'R Oven', width: 50 },
      { field: 'soven', headerName: 'Sampah Oven', width: 50 },
      { field: 'mcbks', headerName: 'Mcbks', width: 50 },
      { field: 'ptable', headerName: 'P Table', width: 50 },
      { field: 'serbuk', headerName: 'Serbuk', width: 50 },
      { field: 'tampungan', headerName: 'Tampungan', width: 50 },
      { field: 'total', headerName: 'Total', width: 50 },
      { field: 'brtpack', headerName: 'Brt Pack', width: 50 },
      { field: 'brtpcs', headerName: 'Brt PCS', width: 50 },
      { field: 'batch_buat', headerName: 'Batch Buat', width: 50 },
      { field: 'batch_tuang', headerName: 'Batch Tuang', width: 50 },
      { field: 'batch_cetak', headerName: 'Batch Cetak', width: 50 },
      { field: 'weight_bsc_pcs', headerName: 'Weight BSC PCS', width: 50 },
      { field: 'weight_bsc_pack', headerName: 'Weight BSC PACK', width: 50 },
      { field: 'wip_adonan_awal', headerName: 'WIP Adonan Awal', width: 50 },
      { field: 'wip_adonan_akhir', headerName: 'WIP Adonan Akhir', width: 50 },
      { field: 'wip_adonan_selisih', headerName: 'WIP Adonan Selisih', width: 50 },
      { field: 'wip_adonan_kulit', headerName: 'WIP Adonan Kulit', width: 50 },
      { field: 'adonan_gagal_kg', headerName: 'Adonan Gagal (kg)', width: 50 },
      { field: 'adonan_gagal_kulit', headerName: 'Adonan Gagal Kulit', width: 50 },
      { field: 'wipkulitawal', headerName: 'Wip Kulit Awal', width: 50 },
      { field: 'wipkulitakhir', headerName: 'Wip Kulit Akhir', width: 50 },
      { field: 'wipselisih', headerName: 'Wip Selisih', width: 50 },
      { field: 'wipkulit', headerName: 'Wip Selisih ', width: 50 },
      { field: 'viawal', headerName: 'Vi awak', width: 50 },
      { field: 'viambil', headerName: 'Vi ambil', width: 50 },
      { field: 'viakhir', headerName: 'Vi Akhir', width: 50 },
      { field: 'vireturn', headerName: 'Vi return', width: 50 },
      { field: 'viinner', headerName: 'Vi Inner', width: 50 },
      { field: 'virainner', headerName: 'Vi Rainner', width: 50 },
      {
        field: 'viE1', headerName: 'Vi E1', width: 50,
        valueGetter: (value, row) => `${row.viall.viE1 || ''}`
      },
      {
        field: 'viE2', headerName: 'Vi E2', width: 50,
        valueGetter: (value, row) => `${row.viall.viE2 || ''}`
      },
      {
        field: 'viE3', headerName: 'Vi E3', width: 50,
        valueGetter: (value, row) => `${row.viall.viE3 || ''}`
      },
      {
        field: 'viE4', headerName: 'Vi E4', width: 50,
        valueGetter: (value, row) => `${row.viall.viE4 || ''}`
      },
      {
        field: 'viE5', headerName: 'Vi E5', width: 50,
        valueGetter: (value, row) => `${row.viall.viE5 || ''}`
      },
      {
        field: 'viE6', headerName: 'Vi E6', width: 50,
        valueGetter: (value, row) => `${row.viall.viE6 || ''}`
      },
      {
        field: 'viE7', headerName: 'Vi E7', width: 50,
        valueGetter: (value, row) => `${row.viall.viE7 || ''}`
      },
      {
        field: 'viE8', headerName: 'Vi E8', width: 50,
        valueGetter: (value, row) => `${row.viall.viE8 || ''}`
      },
      {
        field: 'viE9', headerName: 'Vi E9', width: 50,
        valueGetter: (value, row) => `${row.viall.viE9 || ''}`
      },
      {
        field: 'viE10', headerName: 'Vi E10', width: 50,
        valueGetter: (value, row) => `${row.viall.viE10 || ''}`
      },
      {
        field: 'viE11', headerName: 'Vi E11', width: 50,
        valueGetter: (value, row) => `${row.viall.viE11 || ''}`
      },
      {
        field: 'viE12', headerName: 'Vi E12', width: 50,
        valueGetter: (value, row) => `${row.viall.viE12 || ''}`
      },
      { field: 'variance', headerName: 'Variance', width: 50 },
      { field: 'variance_batch', headerName: 'Variance Batch', width: 50 },
      { field: 'variance_fg', headerName: 'Variance FG', width: 50 },
      { field: 'krkawal', headerName: 'Kr Awal', width: 50 },
      { field: 'krawal', headerName: 'Kr Awak', width: 50 },
      { field: 'krakhir', headerName: 'Kr Akhir', width: 50 },
      { field: 'krpakai', headerName: 'Kr Pakai', width: 50 },
      { field: 'kreturn', headerName: 'Kr Return', width: 50 },
      { field: 'kreject', headerName: 'Kr Reject', width: 50 },
      { field: 'rpackinner', headerName: 'R pack Inner', width: 50 }
    ];

    for (let i = 1; i <= maxKendalaCount; i++) {
      columns.push({
        field: `kendala${i}`,
        headerName: `Kendala ${i}`,
        width: 200,
        valueGetter: (value, row) => `${row.kendalaall?.[`kendala${i}`] || ''}`
      });
    }

    return columns;
  };

  // Menentukan jumlah maksimum kendala berdasarkan data
  const maxKendalaCount = Math.max(...data.map(row => Object.keys(row.kendalaall).length));
  const columns = generateKendalaColumns(maxKendalaCount);

  // Handle row click event
  const handleRowClick = (params) => {
    setLoading(true);
    axios.get(`${apiEndpoints.lhpDetail}${params.row.id}`)
      .then(response => {
        const dataolah = response.data[0];
        setShiftDetails({
          shift: dataolah.shift,
          sku: dataolah.sku,
          reguler: dataolah.reguler,
          planning: dataolah.planning,
          hold: dataolah.hold,
          output: dataolah.output,
          output_kg: dataolah.output_kg,
          brtpcs: dataolah.brtpcs,
          rmd: dataolah.rmd,
          rfeeding: dataolah.rfeeding,
          sampahpacking: dataolah.sampahpacking,
          rpackinner: dataolah.rpackinner,
          rmE1: dataolah.rmall?.rmE1 || 0,
          rmE2: dataolah.rmall?.rmE2 || 0,
          rmE3: dataolah.rmall?.rmE3 || 0,
          rmE4: dataolah.rmall?.rmE4 || 0,
          rmE5: dataolah.rmall?.rmE5 || 0,
          rmE6: dataolah.rmall?.rmE6 || 0,
          rmE7: dataolah.rmall?.rmE7 || 0,
          rmE8: dataolah.rmall?.rmE8 || 0,
          rmE9: dataolah.rmall?.rmE9 || 0,
          rmE10: dataolah.rmall?.rmE10 || 0,
          rmE11: dataolah.rmall?.rmE11 || 0,
          rmE12: dataolah.rmall?.rmE12 || 0,
          roll: dataolah.roll,
          rpackTable: dataolah.rpacktable,
          rejectpacking: dataolah.rejectpacking,
          rejectstacking: dataolah.rejectstacking,
          rejectcoolingconveyor: dataolah.rejectcoolingconveyor,
          rmtotal: dataolah.rmtotal,
          roven: dataolah.roven,
          soven: dataolah.soven,
          mcbks: dataolah.mcbks,
          ptable: dataolah.ptable,
          serbuk: dataolah.serbuk,
          tampungan: dataolah.tampungan,
          total: dataolah.total,
          brtpack: dataolah.brtpack,
          batch: dataolah.batch,
          batch_buat: dataolah.batch_buat,
          wipkulitawal: dataolah.wipkulitawal,
          wipkulitakhir: dataolah.wipkulitakhir,
          wipselisih: dataolah.wipselisih,
          wipkulit: dataolah.wipkulit,
          viawal: dataolah.viawal,
          viambil: dataolah.viambil,
          viakhir: dataolah.viakhir,
          vireturn: dataolah.vireturn,
          viinner: dataolah.viinner,
          virainner: dataolah.virainner,
          viE1: dataolah.viall?.viE1 || 0,
          viE2: dataolah.viall?.viE2 || 0,
          viE3: dataolah.viall?.viE3 || 0,
          viE4: dataolah.viall?.viE4 || 0,
          viE5: dataolah.viall?.viE5 || 0,
          viE6: dataolah.viall?.viE6 || 0,
          viE7: dataolah.viall?.viE7 || 0,
          viE8: dataolah.viall?.viE8 || 0,
          viE9: dataolah.viall?.viE9 || 0,
          viE10: dataolah.viall?.viE10 || 0,
          viE11: dataolah.viall?.viE11 || 0,
          viE12: dataolah.viall?.viE12 || 0,
          variance: dataolah.variance,
          variance_batch: dataolah.variance_batch,
          variance_fg: dataolah.variance_fg,
          berat_basah: dataolah.berat_basah,
          berat_kering: dataolah.berat_kering,
          krkawal: dataolah.krkawal,
          krawal: dataolah.krawal,
          krakhir: dataolah.krakhir,
          krpakai: dataolah.krpakai,
          kreturn: dataolah.kreturn,
          kreject: dataolah.kreject,
          kendala: dataolah.kendalaall,
          batch_tuang: dataolah.batch_tuang,
          batch_cetak: dataolah.batch_cetak,
          wip_adonan_awal: dataolah.wip_adonan_awal,
          wip_adonan_akhir: dataolah.wip_adonan_akhir,
          wip_adonan_selisih: dataolah.wip_adonan_selisih,
          wip_adonan_kulit: dataolah.wip_adonan_kulit,
          adonan_gagal_kg: dataolah.adonan_gagal_kg,
          adonan_gagal_kulit: dataolah.adonan_gagal_kulit,
          weight_bsc_pcs: dataolah.weight_bsc_pcs,
          weight_bsc_pack: dataolah.weight_bsc_pack,
        });
        setOpenDialog(true);
      })
      .catch(error => {
        console.error(error);
      })
      .finally(() => setLoading(false));
  };

  const handleCloseSnack = (reason) => {
    if (reason === 'clickaway') return;
    setOpenSnack(false);
  };
  const renderTextField = (label, name) => (
    <TextField
      label={label}
      value={shiftDetails[name] || ''}  // Data dari state shiftDetails
      fullWidth
      InputProps={{
        readOnly: true,  // Set field menjadi read-only
      }}
    />
  );

  const renderSelectField = (label, name, options) => (
    <FormControl fullWidth>
      <InputLabel>{label}</InputLabel>
      <Select
        label={label}
        value={shiftDetails[name] || ''}  // Data dari state shiftDetails
        inputProps={{ readOnly: true }}  // Set field menjadi read-only
      >
        {options.map((option, idx) => (
          <MenuItem key={idx} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );

  return (
    <MainCard title="Report LHP Line 5" secondary={<ButtonBack path={'/utils/packing-line5-bsc/table'} />} >
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12} sm={9}>
          {/* Placeholder for other components */}
        </Grid>
        <Grid item mb={5} mt={-10} xs={12} sm={3}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Search Date"
              value={valuedate}
              onChange={handleDateChange}
            />
          </LocalizationProvider>
        </Grid>
      </Grid>

      <Grid container spacing={gridSpacing}>
        <Grid item xs={12} sm={4}>
          <CardWrapper>
            <Typography variant="h3" align="center">Grafik Reject</Typography>
            <Box sx={{ width: '100%' }}>
              <LineChart
                xAxis={[{ scaleType: 'band', data: ['Shift 1', 'Shift 2', 'Shift 3'] }]}
                series={[
                  ...Object.keys(chartData)
                    .filter((key) => key.startsWith('rmE'))
                    .map((key, index) => ({
                      id: String(index + 1),
                      label: `E${index + 1}`, // Label E1 hingga E12
                      data: chartData[key]?.length ? chartData[key] : [0, 0, 0], // Fallback ke [0, 0, 0] jika data tidak ada
                      color: ['#ff0000', '#00ff00', '#0000ff', '#ff00ff', '#00ffff', '#ffff00', '#ff6600', '#0066ff', '#6600ff', '#33cc33', '#ff3366', '#66ccff'][index % 12], // Warna kontras
                    })),
                  { id: '13', label: 'MAX', type: 'line', curve: 'linear', data: [60, 60, 60], color: '#f20707' }
                ]}
                height={300}
                width={450}
                margin={{ left: 30, right: 30, top: 100, bottom: 30 }}
              >
                <ChartsReferenceLine
                  y={60}
                  label="Max"
                  lineStyle={{ stroke: 'red' }}
                  labelStyle={{ fontSize: '16px', fontWeight: 'bold', fill: 'red', zIndex: 10 }}
                />
              </LineChart>
            </Box>
          </CardWrapper>
        </Grid>

        <Grid item xs={12} sm={4}>
          <CardWrapper>
            <Typography variant="h3" align="center">Grafik Achievement</Typography>
            <BarChart
              xAxis={[{ scaleType: 'band', data: ['Shift 1', 'Shift 2', 'Shift 3'] }]}
              series={[
                {
                  id: '1',
                  label: 'Realease',  // Nama label untuk release
                  data: chartData.regulerc?.length ? chartData.regulerc : [0, 0, 0],  // Default ke [0, 0, 0] jika regulerc tidak ada
                  stack: 'A',
                  barGap: 0,
                  color: '#00ff00', // Warna untuk reguler (realisasi)
                },
                {
                  id: '2',
                  label: 'Planning',  // Nama label untuk planning
                  data: chartData.planningc?.length
                    ? chartData.planningc.map((p, i) => Math.max(p - (chartData.regulerc?.[i] || 0), 0))  // Selisih antara planning dan real
                    : [0, 0, 0],  // Default ke [0, 0, 0] jika planningc tidak ada
                  stack: 'A',
                  color: '#ff0000', // Warna untuk planning
                }
              ]}
              height={300}
              width={450}
            />

          </CardWrapper>
        </Grid>

        <Grid item xs={12} sm={4}>
          <CardWrapper>
            <Typography variant="h3" align="center">Grafik Reject Packing Table</Typography>
            <LineChart
              xAxis={[{ scaleType: 'band', data: ['Shift 1', 'Shift 2', 'Shift 3'] }]}
              series={[
                { id: '1', label: 'Pack Table', data: chartData.rpackTablec?.length ? chartData.rpackTablec : [0, 0, 0], color: '#0000ff' },
                { id: '2', label: 'MAX', type: 'line', curve: 'linear', data: [200, 200, 200], color: '#f20707' }
              ]}
              height={300}
              width={450}
            >
              <ChartsReferenceLine
                y={200}
                label="Max"
                lineStyle={{ stroke: 'red' }}
                labelStyle={{ fontSize: '16px', fontWeight: 'bold', fill: 'red', zIndex: 10 }}
              />
            </LineChart>
          </CardWrapper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <CardWrapper>
            <Typography variant="h3" align="center">Grafik Reject Oven</Typography>
            <LineChart
              xAxis={[{ scaleType: 'band', data: ['Shift 1', 'Shift 2', 'Shift 3'] }]}
              series={[

                { id: '1', label: 'Oven', data: chartData.rovenc?.length ? chartData.rovenc : [0, 0, 0], color: '#ff00ff' },
                { id: '2', label: 'MAX', type: 'line', curve: 'linear', data: [50, 50, 50], color: '#f20707' }
              ]}
              height={300}
              width={450}
            >
              <ChartsReferenceLine
                y={50}
                label="Max"
                lineStyle={{ stroke: 'red' }}
                labelStyle={{ fontSize: '16px', fontWeight: 'bold', fill: 'red', zIndex: 10 }}
              />
            </LineChart>
          </CardWrapper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <CardWrapper>
            <Typography variant="h3" align="center">Grafik Reject Metal Detector</Typography>
            <LineChart
              xAxis={[{ scaleType: 'band', data: ['Shift 1', 'Shift 2', 'Shift 3'] }]}
              series={[
                { id: '1', label: 'MD', data: chartData.rmdc?.length ? chartData.rmdc : [0, 0, 0], color: '#00ffff' },
                // { id: '5', label: 'MAX', type: 'line', curve: 'linear', data: [60, 60, 60], color: '#f20707' }
              ]}
              height={300}
              width={450}
            >
              {/* <ChartsReferenceLine
                y={60}
                label="Max"
                lineStyle={{ stroke: 'red' }}
                labelStyle={{ fontSize: '16px', fontWeight: 'bold', fill: 'red', zIndex: 10 }}
              /> */}
            </LineChart>
          </CardWrapper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <CardWrapper>
            <Typography variant="h3" align="center">Grafik Reject Feeding</Typography>
            <LineChart
              xAxis={[{ scaleType: 'band', data: ['Shift 1', 'Shift 2', 'Shift 3'] }]}
              series={[

                { id: '1', label: 'Feeding', data: chartData.rfeedingc?.length ? chartData.rfeedingc : [0, 0, 0], color: '#ff6600' },
                { id: '2', label: 'MAX', type: 'line', curve: 'linear', data: [150, 150, 150], color: '#f20707' }
              ]}
              height={300}
              width={450}
            >
              <ChartsReferenceLine
                y={150}
                label="Max"
                lineStyle={{ stroke: 'red' }}
                labelStyle={{ fontSize: '16px', fontWeight: 'bold', fill: 'red', zIndex: 10 }}
              />
            </LineChart>
          </CardWrapper>
        </Grid>
      </Grid>


      <Grid item xs={12} mt={5}>
        <DataGrid rows={data} columns={columns} loading={isLoading} onRowClick={handleRowClick} slots={{ toolbar: GridToolbar }} />
      </Grid>

      <Snackbar
        open={openSnack}
        onClose={handleCloseSnack}
        autoHideDuration={6000}
      >
        <Alert onClose={handleCloseSnack} severity="error">
          Data is not complete, cannot show data in table and graphics.
        </Alert>
      </Snackbar>

      <Dialog
        fullScreen
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={() => setOpenDialog(false)} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6">Detail Data</Typography>
          </Toolbar>
        </AppBar>
        <DialogContent>
          <CardContent>
            <Typography variant="h5">Primary Data</Typography>
            <Grid container spacing={2} direction="row" sx={{ mt: 1, width: '100%' }}>
              <Grid item xs={12} sm={2}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label="Date"
                    value={valuedate}
                    onChange={(valuedate) => setValueDate(valuedate)}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={12} sm={5}>
                {renderSelectField('Shift', 'shift', [
                  { value: '', label: 'None' },
                  { value: 'Shift 1', label: 'Shift 1' },
                  { value: 'Shift 2', label: 'Shift 2' },
                  { value: 'Shift 3', label: 'Shift 3' },
                ])}
              </Grid>
              <Grid item xs={12} sm={5}>
                {renderSelectField('SKU', 'sku', [
                  { value: '', label: 'None' },
                  { value: 'ROMA KELAPA (410279)', label: 'ROMA KELAPA (410279)' },
                ])}
              </Grid>
            </Grid>

            <Divider sx={{ mt: 3, mb: 2 }} />

            <Typography variant="h5">Planning and Output</Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4}>
                {renderTextField('Planning', 'planning')}
              </Grid>
              <Grid item xs={12} sm={4}>
                {renderTextField('Release', 'reguler')}
              </Grid>
              <Grid item xs={12} sm={4}>
                {renderTextField('Hold', 'hold')}
              </Grid>
              <Grid item xs={12} sm={4}>
                {renderTextField('Output (%)', 'output')}
              </Grid>
              <Grid item xs={12} sm={4}>
                {renderTextField('Output (KG)', 'output_kg')}
              </Grid>
            </Grid>
            <Divider sx={{ mt: 3, mb: 2 }} />
            <Typography variant="h5">Total dan Berat Pack</Typography>
            <Grid container spacing={2} sx={{ mt: 2 }}>
              <Grid item xs={12} sm={6}>{renderTextField('Berat/Pack', 'brtpack')}</Grid>
              <Grid item xs={12} sm={6}>{renderTextField('Berat/Pcs', 'brtpcs')}</Grid>
              <Grid item xs={12} sm={6}>{renderTextField('Weight BSC PCS', 'weight_bsc_pcs')}</Grid>
              <Grid item xs={12} sm={6}>{renderTextField('Weight BSC PACK', 'weight_bsc_pack')}</Grid>
              <Grid item xs={12} sm={6}>{renderTextField('Batch Buat', 'batch_buat')}</Grid>
              <Grid item xs={12} sm={6}>{renderTextField('Batch Tuang', 'batch_tuang', true)}</Grid>
              <Grid item xs={12} sm={6}>{renderTextField('Batch Cetak', 'batch_cetak', true)}</Grid>
            </Grid>
            <Grid container spacing={2} sx={{ mt: 3, mb: 2 }}>
              <Grid item xs={12} sm={4} >{renderTextField('BUBUK', 'bubuk')}</Grid>
              <Grid item xs={12} sm={4}>{renderTextField('Variance / Batch', 'variance_batch')}</Grid>
              <Grid item xs={12} sm={4}>{renderTextField('Variance FG', 'variance_fg')}</Grid>
              <Grid item xs={12} sm={4}>{renderTextField('Berat Kering', 'berat_basah')}</Grid>
              <Grid item xs={12} sm={4}>{renderTextField('Berat Basah', 'berat_kering')}</Grid>
            </Grid>
            <Divider sx={{ mt: 3, mb: 2 }} />
            <Typography variant="h5">Wip Adonan</Typography>
            <Grid container spacing={2} sx={{ mt: 2 }}>
              <Grid item xs={12} sm={4}>{renderTextField('Adonan Gagal Kg', 'adonan_gagal_kg')}</Grid>
              <Grid item xs={12} sm={4}>{renderTextField('Adonan Gagal Kulit ', 'adonan_gagal_kulit', true)}</Grid>
              <Grid item xs={12} sm={4}>
                {renderTextField('WIP Adonan Awal', 'wip_adonan_awal', false, (e) => handleKeyDown(e, 'wip_adonan_awal'))}
              </Grid>
              <Grid item xs={12} sm={4}>
                {renderTextField('WIP Adonan Akhir ', 'wip_adonan_akhir', false, (e) => handleKeyDown(e, 'wip_adonan_akhir'))}
              </Grid>
              <Grid item xs={12} sm={4}>{renderTextField('WIP Adonan Selisih ', 'wip_adonan_selisih', true)}</Grid>
              <Grid item xs={12} sm={4}>{renderTextField('WIP Adonan Kulit', 'wip_adonan_kulit', true)}</Grid>
            </Grid>
            <Divider sx={{ mt: 3, mb: 2 }} />
            <Typography variant="h5">Data Reject RM / Mesin (Kg)</Typography>
            <Grid container spacing={2} sx={{ mt: 2 }}>
              <Grid item xs={12} sm={4}>
                {renderTextField('Reject Stacking', 'rejectstacking')}
              </Grid>
              <Grid item xs={12} sm={4}>
                {renderTextField('Reject Cooling Conveyor', 'rejectcoolingconveyor')}
              </Grid>
              <Grid item xs={12} sm={4}>
                {renderTextField('R-Pack Table (RM)', 'rpackTable')}
              </Grid>
              <Grid item xs={12} sm={4}>
                {renderTextField('RMD', 'rmd')}
              </Grid>
              <Grid item xs={12} sm={4}>
                {renderTextField('Sampah Packing', 'sampahpacking')}
              </Grid>
              <Grid item xs={12} sm={4}>
                {renderTextField('R Pack Inner', 'rpackinner')}
              </Grid>
              <Grid item xs={12} sm={4}>
                {renderTextField('R Feeding', 'rfeeding')}
              </Grid>
              <Grid item xs={12} sm={4}>
                {renderTextField('Reject Packing', 'rejectpacking', true)}
              </Grid>
              <Grid item xs={12} sm={4}>
                {renderTextField('RM Total', 'rmtotal', true)}
              </Grid>
            </Grid>

            <Grid container spacing={2} sx={{ mt: 2 }}>
              {[...Array(12).keys()].map((idx) => (
                <Grid item xs={12} sm={4} key={idx}>
                  {renderTextField(`RM E${idx + 1}`, `rmE${idx + 1}`)}
                </Grid>
              ))}
              <Grid item xs={12} sm={4}>
                {renderTextField('Reject Inner Mesin Roll', 'roll')}
              </Grid>
            </Grid>
            <Typography variant="h5">Sampah Oven</Typography>
            <Grid container spacing={2} sx={{ mt: 2 }}>
              <Grid item xs={12} sm={6}>{renderTextField('Reject Oven', 'roven')}</Grid>
              <Grid item xs={12} sm={6}>{renderTextField('Sampah Oven', 'soven')}</Grid>
            </Grid>
            <Divider sx={{ mt: 3, mb: 2 }} />
            <Typography variant="h5">Sampah (KG)</Typography>
            <Grid container spacing={2} sx={{ mt: 2 }}>
              <Grid item xs={12} sm={6}>{renderTextField('Mesin Bungkus', 'mcbks')}</Grid>
              <Grid item xs={12} sm={6}>{renderTextField('Packing Table', 'ptable')}</Grid>
              <Grid item xs={12} sm={4}>{renderTextField('Serbuk', 'serbuk')}</Grid>
              <Grid item xs={12} sm={4}>{renderTextField('Tampungan', 'tampungan')}</Grid>
              <Grid item xs={12} sm={4}>{renderTextField('Total', 'total', true)}</Grid>
            </Grid>
            <Divider sx={{ mt: 3, mb: 2 }} />
            <Typography variant="h5">Batch dan WIP</Typography>
            <Grid container spacing={2} sx={{ mt: 2 }}>
              <Grid item xs={12} sm={4}>{renderTextField('WIP Kulit Awal', 'wipkulitawal')}</Grid>
              <Grid item xs={12} sm={4}>{renderTextField('WIP Kulit Akhir', 'wipkulitakhir')}</Grid>
              <Grid item xs={12} sm={4}>{renderTextField('WIP Selisih', 'wipselisih', true)}</Grid>
              <Grid item xs={12} sm={4}>{renderTextField('WIP Kulit', 'wipkulit', true)}</Grid>
            </Grid>
            <Divider sx={{ mt: 3, mb: 2 }} />
            <Typography variant="h5">Variance Inner (VI)</Typography>
            <Grid container spacing={2} sx={{ mt: 2 }}>
              <Grid item xs={12} sm={4}>{renderTextField('S Awal', 'viawal')}</Grid>
              <Grid item xs={12} sm={4}>{renderTextField('Ambil', 'viambil')}</Grid>
              <Grid item xs={12} sm={4}>{renderTextField('R Inner', 'virainner')}</Grid>
            </Grid>
            <Grid container spacing={2} sx={{ mt: 2 }}>
              <Grid item xs={12} sm={4}>{renderTextField('Return', 'vireturn')}</Grid>
              <Grid item xs={12} sm={4}>{renderTextField('Pakai', 'viinner')}</Grid>
              <Grid item xs={12} sm={4}>{renderTextField('S Akhir', 'viakhir', true)}</Grid>
            </Grid>
            <Divider sx={{ mt: 3, mb: 2 }} />
            <Typography variant="h5">Variance Data</Typography>
            <Grid container spacing={2}>
              {[...Array(12).keys()].map((idx) => (
                <Grid item xs={12} sm={4} key={idx}>
                  {renderTextField(`VI E${idx + 1}`, `viE${idx + 1}`)}
                </Grid>
              ))}
              <Grid item xs={12} sm={4}>
                {renderTextField('Total Variance', 'variance')}
              </Grid>
            </Grid>

            <Divider sx={{ mt: 3, mb: 2 }} />
            <Typography variant="h5">Karton Reguler</Typography>
            <Grid container spacing={2} sx={{ mt: 2 }}>
              <Grid item xs={12} sm={4}>{renderTextField('S Awal', 'krkawal')}</Grid>
              <Grid item xs={12} sm={4}>{renderTextField('Ambil', 'krawal')}</Grid>
              <Grid item xs={12} sm={4}>{renderTextField('Pakai', 'krpakai')}</Grid>
            </Grid>
            <Grid container spacing={2} sx={{ mt: 2 }}>
              <Grid item xs={12} sm={4}>{renderTextField('Return', 'kreturn')}</Grid>
              <Grid item xs={12} sm={4}>{renderTextField('Reject', 'kreject')}</Grid>
              <Grid item xs={12} sm={4}>{renderTextField('S Akhir', 'krakhir', true)}</Grid>
            </Grid>

            <Divider sx={{ mt: 3, mb: 2 }} />

            <Typography variant="h5">Kendala</Typography>
            <Grid container spacing={2} direction="row" >
              {Object.entries(shiftDetails.kendala).map(([key, value]) => (
                <Grid item xs={12} sm={2.4} key={key}>
                  <FormControl required sx={{ m: 1, width: '100%' }}>
                    <TextField
                      value={value} // Mengambil nilai dari kendala
                      id={key} // ID unik untuk setiap TextField
                      label={key} // Label berdasarkan kunci kendala
                      multiline
                      rows={4}
                      InputProps={{
                        readOnly: true, // Membuat field menjadi read-only
                      }}
                    />
                  </FormControl>
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </DialogContent>
      </Dialog>
      <Snackbar
        open={isLoading}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert
          severity="primary"
          variant="filled"
          sx={{ width: '100%' }}
        >
          loading
        </Alert>

      </Snackbar>
    </MainCard>
  );
};

export default TableLhpL5;
