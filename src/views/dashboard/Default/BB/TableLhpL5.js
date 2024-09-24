import * as React from 'react';
import { useEffect, useState } from 'react';
import { Alert, Box, Grid, Snackbar, Typography, FormControl, TextField, CardContent, MenuItem, Select, InputLabel } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { styled } from '@mui/material/styles';
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';
import axios from 'axios';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LineChart } from '@mui/x-charts/LineChart';
import dayjs from 'dayjs';
import ButtonBack from 'ui-component/ButtonBack';
// import { BarChart } from '@mui/x-charts';
import Dialog from '@mui/material/Dialog';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import DialogContent from '@mui/material/DialogContent';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';

// ==============================|| Happy Coding ||============================== //
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

const TableLhpL2 = () => {
  const [valuedate, setValueDate] = useState(dayjs(new Date()));
  const [state] = useState({
    vertical: 'top',
    horizontal: 'center',
  });
  const { vertical, horizontal } = state;
  const [open, setOpen] = useState(false);
  const [opendua, setOpenDua] = useState(false);
  const [opentiga, setOpenTiga] = useState(false);
  const [data, setData] = useState([]);
  // const [pack1 ,setPack1] = useState([0]);
  // const [pack2 ,setPack2] = useState([0]);
  // const [pack3 ,setPack3] = useState([0]);
  // const [pack4 ,setPack4] = useState([0]);
  // const [pack5 ,setPack5] = useState([0]);
  // const [sumpack ,setSumPack] = useState([0]);
  // const [plan, setPlan] = useState([0]);
  // const [real, setReal] = useState([0]);
  // const [ach, setAch] = useState([0]);
  // const [ach1, setAch1] = useState([0]);
  // const [ach2, setAch2] = useState([0]);
  // const [sheet , setSheet] = useState([0]);
  // const [book , setBook] = useState([0]);
  // const [banded , setBanded] = useState([0]);
  // const [sapuanpack , setSapuanPack] = useState([0]);
  // const [buble , setBuble] = useState([0]);
  //Modal
  // const [inidate , setInidate] = useState('')
  // State untuk menyimpan data shift
  const [shift, setShift] = useState('');
  const [sku, setSKU] = useState('');
  const [reguler, setReguler] = useState('');
  const [hold, setHold] = useState('');
  const [output, setOutput] = useState('');
  const [rmd, setRMD] = useState('');
  const [rfeeding, setRfeeding] = useState('');
  const [rsampleqc, setRsampleqc] = useState('');
  const [rpackinner, setRpackinner] = useState('');
  const [rmE1, setRmE1] = useState('');
  const [rmE2, setRmE2] = useState('');
  const [rmE3, setRmE3] = useState('');
  const [rmE4, setRmE4] = useState('');
  const [rmE5, setRmE5] = useState('');
  const [rmE6, setRmE6] = useState('');
  const [rmE7, setRmE7] = useState('');
  const [rmE8, setRmE8] = useState('');
  const [rmE9, setRmE9] = useState('');
  const [rmE10, setRmE10] = useState('');
  const [rmE11, setRmE11] = useState('');
  const [rmE12, setRmE12] = useState('');
  const [roll, setRejectinnermesinroll] = useState('');
  const [rpackTable, setRPackTable] = useState('');
  const [rmtotal, setRmtotal] = useState('');
  const [roven, setRoven] = useState('');
  const [soven, setSoven] = useState('');
  const [mcbks, setMcbks] = useState('');
  const [ptable, setPtable] = useState('');
  const [serbuk, setSerbuk] = useState('');
  const [tampungan, setTampungan] = useState('');
  const [total, setTotal] = useState('');
  const [brtpack, setBrtpack] = useState('');
  const [batch, setBatch] = useState('');
  // const wiinner = 0;
  const [wipackinner, setWipackinner] = useState('');
  const [wikulit, setWikulit] = useState('');
  const [witotal, setWitotal] = useState('');
  const [viawal, setViawal] = useState('');
  const [viambil, setViambil] = useState('');
  const [viakhir, setViakhir] = useState('');
  const [vireturn, setVireturn] = useState('');
  const [viinner, setViinner] = useState('');
  const [viRainner, setViRainner] = useState('');
  const [viE1, setViE1] = useState('');
  const [viE2, setViE2] = useState('');
  const [viE3, setViE3] = useState('');
  const [viE4, setViE4] = useState('');
  const [viE5, setViE5] = useState('');
  const [viE6, setViE6] = useState('');
  const [viE7, setViE7] = useState('');
  const [viE8, setViE8] = useState('');
  const [viE9, setViE9] = useState('');
  const [viE10, setViE10] = useState('');
  const [viE11, setViE11] = useState('');
  const [viE12, setViE12] = useState('');
  const [variance, setVariance] = useState('');
  const [krkawal, setKrkawal] = useState('');
  const [krAwal, setKrAwal] = useState('');
  const [krakhir, setKrakhir] = useState('');
  const [krpakai, setKrpakai] = useState('');
  const [kreturn, setKreturn] = useState('');
  const [kreject, setKreject] = useState('');
  const [kendala1, setKendala1] = useState('');
  const [kendala2, setKendala2] = useState('');
  const [kendala3, setKendala3] = useState('');
  const [kendala4, setKendala4] = useState('');
  const [kendala5, setKendala5] = useState('');
  const [field] = useState([
    { field: 'id', headerName: 'ID', width: 50 },
    { field: 'users_input', headerName: 'User Input', width: 200 },
    { field: 'shift', headerName: 'Time', width: 100 },
    { field: 'sku', headerName: 'Sku', width: 200 },
    { field: 'reguler', headerName: 'Reguler', width: 50 },
    { field: 'hold', headerName: 'Hold', width: 50 },
    { field: 'output', headerName: 'Output', width: 50 },
    { field: 'rmd', headerName: 'Rmd', width: 50 },
    { field: 'rfeeding', headerName: 'Rfeeding', width: 50 },
    { field: 'rpacktable', headerName: 'Rpacktable', width: 50 },
    { field: 'rmtotal', headerName: 'Rmtotal', width: 50 },
    { field: 'roven', headerName: 'R Oven', width: 50 },
    { field: 'soven', headerName: 'Sampah Oven', width: 50 },
    { field: 'mcbks', headerName: 'Mcbks', width: 50 },
    { field: 'ptable', headerName: 'P Table', width: 50 },
    { field: 'serbuk', headerName: 'Serbuk', width: 50 },
    { field: 'tampungan', headerName: 'Tampungan', width: 50 },
    { field: 'total', headerName: 'Total', width: 50 },
    { field: 'brtpack', headerName: 'Brt Pack', width: 50 },
    { field: 'batch', headerName: 'Batch', width: 50 },
    { field: 'wipackinner', headerName: 'Wi Pack Inner', width: 50 },
    { field: 'wikulit', headerName: 'Wi Kulit', width: 50 },
    { field: 'witotal', headerName: 'Wi Total ', width: 50 },
    { field: 'viawal', headerName: 'Vi awak', width: 50 },
    { field: 'viambil', headerName: 'Vi ambil', width: 50 },
    { field: 'viakhir', headerName: 'Vi Akhir', width: 50 },
    { field: 'vireturn', headerName: 'Vi return', width: 50 },
    { field: 'viinner', headerName: 'Vi Inner', width: 50 },
    { field: 'virainner', headerName: 'Vi Rainner', width: 50 },
    { field: 'variance', headerName: 'Variance', width: 50 },
    { field: 'krkawal', headerName: 'Kr Awal', width: 50 },
    { field: 'krawal', headerName: 'Kr Awak', width: 50 },
    { field: 'krakhir', headerName: 'Kr Akhir', width: 50 },
    { field: 'krpakai', headerName: 'Kr Pakai', width: 50 },
    { field: 'kreturn', headerName: 'Kr Return', width: 50 },
    { field: 'kreject', headerName: 'Kr Reject', width: 50 },
    { field: 'krakhir', headerName: 'Kr Akhir', width: 50 },
    { field: 'rpackinner', headerName: 'R pack Inner', width: 50 },
  ]);
  const [urlapi] = useState({
    lhp: 'http://10.37.12.17:3000/packing_a1',
    lhpdaily: 'http://10.37.12.17:3000/lhpl5_daily/l2',
    urlp2: 'table',

  })
  const handleClose = (reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  const handleCloseDua = () => {
    setOpenDua(false);
  };
  // const handleCloseTiga = () => {
  //   setOpenTiga(false);
  // };
  const handleRowClick = (
    params, // GridRowParams
    // event, // MuiEvent<React.MouseEvent<HTMLElement>>
    // details, // GridCallbackDetails
  ) => {
    // setMessage(params);
    // console.log('Params', params.row.id)
    setOpenTiga(true);
    axios.get(`http://10.37.12.17:3000/lhpl5/detail/${params.row.id}`)
      .then(response => {
        var dataolah = response.data[0];
        // setInidate(new Date(dataolah.realdatetime).toLocaleDateString())
        setShift(dataolah.shift)
        setSKU(dataolah.sku)
      })
      .catch(error => {
        console.log(error);
      });

  };
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
    axios.get(urlapi.lhpdaily)
      .then(response => {
        var dataolah = response.data;

        const d = new Date();
        let hour = d.getHours();
        if (hour >= 15) {
          let objects = [];
          objects[0] = {};
          objects[0].id = dataolah[0].id;
          objects[0].shift = dataolah[0].shift
          objects[0].sku = dataolah[0].sku
        }
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <MainCard title="Report LHP Line 5" secondary={<ButtonBack path={'/utils/packing-line5-bsc/table'} />} >
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12} sm={9}>
        </Grid>
        <Grid item mb={5} mt={-10} xs={12} sm={3}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Search Date"
              value={valuedate}
              onChange={(newValue) => {
                setValueDate(newValue);
                var thisdate = new Date(newValue);
                thisdate.setDate(thisdate.getDate() + 1)
                var datenyar = new Date(newValue);
                var datestring = datenyar.getFullYear() + "-0" + (datenyar.getMonth() + 1) + "-" + datenyar.getDate()
                var thisdatenow = new Date(newValue);
                thisdatenow.setDate(thisdate.getDate() + 1)
                var datenyarnow = new Date();
                var datestringnow = datenyarnow.getFullYear() + "-0" + (datenyarnow.getMonth() + 1) + "-" + datenyarnow.getDate()
                console.log("Tanggal", datestring)
                if (datestringnow === datestring) {
                  axios.get(urlapi.lhpdaily)
                    .then(response => {
                      var dataolah = response.data;
                      const d = new Date();
                      let hour = d.getHours();
                      if (hour >= 15) {
                        let objects = [];
                        objects[0] = {};
                        objects[0].id = dataolah[0].id;
                        objects[0].shift = dataolah[0].shift
                        objects[0].sku = dataolah[0].sku
                      }
                    })
                    .catch(error => {
                      console.log(error);
                    });
                } else {
                  axios.get(`http://10.37.12.17:3000/lhpl5_daily/date/${datestring}/l2`)
                    .then(response => {
                      var dataolah = response.data;
                      // console.log("Tanggal" , dataolah)
                      let objects = [];
                      objects[0] = {};
                      objects[0].id = dataolah[0].id;
                      objects[0].shift = dataolah[0].shift
                      objects[0].sku = dataolah[0].sku
                      objects[1] = {};
                      objects[1].id = dataolah[1].id;
                      objects[1].shift = dataolah[1].shift
                      objects[1].sku = dataolah[1].sku
                      objects[2] = {};
                      objects[2].id = dataolah[2].id;
                      objects[2].shift = dataolah[2].shift
                      objects[2].sku = dataolah[2].sku
                      setData(objects)
                    })
                    .catch(error => {
                      setOpen(true)
                      setData([])
                      // setPack1([0])
                      // setPack2([0])
                      // setPack3([0])
                      // setPack4([0])
                      // setPack5([0])
                      // setSumPack([0])
                      // setPlan([0])
                      // setReal([0])
                      // setAch([0])
                      // setAch1([0])
                      // setAch2([0])
                      // setSheet([0])
                      // setBook([0])
                      // setBanded([0])
                      // setSapuanPack([0])
                      // setBuble([0])
                      console.log(error);
                    });
                }
              }}
            />
          </LocalizationProvider>
        </Grid>
      </Grid>
      <Grid item sx={{ mb: 5 }} xs={12} >
        <DataGrid rows={data} columns={field} loading={isLoading} slots={{ toolbar: GridToolbar }} onRowClick={handleRowClick} />
      </Grid>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={2} sm={4} md={4}>
          <CardWrapper border={false} content={false}>
            <Grid container direction="column">
              <Grid item sx={{ mb: 0.75, mt: 2 }}>
                <Grid container justifyContent="Center">
                  <Grid item>
                    <Typography variant="h3">Grafik Reject</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item sx={{ mb: 0.75 }}>
                <Box sx={{ width: '100%' }}>
                  {/* <LineChart
                    xAxis={[{
                      scaleType: 'band',
                      data: ['Shift 1', 'Shift 2', 'Shift 3']
                    }]}
                    series={[
                      {
                        id: '1',
                        label: 'B1',
                        curve: "linear",
                        data: 0,
                      },
                      {
                        id: '2',
                        label: 'B2',
                        curve: "linear",
                        data: 0,
                      },
                      {
                        id: '3',
                        label: 'B3',
                        curve: "linear",
                        data: 0,
                      },
                      {
                        id: '4',
                        label: 'B4',
                        curve: "linear",
                        data: 0,
                      },
                      {
                        id: '5',
                        label: 'A4',
                        curve: "linear",
                        data: 0,
                      },
                      {
                        id: '6',
                        label: 'Total',
                        curve: "linear",
                        data: 0,
                      }
                    ]}
                    height={300}
                    width={450}
                  /> */}
                </Box>
              </Grid>
            </Grid>
          </CardWrapper>
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          <CardWrapper border={false} content={false}>
            <Grid container direction="column">
              <Grid item sx={{ mb: 0.75, mt: 2 }}>
                <Grid container justifyContent="Center">
                  <Grid item>
                    <Typography variant="h3">Grafik Achievement</Typography>
                  </Grid>
                </Grid>
                <Grid container justifyContent="Center">
                  <Grid item>
                    <Typography variant="h4">(Reguler =  0 %, Ach Shift 2 =  0 %,Ach Shift 3 =  0 %)</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item sx={{ mb: 0.75 }}>
                <Box sx={{ width: '100%' }}>
                  {/* <BarChart
                    xAxis={[{
                      scaleType: 'band',
                      data: ['Shift 1', 'Shift 2', 'Shift 3']
                    }]}
                    series={[
                      {
                        id: '1',
                        stack: 'A',
                        label: 'Plan',
                        data: 0,
                      },
                      {
                        id: '2',
                        stack: 'A',
                        label: 'Real',
                        data: 0,
                      },
                    ]}
                    height={300}
                    width={450}
                  /> */}
                </Box>
              </Grid>
            </Grid>
          </CardWrapper>
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          <CardWrapper border={false} content={false}>
            <Grid container direction="column">
              <Grid item sx={{ mb: 0.75, mt: 2 }}>
                <Grid container justifyContent="Center">
                  <Grid item>
                    <Typography variant="h3">Grafik Reject</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item sx={{ mb: 0.75 }}>
                <Box sx={{ width: '100%' }}>
                  {/* <LineChart
                    xAxis={[{
                      scaleType: 'band',
                      data: ['Shift 1', 'Shift 2', 'Shift 3']
                    }]}
                    series={[
                      {
                        id: '1',
                        label: 'Sheet',
                        curve: "linear",
                        data: 1,
                      },
                      {
                        id: '2',
                        label: 'Book',
                        curve: "linear",
                        data: 1,
                      },
                      {
                        id: '3',
                        label: 'Bended',
                        curve: "linear",
                        data: 1,
                      },
                      {
                        id: '4',
                        label: 'Sapuan Pack',
                        curve: "linear",
                        data: 1,
                      },
                      {
                        id: '5',
                        label: 'Buble',
                        curve: "linear",
                        data: 1,
                      }
                    ]}
                    height={300}
                    width={450}
                  /> */}
                </Box>
              </Grid>
            </Grid>
          </CardWrapper>
        </Grid>
      </Grid>
      <Snackbar
        onClose={handleClose}
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        key={vertical + horizontal}
        autoHideDuration={5000}
      >
        <Alert
          onClose={handleClose}
          severity="error"
          variant="filled"
          sx={{ width: '100%' }}
        >
          Data is not complete, cannot show data in table and graphics
        </Alert>
      </Snackbar>
      <Dialog
        fullScreen
        scroll={'paper'}
        open={opendua}
        onClose={handleCloseDua}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleCloseDua}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Close
            </Typography>
            <Typography >
              Detail Data
            </Typography>
          </Toolbar>
        </AppBar>
        <DialogContent dividers={scroll === 'paper'}>
          <MainCard content={false}>
            <CardContent>
              <Typography variant="h5">Primary</Typography>
              <Grid container spacing={2} direction="row" sx={{ mt: 1, width: '100%' }}>
                <Grid item xs={12} sm={2}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      label="Date"
                      value={valueDate}
                      onChange={(newValue) => setValueDate(newValue)}
                    />
                  </LocalizationProvider>
                </Grid>
                <Grid item xs={12} sm={5}>
                  <FormControl required sx={{ m: 1, width: '100%' }}>
                    <InputLabel>Shift</InputLabel>
                    <Select
                      value={shift}
                      onChange={(e) => setShift(e.target.value)}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value="Shift 1">Shift 1</MenuItem>
                      <MenuItem value="Shift 2">Shift 2</MenuItem>
                      <MenuItem value="Shift 3">Shift 3</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={5}>
                  <FormControl required sx={{ m: 1, width: '100%' }}>
                    <InputLabel>SKU</InputLabel>
                    <Select
                      value={sku}
                      onChange={(e) => setSKU(e.target.value)} >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value="ROMA KELAPA (410279)">ROMA KELAPA (410279)</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>

              <Grid container spacing={2} direction="row">
                <Grid item xs={12} sm={4}>
                  <TextField
                    label="Release"
                    value={reguler}
                    onChange={(e) => setReguler(e.target.value)}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    label="Hold"
                    value={hold}
                    onChange={(e) => setHold(e.target.value)}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    label="Output (%)"
                    value={output}
                    onChange={(e) => setOutput(e.target.value)}
                    fullWidth
                    disabled
                  />
                </Grid>
              </Grid>
              <Divider sx={{ mb: 2, mt: 2 }} />
              <Typography variant="h5">REJECT RM (Kg)</Typography>
              <Grid container spacing={2} sx={{ mt: 2 }} direction="row">
                <Grid item xs={12} sm={4}>
                  <TextField
                    label="RMD"
                    value={rmd}
                    onChange={(e) => setRMD(e.target.value)}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    label="Rfeeding"
                    value={rfeeding}
                    onChange={(e) => setRfeeding(e.target.value)}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    label="R sample qc"
                    value={rsampleqc}
                    onChange={(e) => setRsampleqc(e.target.value)}
                    fullWidth
                  />
                </Grid>
              </Grid>
              <Grid container spacing={2} sx={{ mt: 2 }} direction="row">
                <Grid item xs={12} sm={4}>
                  <TextField
                    label=" R Pack Inner"
                    value={rpackinner}
                    onChange={(e) => setRpackinner(e.target.value)}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    label="Pack Table"
                    value={rpackTable}
                    onChange={(e) => setRPackTable(e.target.value)}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    label="Total RM"
                    value={rmtotal}
                    onChange={(e) => setRmtotal(e.target.value)}
                    fullWidth
                    disabled
                  />
                </Grid>
              </Grid>

              <Divider sx={{ mb: 2, mt: 2 }} />
              <Typography variant="h5">Data Reject RM / Mesin (Kg)</Typography>

              <Grid container spacing={2} sx={{ mt: 2 }} direction="row">
                <Grid item xs={12} sm={4}>
                  <TextField
                    label="RM E1"
                    value={rmE1}
                    onChange={(e) => setRmE1(e.target.value)}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    label="RM E2"
                    value={rmE2}
                    onChange={(e) => setRmE2(e.target.value)}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    label="RM E3"
                    value={rmE3}
                    onChange={(e) => setRmE3(e.target.value)}
                    fullWidth
                  />
                </Grid>
              </Grid>

              <Grid container spacing={2} sx={{ mb: 2, mt: 2 }} direction="row">
                <Grid item xs={12} sm={4}>
                  <TextField
                    label="RM E4"
                    value={rmE4}
                    onChange={(e) => setRmE4(e.target.value)}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    label="RM E5"
                    value={rmE5}
                    onChange={(e) => setRmE5(e.target.value)}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    label="RM E6"
                    value={rmE6}
                    onChange={(e) => setRmE6(e.target.value)}
                    fullWidth
                  />
                </Grid>
              </Grid>

              <Grid container spacing={2} direction="row">
                <Grid item xs={12} sm={4}>
                  <TextField
                    label="RM E7"
                    value={rmE7}
                    onChange={(e) => setRmE7(e.target.value)}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    label="RM E8"
                    value={rmE8}
                    onChange={(e) => setRmE8(e.target.value)}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    label="RM E9"
                    value={rmE9}
                    onChange={(e) => setRmE9(e.target.value)}
                    fullWidth
                  />
                </Grid>
              </Grid>

              <Grid container spacing={2} sx={{ mb: 2, mt: 2 }} direction="row">
                <Grid item xs={12} sm={4}>
                  <TextField
                    label="RM E10"
                    value={rmE10}
                    onChange={(e) => setRmE10(e.target.value)}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    label="RM E11"
                    value={rmE11}
                    onChange={(e) => setRmE11(e.target.value)}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    label="RM E12"
                    value={rmE12}
                    onChange={(e) => setRmE12(e.target.value)}
                    fullWidth
                  />
                </Grid>
              </Grid>
              <Grid container spacing={2} sx={{ mt: 2 }} direction="row">
                <Grid item xs={12} sm={12}>
                  <TextField
                    label="Total Reject Inner Mesin Bungkus ROLL"
                    value={roll}
                    onChange={(e) => setRejectinnermesinroll(e.target.value)}
                    fullWidth
                    disabled
                  />
                </Grid>
              </Grid>

              <Divider sx={{ mb: 2, mt: 2 }} />
              <Typography variant="h5">Sampah Oven</Typography>
              <Grid container spacing={2} sx={{ mt: 2 }} direction="row">
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Reject oven"
                    value={roven}
                    onChange={(e) => setRoven(e.target.value)}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Sampah oven"
                    value={soven}
                    onChange={(e) => setSoven(e.target.value)}
                    fullWidth
                  />
                </Grid>
              </Grid>

              <Divider sx={{ mb: 2, mt: 2 }} />
              <Typography variant="h5">Sampah (KG)</Typography>
              <Grid container spacing={2} sx={{ mt: 2 }} direction="row">
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="MCBKS"
                    value={mcbks}
                    onChange={(e) => setMcbks(e.target.value)}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Ptable"
                    value={ptable}
                    onChange={(e) => setPtable(e.target.value)}
                    fullWidth
                  />
                </Grid>
              </Grid>
              <Grid container spacing={2} sx={{ mt: 2 }} direction="row">
                <Grid item xs={12} sm={4}>
                  <TextField
                    label="Serbuk"
                    value={serbuk}
                    onChange={(e) => setSerbuk(e.target.value)}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    label="Tampungan"
                    value={tampungan}
                    onChange={(e) => setTampungan(e.target.value)}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    label="Total"
                    value={total}
                    onChange={(e) => setTotal(e.target.value)}
                    fullWidth
                    disabled
                  />
                </Grid>
              </Grid>

              <Divider sx={{ mb: 2, mt: 2 }} />
              <Typography variant="h5">Total dan Berat Pack</Typography>
              <Grid container spacing={2} sx={{ mt: 2 }} direction="row">
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Berat Pack"
                    value={brtpack}
                    onChange={(e) => setBrtpack(e.target.value)}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Batch"
                    value={batch}
                    onChange={(e) => setBatch(e.target.value)}
                    fullWidth
                  />
                </Grid>
              </Grid>

              <Divider sx={{ mb: 2, mt: 2 }} />
              <Typography variant="h5">Batch dan WIP</Typography>

              <Grid container spacing={2} sx={{ mt: 2 }} direction="row">
                {/* <Grid item xs={12} sm={6}>
                                <TextField
                                    label="WIP Inner"
                                    value={wiinner}
                                    onChange={(e) => setWiinner(e.target.value)}
                                    fullWidth
                                />
                            </Grid> */}
                <Grid item xs={12} sm={4}>
                  <TextField
                    label="WIP Pack Inner"
                    value={wipackinner}
                    onChange={(e) => setWipackinner(e.target.value)}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    label="WIP Kulit"
                    value={wikulit}
                    onChange={(e) => setWikulit(e.target.value)}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    label="WIP Total"
                    value={witotal}
                    onChange={(e) => setWitotal(e.target.value)}
                    fullWidth
                    disabled
                  />
                </Grid>
              </Grid>

              <Divider sx={{ mb: 2, mt: 2 }} />
              <Typography variant="h5"> Variance Inner (VI)</Typography>

              <Grid container spacing={2} sx={{ mt: 2 }} direction="row">
                <Grid item xs={12} sm={4}>
                  <TextField
                    label="S Awal"
                    value={viawal}
                    onChange={(e) => setViawal(e.target.value)}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    label="Ambil"
                    value={viambil}
                    onChange={(e) => setViambil(e.target.value)}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    label="S Akhir"
                    value={viakhir}
                    onChange={(e) => setViakhir(e.target.value)}
                    fullWidth
                  />
                </Grid>
              </Grid>

              <Grid container spacing={2} sx={{ mb: 2, mt: 2 }} direction="row">
                <Grid item xs={12} sm={4}>
                  <TextField
                    label="Return"
                    value={vireturn}
                    onChange={(e) => setVireturn(e.target.value)}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    label="Pakai"
                    value={viinner}
                    onChange={(e) => setViinner(e.target.value)}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    label="R inner"
                    value={viRainner}
                    onChange={(e) => setViRainner(e.target.value)}
                    fullWidth
                  />
                </Grid>
              </Grid>

              <Grid container spacing={2} direction="row">
                {[viE1, viE2, viE3, viE4, viE5, viE6, viE7, viE8, viE9, viE10, viE11].map((value, index) => (
                  <Grid item xs={12} sm={4} key={index}>
                    <TextField
                      label={`VI E${index + 1}`}
                      value={value}
                      onChange={(e) => {
                        const setters = [setViE1, setViE2, setViE3, setViE4, setViE5, setViE6, setViE7, setViE8, setViE9, setViE10, setViE11];
                        setters[index](e.target.value);
                      }}
                      fullWidth
                    />
                  </Grid>
                ))}
                <Grid item xs={12} sm={4}>
                  <TextField
                    label="Vi E12"
                    value={viE12}
                    onChange={(e) => setViE12(e.target.value)}
                    fullWidth
                  />
                </Grid>
              </Grid>
              <Grid container spacing={2} sx={{ mt: 2 }} direction="row">
                <Grid item xs={12} sm={12}>
                  <TextField
                    label="Total Reject Inner Mesin Bungkus Kg"
                    value={variance}
                    onChange={(e) => setVariance(e.target.value)}
                    fullWidth
                    disabled
                  />
                </Grid>
              </Grid>

              <Divider sx={{ mb: 2, mt: 2 }} />
              <Typography variant="h5">Karton reguler</Typography>

              <Grid container spacing={2} sx={{ mt: 2 }} direction="row">

                <Grid item xs={12} sm={12}>
                  <TextField
                    label="S Awal"
                    value={krkawal}
                    onChange={(e) => setKrkawal(e.target.value)}
                    fullWidth
                  />
                </Grid>
              </Grid>

              <Grid container spacing={2} sx={{ mb: 2, mt: 2 }} direction="row">
                <Grid item xs={12} sm={4}>
                  <TextField
                    label="Awal"
                    value={krAwal}
                    onChange={(e) => setKrAwal(e.target.value)}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    label="S Akhir"
                    value={krakhir}
                    onChange={(e) => setKrakhir(e.target.value)}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    label="Pakai"
                    value={krpakai}
                    onChange={(e) => setKrpakai(e.target.value)}
                    fullWidth
                  />
                </Grid>
              </Grid>

              <Grid container spacing={2} direction="row">
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Return"
                    value={kreturn}
                    onChange={(e) => setKreturn(e.target.value)}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Reject"
                    value={kreject}
                    onChange={(e) => setKreject(e.target.value)}
                    fullWidth
                  />
                </Grid>
              </Grid>

              <Divider sx={{ mb: 2, mt: 2 }} />
              <Typography variant="h5">Kendala</Typography>

              <Grid container spacing={2} sx={{ mt: 2 }} direction="row">
                <Grid item xs={12} sm={4}>
                  <TextField
                    label="Kendala 1"
                    value={kendala1}
                    rows={4}
                    multiline
                    onChange={(e) => setKendala1(e.target.value)}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    label="Kendala 2"
                    value={kendala2}
                    rows={4}
                    multiline
                    onChange={(e) => setKendala2(e.target.value)}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    label="Kendala 3"
                    value={kendala3}
                    rows={4}
                    multiline
                    onChange={(e) => setKendala3(e.target.value)}
                    fullWidth
                  />
                </Grid>
              </Grid>

              <Grid container spacing={2} sx={{ mb: 2, mt: 2 }} direction="row">
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Kendala 4"
                    value={kendala4}
                    rows={4}
                    multiline
                    onChange={(e) => setKendala4(e.target.value)}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Kendala 5"
                    value={kendala5}
                    rows={4}
                    multiline
                    onChange={(e) => setKendala5(e.target.value)}
                    fullWidth
                  />
                </Grid>
              </Grid>
            </CardContent>
          </MainCard>
        </DialogContent>
      </Dialog>
      <Snackbar
        open={opentiga}
        anchorOrigin={{ vertical, horizontal }}
        key={vertical + horizontal}
      >
        <Alert
          onClose={handleClose}
          severity="primary"
          variant="filled"
          sx={{ width: '100%' }}
        >
          loading
        </Alert>

      </Snackbar>
    </MainCard>
  )
};

export default TableLhpL2;