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
import {
  ChartContainer, ChartsReferenceLine, LinePlot, MarkPlot,
  ChartsXAxis, ChartsYAxis, BarChart, ChartsTooltip, ChartsLegend, ChartsGrid,
} from '@mui/x-charts';
import axios from 'axios';
import dayjs from 'dayjs';
import ButtonBack from 'ui-component/ButtonBack';
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';
import CloseIcon from '@mui/icons-material/Close';


const CardWrapper = styled(MainCard)(() => ({
  backgroundColor: 'whitesmoke',
  color: '#fff',
  overflow: 'hidden',
  marginRight: 4,
  position: 'relative',
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const TableLhpL1 = ({ label1, label2, label3, label4, label5 }) => {
  // State management
  const [valuedate, setValueDate] = useState(dayjs(new Date()));
  const [openSnack, setOpenSnack] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [chartData, setChartData] = useState({
    pack1: [0], pack2: [0], pack3: [0], pack4: [0], pack5: [0], sumpack: [0],
    plan: [0], real: [0], ach: [0], sheet: [0], book: [0], banded: [0], sapuanpack: [0], buble: [0]
  });
  const [shiftDetails, setShiftDetails] = useState({
    inidate: '', shift: '', pland: '', reald: '', achd: '', sku: '',
    cello: '', cello1: '', cello2: '', cello3: '', cello4: '', cello5: '',
    sumpackd: '', pack1d: '', pack2d: '', pack3d: '', pack4d: '', pack5d: '',
    speed1: '', speed2: '', speed3: '', speed4: '', speed5: '',
    adonan: '', avgbook: '', avgsheet: '', creamccb: '', sheetd: '', bookd: '',
    cutkasar: '', bubukcut: '', sapuancut: '', qccello: '', qcpacking: '', cellocpp: '',
    ctnsup: '', ctnproud: '', cello_used: '', bandedd: '', sapuanpackd: '', bubled: '',
    supcello: '', samplectnqc: '', forbanded: '', forbanded2: '', cutoff: '', ctnluar: '',
    kendala: {}
  });
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const apiEndpoints = {
    lhp: 'http://10.37.12.17:3000/packing_a1',
    lhpdaily: 'http://10.37.12.17:3000/lhp_daily/1'
  };

  // Handle closing the Snackbar
  const handleCloseSnack = (reason) => {
    if (reason === 'clickaway') return;
    setOpenSnack(false);
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
      pack1: [
        data[0]?.packing_reject?.pack1 || 0,
        data[1]?.packing_reject?.pack1 || 0,
        data[2]?.packing_reject?.pack1 || 0
      ],
      pack2: [
        data[0]?.packing_reject?.pack2 || 0,
        data[1]?.packing_reject?.pack2 || 0,
        data[2]?.packing_reject?.pack2 || 0
      ],
      pack3: [
        data[0]?.packing_reject?.pack3 || 0,
        data[1]?.packing_reject?.pack3 || 0,
        data[2]?.packing_reject?.pack3 || 0
      ],
      pack4: [
        data[0]?.packing_reject?.pack4 || 0,
        data[1]?.packing_reject?.pack4 || 0,
        data[2]?.packing_reject?.pack4 || 0
      ],
      pack5: [
        data[0]?.packing_reject?.pack5 || 0,
        data[1]?.packing_reject?.pack5 || 0,
        data[2]?.packing_reject?.pack5 || 0
      ],
      sumpack: [
        data[0]?.packing_reject?.sumpack || 0,
        data[1]?.packing_reject?.sumpack || 0,
        data[2]?.packing_reject?.sumpack || 0
      ],
      plan: [
        data[0]?.plan || 0,
        data[1]?.plan || 0,
        data[2]?.plan || 0
      ],
      real: [
        data[0]?.real || 0,
        data[1]?.real || 0,
        data[2]?.real || 0
      ],
      ach: [
        data[0]?.ach || 0,
        data[1]?.ach || 0,
        data[2]?.ach || 0
      ],
      sheet: [
        data[0]?.sheet || 0,
        data[1]?.sheet || 0,
        data[2]?.sheet || 0
      ],
      book: [
        data[0]?.book || 0,
        data[1]?.book || 0,
        data[2]?.book || 0
      ],
      banded: [
        data[0]?.banded || 0,
        data[1]?.banded || 0,
        data[2]?.banded || 0
      ],
      sapuanpack: [
        data[0]?.sapuanpack || 0,
        data[1]?.sapuanpack || 0,
        data[2]?.sapuanpack || 0
      ],
      buble: [
        data[0]?.buble || 0,
        data[1]?.buble || 0,
        data[2]?.buble || 0
      ]
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
    fetchData(`http://10.37.12.17:3000/lhp_daily/date/${formattedDate}/1`);
  };

  // Columns for DataGrid
  const columns = [
    { field: 'id', headerName: 'ID', width: 50 },
    { field: 'sku', headerName: 'Sku', width: 200 },
    { field: 'grup', headerName: 'line', width: 200 },
    { field: 'shift', headerName: 'Shift', width: 100 },
    { field: 'uh', headerName: 'UH', width: 100 },
    { field: 'hadir', headerName: 'Man Power Hadir', width: 100 },
    { field: 'jam_kerja', headerName: 'Jam Kerja', width: 100 },
    { field: 'real', headerName: 'Real Karton', width: 100 },
    { field: 'give_ado', headerName: 'Give Away Adonan', width: 100 },
    { field: 'give_cream', headerName: 'Give Away Cream', width: 100 },
    { field: 'give_cello', headerName: 'Give Away Cello', width: 100 },
    { field: 'jenis_adonan', headerName: 'Jenis Pemakaian Adonan', width: 100 },
    { field: 'adonan_used', headerName: 'Pemakaian Adonan(batch)', width: 100 },
    { field: 'ccbcream_used', headerName: 'Pemakaian Cream', width: 100 },
    { field: 'rej_ado', headerName: 'Reject Adonan', width: 100 },
    { field: 'rej_cream', headerName: 'Reject Cream ', width: 100 },
    { field: 'sheet', headerName: 'Opak/Sheet', width: 100 },
    { field: 'book', headerName: 'Book', width: 100 },
    { field: 'cutkasar', headerName: 'Potongan Kasar', width: 100 },
    {
      field: 'sumpack', headerName: 'Reject Pack', width: 100,
      valueGetter: (value, row) => {
        return `${row.packing_reject.sumpack || ''}`;
      }
    },
    { field: 'qcpacking', headerName: 'QC', width: 100 },
    { field: 'wip_kg', headerName: 'WIP', width: 100 },
    { field: 'book_kotor', headerName: 'Book Kotor(KG)', width: 100 },
    { field: 'sapuanpack', headerName: 'Sapuan Pack', width: 100 },
    { field: 'buble', headerName: 'Buble', width: 100 },
    { field: 'bubukcutting', headerName: 'Bubuk Cutting', width: 100 },
    { field: 'cello_used', headerName: 'Pemakaian Cello', width: 100 },
    { field: 'bs_cello', headerName: 'BS Cello(roll)', width: 100 },
    { field: 'pakai_ctn', headerName: 'Pakai Karton', width: 100 },
    {
      field: 'ctnproud', headerName: 'BS Karton', width: 100,
      valueGetter: (value, row) => {
        return `${row.ctn_type.ctnproud || ''}`;
      }
    },
    { field: 'cellocpp', headerName: 'Pakai CPP', width: 100 },
    { field: 'bs_cpp_roll', headerName: 'BS CPP (roll)', width: 100 },
    { field: 'plan', headerName: 'Plan', width: 100 },
    { field: 'mc_quality', headerName: 'MC dari Quality(%)', width: 100 }
  ];

  // Handle row click event
  const handleRowClick = (params) => {
    setLoading(true); // Menandai bahwa data sedang diambil
    axios.get(`http://10.37.12.17:3000/lhp/detail/${params.row.id}`)
      .then(response => {
        const dataolah = response.data[0];
        setShiftDetails({
          inidate: new Date(dataolah.realdatetime).toLocaleDateString(),
          shift: dataolah.shift,
          pland: dataolah.plan,
          reald: dataolah.real,
          achd: dataolah.ach,
          sku: dataolah.sku,
          cello: dataolah.cello.cello,
          cello1: dataolah.cello.cello1,
          cello2: dataolah.cello.cello2,
          cello3: dataolah.cello.cello3,
          cello4: dataolah.cello.cello4,
          cello5: dataolah.cello.cello5,
          sumpackd: dataolah.packing_reject.sumpack,
          pack1d: dataolah.packing_reject.pack1,
          pack2d: dataolah.packing_reject.pack2,
          pack3d: dataolah.packing_reject.pack3,
          pack4d: dataolah.packing_reject.pack4,
          pack5d: dataolah.packing_reject.pack5,
          speed1: dataolah.speed_mesin.speed1,
          speed2: dataolah.speed_mesin.speed2,
          speed3: dataolah.speed_mesin.speed3,
          speed4: dataolah.speed_mesin.speed4,
          speed5: dataolah.speed_mesin.speed5,
          adonan: dataolah.adonan_used,
          avgbook: dataolah.avgbook,
          avgsheet: dataolah.avgsheet,
          creamccb: dataolah.ccbcream_used,
          sheetd: dataolah.sheet,
          bookd: dataolah.book,
          cutkasar: dataolah.cutkasar,
          bubukcut: dataolah.bubukcutting,
          sapuancut: dataolah.sapuancut,
          qccello: dataolah.qccello,
          qcpacking: dataolah.qcpacking,
          cellocpp: dataolah.cellocpp,
          ctnsup: dataolah.ctn_type.ctnsup,
          ctnproud: dataolah.ctn_type.ctnproud,
          cello_used: dataolah.cello_used,
          bandedd: dataolah.banded,
          sapuanpackd: dataolah.sapuanpack,
          bubled: dataolah.buble,
          supcello: dataolah.suppliercello,
          samplectnqc: dataolah.sample_ctn_qc,
          forbanded: dataolah.banded_under,
          forbanded2: dataolah.banded_over,
          cutoff: dataolah.cutoff_jam,
          ctnluar: dataolah.ctn_luar,
          kendala: dataolah.kendala,
        });
        setOpenDialog(true);
      })
      .catch(error => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false); // Set loading selesai
      });
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
    <MainCard title="Report LHP Line 1" secondary={<ButtonBack path={'/utils/packing-line1/table'} />} >
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12} sm={9}>
          {/* Placeholder for additional buttons */}
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

      <Grid container spacing={{ xs: 2, md: 4 }}>

      <Grid item xs={12} sm={4}>
          <CardWrapper>
            <Typography variant="h3" align="center">Grafik Reject Packing(Kg)</Typography>
            <Box sx={{ width: '100%' }}>
              <ChartContainer
                width={450}
                height={300}
                series={[
                  { id: '1', label: 'A1', type: 'line', curve: 'linear', data: chartData.pack1, color: '#FF5722' },
                  { id: '2', label: 'A2', type: 'line', curve: 'linear', data: chartData.pack2, color: '#1017e3' },
                  { id: '3', label: 'A5', type: 'line', curve: 'linear', data: chartData.pack3, color: '#03ffbc' },
                  { id: '4', label: 'B5', type: 'line', curve: 'linear', data: chartData.pack4, color: '#ff0389' },
                  { id: '5', label: 'A3', type: 'line', curve: 'linear', data: chartData.pack5, color: '#9603ff' },

                  { id: '6', label: 'MAX', type: 'line', curve: 'linear', data: [0.8, 0.8, 0.8], color: '#f20707', lineStyle: { strokeWidth: 3 } }
                ]}
                xAxis={[{ scaleType: 'point', data: ['Shift 1', 'Shift 2', 'Shift 3'] }]}
              >
                <LinePlot />
                <MarkPlot />
                <ChartsReferenceLine
                  y={0.8}
                  label="Max"
                  lineStyle={{ stroke: 'red' }}
                  labelStyle={{ fontSize: '16px', fontWeight: 'bold', fill: 'red', zIndex: 10 }}
                />
                <ChartsGrid horizontal />
                <ChartsXAxis />
                <ChartsYAxis />
                <ChartsTooltip />
                <ChartsLegend />
              </ChartContainer>
            </Box>
          </CardWrapper>
        </Grid>

        <Grid item xs={12} sm={4}>
          <CardWrapper>
            <Typography variant="h3" align="center">Grafik Reject Cello</Typography>
            <Box sx={{ width: '100%' }}>
              <ChartContainer
                width={450}
                height={300}
                series={[
                  { id: '1', label: 'A1', type: 'line', curve: 'linear', data: chartData.pack1, color: '#FF5722' },
                  { id: '2', label: 'A2', type: 'line', curve: 'linear', data: chartData.pack2, color: '#1017e3' },
                  { id: '3', label: 'A5', type: 'line', curve: 'linear', data: chartData.pack3, color: '#03ffbc' },
                  { id: '4', label: 'B5', type: 'line', curve: 'linear', data: chartData.pack4, color: '#ff0389' },
                  { id: '5', label: 'A3', type: 'line', curve: 'linear', data: chartData.pack5, color: '#9603ff' },

                  { id: '6', label: 'MAX', type: 'line', curve: 'linear', data: [0.8, 0.8, 0.8], color: '#f20707', lineStyle: { strokeWidth: 3 } }
                ]}
                xAxis={[{ scaleType: 'point', data: ['Shift 1', 'Shift 2', 'Shift 3'] }]}
              >
                <LinePlot />
                <MarkPlot />
                <ChartsReferenceLine
                  y={0.8}
                  label="Max"
                  lineStyle={{ stroke: 'red' }}
                  labelStyle={{ fontSize: '16px', fontWeight: 'bold', fill: 'red', zIndex: 10 }}
                />
                <ChartsGrid horizontal />
                <ChartsXAxis />
                <ChartsYAxis />
                <ChartsTooltip />
                <ChartsLegend />
              </ChartContainer>
            </Box>
          </CardWrapper>
        </Grid>

        <Grid item xs={12} sm={4}>
          <CardWrapper>
            <Typography variant="h3" align="center">Grafik Achievement</Typography>
            <Typography variant="h4" align="center">
              (Ach Shift 1 = {chartData.ach[0]} %, Ach Shift 2 = {chartData.ach[1]} %,Ach Shift 3 = {chartData.ach[2]} %)
            </Typography>
            <Box sx={{ width: '100%' }}>
              <BarChart
                xAxis={[{ scaleType: 'band', data: ['Shift 1', 'Shift 2', 'Shift 3'] }]}
                series={[
                  { id: '1', label: 'Real', data: chartData.real, color: '#03ffbc', stack: 'A', barGap: 0 },
                  { id: '2', label: 'Sisa Plan', data: chartData.plan.map((p, i) => Math.max(p - chartData.real[i], 0)), color: '#ffb303', stack: 'A' }
                ]}
                height={300}
                width={450}
              />
            </Box>
          </CardWrapper>
        </Grid>

        <Grid item xs={12} sm={4}>
          <CardWrapper>
            <Typography variant="h3" align="center">Grafik Reject</Typography>
            <Box sx={{ width: '100%' }}>
              <ChartContainer
                width={450}
                height={300}
                series={[
                  { id: '1', label: 'Bended', type: 'line', curve: 'linear', data: chartData.banded, color: '#ff0389' },
                  { id: '2', label: 'Sapuan Pack', type: 'line', curve: 'linear', data: chartData.sapuanpack, color: '#9603ff' },
                  { id: '3', label: 'MAX', type: 'line', curve: 'linear', data: [1.1, 1.1, 1.1], color: '#f20707' }

                ]}
                xAxis={[{ scaleType: 'point', data: ['Shift 1', 'Shift 2', 'Shift 3'] }]}
              >
                <LinePlot />
                <MarkPlot />
                <ChartsReferenceLine
                  y={1.1}
                  label="Max"
                  lineStyle={{ stroke: 'red' }}
                  labelStyle={{ fontSize: '16px', fontWeight: 'bold', fill: 'red', zIndex: 10 }}
                />
                <ChartsGrid horizontal />
                <ChartsXAxis />
                <ChartsYAxis />
                <ChartsTooltip />
                <ChartsLegend />
              </ChartContainer>
            </Box>
          </CardWrapper>
        </Grid>

        <Grid item xs={12} sm={4}>
          <CardWrapper>
            <Typography variant="h3" align="center">Bubble</Typography>
            <Box sx={{ width: '100%' }}>
              <ChartContainer
                xAxis={[{
                  scaleType: 'point',
                  data: ['Shift 1', 'Shift 2', 'Shift 3']
                }]}
                series={[
                  {
                    id: '1',
                    type: 'line',
                    label: 'Buble',
                    curve: "linear",
                    data: chartData.buble,
                    color: '#ffb303'
                  },
                  { id: '13', label: 'MAX', type: 'line', curve: 'linear', data: [60, 60, 60], color: '#f20707' }
                ]}

                height={300}
                width={450}
              >
                <LinePlot />
                <MarkPlot />
                <ChartsReferenceLine
                  y={60}
                  label="Max"
                  lineStyle={{ stroke: 'red' }}
                  labelStyle={{ fontSize: '16px', fontWeight: 'bold', fill: 'red', zIndex: 10 }}
                />
                <ChartsGrid horizontal />
                <ChartsXAxis />
                <ChartsYAxis />
                <ChartsTooltip />
                <ChartsLegend />
              </ChartContainer>
            </Box>
          </CardWrapper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <CardWrapper>
            <Typography variant="h3" align="center">Reject Sheet</Typography>
            <Box sx={{ width: '100%' }}>
              <ChartContainer
                width={450}
                height={300}
                series={[
                  { id: '1', label: 'Sheet', type: 'line', curve: 'linear', data: chartData.sheet, color: '#1017e3' },
                  { id: '2', label: 'MAX', type: 'line', curve: 'linear', data: [6.3, 6.3, 6.3], color: '#f20707' }
                ]}
                xAxis={[{ scaleType: 'point', data: ['Shift 1', 'Shift 2', 'Shift 3'] }]}
              >
                <LinePlot />
                <MarkPlot />
                <ChartsReferenceLine
                  y={6.3}
                  label="Max"
                  lineStyle={{ stroke: 'red' }}
                  labelStyle={{ fontSize: '16px', fontWeight: 'bold', fill: 'red', zIndex: 10 }}
                />
                <ChartsGrid horizontal />
                <ChartsXAxis />
                <ChartsYAxis />
                <ChartsTooltip />
                <ChartsLegend />
              </ChartContainer>
            </Box>
          </CardWrapper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <CardWrapper>
            <Typography variant="h3" align="center">Reject Book</Typography>
            <Box sx={{ width: '100%' }}>
              <ChartContainer
                width={450}
                height={300}
                series={[
                  { id: '1', label: 'Book', type: 'line', curve: 'linear', data: chartData.book, color: '#03ffbc' },
                  { id: '2', label: 'MAX', type: 'line', curve: 'linear', data: [23.3, 23.3, 23.3], color: '#f20707' }
                ]}
                xAxis={[{ scaleType: 'point', data: ['Shift 1', 'Shift 2', 'Shift 3'] }]}
              >
                <LinePlot />
                <MarkPlot />
                <ChartsReferenceLine
                  y={23.3}
                  label="Max"
                  lineStyle={{ stroke: 'red' }}
                  labelStyle={{ fontSize: '16px', fontWeight: 'bold', fill: 'red', zIndex: 10 }}
                />
                <ChartsGrid horizontal />
                <ChartsXAxis />
                <ChartsYAxis />
                <ChartsTooltip />
                <ChartsLegend />
              </ChartContainer>
            </Box>
          </CardWrapper>
        </Grid>
      </Grid>

      <Grid item sx={{ mb: 5, mt: 2 }} xs={12} >
        <DataGrid
          rows={data}
          columns={columns}
          loading={isLoading}
          slots={{ toolbar: GridToolbar }}
          onRowClick={handleRowClick}
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
          Data is not complete, cannot show data in table and graphics
        </Alert>
      </Snackbar>

      {/* Dialog for detailed shift data */}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)} maxWidth="xl">
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={() => setOpenDialog(false)} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6">Detail Data</Typography>
          </Toolbar>
        </AppBar>
        <DialogContent>
          <MainCard content={false}>
            <CardContent>
              <Typography variant="h5">Primary</Typography>
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
                    { value: 'Shift 3', label: 'Shift 3' }
                  ])}
                </Grid>
                <Grid item xs={12} sm={5}>
                  {renderSelectField('SKU', 'sku', [
                    { value: '', label: 'None' },
                    { value: 'Wafello Chocoblast 12 x 10 x 17', label: 'Wafello Chocoblast 12 x 10 x 17' },
                    { value: 'Wafello Chocoblast 6 x 10 x 43', label: 'Wafello Chocoblast 6 x 10 x 43' },
                    { value: 'Wafello Butter Caramel 12 x 10 x 17', label: 'Wafello Butter Caramel 12 x 10 x 17' },
                    { value: 'Superstar TCW 8 x 20 x 16', label: 'Superstar TCW 8 x 20 x 16' }
                  ])}
                </Grid>
              </Grid>

              <Grid container spacing={2} mt={1} direction="row">
                <Grid item xs={12} sm={4}>
                  {renderTextField('Plan (Ctn)', 'pland')}
                </Grid>
                <Grid item xs={12} sm={4}>
                  {renderTextField('Real (Ctn)', 'reald')}
                </Grid>
                <Grid item xs={12} sm={4}>
                  {renderTextField('Ach (%)', 'achd')}
                </Grid>
              </Grid>

              <Divider sx={{ mb: 2, border: 1, borderColor: 'divider' }} />
              <Typography variant="h5">REJECT PM</Typography>

              <Grid container spacing={2} mt={1} direction="row">
                <Grid item xs={12} sm={2}>
                  {renderTextField('Cello (Kg)', 'cello')}
                </Grid>
                <Grid item xs={12} sm={2}>
                  {renderTextField(label1, 'cello1')}
                </Grid>
                <Grid item xs={12} sm={2}>
                  {renderTextField(label2, 'cello2')}
                </Grid>
                <Grid item xs={12} sm={2}>
                  {renderTextField(label3, 'cello3')}
                </Grid>
                <Grid item xs={12} sm={2}>
                  {renderTextField(label4, 'cello4')}
                </Grid>
                <Grid item xs={12} sm={2}>
                  {renderTextField(label5, 'cello5')}
                </Grid>
              </Grid>

              <Grid container spacing={2} mt={1} direction="row">
                <Grid item xs={12} sm={3}>
                  {renderTextField('Cello CPP (Kg)', 'cellocpp')}
                </Grid>
                <Grid item xs={12} sm={3}>
                  {renderTextField('Ctn Sup (lbr)', 'ctnsup')}
                </Grid>
                <Grid item xs={12} sm={3}>
                  {renderTextField('Ctn Proud (lbr)', 'ctnproud')}
                </Grid>
                <Grid item xs={12} sm={3}>
                  {renderTextField('Pemakaian Cello', 'cello_used')}
                </Grid>
              </Grid>

              <Grid container spacing={2} mt={1} direction="row">
                <Grid item xs={12} sm={3}>
                  {renderTextField('Pemakaian Adonan', 'adonan')}
                </Grid>
                <Grid item xs={12} sm={3}>
                  {renderTextField('Pemakaian Cream CCB (kg)', 'creamccb')}
                </Grid>
                <Grid item xs={12} sm={3}>
                  {renderTextField('Rata-rata Sheet (gr)', 'avgsheet')}
                </Grid>
                <Grid item xs={12} sm={3}>
                  {renderTextField('Rata-rata Book (gr)', 'avgbook')}
                </Grid>
              </Grid>

              <Divider sx={{ mb: 2, border: 1, borderColor: 'divider' }} />
              <Typography variant="h5">REJECT (kg)</Typography>

              <Grid container spacing={2} mt={1} direction="row">
                <Grid item xs={12} sm={1.6}>
                  {renderTextField('Sheet', 'sheetd')}
                </Grid>
                <Grid item xs={12} sm={1.6}>
                  {renderTextField('Book', 'bookd')}
                </Grid>
                <Grid item xs={12} sm={1.6}>
                  {renderTextField('Potongan Kasar', 'cutkasar')}
                </Grid>
                <Grid item xs={12} sm={1.6}>
                  {renderTextField('Bubuk Cutting', 'bubukcut')}
                </Grid>
                <Grid item xs={12} sm={1.6}>
                  {renderTextField('Sapuan Cutting', 'sapuancut')}
                </Grid>
                <Grid item xs={12} sm={1.6}>
                  {renderTextField('QC Packing', 'qcpacking')}
                </Grid>
                <Grid item xs={12} sm={1.6}>
                  {renderTextField('QC Cello', 'qccello')}
                </Grid>
              </Grid>

              <Grid container spacing={2} mt={1} direction="row">
                <Grid item xs={12} sm={2}>
                  {renderTextField('Total Packing', 'sumpackd')}
                </Grid>
                <Grid item xs={12} sm={2}>
                  {renderTextField(label1, 'pack1d')}
                </Grid>
                <Grid item xs={12} sm={2}>
                  {renderTextField(label2, 'pack2d')}
                </Grid>
                <Grid item xs={12} sm={2}>
                  {renderTextField(label3, 'pack3d')}
                </Grid>
                <Grid item xs={12} sm={2}>
                  {renderTextField(label4, 'pack4d')}
                </Grid>
                <Grid item xs={12} sm={2}>
                  {renderTextField(label5, 'pack5d')}
                </Grid>
              </Grid>

              <Grid container spacing={2} mt={1} direction="row">
                <Grid item xs={12} sm={3}>
                  {renderTextField('Banded', 'bandedd')}
                </Grid>
                <Grid item xs={12} sm={3}>
                  {renderTextField('Sapuan Packing', 'sapuanpackd')}
                </Grid>
                <Grid item xs={12} sm={3}>
                  {renderTextField('Buble', 'bubled')}
                </Grid>
                <Grid item xs={12} sm={3}>
                  {renderTextField('Suplier Cello', 'supcello')}
                </Grid>
              </Grid>

              <Divider sx={{ mb: 2, border: 1, borderColor: 'divider' }} />
              <Typography variant="h5">Speed Mesin Packing</Typography>

              <Grid container spacing={2} mt={1} direction="row">
                <Grid item xs={12} sm={2.4}>
                  {renderTextField(label1, 'speed1')}
                </Grid>
                <Grid item xs={12} sm={2.4}>
                  {renderTextField(label2, 'speed2')}
                </Grid>
                <Grid item xs={12} sm={2.4}>
                  {renderTextField(label3, 'speed3')}
                </Grid>
                <Grid item xs={12} sm={2.4}>
                  {renderTextField(label4, 'speed4')}
                </Grid>
                <Grid item xs={12} sm={2.4}>
                  {renderTextField(label5, 'speed5')}
                </Grid>
              </Grid>

              <Divider sx={{ mb: 2, border: 1, borderColor: 'divider' }} />
              <Typography variant="h5">Tambahan</Typography>

              <Grid container spacing={2} mt={1} direction="row">
                <Grid item xs={12} sm={2.4}>
                  {renderTextField('Sample Carton QC', 'samplectnqc')}
                </Grid>
                <Grid item xs={12} sm={2.4}>
                  {renderTextField('Pengulangan Banded (under)', 'forbanded')}
                </Grid>
                <Grid item xs={12} sm={2.4}>
                  {renderTextField('Pengulangan Banded (over)', 'forbanded2')}
                </Grid>
                <Grid item xs={12} sm={2.4}>
                  {renderTextField('Cut Off (jam)', 'cutoff')}
                </Grid>
                <Grid item xs={12} sm={2.4}>
                  {renderTextField('Carton luar', 'ctnluar')}
                </Grid>
              </Grid>
              <Divider sx={{ mb: 2, border: 1, borderColor: 'divider' }} />
              <Typography variant="h5">Kendala / Note</Typography>
              <Grid container spacing={2} mt={1} direction="row">
                {Object.entries(shiftDetails.kendala).map(([key, value]) => (
                  <Grid item xs={12} sm={2.4} key={key}>
                    <FormControl required sx={{ m: 1, width: '100%' }}>
                      <TextField
                        value={value}  // Mengambil nilai dari kendala
                        id={key}  // ID unik untuk setiap TextField
                        label={key}  // Label berdasarkan kunci kendala
                        multiline
                        rows={4}
                        InputProps={{
                          readOnly: true,  // Membuat field menjadi read-only
                        }}
                      />
                    </FormControl>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </MainCard>
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

export default TableLhpL1;
