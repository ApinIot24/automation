import * as React from 'react';
import { useEffect, useState } from 'react';
import { Alert, Box, Grid, Snackbar, Typography ,FormControl, TextField ,CardContent} from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { styled } from '@mui/material/styles';
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';
import axios from 'axios';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LineChart } from '@mui/x-charts/LineChart';
import dayjs from 'dayjs';
import ButtonBack from 'ui-component/ButtonBack';
import { BarChart } from '@mui/x-charts';
import Dialog from '@mui/material/Dialog';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import DialogContent from '@mui/material/DialogContent';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
// import CircularProgress from '@mui/material/CircularProgress';


// ==============================|| Happy Coding ||============================== //
const CardWrapper = styled(MainCard)(() => ({
  backgroundColor: 'whitesmoke',
  color: '#fff',
  overflow: 'hidden',
  marginRight : 4,
  position: 'relative',
}));
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const TableLhpL1 = () => {
  const [valuedate, setValueDate] = useState(dayjs(new Date()));
  const [state] = useState({
    vertical: 'top',
    horizontal: 'center',
  });
  const { vertical, horizontal } = state;
  const [open, setOpen] = useState(false);
  const [opendua, setOpenDua] = useState(false);
  const [opentiga, setOpenTiga] = useState(false);
  
  // const [message, setMessage] = useState('');
  const [data ,setData] = useState([]);
  const [pack1 ,setPack1] = useState([0]);
  const [pack2 ,setPack2] = useState([0]);
  const [pack3 ,setPack3] = useState([0]);
  const [pack4 ,setPack4] = useState([0]);
  const [pack5 ,setPack5] = useState([0]);
  const [sumpack ,setSumPack] = useState([0]);
  const [plan, setPlan] = useState([0]);
  const [real, setReal] = useState([0]);
  const [ach, setAch] = useState([0]);
  const [ach1, setAch1] = useState([0]);
  const [ach2, setAch2] = useState([0]);
  const [sheet , setSheet] = useState([0]);
  const [book , setBook] = useState([0]);
  const [banded , setBanded] = useState([0]);
  const [sapuanpack , setSapuanPack] = useState([0]);
  const [buble , setBuble] = useState([0]);
  //Modal
  const [inidate , setInidate] = useState('')
  const [shift, setShift] = useState('');
  const [pland, setPland] = useState('');
  const [reald, setReald] = useState('');
  const [achd, setAchd] = useState('');
  const [sku, setSKU] = useState('');
  const [cello , setCello] = useState('');
  const [cello1 , setCello1] = useState('');
  const [cello2 , setCello2] = useState('');
  const [cello3 , setCello3] = useState('');
  const [cello4 , setCello4] = useState('');
  const [cello5 , setCello5] = useState('');
  const [sumpackd , setSumPackd] = useState('');
  const [pack1d , setPack1d] = useState('');
  const [pack2d , setPack2d] = useState('');
  const [pack3d , setPack3d] = useState('');
  const [pack4d , setPack4d] = useState('');
  const [pack5d , setPack5d] = useState('');
  const [speed1 , setSpeed1] = useState('');
  const [speed2 , setSpeed2] = useState('');
  const [speed3 , setSpeed3] = useState('');
  const [speed4 , setSpeed4] = useState('');
  const [speed5 , setSpeed5] = useState('');
  const [adonan , setAdonan] = useState('');
  const [avgbook , setAVGBook] = useState('');
  const [avgsheet , setAVGSheet] = useState('');
  const [creamccb , setCreamCCB] = useState('');
  const [sheetd , setSheetd] = useState('');
  const [bookd , setBookd] = useState('');
  const [cutkasar , setCutkasar] = useState('');
  const [bubukcut , setBubukCut] = useState('');
  const [sapuancut , setSapuanCut] = useState('');
  const [qccello , setQCCello] = useState('');
  const [qcpacking , setQCPacking] = useState('');
  const [cellocpp , setCelloCPP] = useState('');
  const [ctnsup , setCtnSup] = useState('');
  const [ctnproud , setCtnProud] = useState('');
  const [cello_used , setCelloUsed] = useState('');
  const [bandedd , setBandedd] = useState('');
  const [sapuanpackd , setSapuanPackd] = useState('');
  const [bubled , setBubled] = useState('');
  const [supcello , setSupCello] = useState('');
  const [samplectnqc , setSampleCtnQc] = useState('');
  const [forbanded , setForBanded] = useState('');
  const [forbanded2 , setForBanded2] = useState('');
  const [cutoff , setCutOff] = useState('');
  const [ctnluar , setCtnLuar] = useState('');
  const [kendala1 , setKendala1] = useState('');
  const [kendala2 , setKendala2] = useState('');
  const [kendala3 , setKendala3] = useState('');
  const [kendala4 , setKendala4] = useState('');
  const [kendala5 , setKendala5] = useState('');
  const [field ] = useState([
    { field: 'id', headerName: 'ID', width: 50 },
    { field: 'shift', headerName: 'Time', width: 100 },
    { field: 'sku', headerName: 'Sku', width: 200 },
    { field: 'plan', headerName: 'Plan', width: 75 },
    { field: 'real', headerName: 'Real', width: 75 },
    { field: 'ach', headerName: 'Achievement', width: 100 },
    { field: 'packing_reject', headerName: 'Reject Cello', width: 100 },
    { field: 'sheet', headerName: 'Reject Sheet', width: 100},
    { field: 'book', headerName: 'Reject Book', width: 100 },
    { field: 'banded', headerName: 'Reject Banded', width: 100 },
    { field: 'sapuanpack', headerName: 'Reject Sapuan Packing', width: 135 },
    { field: 'buble', headerName: 'Reject Buble', width: 125 },
    { field: 'tanggal', headerName: 'Date', width: 100 }
  ]);
  const [urlapi] = useState({
    lhp : 'http://10.37.12.17:3000/packing_a1',
    lhpdaily : 'http://10.37.12.17:3000/lhp_daily/l1',
    urlp2 : 'table',

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
    axios.get(`http://10.37.12.17:3000/lhp/detail/${params.row.id}`)
    .then(response => {
      var dataolah = response.data[0];
      setInidate(new Date(dataolah.realdatetime).toLocaleDateString())
      setShift(dataolah.shift)
      setPland(dataolah.plan)
      setReald(dataolah.real)
      setAchd(dataolah.ach)
      setSKU(dataolah.sku)
      setCello(dataolah.cello.cello)
      setCello1(dataolah.cello.cello1)
      setCello2(dataolah.cello.cello2)
      setCello3(dataolah.cello.cello3)
      setCello4(dataolah.cello.cello4)
      setCello5(dataolah.cello.cello5)
      setSumPackd(dataolah.packing_reject.sumpack)
      setPack1d(dataolah.packing_reject.pack1)
      setPack2d(dataolah.packing_reject.pack2)
      setPack3d(dataolah.packing_reject.pack3)
      setPack4d(dataolah.packing_reject.pack4)
      setPack5d(dataolah.packing_reject.pack5)
      setSpeed1(dataolah.speed_mesin.speed1)
      setSpeed2(dataolah.speed_mesin.speed2)
      setSpeed3(dataolah.speed_mesin.speed3)
      setSpeed4(dataolah.speed_mesin.speed4)
      setSpeed5(dataolah.speed_mesin.speed5)
      setAdonan(dataolah.adonan_used)
      setAVGBook(dataolah.avgbook)
      setAVGSheet(dataolah.avgsheet)
      setCreamCCB(dataolah.ccbcream_used)
      setSheetd(dataolah.sheet)
      setBookd(dataolah.book)
      setCutkasar(dataolah.cutkasar)
      setBubukCut(dataolah.bubukcutting)
      setSapuanCut(dataolah.sapuancut)
      setQCCello(dataolah.qccello)
      setQCPacking(dataolah.qcpacking)
      setCelloCPP(dataolah.cellocpp)
      setCtnSup(dataolah.ctn_type.ctnsup)
      setCtnProud(dataolah.ctn_type.ctnproud)
      setCelloUsed(dataolah.cello_used)
      setBandedd(dataolah.banded)
      setSapuanPackd(dataolah.sapuanpack)
      setBubled(dataolah.buble)
      setSupCello(dataolah.suppliercello)
      setSampleCtnQc(dataolah.sample_ctn_qc)
      setForBanded(dataolah.banded_under)
      setForBanded2(dataolah.banded_over)
      setCutOff(dataolah.cutoff_jam)
      setCtnLuar(dataolah.ctn_luar)
      setKendala1(dataolah.kendala.kendala1)
      setKendala2(dataolah.kendala.kendala2)
      setKendala3(dataolah.kendala.kendala3)
      setKendala4(dataolah.kendala.kendala4)
      setKendala5(dataolah.kendala.kendala5)

      // console.log("Tanggal" , dataolah)
      setOpenDua(true);
      setOpenTiga(false);
    })
    .catch(error => {
      console.log(error);
    });
    
  };
  const [isLoading , setLoading] = useState(true);
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
            objects[0].plan = dataolah[0].plan
            objects[0].real = dataolah[0].real
            objects[0].ach = dataolah[0].ach
            objects[0].packing_reject = dataolah[0].packing_reject.sumpack
            objects[0].sheet = dataolah[0].sheet
            objects[0].book = dataolah[0].book
            objects[0].banded = dataolah[0].banded
            objects[0].sapuanpack = dataolah[0].sapuanpack
            objects[0].buble = dataolah[0].buble
            objects[0].tanggal = new Date().toLocaleDateString();
            setData(objects)
            setPack1([dataolah[0].packing_reject.pack1])
            setPack2([dataolah[0].packing_reject.pack2])
            setPack3([dataolah[0].packing_reject.pack3])
            setPack4([dataolah[0].packing_reject.pack4])
            setPack5([dataolah[0].packing_reject.pack5])
            setSumPack([dataolah[0].packing_reject.sumpack])
            setPlan([dataolah[0].plan])
            setReal([dataolah[0].real])
            setAch([dataolah[0].ach])
            setSheet([dataolah[0].sheet])
            setBook([dataolah[0].book])
            setBanded([dataolah[0].banded])
            setSapuanPack([dataolah[0].sapuanpack])
            setBuble([dataolah[0].buble])
        }
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
  <MainCard title="Report LHP Line 1" secondary={<ButtonBack path={'/utils/packing-line1/table'} />} >
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12} sm={9}>
            </Grid>
            <Grid item mb={5} mt={-10} xs={12} sm={3}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Search Date"
                value = {valuedate}
                onChange={(newValue) => {
                  setValueDate(newValue);
                  var thisdate = new Date(newValue);
                  thisdate.setDate(thisdate.getDate() + 1)
                  var datenyar = new Date(newValue);
                  var datestring = datenyar.getFullYear()  + "-0" + (datenyar.getMonth()+1) + "-" + datenyar.getDate()
                  var thisdatenow = new Date(newValue);
                  thisdatenow.setDate(thisdate.getDate() + 1)
                  var datenyarnow = new Date();
                  var datestringnow = datenyarnow.getFullYear()  + "-0" + (datenyarnow.getMonth()+1) + "-" + datenyarnow.getDate()
                  console.log("Tanggal" , datestring)
                  if (datestringnow===datestring) {
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
                            objects[0].plan = dataolah[0].plan
                            objects[0].real = dataolah[0].real
                            objects[0].ach = dataolah[0].ach
                            objects[0].packing_reject = dataolah[0].packing_reject.sumpack
                            objects[0].sheet = dataolah[0].sheet
                            objects[0].book = dataolah[0].book
                            objects[0].banded = dataolah[0].banded
                            objects[0].sapuanpack = dataolah[0].sapuanpack
                            objects[0].buble = dataolah[0].buble
                            objects[0].tanggal = new Date().toLocaleDateString();
                            setData(objects)
                            setPack1([dataolah[0].packing_reject.pack1])
                            setPack2([dataolah[0].packing_reject.pack2])
                            setPack3([dataolah[0].packing_reject.pack3])
                            setPack4([dataolah[0].packing_reject.pack4])
                            setPack5([dataolah[0].packing_reject.pack5])
                            setSumPack([dataolah[0].packing_reject.sumpack])
                            setPlan([dataolah[0].plan])
                            setReal([dataolah[0].real])
                            setAch([dataolah[0].ach])
                            setSheet([dataolah[0].sheet])
                            setBook([dataolah[0].book])
                            setBanded([dataolah[0].banded])
                            setSapuanPack([dataolah[0].sapuanpack])
                            setBuble([dataolah[0].buble])
                            
                        }
                      })
                      .catch(error => {
                        console.log(error);
                      });
                  } else {
                    axios.get(`http://10.37.12.17:3000/lhp_daily/date/${datestring}/l1`)
                    .then(response => {
                      var dataolah = response.data;
                      // console.log("Tanggal" , dataolah)
                      let objects = [];  
                      objects[0] = {};
                      objects[0].id = dataolah[0].id;
                      objects[0].shift = dataolah[0].shift
                      objects[0].sku = dataolah[0].sku
                      objects[0].plan = dataolah[0].plan
                      objects[0].real = dataolah[0].real
                      objects[0].ach = dataolah[0].ach
                      objects[0].packing_reject = dataolah[0].packing_reject.sumpack
                      objects[0].sheet = dataolah[0].sheet
                      objects[0].book = dataolah[0].book
                      objects[0].banded = dataolah[0].banded
                      objects[0].sapuanpack = dataolah[0].sapuanpack
                      objects[0].buble = dataolah[0].buble
                      objects[0].tanggal = new Date(newValue).toLocaleDateString();
                      objects[1] = {};
                      objects[1].id = dataolah[1].id;
                      objects[1].shift = dataolah[1].shift
                      objects[1].sku = dataolah[1].sku
                      objects[1].plan = dataolah[1].plan
                      objects[1].real = dataolah[1].real
                      objects[1].ach = dataolah[1].ach
                      objects[1].packing_reject = dataolah[1].packing_reject.sumpack
                      objects[1].sheet = dataolah[1].sheet
                      objects[1].book = dataolah[1].book
                      objects[1].banded = dataolah[1].banded
                      objects[1].sapuanpack = dataolah[1].sapuanpack
                      objects[1].buble = dataolah[1].buble
                      objects[1].tanggal = new Date(newValue).toLocaleDateString();
                      objects[2] = {};
                      objects[2].id = dataolah[2].id;
                      objects[2].shift = dataolah[2].shift
                      objects[2].sku = dataolah[2].sku
                      objects[2].plan = dataolah[2].plan
                      objects[2].real = dataolah[2].real
                      objects[2].ach = dataolah[2].ach
                      objects[2].packing_reject = dataolah[2].packing_reject.sumpack
                      objects[2].sheet = dataolah[2].sheet
                      objects[2].book = dataolah[2].book
                      objects[2].banded = dataolah[2].banded
                      objects[2].sapuanpack = dataolah[2].sapuanpack
                      objects[2].buble = dataolah[2].buble
                      objects[2].tanggal = new Date(newValue).toLocaleDateString();
                      setData(objects)
                      setPack1([dataolah[0].packing_reject.pack1,dataolah[1].packing_reject.pack1,dataolah[2].packing_reject.pack1])
                      setPack2([dataolah[0].packing_reject.pack2,dataolah[1].packing_reject.pack2,dataolah[2].packing_reject.pack2])
                      setPack3([dataolah[0].packing_reject.pack3,dataolah[1].packing_reject.pack3,dataolah[2].packing_reject.pack3])
                      setPack4([dataolah[0].packing_reject.pack4,dataolah[1].packing_reject.pack4,dataolah[2].packing_reject.pack4])
                      setPack5([dataolah[0].packing_reject.pack5,dataolah[1].packing_reject.pack5,dataolah[2].packing_reject.pack5])
                      setSumPack([dataolah[0].packing_reject.sumpack,dataolah[1].packing_reject.sumpack,dataolah[2].packing_reject.sumpack])
                      setPlan([dataolah[0].plan,dataolah[1].plan,dataolah[2].plan])
                      setReal([dataolah[0].real,dataolah[1].real,dataolah[2].real])
                      setAch([dataolah[0].ach])
                      setAch1([dataolah[1].ach])
                      setAch2([dataolah[2].ach])
                      setSheet([dataolah[0].sheet,dataolah[1].sheet,dataolah[2].sheet])
                      setBook([dataolah[0].book,dataolah[1].book,dataolah[2].book])
                      setBanded([dataolah[0].banded,dataolah[1].banded,dataolah[2].banded])
                      setSapuanPack([dataolah[0].sapuanpack,dataolah[1].sapuanpack,dataolah[2].sapuanpack])
                      setBuble([dataolah[0].buble,dataolah[1].buble,dataolah[2].buble])
                    })
                    .catch(error => {
                      setOpen(true)
                      setData([])
                      setPack1([0])
                      setPack2([0])
                      setPack3([0])
                      setPack4([0])
                      setPack5([0])
                      setSumPack([0])
                      setPlan([0])
                      setReal([0])
                      setAch([0])
                      setAch1([0])
                      setAch2([0])
                      setSheet([0])
                      setBook([0])
                      setBanded([0])
                      setSapuanPack([0])
                      setBuble([0])

                      console.log(error);
                    });
                  }
                }}
              />
            </LocalizationProvider>
          </Grid>
        </Grid>
        <Grid item sx={{mb: 5}} xs={12} >
          <DataGrid rows={data} columns={field} loading={isLoading} slots={{ toolbar: GridToolbar }}  onRowClick={handleRowClick} />
        </Grid>
        <Grid container  spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={2} sm={4} md={4}>
            <CardWrapper border={false} content={false}>
              <Grid container direction="column">
                  <Grid item sx={{ mb: 0.75,  mt: 2}}>
                      <Grid container justifyContent="Center">
                        <Grid item>
                          <Typography variant="h3">Grafik Reject Cello</Typography>
                        </Grid>
                      </Grid>
                  </Grid>
                  <Grid item sx={{ mb: 0.75 }}>
                      <Box sx={{ width: '100%' }}>
                          <LineChart
                            xAxis={[{ scaleType: 'band', 
                            data: ['Shift 1','Shift 2','Shift 3']}]}
                            series={[
                                  {
                                    id: '1',
                                    label: 'A1',
                                    curve: "linear",
                                    data: pack1,
                                  },
                                  {
                                    id: '2',
                                    label: 'A2',
                                    curve: "linear",
                                    data: pack2,
                                  },
                                  {
                                    id: '3',
                                    label: 'A5',
                                    curve: "linear",
                                    data: pack3,
                                  },
                                  {
                                    id: '4',
                                    label: 'B5',
                                    curve: "linear",
                                    data: pack4,
                                  },
                                  {
                                    id: '5',
                                    label: 'A3',
                                    curve: "linear",
                                    data: pack5,
                                  },
                                  {
                                    id: '6',
                                    label: 'Total',
                                    curve: "linear",
                                    data: sumpack,
                                  }
                            ]}
                            height={300}
                            width={450}
                          />        
                      </Box>
                  </Grid>
              </Grid>
            </CardWrapper>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <CardWrapper border={false} content={false}>
              <Grid container direction="column">
                  <Grid item sx={{ mb: 0.75,  mt: 2}}>
                      <Grid container justifyContent="Center">
                        <Grid item>
                          <Typography variant="h3">Grafik Achievement</Typography>
                        </Grid>
                      </Grid>
                      <Grid container justifyContent="Center">
                        <Grid item>
                          <Typography variant="h4">(Ach Shift 1 =  {ach} %, Ach Shift 2 =  {ach1} %,Ach Shift 3 =  {ach2} %)</Typography>
                        </Grid>
                      </Grid>
                  </Grid>
                  <Grid item sx={{ mb: 0.75 }}>
                      <Box sx={{ width: '100%' }}>
                          <BarChart
                            xAxis={[{ scaleType: 'band', 
                            data: ['Shift 1','Shift 2','Shift 3']}]}
                            series={[
                                  {
                                    id: '1',
                                    stack: 'A',
                                    label: 'Plan',
                                    data: plan,
                                  },
                                  {
                                    id: '2',
                                    stack: 'A',
                                    label: 'Real',
                                    data: real,
                                  },
                            ]}
                            height={300}
                            width={450}
                          />        
                      </Box>
                  </Grid>
              </Grid>
            </CardWrapper>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <CardWrapper border={false} content={false}>
              <Grid container direction="column">
                  <Grid item sx={{ mb: 0.75,  mt: 2}}>
                      <Grid container justifyContent="Center">
                        <Grid item>
                          <Typography variant="h3">Grafik Reject</Typography>
                        </Grid>
                      </Grid>
                  </Grid>
                  <Grid item sx={{ mb: 0.75 }}>
                      <Box sx={{ width: '100%' }}>
                          <LineChart
                            xAxis={[{ scaleType: 'band', 
                            data: ['Shift 1','Shift 2','Shift 3']}]}
                            series={[
                                  {
                                    id: '1',
                                    label: 'Sheet',
                                    curve: "linear",
                                    data: sheet,
                                  },
                                  {
                                    id: '2',
                                    label: 'Book',
                                    curve: "linear",
                                    data: book,
                                  },
                                  {
                                    id: '3',
                                    label: 'Bended',
                                    curve: "linear",
                                    data: banded,
                                  },
                                  {
                                    id: '4',
                                    label: 'Sapuan Pack',
                                    curve: "linear",
                                    data: sapuanpack,
                                  },
                                  {
                                    id: '5',
                                    label: 'Buble',
                                    curve: "linear",
                                    data: buble,
                                  }
                            ]}
                            height={300}
                            width={450}
                          />        
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
                    <Grid container spacing={2} direction="row" sx={{ mt: 1, width: '100%' }} >
                        <Grid item xs={12} sm={2} >
                            <FormControl required sx={{ m: 1, width: '100%' }}>
                              <TextField
                                  value={inidate}
                                  label="Tanggal"
                                  defaultValue=""
                                  id="outlined-read-only-input"
                                  InputProps={{
                                    readOnly: true,
                                  }}
                              />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={5}>
                            <FormControl required sx={{ m: 1, width: '100%' }}>
                              <TextField
                                  value={shift}
                                  label="SHIFT"
                                  defaultValue=""
                                  id="outlined-read-only-input"
                                  InputProps={{
                                    readOnly: true,
                                  }}
                              />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={5}>
                            <FormControl required sx={{ m: 1, width: '100%' }}>
                            <TextField
                                value={sku}
                                label="SKU"
                                defaultValue=""
                                id="outlined-read-only-input"
                                InputProps={{
                                  readOnly: true,
                                }}
                            />
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} direction="row" >
                        <Grid item xs={12} sm={4} >
                            <FormControl required sx={{ m: 1, width: '100%' }}>
                            <TextField
                                value={pland}
                                label="Plan (Ctn)"
                                type="number"
                                defaultValue=""
                                id="outlined-read-only-input"
                                InputProps={{
                                  readOnly: true,
                                }}
                            />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <FormControl required sx={{ m: 1, width: '100%' }}>
                            <TextField
                                value={reald}
                                label="Real(Ctn)"
                                type="number"
                                defaultValue=""
                                id="outlined-read-only-input"
                                InputProps={{
                                  readOnly: true,
                                }}
                            />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <FormControl required sx={{ m: 1, width: '100%' }}>
                            <TextField
                                value={achd}
                                label="Ach(%)"
                                defaultValue=""
                                id="outlined-read-only-input"
                                InputProps={{
                                  readOnly: true,
                                }}
                            />
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Divider sx={{ mb : 2 ,  border: 1, borderColor: 'divider' }}/>
                    <Typography variant="h5">REJECT PM</Typography>
                    <Grid container spacing={2} direction="row" >
                        <Grid item xs={12} sm={2} >
                            <FormControl required sx={{ m: 1, width: '100%' }}>
                            <TextField
                                value={cello}
                                label="Cello (Kg)"
                                defaultValue=""
                                id="outlined-read-only-input"
                                InputProps={{
                                  readOnly: true,
                                }}
                            />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={2}>
                            <FormControl required sx={{ m: 1, width: '100%' }}>
                            <TextField
                                value={cello1}
                                label={"MP A1"}
                                defaultValue=""
                                id="outlined-read-only-input"
                                InputProps={{
                                  readOnly: true,
                                }}
                            />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={2}>
                            <FormControl required sx={{ m: 1, width: '100%' }}>
                            <TextField
                                value={cello2}
                                label={"MP A2"}
                                defaultValue=""
                                id="outlined-read-only-input"
                                InputProps={{
                                  readOnly: true,
                                }}
                            />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={2} >
                            <FormControl required sx={{ m: 1, width: '100%' }}>
                            <TextField
                                value={cello3}
                                label={"MP A5"}
                                defaultValue=""
                                id="outlined-read-only-input"
                                InputProps={{
                                  readOnly: true,
                                }}
                                
                            />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={2}>
                            <FormControl required sx={{ m: 1, width: '100%' }}>
                            <TextField
                                value={cello4}
                                label={"MP B5"}
                                defaultValue=""
                                id="outlined-read-only-input"
                                InputProps={{
                                  readOnly: true,
                                }}
                            />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={2}>
                            <FormControl required sx={{ m: 1, width: '100%' }}>
                            <TextField
                                value={cello5}
                                label={"MP A3"}
                                defaultValue=""
                                id="outlined-read-only-input"
                                InputProps={{
                                  readOnly: true,
                                }}
                            />
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} direction="row" >
                        <Grid item xs={12} sm={3} >
                            <FormControl required sx={{ m: 1, width: '100%' }}>
                            <TextField
                                value={cellocpp}
                                label="Cello CPP (Kg)"
                                defaultValue=""
                                id="outlined-read-only-input"
                                InputProps={{
                                  readOnly: true,
                                }}
                            />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <FormControl required sx={{ m: 1, width: '100%' }}>
                            <TextField
                            value={ctnsup}
                                label="Ctn Sup (lbr)"
                                defaultValue=""
                                id="outlined-read-only-input"
                                InputProps={{
                                  readOnly: true,
                                }}
                            />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <FormControl required sx={{ m: 1, width: '100%' }}>
                            <TextField
                                value={ctnproud}
                                label="Ctn Proud (lbr)"
                                defaultValue=""
                                id="outlined-read-only-input"
                                InputProps={{
                                  readOnly: true,
                                }}
                            />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <FormControl required sx={{ m: 1, width: '100%' }}>
                            <TextField
                                value={cello_used}
                                label="Pemakaian Cello"
                                defaultValue=""
                                id="outlined-read-only-input"
                                InputProps={{
                                  readOnly: true,
                                }}
                            />
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} direction="row" >
                        <Grid item xs={12} sm={3} >
                            <FormControl required sx={{ m: 1, width: '100%' }}>
                            <TextField
                                value={adonan}
                                label="Pemakaian Adonan"
                                type="number"
                                defaultValue=""
                                id="outlined-read-only-input"
                                InputProps={{
                                  readOnly: true,
                                }}
                            />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <FormControl required sx={{ m: 1, width: '100%' }}>
                            <TextField
                                value={creamccb}
                                label="Pemakaian Cream CCB(kg)"
                                type="number"
                                defaultValue=""
                                id="outlined-read-only-input"
                                InputProps={{
                                  readOnly: true,
                                }}
                            />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <FormControl required sx={{ m: 1, width: '100%' }}>
                            <TextField
                            value={avgsheet}
                                label="Rata-rata Sheet(gr)"
                                defaultValue=""
                                id="outlined-read-only-input"
                                InputProps={{
                                  readOnly: true,
                                }}
                            />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <FormControl required sx={{ m: 1, width: '100%' }}>
                            <TextField
                            value={avgbook}
                                label="Rata-rata Book (gr)"
                                defaultValue=""
                                id="outlined-read-only-input"
                                InputProps={{
                                  readOnly: true,
                                }}
                            />
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Divider sx={{ mb : 2 ,  border: 1, borderColor: 'divider' }}/>
                    <Typography variant="h5">REJECT(kg)</Typography>
                    <Grid container spacing={2} direction="row" >
                        <Grid item xs={12} sm={1.6} >
                            <FormControl required sx={{ m: 1, width: '100%' }}>
                            <TextField
                                value={sheetd}
                                label="Sheet"
                                defaultValue=""
                                id="outlined-read-only-input"
                                InputProps={{
                                  readOnly: true,
                                }}
                            />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={1.6}>
                            <FormControl required sx={{ m: 1, width: '100%' }}>
                            <TextField
                                value={bookd}
                                label="Book"
                                defaultValue=""
                                id="outlined-read-only-input"
                                InputProps={{
                                  readOnly: true,
                                }}
                            />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={1.6}>
                            <FormControl required sx={{ m: 1, width: '100%' }}>
                            <TextField
                            value={cutkasar}    
                                label="Potongan Kasar"
                                defaultValue=""
                                id="outlined-read-only-input"
                                InputProps={{
                                  readOnly: true,
                                }}
                            />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={1.6} >
                            <FormControl required sx={{ m: 1, width: '100%' }}>
                            <TextField
                            value={bubukcut}    
                                label="Bubuk Cutting"
                                defaultValue=""
                                id="outlined-read-only-input"
                                InputProps={{
                                  readOnly: true,
                                }}
                            />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={1.6}>
                            <FormControl required sx={{ m: 1, width: '100%' }}>
                            <TextField
                            value={sapuancut}    
                                label="Sapuan Cutting"
                                defaultValue=""
                                id="outlined-read-only-input"
                                InputProps={{
                                  readOnly: true,
                                }}
                            />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={1.6}>
                            <FormControl required sx={{ m: 1, width: '100%' }}>
                            <TextField
                            value={qcpacking}    
                                label="QC Packing"
                                defaultValue=""
                                id="outlined-read-only-input"
                                InputProps={{
                                  readOnly: true,
                                }}
                            />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={1.6}>
                            <FormControl required sx={{ m: 1, width: '100%' }}>
                            <TextField
                            value={qccello}    
                                label="QC Cello"
                                defaultValue=""
                                id="outlined-read-only-input"
                                InputProps={{
                                  readOnly: true,
                                }}
                            />
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} direction="row" >
                        <Grid item xs={12} sm={2} >
                            <FormControl required sx={{ m: 1, width: '100%' }}>
                            <TextField
                                value={sumpackd}
                                label="Total Packing"
                                defaultValue=""
                                id="outlined-read-only-input"
                                InputProps={{
                                  readOnly: true,
                                }}
                            />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={2}>
                            <FormControl required sx={{ m: 1, width: '100%' }}>
                            <TextField
                            value={pack1d}
                                label={"MP A1"}
                                defaultValue=""
                                id="outlined-read-only-input"
                                InputProps={{
                                  readOnly: true,
                                }}
                            />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={2}>
                            <FormControl required sx={{ m: 1, width: '100%' }}>
                            <TextField
                            value={pack2d}
                                label={"MP A2"}
                                defaultValue=""
                                id="outlined-read-only-input"
                                InputProps={{
                                  readOnly: true,
                                }}
                            />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={2} >
                            <FormControl required sx={{ m: 1, width: '100%' }}>
                            <TextField
                            value={pack3d}
                                label={"MP A5"}
                                defaultValue=""
                                id="outlined-read-only-input"
                                InputProps={{
                                  readOnly: true,
                                }}
                            />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={2}>
                            <FormControl required sx={{ m: 1, width: '100%' }}>
                            <TextField
                            value={pack4d}
                                label={"MP B5"}
                                defaultValue=""
                                id="outlined-read-only-input"
                                InputProps={{
                                  readOnly: true,
                                }}
                            />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={2}>
                            <FormControl required sx={{ m: 1, width: '100%' }}>
                            <TextField
                            value={pack5d}
                                label={"MP A3"}
                                defaultValue=""
                                id="outlined-read-only-input"
                                InputProps={{
                                  readOnly: true,
                                }}
                            />
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} direction="row" >
                        <Grid item xs={12} sm={3} >
                            <FormControl required sx={{ m: 1, width: '100%' }}>
                            <TextField
                            value={bandedd}
                                label="Banded"
                                defaultValue=""
                                id="outlined-read-only-input"
                                InputProps={{
                                  readOnly: true,
                                }}
                            />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <FormControl required sx={{ m: 1, width: '100%' }}>
                            <TextField
                            value={sapuanpackd}
                                label="Sapuan Packing"
                                defaultValue=""
                                id="outlined-read-only-input"
                                InputProps={{
                                  readOnly: true,
                                }}
                            />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <FormControl required sx={{ m: 1, width: '100%' }}>
                            <TextField
                            value={bubled}
                                label="Buble"
                                defaultValue=""
                                id="outlined-read-only-input"
                                InputProps={{
                                  readOnly: true,
                                }}
                            />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <FormControl required sx={{ m: 1, width: '100%' }}>
                            <TextField
                            value={supcello}
                                label="Suplier Cello"
                                defaultValue=""
                                id="outlined-read-only-input"
                                InputProps={{
                                  readOnly: true,
                                }}
                            />
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Divider sx={{ mb : 2 ,  border: 1, borderColor: 'divider' }}/>
                    <Typography variant="h5">Speed Mesin Packing</Typography>
                    <Grid container spacing={2} direction="row" >
                        <Grid item xs={12} sm={2.4} >
                            <FormControl required sx={{ m: 1, width: '100%' }}>
                            <TextField
                            value={speed1}
                                label= {"MP A1"}
                                defaultValue=""
                                id="outlined-read-only-input"
                                InputProps={{
                                  readOnly: true,
                                }}
                            />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={2.4}>
                            <FormControl required sx={{ m: 1, width: '100%' }}>
                            <TextField
                            value={speed2}
                                label={"MP A2"}
                                defaultValue=""
                                id="outlined-read-only-input"
                                InputProps={{
                                  readOnly: true,
                                }}
                            />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={2.4}>
                            <FormControl required sx={{ m: 1, width: '100%' }}>
                            <TextField
                                value={speed3}
                                label={"MP A5"}
                                defaultValue=""
                                id="outlined-read-only-input"
                                InputProps={{
                                  readOnly: true,
                                }}
                            />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={2.4}>
                            <FormControl required sx={{ m: 1, width: '100%' }}>
                            <TextField
                                value={speed4}
                                label={"MP B5"}
                                defaultValue=""
                                id="outlined-read-only-input"
                                InputProps={{
                                  readOnly: true,
                                }}
                            />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={2.4}>
                            <FormControl required sx={{ m: 1, width: '100%' }}>
                            <TextField
                                value={speed5}
                                label={"MP A3"}
                                defaultValue=""
                                id="outlined-read-only-input"
                                InputProps={{
                                  readOnly: true,
                                }}
                            />
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Divider sx={{ mb : 2 ,  border: 1, borderColor: 'divider' }}/>
                    <Typography variant="h5">Tambahan</Typography>
                    <Grid container spacing={2} direction="row" >
                        <Grid item xs={12} sm={2.4} >
                            <FormControl required sx={{ m: 1, width: '100%' }}>
                            <TextField
                                value={samplectnqc}
                                label= "Sample Carton QC"
                                type="number"
                                defaultValue=""
                                id="outlined-read-only-input"
                                InputProps={{
                                  readOnly: true,
                                }}
                            />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={2.4}>
                            <FormControl required sx={{ m: 1, width: '100%' }}>
                            <TextField
                                value={forbanded}
                                label= "Pengulangan Banded (under)"
                                defaultValue=""
                                id="outlined-read-only-input"
                                InputProps={{
                                  readOnly: true,
                                }}
                            />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={2.4}>
                            <FormControl required sx={{ m: 1, width: '100%' }}>
                            <TextField
                                value={forbanded2}
                                label="Pengulangan Banded (over)"
                                defaultValue=""
                                id="outlined-read-only-input"
                                InputProps={{
                                  readOnly: true,
                                }}
                            />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={2.4}>
                            <FormControl required sx={{ m: 1, width: '100%' }}>
                            <TextField
                                value={cutoff}
                                label="Cut Off(jam)"
                                defaultValue=""
                                id="outlined-read-only-input"
                                InputProps={{
                                  readOnly: true,
                                }}
                            />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={2.4}>
                            <FormControl required sx={{ m: 1, width: '100%' }}>
                            <TextField
                                value={ctnluar}
                                label="Carton luar"
                                defaultValue=""
                                id="outlined-read-only-input"
                                InputProps={{
                                  readOnly: true,
                                }}
                            />
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Divider sx={{ mb : 2 ,  border: 1, borderColor: 'divider' }}/>
                    <Typography variant="h5">Kendala / Note</Typography>
                    <Grid container spacing={2} direction="row" >
                        <Grid item xs={12} sm={2.4} >
                            <FormControl required sx={{ m: 1, width: '100%' }}>
                            <TextField
                                value={kendala1}
                                id="outlined-multiline-static"
                                label="Kendala 1"
                                multiline
                                rows={4}
                                defaultValue=""
                                InputProps={{
                                  readOnly: true,
                                }}
                            />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={2.4}>
                            <FormControl required sx={{ m: 1, width: '100%' }}>
                            <TextField
                                value={kendala2}
                                id="outlined-multiline-static"
                                label="Kendala 2"
                                multiline
                                rows={4}
                                defaultValue=""
                                InputProps={{
                                  readOnly: true,
                                }}
                            />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={2.4}>
                            <FormControl required sx={{ m: 1, width: '100%' }}>
                            <TextField
                                value={kendala3}
                                id="outlined-multiline-static"
                                label="Kendala 3"
                                multiline
                                rows={4}
                                defaultValue=""
                                InputProps={{
                                  readOnly: true,
                                }}
                            />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={2.4}>
                            <FormControl required sx={{ m: 1, width: '100%' }}>
                            <TextField
                                value={kendala4}
                                id="outlined-multiline-static"
                                label="Kendala 4"
                                multiline
                                rows={4}
                                defaultValue=""
                                InputProps={{
                                  readOnly: true,
                                }}
                            />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={2.4}>
                            <FormControl required sx={{ m: 1, width: '100%' }}>
                            <TextField
                              value={kendala5}
                              id="outlined-multiline-static"
                              label="Kendala 5"
                              multiline
                              rows={4}
                              defaultValue=""
                              InputProps={{
                                readOnly: true,
                              }}
                            />
                            </FormControl>
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

export default TableLhpL1;