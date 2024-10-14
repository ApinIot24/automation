import * as React from 'react';
import { useEffect, useState } from 'react';
import { Alert, Box, Grid, Snackbar, Typography, FormControl, TextField, CardContent, Select, InputLabel } from '@mui/material';
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

const TableLhpL5 = () => {
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
  const [rmE1c, setRmE1c] = useState([0]);
  const [rmE2c, setRmE2c] = useState([0]);
  const [rmE3c, setRmE3c] = useState([0]);
  const [rmE4c, setRmE4c] = useState([0]);
  const [rmE5c, setRmE5c] = useState([0]);
  const [rmE6c, setRmE6c] = useState([0]);
  const [rmE7c, setRmE7c] = useState([0]);
  const [rmE8c, setRmE8c] = useState([0]);
  const [rmE9c, setRmE9c] = useState([0]);
  const [rmE10c, setRmE10c] = useState([0]);
  const [rmE11c, setRmE11c] = useState([0]);
  const [rmE12c, setRmE12c] = useState([0]);
  const [regulerc, setRegulerc] = useState([0]);
  const [planningc, setPlanningc] = useState([0]);
  // const [holdc, setHoldc] = useState([0]);
  // const [outputc, setOutputc] = useState([0]);
  const [rmdc, setRMDc] = useState([0]);
  const [rfeedingc, setRfeedingc] = useState([0]);
  const [rpackTablec, setRPackTablec] = useState([0]);
  const [rovenc, setRovenc] = useState([0]);
  //Modal
  const [inidate, setInidate] = useState('')
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
  const [kendala, setKendala] = useState({});
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
      { field: 'rmd', headerName: 'Rmd', width: 50 },
      { field: 'rfeeding', headerName: 'Rfeeding', width: 50 },
      { field: 'roll', headerName: 'Roll', width: 50 },
      { field: 'rsampleqc', headerName: 'R Sample Qc', width: 50 },
      {
        field: 'rmE1', headerName: 'RM E1', width: 50,
        valueGetter: (value, row) => {
          return `${row.rmall.rmE1 || ''}`;
        }
      },
      {
        field: 'rmE2', headerName: 'RM E2', width: 50,
        valueGetter: (value, row) => {
          return `${row.rmall.rmE2 || ''}`;
        }
      },
      {
        field: 'rmE3', headerName: 'RM E3', width: 50,
        valueGetter: (value, row) => {
          return `${row.rmall.rmE3 || ''}`;
        }
      },
      {
        field: 'rmE4', headerName: 'RM E4', width: 50,
        valueGetter: (value, row) => {
          return `${row.rmall.rmE4 || ''}`;
        }
      },
      {
        field: 'rmE5', headerName: 'RM E5', width: 50,
        valueGetter: (value, row) => {
          return `${row.rmall.rmE5 || ''}`;
        }
      },
      {
        field: 'rmE6', headerName: 'RM E6', width: 50,
        valueGetter: (value, row) => {
          return `${row.rmall.rmE6 || ''}`;
        }
      },
      {
        field: 'rmE7', headerName: 'RM E7', width: 50,
        valueGetter: (value, row) => {
          return `${row.rmall.rmE7 || ''}`;
        }
      },
      {
        field: 'rmE8', headerName: 'RM E8', width: 50,
        valueGetter: (value, row) => {
          return `${row.rmall.rmE8 || ''}`;
        }
      },
      {
        field: 'rmE9', headerName: 'RM E9', width: 50,
        valueGetter: (value, row) => {
          return `${row.rmall.rmE9 || ''}`;
        }
      },
      {
        field: 'rmE10', headerName: 'RM E10', width: 50,
        valueGetter: (value, row) => {
          return `${row.rmall.rmE10 || ''}`;
        }
      },
      {
        field: 'rmE11', headerName: 'RM E11', width: 50,
        valueGetter: (value, row) => {
          return `${row.rmall.rmE11 || ''}`;
        }
      },
      {
        field: 'rmE12', headerName: 'RM E12', width: 50,
        valueGetter: (value, row) => {
          return `${row.rmall.rmE12 || ''}`;
        }
      },
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
      {
        field: 'viE1', headerName: 'Vi E1', width: 50,
        valueGetter: (value, row) => {
          return `${row.viall.viE1 || ''}`;
        }
      },
      {
        field: 'viE2', headerName: 'Vi E2', width: 50,
        valueGetter: (value, row) => {
          return `${row.viall.viE2 || ''}`;
        }
      },
      {
        field: 'viE3', headerName: 'Vi E3', width: 50,
        valueGetter: (value, row) => {
          return `${row.viall.viE3 || ''}`;
        }
      },
      {
        field: 'viE4', headerName: 'Vi E4', width: 50,
        valueGetter: (value, row) => {
          return `${row.viall.viE4 || ''}`;
        }
      },
      {
        field: 'viE5', headerName: 'Vi E5', width: 50,
        valueGetter: (value, row) => {
          return `${row.viall.viE5 || ''}`;
        }
      },
      {
        field: 'viE6', headerName: 'Vi E6', width: 50,
        valueGetter: (value, row) => {
          return `${row.viall.viE6 || ''}`;
        }
      },
      {
        field: 'viE7', headerName: 'Vi E7', width: 50,
        valueGetter: (value, row) => {
          return `${row.viall.viE7 || ''}`;
        }
      },
      {
        field: 'viE8', headerName: 'Vi E8', width: 50,
        valueGetter: (value, row) => {
          return `${row.viall.viE8 || ''}`;
        }
      },
      {
        field: 'viE9', headerName: 'Vi E9', width: 50,
        valueGetter: (value, row) => {
          return `${row.viall.viE9 || ''}`;
        }
      },
      {
        field: 'viE10', headerName: 'Vi E10', width: 50,
        valueGetter: (value, row) => {
          return `${row.viall.viE10 || ''}`;
        }
      },
      {
        field: 'viE11', headerName: 'Vi E11', width: 50,
        valueGetter: (value, row) => {
          return `${row.viall.viE11 || ''}`;
        }
      },
      {
        field: 'viE12', headerName: 'Vi E12', width: 50,
        valueGetter: (value, row) => {
          return `${row.viall.viE12 || ''}`;
        }
      },
      { field: 'variance', headerName: 'Variance', width: 50 },
      { field: 'krkawal', headerName: 'Kr Awal', width: 50 },
      { field: 'krawal', headerName: 'Kr Awak', width: 50 },
      { field: 'krakhir', headerName: 'Kr Akhir', width: 50 },
      { field: 'krpakai', headerName: 'Kr Pakai', width: 50 },
      { field: 'kreturn', headerName: 'Kr Return', width: 50 },
      { field: 'kreject', headerName: 'Kr Reject', width: 50 },
      { field: 'rpackinner', headerName: 'R pack Inner', width: 50 },
    ];
    for (let i = 1; i <= maxKendalaCount; i++) {
      columns.push({
        field: `kendala${i}`,
        headerName: `Kendala ${i}`,
        width: 200,
        valueGetter: (value, row) => {
          return `${row.kendalaall?.[`kendala${i}`] || ''}`; // Akses menggunakan bracket notation
        }
      });
    }
    return columns;
  };
  // console.log("data pilih ini" , data)
  // console.log("setrme1c pilih ini" , rmE1c, rmE2c)

  const [urlapi] = useState({
    lhp: 'http://10.37.12.17:3000/packing_a1',
    lhpdaily: 'http://10.37.12.17:3000/lhpl5_daily/l5',
    urlp2: 'table',
  })

  const maxKendalaCount = Math.max(...data.map(row => Object.keys(row.kendalaall).length));
  const columns = generateKendalaColumns(maxKendalaCount); // Menghasilkan kolom



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
        setInidate(new Date(dataolah.realdatetime).toLocaleDateString())
        setShift(dataolah.shift)
        setSKU(dataolah.sku)
        setReguler(dataolah.reguler)
        setHold(dataolah.hold);
        setOutput(dataolah.output);
        setRMD(dataolah.rmd);
        setRfeeding(dataolah.rfeeding);
        setRsampleqc(dataolah.rsampleqc);
        setRpackinner(dataolah.rpackinner);
        setRmE1(dataolah.rmall.rmE1);
        setRmE2(dataolah.rmE2);
        setRmE3(dataolah.rmE3);
        setRmE4(dataolah.rmE4);
        setRmE5(dataolah.rmE5);
        setRmE6(dataolah.rmE6);
        setRmE7(dataolah.rmE7);
        setRmE8(dataolah.rmE8);
        setRmE9(dataolah.rmE9);
        setRmE10(dataolah.rmE10);
        setRmE11(dataolah.rmE11);
        setRmE12(dataolah.rmE12);
        setRejectinnermesinroll(dataolah.roll);
        setRPackTable(dataolah.rpackTable);
        setRmtotal(dataolah.rmtotal);
        setRoven(dataolah.roven);
        setSoven(dataolah.soven);
        setMcbks(dataolah.mcbks);
        setPtable(dataolah.ptable);
        setSerbuk(dataolah.serbuk);
        setTampungan(dataolah.tampungan);
        setTotal(dataolah.total);
        setBrtpack(dataolah.brtpack);
        setBatch(dataolah.batch);
        setWipackinner(dataolah.wipackinner);
        setWikulit(dataolah.wikulit);
        setWitotal(dataolah.witotal);
        setViawal(dataolah.viawal);
        setViambil(dataolah.viambil);
        setViakhir(dataolah.viakhir);
        setVireturn(dataolah.vireturn);
        setViinner(dataolah.viinner);
        setViRainner(dataolah.viRainner);
        setViE1(dataolah.viE1);
        setViE2(dataolah.viE2);
        setViE3(dataolah.viE3);
        setViE4(dataolah.viE4);
        setViE5(dataolah.viE5);
        setViE6(dataolah.viE6);
        setViE7(dataolah.viE7);
        setViE8(dataolah.viE8);
        setViE9(dataolah.viE9);
        setViE10(dataolah.viE10);
        setViE11(dataolah.viE11);
        setViE12(dataolah.viE12);
        setVariance(dataolah.variance);
        setKrkawal(dataolah.krkawal);
        setKrAwal(dataolah.krAwal);
        setKrakhir(dataolah.krakhir);
        setKrpakai(dataolah.krpakai);
        setKreturn(dataolah.kreturn);
        setKreject(dataolah.kreject);
        setKendala(dataolah.kendalaall)
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
        console.log(dataolah);
        const d = new Date();
        let hour = d.getHours();
        if (hour >= 15) {
          setData(dataolah)
          setRmE1c([dataolah[0].rmall.rmE1 || 0]);
          setRmE2c([dataolah[0].rmall.rmE2 || 0]);
          setRmE3c([dataolah[0].rmall.rmE3 || 0]);
          setRmE4c([dataolah[0].rmall.rmE4 || 0]);
          setRmE5c([dataolah[0].rmall.rmE5 || 0]);
          setRmE6c([dataolah[0].rmall.rmE6 || 0]);
          setRmE7c([dataolah[0].rmall.rmE7 || 0]);
          setRmE8c([dataolah[0].rmall.rmE8 || 0]);
          setRmE9c([dataolah[0].rmall.rmE9 || 0]);
          setRmE10c([dataolah[0].rmall.rmE10 || 0]);
          setRmE11c([dataolah[0].rmall.rmE11 || 0]);
          setRmE12c([dataolah[0].rmall.rmE12 || 0]);
          setRegulerc([dataolah[0].reguler || 0]);
          setPlanningc([dataolah[0].planning || 0]);
          setRPackTablec([dataolah[0].rpackTable || 0]);
          setRovenc([dataolah[0].roven || 0]);
          setRMDc([dataolah[0].rmd || 0]);
          setRfeedingc([dataolah[0].rfeeding || 0]);
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
                if (datestringnow === datestring) {
                  axios.get(urlapi.lhpdaily)
                    .then(response => {
                      var dataolah = response.data;
                      const d = new Date();
                      let hour = d.getHours();
                      if (hour >= 15) {
                        setData(dataolah)
                        setRmE1c([dataolah[0].rmall.rmE1])
                        setRmE2c([dataolah[0].rmall.rmE2])
                        setRmE3c([dataolah[0].rmall.rmE3])
                        setRmE4c([dataolah[0].rmall.rmE4])
                        setRmE5c([dataolah[0].rmall.rmE5])
                        setRmE6c([dataolah[0].rmall.rmE6])
                        setRmE7c([dataolah[0].rmall.rmE7])
                        setRmE8c([dataolah[0].rmall.rmE8])
                        setRmE9c([dataolah[0].rmall.rmE9])
                        setRmE10c([dataolah[0].rmall.rmE10])
                        setRmE11c([dataolah[0].rmall.rmE11])
                        setRmE12c([dataolah[0].rmall.rmE12])
                        setRegulerc([dataolah[0].reguler])
                        setPlanningc([dataolah[0].planning])
                        setRPackTablec([dataolah[0].rpackTable])
                        setRovenc([dataolah[0].roven])
                        setRMDc([dataolah[0].rmd])
                        setRfeedingc([dataolah[0].rfeeding])
                      }
                    })
                    .catch(error => {
                      console.log(error);
                    });
                } else {
                  axios.get(`http://10.37.12.17:3000/lhpl5_daily/date/${datestring}/l5`)
                    .then(response => {
                      var dataolah = response.data;
                      setData(dataolah)
                      setRmE1c([dataolah[0]?.rmall?.rmE1 || 0, dataolah[1]?.rmall?.rmE1 || 0, dataolah[2]?.rmall?.rmE1 || 0])
                      setRmE2c([dataolah[0]?.rmall?.rmE2 || 0, dataolah[1]?.rmall?.rmE2 || 0, dataolah[2]?.rmall?.rmE2 || 0])
                      setRmE3c([dataolah[0]?.rmall?.rmE3 || 0, dataolah[1]?.rmall?.rmE3 || 0, dataolah[2]?.rmall?.rmE3 || 0])
                      setRmE4c([dataolah[0]?.rmall?.rmE4 || 0, dataolah[1]?.rmall?.rmE4 || 0, dataolah[2]?.rmall?.rmE4 || 0])
                      setRmE5c([dataolah[0]?.rmall?.rmE5 || 0, dataolah[1]?.rmall?.rmE5 || 0, dataolah[2]?.rmall?.rmE5 || 0])
                      setRmE6c([dataolah[0]?.rmall?.rmE6 || 0, dataolah[1]?.rmall?.rmE6 || 0, dataolah[2]?.rmall?.rmE6 || 0])
                      setRmE7c([dataolah[0]?.rmall?.rmE7 || 0, dataolah[1]?.rmall?.rmE7 || 0, dataolah[2]?.rmall?.rmE7 || 0])
                      setRmE8c([dataolah[0]?.rmall?.rmE8 || 0, dataolah[1]?.rmall?.rmE8 || 0, dataolah[2]?.rmall?.rmE8 || 0])
                      setRmE9c([dataolah[0]?.rmall?.rmE9 || 0, dataolah[1]?.rmall?.rmE9 || 0, dataolah[2]?.rmall?.rmE9 || 0])
                      setRmE10c([dataolah[0]?.rmall?.rmE10 || 0, dataolah[1]?.rmall?.rmE10 || 0, dataolah[2]?.rmall?.rmE10 || 0])
                      setRmE11c([dataolah[0]?.rmall?.rmE11 || 0, dataolah[1]?.rmall?.rmE11 || 0, dataolah[2]?.rmall?.rmE11 || 0])
                      setRmE12c([dataolah[0]?.rmall?.rmE12 || 0, dataolah[1]?.rmall?.rmE12 || 0, dataolah[2]?.rmall?.rmE12 || 0])
                      setRegulerc([dataolah[0]?.reguler || 0, dataolah[1]?.reguler || 0, dataolah[2]?.reguler || 0])
                      setPlanningc([dataolah[0]?.planning || 0, dataolah[1]?.planning || 0, dataolah[2]?.planning || 0])
                      setRPackTablec([dataolah[0]?.rpackTable || 0, dataolah[1]?.rpackTable || 0, dataolah[2]?.rpackTable || 0])
                      setRovenc([dataolah[0]?.roven || 0, dataolah[1]?.roven || 0, dataolah[2]?.roven || 0])
                      setRMDc([dataolah[0]?.rmd || 0, dataolah[1]?.rmd || 0, dataolah[2]?.rmd || 0])
                      setRfeedingc([dataolah[0]?.rfeeding || 0, dataolah[1]?.rfeeding || 0, dataolah[2]?.rfeeding || 0])
                    })
                    .catch(error => {
                      setOpen(true)
                      setData([])
                      setRmE1c([0])
                      setRmE2c([0])
                      setRmE3c([0])
                      setRmE4c([0])
                      setRmE5c([0])
                      setRmE6c([0])
                      setRmE7c([0])
                      setRmE8c([0])
                      setRmE9c([0])
                      setRmE10c([0])
                      setRmE11c([0])
                      setRmE12c([0])
                      setRegulerc([0])
                      setPlanningc([0])
                      setRovenc([0])
                      setRMDc([0])
                      setRfeedingc([0])
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
                        label: 'E1',
                        curve: "linear",
                        data: rmE1c,
                        color: '#1017e3',
                      },
                      {
                        id: '2',
                        label: 'E2',
                        curve: "linear",
                        data: rmE2c,
                        color: '#ed0744',
                      },
                      {
                        id: '3',
                        label: 'E3',
                        curve: "linear",
                        data: rmE3c,
                        color: '#03ffdd',
                      },
                      {
                        id: '4',
                        label: 'E4',
                        curve: "linear",
                        data: rmE4c,
                        color: '#850776',
                      },
                      {
                        id: '5',
                        label: 'E5',
                        curve: "linear",
                        data: rmE5c,
                        color: '#ed0744',
                      },
                      {
                        id: '6',
                        label: 'E6',
                        curve: "linear",
                        data: rmE6c,
                        color: '#5707ed',
                      },
                      {
                        id: '7',
                        label: 'E7',
                        curve: "linear",
                        data: rmE7c,
                        color: '#07edd6'
                      },
                      {
                        id: '8',
                        label: 'E8',
                        curve: "linear",
                        data: rmE8c,
                        color: '#07b7ed',
                      },
                      {
                        id: '9',
                        label: 'E9',
                        curve: "linear",
                        data: rmE9c,
                        color: '#5407ed',
                      },
                      {
                        id: '10',
                        label: 'E10',
                        curve: "linear",
                        data: rmE10c,
                        color: '#bf07ed',
                      },
                      {
                        id: '11',
                        label: 'E11',
                        curve: "linear",
                        data: rmE11c,
                        color: '#bf07ed',
                      },
                      {
                        id: '12',
                        label: 'E12',
                        curve: "linear",
                        data: rmE12c,
                        color: '#ed0776',
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
              <Grid item sx={{ mb: 0.75, mt: 2 }}>
                <Grid container justifyContent="Center">
                  <Grid item>
                    <Typography variant="h3">Grafik Achievement</Typography>
                  </Grid>
                </Grid>
                <Grid container justifyContent="Center">
                  <Grid item>
                    <Typography variant="h4">
                      (release = {Math.round(regulerc[0] || 0)}, release Shift 2 = {Math.round(regulerc[1] || 0)}, release Shift 3 = {Math.round(regulerc[2] || 0)})
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item sx={{ mb: 0.75 }}>
                <Box sx={{ width: '100%' }}>
                  <BarChart
                    xAxis={[{
                      scaleType: 'band',
                      data: ['Shift 1', 'Shift 2', 'Shift 3']
                    }]}
                    series={[
                      {
                        id: '1',
                        stack: 'A',
                        label: 'release',
                        data: regulerc,
                      },
                      {
                        id: '2',
                        stack: 'B',
                        label: 'Planning',
                        data: planningc,
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
                        label: 'Pack Table',
                        curve: "linear",
                        data: rpackTablec, // Nilai default 0
                      },
                      {
                        id: '2',
                        label: 'Oven',
                        curve: "linear",
                        data: rovenc,
                      },
                      {
                        id: '3',
                        label: 'MD',
                        curve: "linear",
                        data: rmdc,
                      },
                      {
                        id: '4',
                        label: 'Feeding',
                        curve: "linear",
                        data: rfeedingc,
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
        <DataGrid rows={data} columns={columns} loading={isLoading} slots={{ toolbar: GridToolbar }} onRowClick={handleRowClick} />
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
                    <InputLabel>SKU</InputLabel>
                    <Select
                      value={sku}>
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

              <Divider sx={{ mb: 2, border: 1, borderColor: 'divider' }} />
              <Typography variant="h5">Kendala / Note</Typography>
              <Grid container spacing={2} direction="row" >
                {Object.entries(kendala).map(([key, value]) => (
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

export default TableLhpL5;