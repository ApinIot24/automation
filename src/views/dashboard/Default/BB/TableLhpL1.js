import * as React from 'react';
import { useEffect, useState } from 'react';
import { Alert, Box, Grid, Snackbar, Typography, FormControl, TextField, CardContent } from '@mui/material';
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
// import { BarChart } from '@mui/x-charts';
import Dialog from '@mui/material/Dialog';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import DialogContent from '@mui/material/DialogContent';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
// import ButtonExcel from 'ui-component/ButtonExcel';
// import CircularProgress from '@mui/material/CircularProgress';


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
  const [data, setData] = useState([]);
  const [pack1, setPack1] = useState([0]);
  const [pack2, setPack2] = useState([0]);
  const [pack3, setPack3] = useState([0]);
  const [pack4, setPack4] = useState([0]);
  const [pack5, setPack5] = useState([0]);
  const [sumpack, setSumPack] = useState([0]);
  const [plan, setPlan] = useState([0]);
  const [real, setReal] = useState([0]);
  const [ach, setAch] = useState([0]);
  const [ach1, setAch1] = useState([0]);
  const [ach2, setAch2] = useState([0]);
  const [sheet, setSheet] = useState([0]);
  const [book, setBook] = useState([0]);
  const [banded, setBanded] = useState([0]);
  const [sapuanpack, setSapuanPack] = useState([0]);
  const [buble, setBuble] = useState([0]);
  //Modal
  const [inidate, setInidate] = useState('')
  const [shift, setShift] = useState('');
  const [pland, setPland] = useState('');
  const [reald, setReald] = useState('');
  const [achd, setAchd] = useState('');
  const [sku, setSKU] = useState('');
  const [cello, setCello] = useState('');
  const [cello1, setCello1] = useState('');
  const [cello2, setCello2] = useState('');
  const [cello3, setCello3] = useState('');
  const [cello4, setCello4] = useState('');
  const [cello5, setCello5] = useState('');
  const [sumpackd, setSumPackd] = useState('');
  const [pack1d, setPack1d] = useState('');
  const [pack2d, setPack2d] = useState('');
  const [pack3d, setPack3d] = useState('');
  const [pack4d, setPack4d] = useState('');
  const [pack5d, setPack5d] = useState('');
  const [speed1, setSpeed1] = useState('');
  const [speed2, setSpeed2] = useState('');
  const [speed3, setSpeed3] = useState('');
  const [speed4, setSpeed4] = useState('');
  const [speed5, setSpeed5] = useState('');
  const [adonan, setAdonan] = useState('');
  const [avgbook, setAVGBook] = useState('');
  const [avgsheet, setAVGSheet] = useState('');
  const [creamccb, setCreamCCB] = useState('');
  const [sheetd, setSheetd] = useState('');
  const [bookd, setBookd] = useState('');
  const [cutkasar, setCutkasar] = useState('');
  const [bubukcut, setBubukCut] = useState('');
  const [sapuancut, setSapuanCut] = useState('');
  const [qccello, setQCCello] = useState('');
  const [qcpacking, setQCPacking] = useState('');
  const [cellocpp, setCelloCPP] = useState('');
  const [ctnsup, setCtnSup] = useState('');
  const [ctnproud, setCtnProud] = useState('');
  const [cello_used, setCelloUsed] = useState('');
  const [bandedd, setBandedd] = useState('');
  const [sapuanpackd, setSapuanPackd] = useState('');
  const [bubled, setBubled] = useState('');
  const [supcello, setSupCello] = useState('');
  const [samplectnqc, setSampleCtnQc] = useState('');
  const [forbanded, setForBanded] = useState('');
  const [forbanded2, setForBanded2] = useState('');
  const [cutoff, setCutOff] = useState('');
  const [ctnluar, setCtnLuar] = useState('');
  const [kendala1, setKendala1] = useState('');
  const [kendala2, setKendala2] = useState('');
  const [kendala3, setKendala3] = useState('');
  const [kendala4, setKendala4] = useState('');
  const [kendala5, setKendala5] = useState('');
  const [field] = useState([
    { field: 'id', headerName: 'ID', width: 50 },
    { field: 'shift', headerName: 'Time', width: 100 },
    { field: 'sku', headerName: 'Sku', width: 200 },
    { field: 'plan', headerName: 'Plan', width: 75 },
    { field: 'real', headerName: 'Real', width: 75 },
    { field: 'ach', headerName: 'Achievement', width: 100 },
    {
      field: 'cello1', headerName: 'Cello', width: 100,
      valueGetter: (value, row) => {
        return `${row.cello.cello || ''}`;
      }
    },
    {
      field: 'cello.cello1', headerName: 'Cello1', width: 100,
      valueGetter: (value, row) => {
        return `${row.cello.cello1 || ''}`;
      }
    },
    {
      field: 'cello.cello2', headerName: 'Cello2', width: 100,
      valueGetter: (value, row) => {
        return `${row.cello.cello2 || ''}`;
      }
    },
    {
      field: 'cello.cello3', headerName: 'Cello3', width: 100,
      valueGetter: (value, row) => {
        return `${row.cello.cello3 || ''}`;
      }
    },
    {
      field: 'cello.cello4', headerName: 'Cello4', width: 100,
      valueGetter: (value, row) => {
        return `${row.cello.cello4 || ''}`;
      }
    },
    {
      field: 'cello.cello5', headerName: 'Cello5', width: 100,
      valueGetter: (value, row) => {
        return `${row.cello.cello5 || ''}`;
      }
    },
    { field: 'cellocpp', headerName: 'Cello CPP', width: 100 },
    {
      field: 'ctnsup', headerName: 'CTN SUP', width: 100,
      valueGetter: (value, row) => {
        return `${row.ctn_type.ctnsup || ''}`;
      }
    },
    {
      field: 'ctnproud', headerName: 'CTN PROUD', width: 100,
      valueGetter: (value, row) => {
        return `${row.ctn_type.ctnproud || ''}`;
      }
    },
    { field: 'cello_used', headerName: 'Cello USED', width: 100 },
    { field: 'adonan_used', headerName: 'Adonan Used', width: 100 },
    { field: 'ccbcream_used', headerName: 'CCB Cream', width: 100 },
    { field: 'avgsheet', headerName: 'AVG Sheet', width: 100 },
    { field: 'avgbook', headerName: 'AVG BOOK', width: 100 },
    { field: 'sheet', headerName: 'Sheet', width: 100 },
    { field: 'book', headerName: 'Book', width: 100 },
    { field: 'cutkasar', headerName: 'Cut Kasar', width: 100 },
    { field: 'bubukcutting', headerName: 'Bubuk Cutting', width: 100 },
    { field: 'sapuancut', headerName: 'Sapuan Cut', width: 100 },
    { field: 'qcpacking', headerName: 'Qc Packing', width: 100 },
    { field: 'qccello', headerName: 'Qc Cello', width: 100 },
    { field: 'sample_ctn_qc', headerName: 'Sample Ctn Qc', width: 100 }, {
      field: 'pack1', headerName: 'pack1', width: 100,
      valueGetter: (value, row) => {
        return `${row.packing_reject.pack1 || ''}`;
      }
    },
    {
      field: 'pack2', headerName: 'pack2', width: 100,
      valueGetter: (value, row) => {
        return `${row.packing_reject.pack2 || ''}`;
      }
    },
    {
      field: 'pack3', headerName: 'pack3', width: 100,
      valueGetter: (value, row) => {
        return `${row.packing_reject.pack3 || ''}`;
      }
    },
    {
      field: 'pack4', headerName: 'pack4', width: 100,
      valueGetter: (value, row) => {
        return `${row.packing_reject.pack4 || ''}`;
      }
    },
    {
      field: 'pack5', headerName: 'pack5', width: 100,
      valueGetter: (value, row) => {
        return `${row.packing_reject.pack5 || ''}`;
      }
    },
    {
      field: 'sumpack', headerName: 'Reject Pack', width: 100,
      valueGetter: (value, row) => {
        return `${row.packing_reject.sumpack || ''}`;
      }
    },
    {
      field: 'banded_asli', headerName: 'Banded', width: 100, valueGetter: (value, row) => {
        return `${row.banded || ''}`;
      }
    },
    { field: 'banded_under', headerName: 'Banded Under', width: 100 },
    { field: 'banded_over', headerName: 'Banded Over', width: 100 },
    { field: 'sapuanpack', headerName: 'Sapuan Pack', width: 100 },
    { field: 'buble', headerName: 'Buble', width: 100 },
    { field: 'suppliercello', headerName: 'Suppliercello', width: 100 },
    { field: 'cutoff', headerName: 'Cut OFF', width: 100 },
    { field: 'ctn_luar', headerName: 'CTN Luar', width: 100 }, {
      field: 'speed1', headerName: 'speed1', width: 100,
      valueGetter: (value, row) => {
        return `${row.speed_mesin.speed1 || ''}`;
      }
    },
    {
      field: 'speed2', headerName: 'speed2', width: 100,
      valueGetter: (value, row) => {
        return `${row.speed_mesin.speed2 || ''}`;
      }
    },
    {
      field: 'speed3', headerName: 'speed3', width: 100,
      valueGetter: (value, row) => {
        return `${row.speed_mesin.speed3 || ''}`;
      }
    },
    {
      field: 'speed4', headerName: 'speed4', width: 100,
      valueGetter: (value, row) => {
        return `${row.speed_mesin.speed4 || ''}`;
      }
    },
    {
      field: 'speed5', headerName: 'speed5', width: 100,
      valueGetter: (value, row) => {
        return `${row.speed_mesin.speed5 || ''}`;
      }
    },
    {
      field: 'kendala1', headerName: 'kendala1', width: 100,
      valueGetter: (value, row) => {
        return `${row.kendala.kendala1 || ''}`;
      }
    }, {
      field: 'kendala2', headerName: 'kendala2', width: 100,
      valueGetter: (value, row) => {
        return `${row.kendala.kendala2 || ''}`;
      }
    }, {
      field: 'kendala3', headerName: 'kendala3', width: 100,
      valueGetter: (value, row) => {
        return `${row.kendala.kendala3 || ''}`;
      }
    }, {
      field: 'kendala4', headerName: 'kendala4', width: 100,
      valueGetter: (value, row) => {
        return `${row.kendala.kendala4 || ''}`;
      }
    }, {
      field: 'kendala5', headerName: 'kendala5', width: 100,
      valueGetter: (value, row) => {
        return `${row.kendala.kendala5 || ''}`;
      }
    },
    { field: 'realdatetime', headerName: 'Date', width: 100 }
    // { field: 'sheet', headerName: 'Reject Sheet', width: 100 },
    // { field: 'book', headerName: 'Reject Book', width: 100 },
    // { field: 'banded', headerName: 'Reject Banded', width: 100 },
    // { field: 'sapuanpack', headerName: 'Reject Sapuan Packing', width: 135 },
    // { field: 'buble', headerName: 'Reject Buble', width: 125 },
  ]);
  // console.log(field);
  console.log(data);
  const [urlapi] = useState({
    lhp: 'http://10.37.12.17:3000/packing_a1',
    lhpdaily: 'http://10.37.12.17:3000/lhp_daily/l1',
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
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
    axios.get(urlapi.lhpdaily)
      .then(response => {
        var dataolah = response.data;

        const d = new Date();
        let hour = d.getHours();
        if (hour >= 15) {
          setData(dataolah)
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
          {/* <ButtonExcel lhp={data} /> */}
        </Grid>
        <Grid item mb={5} mt={-10} xs={12} sm={3}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Search Date"
              value={valuedate}
              onChange={(newValue) => {
                setValueDate(newValue);
                // Buat objek Date dari newValue (tanggal asli)
                let originalDate = new Date(newValue);
                // Format tanggal asli menjadi string 'YYYY-MM-DD'
                let datestring = originalDate.getFullYear() + "-" +
                  String(originalDate.getMonth() + 1).padStart(2, '0') + "-" +
                  String(originalDate.getDate()).padStart(2, '0');
                // Tambahkan satu hari ke originalDate
                originalDate.setDate(originalDate.getDate() + 1);
                // Format tanggal baru (setelah ditambah 1 hari) menjadi string 'YYYY-MM-DD'
                let datestringnow = originalDate.getFullYear() + "-" +
                  String(originalDate.getMonth() + 1).padStart(2, '0') + "-" +
                  String(originalDate.getDate()).padStart(2, '0');
                console.log("Tanggal", datestring)
                if (datestringnow === datestring) {
                  axios.get(urlapi.lhpdaily)
                    .then(response => {
                      var dataolah = response.data;
                      const d = new Date();
                      let hour = d.getHours();
                      if (hour >= 15) {
                        setData(dataolah)
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
                    console.log("Tanggal", dataolah)
                    setData(dataolah)
                    setPack1([dataolah[0]?.packing_reject?.pack1 || 0, dataolah[1]?.packing_reject?.pack1 || 0, dataolah[2]?.packing_reject?.pack1 || 0])
                    setPack2([dataolah[0]?.packing_reject?.pack2 || 0, dataolah[1]?.packing_reject?.pack2 || 0, dataolah[2]?.packing_reject?.pack2 || 0])
                    setPack3([dataolah[0]?.packing_reject?.pack3 || 0, dataolah[1]?.packing_reject?.pack3 || 0, dataolah[2]?.packing_reject?.pack3 || 0])
                    setPack4([dataolah[0]?.packing_reject?.pack4 || 0, dataolah[1]?.packing_reject?.pack4 || 0, dataolah[2]?.packing_reject?.pack4 || 0])
                    setPack5([dataolah[0]?.packing_reject?.pack5 || 0, dataolah[1]?.packing_reject?.pack5 || 0, dataolah[2]?.packing_reject?.pack5 || 0])
                    setSumPack([dataolah[0]?.packing_reject?.sumpack || 0, dataolah[1]?.packing_reject?.sumpack || 0, dataolah[2]?.packing_reject?.sumpack || 0])
                    setPlan([dataolah[0]?.plan || 0, dataolah[1]?.plan || 0, dataolah[2]?.plan || 0])
                    setReal([dataolah[0]?.real || 0, dataolah[1]?.real || 0, dataolah[2]?.real || 0])
                    setAch([dataolah[0]?.ach || 0])
                    setAch1([dataolah[1]?.ach || 0])
                    setAch2([dataolah[2]?.ach || 0])
                    setSheet([dataolah[0]?.sheet || 0, dataolah[1]?.sheet || 0, dataolah[2]?.sheet || 0])
                    setBook([dataolah[0]?.book || 0, dataolah[1]?.book || 0, dataolah[2]?.book || 0])
                    setBanded([dataolah[0]?.banded || 0, dataolah[1]?.banded || 0, dataolah[2]?.banded || 0])
                    setSapuanPack([dataolah[0]?.sapuanpack || 0, dataolah[1]?.sapuanpack || 0, dataolah[2]?.sapuanpack || 0])
                    setBuble([dataolah[0]?.buble || 0, dataolah[1]?.buble || 0, dataolah[2]?.buble || 0])
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
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={2} sm={4} md={4}>
          <CardWrapper border={false} content={false}>
            <Grid container direction="column">
              <Grid item sx={{ mb: 0.75, mt: 2 }}>
                <Grid container justifyContent="Center">
                  <Grid item>
                    <Typography variant="h3">Grafik Reject Cello</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item sx={{ mb: 0.75 }}>
                <Box sx={{ width: '100%' }}>
                  <LineChart
                    xAxis={[{
                      scaleType: 'band',
                      data: ['Shift 1', 'Shift 2', 'Shift 3']
                    }]}
                    series={[
                      {
                        id: '1',
                        label: 'A1',
                        curve: "linear",
                        data: pack1,
                        color: '#FF5722',
                      },
                      {
                        id: '2',
                        label: 'A2',
                        curve: "linear",
                        data: pack2,
                        color: '#1017e3',
                      },
                      {
                        id: '3',
                        label: 'A5',
                        curve: "linear",
                        data: pack3,
                        color: '#03ffbc',
                      },
                      {
                        id: '4',
                        label: 'B5',
                        curve: "linear",
                        data: pack4,
                        color: '#ff0389',
                      },
                      {
                        id: '5',
                        label: 'A3',
                        curve: "linear",
                        data: pack5,
                        color: '#9603ff',
                      },
                      {
                        id: '6',
                        label: 'Total',
                        curve: "linear",
                        data: sumpack,
                        color: '#ffb303',
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
              <Grid item sx={{ mb: 0.75, mt: 2 }}>
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
                  <LineChart
                    xAxis={[{
                      scaleType: 'band',
                      data: ['Shift 1', 'Shift 2', 'Shift 3']
                    }]}
                    series={[
                      {
                        id: '1',
                        stack: 'A',
                        label: 'Real',
                        data: real,
                        color: '#03ffbc',
                      },
                      {
                        id: '2',
                        stack: 'B',
                        label: 'Plan',
                        data: plan,
                        color: '#d4131d',
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
              <Grid item sx={{ mb: 0.75, mt: 2 }}>
                <Grid container justifyContent="Center">
                  <Grid item>
                    <Typography variant="h3">Grafik Reject</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item sx={{ mb: 0.75 }}>
                <Box sx={{ width: '100%' }}>
                  <LineChart
                    xAxis={[{
                      scaleType: 'band',
                      data: ['Shift 1', 'Shift 2', 'Shift 3']
                    }]}
                    series={[
                      {
                        id: '1',
                        label: 'Sheet',
                        curve: "linear",
                        data: sheet,
                        color: '#1017e3',
                      },
                      {
                        id: '2',
                        label: 'Book',
                        curve: "linear",
                        data: book,
                        color: '#03ffbc',
                      },
                      {
                        id: '3',
                        label: 'Bended',
                        curve: "linear",
                        data: banded,
                        color: '#ff0389',
                      },
                      {
                        id: '4',
                        label: 'Sapuan Pack',
                        curve: "linear",
                        data: sapuanpack,
                        color: '#9603ff',
                      },
                      {
                        id: '5',
                        label: 'Buble',
                        curve: "linear",
                        data: buble,
                        color: '#ffb303'
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
      <Grid item sx={{ mb: 5 }} xs={12} >
        <DataGrid rows={data} columns={field} loading={isLoading} slots={{ toolbar: GridToolbar }} onRowClick={handleRowClick} />
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
              <Divider sx={{ mb: 2, border: 1, borderColor: 'divider' }} />
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
              <Divider sx={{ mb: 2, border: 1, borderColor: 'divider' }} />
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
              <Divider sx={{ mb: 2, border: 1, borderColor: 'divider' }} />
              <Typography variant="h5">Speed Mesin Packing</Typography>
              <Grid container spacing={2} direction="row" >
                <Grid item xs={12} sm={2.4} >
                  <FormControl required sx={{ m: 1, width: '100%' }}>
                    <TextField
                      value={speed1}
                      label={"MP A1"}
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
              <Divider sx={{ mb: 2, border: 1, borderColor: 'divider' }} />
              <Typography variant="h5">Tambahan</Typography>
              <Grid container spacing={2} direction="row" >
                <Grid item xs={12} sm={2.4} >
                  <FormControl required sx={{ m: 1, width: '100%' }}>
                    <TextField
                      value={samplectnqc}
                      label="Sample Carton QC"
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
                      label="Pengulangan Banded (under)"
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
              <Divider sx={{ mb: 2, border: 1, borderColor: 'divider' }} />
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