import * as React from 'react';
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Grid } from '@mui/material';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';
import axios from 'axios';
import ButtonBack from 'ui-component/ButtonBack';

// ==============================|| Happy Coding ||============================== //
const currencies = [
  {
    value: '1',
    label: '1',
  },
  {
    value: '2',
    label: '2',
  },
  {
    value: '3',
    label: '3',
  },
  {
    value: '4',
    label: '4',
  },
  {
    value: '5',
    label: '5',
  }
];
function getWeek(date) {
  let monthStart = new Date(date);
  monthStart.setDate(0);
  let offset = (monthStart.getDay() + 1) % 7 - 1; 
  return Math.ceil((date.getDate() + offset) / 7);
}
const TableWeeklyPL5 = () => {
  const [value, setValue] = React.useState('packing_l1_weekly');
  const [data ,setData] = useState([]);
  const [week ,setWeek] = useState('');
  const [field ] = useState([
    { field: 'id', headerName: 'No', width: 150 },
    { field: 'day', headerName: 'Time', width: 150 },
    { field: 'counter', headerName: 'Counter', width: 150 },
    { field: 'tanggal', headerName: 'Date', width: 150 }
  ]);
  const [fieldtwo] = useState([
    { field: 'id', headerName: 'No', width: 150 },
    { field: 'day', headerName: 'Time', width: 150 },
    { field: 'cntr_bandet', headerName: 'Counter Banded', width: 150 },
    { field: 'cntr_carton', headerName: 'Counter Carton', width: 150 },
    { field: 'tanggal', headerName: 'Date', width: 150 }
  ])
  
  const [urlapi] = useState({
    packingb3 : 'http://10.37.12.17:3000/packing_b3',
    packingb1 : 'http://10.37.12.17:3000/packing_b1',
    packingl2 : 'http://10.37.12.17:3000/packing_l2',
    packingb2 : 'http://10.37.12.17:3000/packing_b2',
    packingb4 : 'http://10.37.12.17:3000/packing_b4',
    packinga4 : 'http://10.37.12.17:3000/packing_a4',
    packingl2_all : 'http://10.37.12.17:3000/packing_l2_all',
    packing_l1_weekly : 'http://10.37.12.17:3000/packing_l1_weekly',
    urlp2 : 'table',
    grapikb1 : 'http://10.37.12.17:3000/shift1_b1',
    grapikl2 : 'http://10.37.12.17:3000/shift1_l2',
    grapikb2 : 'http://10.37.12.17:3000/shift1_b2',
    grapikb3 : 'http://10.37.12.17:3000/shift1_b3',
    grapikb4 : 'http://10.37.12.17:3000/shift1_b4',
    grapika4 : 'http://10.37.12.17:3000/shift1_a4'

  })
  const handleChange = (event, newValue) => {
    var date = new Date();
    var weeklofmonth = getWeek(date);
    setWeek(weeklofmonth)
    let objects = [];  
    let day = ['Monday','Tuesday','Wednesday','Thursday' , 'Friday' , 'Saturday','Total'];
    if(newValue=='packing_l1_weekly'){
        axios.get(urlapi.packing_l1_weekly)
          .then(response => {
          var dataolah  = response.data;
          var datanih1  =   dataolah[0] === undefined ? 0 : dataolah[0].cntr_bandet 
          var datanih2  =   dataolah[1] === undefined ? 0 : dataolah[1].cntr_bandet
          var datanih3  =   dataolah[2] === undefined ? 0 : dataolah[2].cntr_bandet
          var datanih4  =   dataolah[3] === undefined ? 0 : dataolah[3].cntr_bandet
          var datanih5  =   dataolah[4] === undefined ? 0 : dataolah[4].cntr_bandet
          var datanih6  =   dataolah[5] === undefined ? 0 : dataolah[5].cntr_bandet
          var datanih7  =   dataolah[6] === undefined ? 0 : dataolah[6].cntr_bandet
          var datanih8  =   dataolah[7] === undefined ? 0 : dataolah[7].cntr_bandet
          var datanih9  =   dataolah[8] === undefined ? 0 : dataolah[8].cntr_bandet
          var datanih10 =   dataolah[9] === undefined ? 0 : dataolah[9].cntr_bandet
          var datanih11 =   dataolah[10] === undefined ? 0 : dataolah[10].cntr_bandet
          var datanih12 =   dataolah[11] === undefined ? 0 : dataolah[11].cntr_bandet
          var datanih13 =   dataolah[12] === undefined ? 0 : dataolah[12].cntr_bandet
          var datanih14 =   dataolah[13] === undefined ? 0 : dataolah[13].cntr_bandet
          var datanih15 =   dataolah[14] === undefined ? 0 : dataolah[14].cntr_bandet
          var datanih16 =   dataolah[15] === undefined ? 0 : dataolah[15].cntr_bandet
          var datanih17 =   dataolah[16] === undefined ? 0 : dataolah[16].cntr_bandet
          var datanih18 =   dataolah[17] === undefined ? 0 : dataolah[17].cntr_bandet
          var datanih19 =   dataolah[0] === undefined ? 0 : dataolah[0].cntr_carton
          var datanih20 =   dataolah[1] === undefined ? 0 : dataolah[1].cntr_carton
          var datanih21 =   dataolah[2] === undefined ? 0 : dataolah[2].cntr_carton
          var datanih22 =   dataolah[3] === undefined ? 0 : dataolah[3].cntr_carton
          var datanih23 =   dataolah[4] === undefined ? 0 : dataolah[4].cntr_carton
          var datanih24 =   dataolah[5] === undefined ? 0 : dataolah[5].cntr_carton
          var datanih25 =   dataolah[6] === undefined ? 0 : dataolah[6].cntr_carton
          var datanih26 =   dataolah[7] === undefined ? 0 : dataolah[7].cntr_carton
          var datanih27 =   dataolah[8] === undefined ? 0 : dataolah[8].cntr_carton
          var datanih28 =   dataolah[9] === undefined ? 0 : dataolah[9].cntr_carton
          var datanih29 =   dataolah[10] === undefined ? 0 : dataolah[10].cntr_carton
          var datanih30 =   dataolah[11] === undefined ? 0 : dataolah[11].cntr_carton
          var datanih31 =   dataolah[12] === undefined ? 0 : dataolah[12].cntr_carton
          var datanih32 =   dataolah[13] === undefined ? 0 : dataolah[13].cntr_carton
          var datanih33 =   dataolah[14] === undefined ? 0 : dataolah[14].cntr_carton
          var datanih34 =   dataolah[15] === undefined ? 0 : dataolah[15].cntr_carton
          var datanih35 =   dataolah[16] === undefined ? 0 : dataolah[16].cntr_carton
          var datanih36 =   dataolah[17] === undefined ? 0 : dataolah[17].cntr_carton
          var datanih37 =   dataolah[0] === undefined ? 0 : dataolah[0].realdatetime
          var datanih38 =   dataolah[3] === undefined ? 0 : dataolah[3].realdatetime
          var datanih39 =   dataolah[6] === undefined ? 0 : dataolah[6].realdatetime
          var datanih40 =   dataolah[9] === undefined ? 0 : dataolah[9].realdatetime
          var datanih41 =   dataolah[12] === undefined ? 0 : dataolah[12].realdatetime
          var datanih42 =   dataolah[15] === undefined ? 0 : dataolah[15].realdatetime
          var bandedsenin =  datanih1 + datanih2 + datanih3
          var bandedselasa = datanih4 + datanih5 + datanih6
          var bandedrabu =  datanih7 + datanih8 + datanih9
          var bandedkamis =   datanih10 + datanih11 + datanih12
          var bandedjumat = datanih13 + datanih14 + datanih15
          var bandedsabtu =  datanih16 + datanih17 + datanih18
          var cartonsenin =  datanih19 + datanih20 + datanih21
          var cartonselasa = datanih22 + datanih23 + datanih24
          var cartonrabu =  datanih25 + datanih26 + datanih27
          var cartonkamis =   datanih28 + datanih29 + datanih30
          var cartonjumat = datanih31 + datanih32 + datanih33
          var cartonsabtu =  datanih34 + datanih35 + datanih36
          objects[0] = {};
          objects[0].id = 0 + 1;
          objects[0].day = day[0]
          objects[0].cntr_bandet =  bandedsenin
          objects[0].cntr_carton = cartonsenin
          objects[0].tanggal =  datanih37 === 0 ? 0 : new Date(datanih37).toLocaleDateString();
          objects[1] = {};
          objects[1].id = 1 + 1;
          objects[1].day = day[1]
          objects[1].cntr_bandet = bandedselasa 
          objects[1].cntr_carton = cartonselasa
          objects[1].tanggal = datanih38 === 0 ? 0 : new Date(datanih38).toLocaleDateString();
          objects[2] = {};
          objects[2].id = 2 + 1;
          objects[2].day = day[2]
          objects[2].cntr_bandet = bandedrabu
          objects[2].cntr_carton = cartonrabu
          objects[2].tanggal = datanih39 === 0 ? 0 : new Date(datanih39).toLocaleDateString();
          objects[3] = {};
          objects[3].id = 3 + 1;
          objects[3].day = day[3]
          objects[3].cntr_bandet = bandedkamis 
          objects[3].cntr_carton = cartonkamis
          objects[3].tanggal =datanih40 === 0 ? 0 : new Date(datanih40).toLocaleDateString();
          objects[4] = {};
          objects[4].id = 4 + 1;
          objects[4].day = day[4]
          objects[4].cntr_bandet = bandedjumat
          objects[4].cntr_carton = cartonjumat
          objects[4].tanggal =datanih41 === 0 ? 0 : new Date(datanih41).toLocaleDateString();
          objects[5] = {};
          objects[5].id = 5 + 1;
          objects[5].day = day[5]
          objects[5].cntr_bandet = bandedsabtu
          objects[5].cntr_carton = cartonsabtu
          objects[5].tanggal = datanih42 === 0 ? 0 :new Date(datanih42).toLocaleDateString();
          objects[6] = {};
          objects[6].id = 6 + 1;
          objects[6].day = day[6]
          objects[6].cntr_bandet = bandedsenin + bandedselasa + bandedrabu + bandedkamis + bandedjumat + bandedsabtu 
          objects[6].cntr_carton = cartonsenin + cartonselasa + cartonrabu + cartonkamis + cartonjumat + cartonsabtu
          objects[6].tanggal =datanih37 === 0 ? 0 : new Date().toLocaleDateString();
          setData(objects)
          })
          .catch(error => {
            console.log(error);
          });
    }else{
        axios.get(`http://10.37.12.17:3000/${newValue}`)
          .then(response => {
          var dataolah  = response.data;
          var datanih1  =   dataolah[0] === undefined ? 0 : dataolah[0].counter 
          var datanih2  =   dataolah[1] === undefined ? 0 : dataolah[1].counter
          var datanih3  =   dataolah[2] === undefined ? 0 : dataolah[2].counter
          var datanih4  =   dataolah[3] === undefined ? 0 : dataolah[3].counter
          var datanih5  =   dataolah[4] === undefined ? 0 : dataolah[4].counter
          var datanih6  =   dataolah[5] === undefined ? 0 : dataolah[5].counter
          var datanih7  =   dataolah[6] === undefined ? 0 : dataolah[6].counter
          var datanih8  =   dataolah[7] === undefined ? 0 : dataolah[7].counter
          var datanih9  =   dataolah[8] === undefined ? 0 : dataolah[8].counter
          var datanih10 =   dataolah[9] === undefined ? 0 : dataolah[9].counter
          var datanih11 =   dataolah[10] === undefined ? 0 : dataolah[10].counter
          var datanih12 =   dataolah[11] === undefined ? 0 : dataolah[11].counter
          var datanih13 =   dataolah[12] === undefined ? 0 : dataolah[12].counter
          var datanih14 =   dataolah[13] === undefined ? 0 : dataolah[13].counter
          var datanih15 =   dataolah[14] === undefined ? 0 : dataolah[14].counter
          var datanih16 =   dataolah[15] === undefined ? 0 : dataolah[15].counter
          var datanih17 =   dataolah[16] === undefined ? 0 : dataolah[16].counter
          var datanih18 =   dataolah[17] === undefined ? 0 : dataolah[17].counter
          var datanih37 =   dataolah[0] === undefined ? 0 : dataolah[0].realdatetime
          var datanih38 =   dataolah[3] === undefined ? 0 : dataolah[3].realdatetime
          var datanih39 =   dataolah[6] === undefined ? 0 : dataolah[6].realdatetime
          var datanih40 =   dataolah[9] === undefined ? 0 : dataolah[9].realdatetime
          var datanih41 =   dataolah[12] === undefined ? 0 : dataolah[12].realdatetime
          var datanih42 =   dataolah[15] === undefined ? 0 : dataolah[15].realdatetime
          var bandedsenin =  datanih1 + datanih2 + datanih3
          var bandedselasa = datanih4 + datanih5 + datanih6
          var bandedrabu =  datanih7 + datanih8 + datanih9
          var bandedkamis =   datanih10 + datanih11 + datanih12
          var bandedjumat = datanih13 + datanih14 + datanih15
          var bandedsabtu =  datanih16 + datanih17 + datanih18
          objects[0] = {};
          objects[0].id = 0 + 1;
          objects[0].day = day[0]
          objects[0].counter =  bandedsenin
          objects[0].tanggal =  datanih37 === 0 ? 0 : new Date(datanih37).toLocaleDateString();
          objects[1] = {};
          objects[1].id = 1 + 1;
          objects[1].day = day[1]
          objects[1].counter = bandedselasa 
          objects[1].tanggal = datanih38 === 0 ? 0 : new Date(datanih38).toLocaleDateString();
          objects[2] = {};
          objects[2].id = 2 + 1;
          objects[2].day = day[2]
          objects[2].counter = bandedrabu
          objects[2].tanggal = datanih39 === 0 ? 0 : new Date(datanih39).toLocaleDateString();
          objects[3] = {};
          objects[3].id = 3 + 1;
          objects[3].day = day[3]
          objects[3].counter = bandedkamis 
          objects[3].tanggal =datanih40 === 0 ? 0 : new Date(datanih40).toLocaleDateString();
          objects[4] = {};
          objects[4].id = 4 + 1;
          objects[4].day = day[4]
          objects[4].counter = bandedjumat
          objects[4].tanggal =datanih41 === 0 ? 0 : new Date(datanih41).toLocaleDateString();
          objects[5] = {};
          objects[5].id = 5 + 1;
          objects[5].day = day[5]
          objects[5].counter = bandedsabtu
          objects[5].tanggal = datanih42 === 0 ? 0 :new Date(datanih42).toLocaleDateString();
          objects[6] = {};
          objects[6].id = 6 + 1;
          objects[6].day = day[6]
          objects[6].counter = bandedsenin + bandedselasa + bandedrabu + bandedkamis + bandedjumat + bandedsabtu 
          objects[6].tanggal =datanih37 === 0 ? 0 : new Date().toLocaleDateString();
          setData(objects)
          })
          .catch(error => {
            console.log(error);
          });
    }
    setValue(newValue);
  };
  const [isLoading , setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
    var date = new Date();
    var weeklofmonth = getWeek(date);
    setWeek(weeklofmonth)
    let objects = [];  
    let day = ['Monday','Tuesday','Wednesday','Thursday' , 'Friday' , 'Saturday','Total'];
        axios.get(urlapi.packing_l1_weekly)
          .then(response => {
          var dataolah  = response.data;
          var datanih1  =   dataolah[0] === undefined ? 0 : dataolah[0].cntr_bandet 
          var datanih2  =   dataolah[1] === undefined ? 0 : dataolah[1].cntr_bandet
          var datanih3  =   dataolah[2] === undefined ? 0 : dataolah[2].cntr_bandet
          var datanih4  =   dataolah[3] === undefined ? 0 : dataolah[3].cntr_bandet
          var datanih5  =   dataolah[4] === undefined ? 0 : dataolah[4].cntr_bandet
          var datanih6  =   dataolah[5] === undefined ? 0 : dataolah[5].cntr_bandet
          var datanih7  =   dataolah[6] === undefined ? 0 : dataolah[6].cntr_bandet
          var datanih8  =   dataolah[7] === undefined ? 0 : dataolah[7].cntr_bandet
          var datanih9  =   dataolah[8] === undefined ? 0 : dataolah[8].cntr_bandet
          var datanih10 =   dataolah[9] === undefined ? 0 : dataolah[9].cntr_bandet
          var datanih11 =   dataolah[10] === undefined ? 0 : dataolah[10].cntr_bandet
          var datanih12 =   dataolah[11] === undefined ? 0 : dataolah[11].cntr_bandet
          var datanih13 =   dataolah[12] === undefined ? 0 : dataolah[12].cntr_bandet
          var datanih14 =   dataolah[13] === undefined ? 0 : dataolah[13].cntr_bandet
          var datanih15 =   dataolah[14] === undefined ? 0 : dataolah[14].cntr_bandet
          var datanih16 =   dataolah[15] === undefined ? 0 : dataolah[15].cntr_bandet
          var datanih17 =   dataolah[16] === undefined ? 0 : dataolah[16].cntr_bandet
          var datanih18 =   dataolah[17] === undefined ? 0 : dataolah[17].cntr_bandet
          var datanih19 =   dataolah[0] === undefined ? 0 : dataolah[0].cntr_carton
          var datanih20 =   dataolah[1] === undefined ? 0 : dataolah[1].cntr_carton
          var datanih21 =   dataolah[2] === undefined ? 0 : dataolah[2].cntr_carton
          var datanih22 =   dataolah[3] === undefined ? 0 : dataolah[3].cntr_carton
          var datanih23 =   dataolah[4] === undefined ? 0 : dataolah[4].cntr_carton
          var datanih24 =   dataolah[5] === undefined ? 0 : dataolah[5].cntr_carton
          var datanih25 =   dataolah[6] === undefined ? 0 : dataolah[6].cntr_carton
          var datanih26 =   dataolah[7] === undefined ? 0 : dataolah[7].cntr_carton
          var datanih27 =   dataolah[8] === undefined ? 0 : dataolah[8].cntr_carton
          var datanih28 =   dataolah[9] === undefined ? 0 : dataolah[9].cntr_carton
          var datanih29 =   dataolah[10] === undefined ? 0 : dataolah[10].cntr_carton
          var datanih30 =   dataolah[11] === undefined ? 0 : dataolah[11].cntr_carton
          var datanih31 =   dataolah[12] === undefined ? 0 : dataolah[12].cntr_carton
          var datanih32 =   dataolah[13] === undefined ? 0 : dataolah[13].cntr_carton
          var datanih33 =   dataolah[14] === undefined ? 0 : dataolah[14].cntr_carton
          var datanih34 =   dataolah[15] === undefined ? 0 : dataolah[15].cntr_carton
          var datanih35 =   dataolah[16] === undefined ? 0 : dataolah[16].cntr_carton
          var datanih36 =   dataolah[17] === undefined ? 0 : dataolah[17].cntr_carton
          var datanih37 =   dataolah[0] === undefined ? 0 : dataolah[0].realdatetime
          var datanih38 =   dataolah[3] === undefined ? 0 : dataolah[3].realdatetime
          var datanih39 =   dataolah[6] === undefined ? 0 : dataolah[6].realdatetime
          var datanih40 =   dataolah[9] === undefined ? 0 : dataolah[9].realdatetime
          var datanih41 =   dataolah[12] === undefined ? 0 : dataolah[12].realdatetime
          var datanih42 =   dataolah[15] === undefined ? 0 : dataolah[15].realdatetime
          var bandedsenin =  datanih1 + datanih2 + datanih3
          var bandedselasa = datanih4 + datanih5 + datanih6
          var bandedrabu =  datanih7 + datanih8 + datanih9
          var bandedkamis =   datanih10 + datanih11 + datanih12
          var bandedjumat = datanih13 + datanih14 + datanih15
          var bandedsabtu =  datanih16 + datanih17 + datanih18
          var cartonsenin =  datanih19 + datanih20 + datanih21
          var cartonselasa = datanih22 + datanih23 + datanih24
          var cartonrabu =  datanih25 + datanih26 + datanih27
          var cartonkamis =   datanih28 + datanih29 + datanih30
          var cartonjumat = datanih31 + datanih32 + datanih33
          var cartonsabtu =  datanih34 + datanih35 + datanih36
          objects[0] = {};
          objects[0].id = 0 + 1;
          objects[0].day = day[0]
          objects[0].cntr_bandet =  bandedsenin
          objects[0].cntr_carton = cartonsenin
          objects[0].tanggal =  datanih37 === 0 ? 0 : new Date(datanih37).toLocaleDateString();
          objects[1] = {};
          objects[1].id = 1 + 1;
          objects[1].day = day[1]
          objects[1].cntr_bandet = bandedselasa 
          objects[1].cntr_carton = cartonselasa
          objects[1].tanggal = datanih38 === 0 ? 0 : new Date(datanih38).toLocaleDateString();
          objects[2] = {};
          objects[2].id = 2 + 1;
          objects[2].day = day[2]
          objects[2].cntr_bandet = bandedrabu
          objects[2].cntr_carton = cartonrabu
          objects[2].tanggal = datanih39 === 0 ? 0 : new Date(datanih39).toLocaleDateString();
          objects[3] = {};
          objects[3].id = 3 + 1;
          objects[3].day = day[3]
          objects[3].cntr_bandet = bandedkamis 
          objects[3].cntr_carton = cartonkamis
          objects[3].tanggal =datanih40 === 0 ? 0 : new Date(datanih40).toLocaleDateString();
          objects[4] = {};
          objects[4].id = 4 + 1;
          objects[4].day = day[4]
          objects[4].cntr_bandet = bandedjumat
          objects[4].cntr_carton = cartonjumat
          objects[4].tanggal =datanih41 === 0 ? 0 : new Date(datanih41).toLocaleDateString();
          objects[5] = {};
          objects[5].id = 5 + 1;
          objects[5].day = day[5]
          objects[5].cntr_bandet = bandedsabtu
          objects[5].cntr_carton = cartonsabtu
          objects[5].tanggal = datanih42 === 0 ? 0 :new Date(datanih42).toLocaleDateString();
          objects[6] = {};
          objects[6].id = 6 + 1;
          objects[6].day = day[6]
          objects[6].cntr_bandet = bandedsenin + bandedselasa + bandedrabu + bandedkamis + bandedjumat + bandedsabtu 
          objects[6].cntr_carton = cartonsenin + cartonselasa + cartonrabu + cartonkamis + cartonjumat + cartonsabtu
          objects[6].tanggal =datanih37 === 0 ? 0 : new Date().toLocaleDateString();
          setData(objects)
          })
          .catch(error => {
            console.log(error);
          });
  }, []);

  return (
  <MainCard title="Packing Biskuit Line 5" secondary={<ButtonBack path={'/utils/packing-line5-bsc/table'} />} >
    <TabContext value={value}>
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12} sm={10}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Home" value="packing_l1_weekly" />
                <Tab label="A1" value="packing_a1_weekly" />
                <Tab label="A2" value="packing_a2_weekly" />
                <Tab label="A5" value="packing_a5_weekly" />
                <Tab label="B5" value="packing_b5_weekly" />
                <Tab label="A3" value="packing_a3_weekly" />
            </TabList>
          </Box>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Box
              component="form"
              sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
              }}
              noValidate
              autoComplete="off"
            >
                <div>
                  <TextField
                    id="outlined-select-currency"
                    select
                    label="Week Of Month"
                    defaultValue={week}
                    onChange={(e) => {
                      setWeek(e.target.value);
                      var weekly = e.target.value
                      let objects = [];  
                      let day = ['Monday','Tuesday','Wednesday','Thursday' , 'Friday' , 'Saturday','Total'];
                      if (value==='packing_l1_weekly') {
                        axios.get(`http://10.37.12.17:3000/packing_l1_weekly/date/${weekly}`)
                        .then(response => {
                        var dataolah  = response.data;
                        var datanih1  =   dataolah[0] === undefined ? 0 : dataolah[0].cntr_bandet 
                        var datanih2  =   dataolah[1] === undefined ? 0 : dataolah[1].cntr_bandet
                        var datanih3  =   dataolah[2] === undefined ? 0 : dataolah[2].cntr_bandet
                        var datanih4  =   dataolah[3] === undefined ? 0 : dataolah[3].cntr_bandet
                        var datanih5  =   dataolah[4] === undefined ? 0 : dataolah[4].cntr_bandet
                        var datanih6  =   dataolah[5] === undefined ? 0 : dataolah[5].cntr_bandet
                        var datanih7  =   dataolah[6] === undefined ? 0 : dataolah[6].cntr_bandet
                        var datanih8  =   dataolah[7] === undefined ? 0 : dataolah[7].cntr_bandet
                        var datanih9  =   dataolah[8] === undefined ? 0 : dataolah[8].cntr_bandet
                        var datanih10 =   dataolah[9] === undefined ? 0 : dataolah[9].cntr_bandet
                        var datanih11 =   dataolah[10] === undefined ? 0 : dataolah[10].cntr_bandet
                        var datanih12 =   dataolah[11] === undefined ? 0 : dataolah[11].cntr_bandet
                        var datanih13 =   dataolah[12] === undefined ? 0 : dataolah[12].cntr_bandet
                        var datanih14 =   dataolah[13] === undefined ? 0 : dataolah[13].cntr_bandet
                        var datanih15 =   dataolah[14] === undefined ? 0 : dataolah[14].cntr_bandet
                        var datanih16 =   dataolah[15] === undefined ? 0 : dataolah[15].cntr_bandet
                        var datanih17 =   dataolah[16] === undefined ? 0 : dataolah[16].cntr_bandet
                        var datanih18 =   dataolah[17] === undefined ? 0 : dataolah[17].cntr_bandet
                        var datanih19 =   dataolah[0] === undefined ? 0 : dataolah[0].cntr_carton
                        var datanih20 =   dataolah[1] === undefined ? 0 : dataolah[1].cntr_carton
                        var datanih21 =   dataolah[2] === undefined ? 0 : dataolah[2].cntr_carton
                        var datanih22 =   dataolah[3] === undefined ? 0 : dataolah[3].cntr_carton
                        var datanih23 =   dataolah[4] === undefined ? 0 : dataolah[4].cntr_carton
                        var datanih24 =   dataolah[5] === undefined ? 0 : dataolah[5].cntr_carton
                        var datanih25 =   dataolah[6] === undefined ? 0 : dataolah[6].cntr_carton
                        var datanih26 =   dataolah[7] === undefined ? 0 : dataolah[7].cntr_carton
                        var datanih27 =   dataolah[8] === undefined ? 0 : dataolah[8].cntr_carton
                        var datanih28 =   dataolah[9] === undefined ? 0 : dataolah[9].cntr_carton
                        var datanih29 =   dataolah[10] === undefined ? 0 : dataolah[10].cntr_carton
                        var datanih30 =   dataolah[11] === undefined ? 0 : dataolah[11].cntr_carton
                        var datanih31 =   dataolah[12] === undefined ? 0 : dataolah[12].cntr_carton
                        var datanih32 =   dataolah[13] === undefined ? 0 : dataolah[13].cntr_carton
                        var datanih33 =   dataolah[14] === undefined ? 0 : dataolah[14].cntr_carton
                        var datanih34 =   dataolah[15] === undefined ? 0 : dataolah[15].cntr_carton
                        var datanih35 =   dataolah[16] === undefined ? 0 : dataolah[16].cntr_carton
                        var datanih36 =   dataolah[17] === undefined ? 0 : dataolah[17].cntr_carton
                        var datanih37 =   dataolah[0] === undefined ? 0 : dataolah[0].realdatetime
                        var datanih38 =   dataolah[3] === undefined ? 0 : dataolah[3].realdatetime
                        var datanih39 =   dataolah[6] === undefined ? 0 : dataolah[6].realdatetime
                        var datanih40 =   dataolah[9] === undefined ? 0 : dataolah[9].realdatetime
                        var datanih41 =   dataolah[12] === undefined ? 0 : dataolah[12].realdatetime
                        var datanih42 =   dataolah[15] === undefined ? 0 : dataolah[15].realdatetime
                        var bandedsenin =  datanih1 + datanih2 + datanih3
                        var bandedselasa = datanih4 + datanih5 + datanih6
                        var bandedrabu =  datanih7 + datanih8 + datanih9
                        var bandedkamis =   datanih10 + datanih11 + datanih12
                        var bandedjumat = datanih13 + datanih14 + datanih15
                        var bandedsabtu =  datanih16 + datanih17 + datanih18
                        var cartonsenin =  datanih19 + datanih20 + datanih21
                        var cartonselasa = datanih22 + datanih23 + datanih24
                        var cartonrabu =  datanih25 + datanih26 + datanih27
                        var cartonkamis =   datanih28 + datanih29 + datanih30
                        var cartonjumat = datanih31 + datanih32 + datanih33
                        var cartonsabtu =  datanih34 + datanih35 + datanih36
                        objects[0] = {};
                        objects[0].id = 0 + 1;
                        objects[0].day = day[0]
                        objects[0].cntr_bandet =  bandedsenin
                        objects[0].cntr_carton = cartonsenin
                        objects[0].tanggal =  datanih37 === 0 ? 0 : new Date(datanih37).toLocaleDateString();
                        objects[1] = {};
                        objects[1].id = 1 + 1;
                        objects[1].day = day[1]
                        objects[1].cntr_bandet = bandedselasa 
                        objects[1].cntr_carton = cartonselasa
                        objects[1].tanggal = datanih38 === 0 ? 0 : new Date(datanih38).toLocaleDateString();
                        objects[2] = {};
                        objects[2].id = 2 + 1;
                        objects[2].day = day[2]
                        objects[2].cntr_bandet = bandedrabu
                        objects[2].cntr_carton = cartonrabu
                        objects[2].tanggal = datanih39 === 0 ? 0 : new Date(datanih39).toLocaleDateString();
                        objects[3] = {};
                        objects[3].id = 3 + 1;
                        objects[3].day = day[3]
                        objects[3].cntr_bandet = bandedkamis 
                        objects[3].cntr_carton = cartonkamis
                        objects[3].tanggal =datanih40 === 0 ? 0 : new Date(datanih40).toLocaleDateString();
                        objects[4] = {};
                        objects[4].id = 4 + 1;
                        objects[4].day = day[4]
                        objects[4].cntr_bandet = bandedjumat
                        objects[4].cntr_carton = cartonjumat
                        objects[4].tanggal =datanih41 === 0 ? 0 : new Date(datanih41).toLocaleDateString();
                        objects[5] = {};
                        objects[5].id = 5 + 1;
                        objects[5].day = day[5]
                        objects[5].cntr_bandet = bandedsabtu
                        objects[5].cntr_carton = cartonsabtu
                        objects[5].tanggal = datanih42 === 0 ? 0 :new Date(datanih42).toLocaleDateString();
                        objects[6] = {};
                        objects[6].id = 6 + 1;
                        objects[6].day = day[6]
                        objects[6].cntr_bandet = bandedsenin + bandedselasa + bandedrabu + bandedkamis + bandedjumat + bandedsabtu 
                        objects[6].cntr_carton = cartonsenin + cartonselasa + cartonrabu + cartonkamis + cartonjumat + cartonsabtu
                        objects[6].tanggal =datanih37 === 0 ? 0 : new Date().toLocaleDateString();
                        setData(objects)
                        })
                        .catch(error => {
                          console.log(error);
                        });
                      }else{
                        axios.get(`http://10.37.12.17:3000/${value}/date/${weekly}`)
                        .then(response => {
                          var dataolah  = response.data;
                          var datanih1  =   dataolah[0] === undefined ? 0 : dataolah[0].counter 
                          var datanih2  =   dataolah[1] === undefined ? 0 : dataolah[1].counter
                          var datanih3  =   dataolah[2] === undefined ? 0 : dataolah[2].counter
                          var datanih4  =   dataolah[3] === undefined ? 0 : dataolah[3].counter
                          var datanih5  =   dataolah[4] === undefined ? 0 : dataolah[4].counter
                          var datanih6  =   dataolah[5] === undefined ? 0 : dataolah[5].counter
                          var datanih7  =   dataolah[6] === undefined ? 0 : dataolah[6].counter
                          var datanih8  =   dataolah[7] === undefined ? 0 : dataolah[7].counter
                          var datanih9  =   dataolah[8] === undefined ? 0 : dataolah[8].counter
                          var datanih10 =   dataolah[9] === undefined ? 0 : dataolah[9].counter
                          var datanih11 =   dataolah[10] === undefined ? 0 : dataolah[10].counter
                          var datanih12 =   dataolah[11] === undefined ? 0 : dataolah[11].counter
                          var datanih13 =   dataolah[12] === undefined ? 0 : dataolah[12].counter
                          var datanih14 =   dataolah[13] === undefined ? 0 : dataolah[13].counter
                          var datanih15 =   dataolah[14] === undefined ? 0 : dataolah[14].counter
                          var datanih16 =   dataolah[15] === undefined ? 0 : dataolah[15].counter
                          var datanih17 =   dataolah[16] === undefined ? 0 : dataolah[16].counter
                          var datanih18 =   dataolah[17] === undefined ? 0 : dataolah[17].counter
                          var datanih37 =   dataolah[0] === undefined ? 0 : dataolah[0].realdatetime
                          var datanih38 =   dataolah[3] === undefined ? 0 : dataolah[3].realdatetime
                          var datanih39 =   dataolah[6] === undefined ? 0 : dataolah[6].realdatetime
                          var datanih40 =   dataolah[9] === undefined ? 0 : dataolah[9].realdatetime
                          var datanih41 =   dataolah[12] === undefined ? 0 : dataolah[12].realdatetime
                          var datanih42 =   dataolah[15] === undefined ? 0 : dataolah[15].realdatetime
                          var bandedsenin =  datanih1 + datanih2 + datanih3
                          var bandedselasa = datanih4 + datanih5 + datanih6
                          var bandedrabu =  datanih7 + datanih8 + datanih9
                          var bandedkamis =   datanih10 + datanih11 + datanih12
                          var bandedjumat = datanih13 + datanih14 + datanih15
                          var bandedsabtu =  datanih16 + datanih17 + datanih18
                          objects[0] = {};
                          objects[0].id = 0 + 1;
                          objects[0].day = day[0]
                          objects[0].counter =  bandedsenin
                          objects[0].tanggal =  datanih37 === 0 ? 0 : new Date(datanih37).toLocaleDateString();
                          objects[1] = {};
                          objects[1].id = 1 + 1;
                          objects[1].day = day[1]
                          objects[1].counter = bandedselasa 
                          objects[1].tanggal = datanih38 === 0 ? 0 : new Date(datanih38).toLocaleDateString();
                          objects[2] = {};
                          objects[2].id = 2 + 1;
                          objects[2].day = day[2]
                          objects[2].counter = bandedrabu
                          objects[2].tanggal = datanih39 === 0 ? 0 : new Date(datanih39).toLocaleDateString();
                          objects[3] = {};
                          objects[3].id = 3 + 1;
                          objects[3].day = day[3]
                          objects[3].counter = bandedkamis 
                          objects[3].tanggal =datanih40 === 0 ? 0 : new Date(datanih40).toLocaleDateString();
                          objects[4] = {};
                          objects[4].id = 4 + 1;
                          objects[4].day = day[4]
                          objects[4].counter = bandedjumat
                          objects[4].tanggal =datanih41 === 0 ? 0 : new Date(datanih41).toLocaleDateString();
                          objects[5] = {};
                          objects[5].id = 5 + 1;
                          objects[5].day = day[5]
                          objects[5].counter = bandedsabtu
                          objects[5].tanggal = datanih42 === 0 ? 0 :new Date(datanih42).toLocaleDateString();
                          objects[6] = {};
                          objects[6].id = 6 + 1;
                          objects[6].day = day[6]
                          objects[6].counter = bandedsenin + bandedselasa + bandedrabu + bandedkamis + bandedjumat + bandedsabtu 
                          objects[6].tanggal =datanih37 === 0 ? 0 : new Date().toLocaleDateString();
                          setData(objects)
                          })
                        .catch(error => {
                          console.log(error);
                        });
                      }
                    }}
                  >
                    {currencies.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </div>
          </Box>
        </Grid>
      </Grid>
      <TabPanel value="packing_l1_weekly">
         <DataGrid rows={data} columns={fieldtwo} loading={isLoading} slots={{ toolbar: GridToolbar }} />
      </TabPanel>
      <TabPanel value="packing_a1_weekly">
        <Grid container spacing={gridSpacing}>
          <DataGrid rows={data} columns={field} loading={isLoading} slots={{ toolbar: GridToolbar }} />
        </Grid>
      </TabPanel>
      <TabPanel value="packing_a2_weekly">
        <Grid container spacing={gridSpacing}>
          <DataGrid rows={data} columns={field} loading={isLoading} slots={{ toolbar: GridToolbar }} />
        </Grid>
      </TabPanel>
      <TabPanel value="packing_a5_weekly">
        <Grid container spacing={gridSpacing}>
          <DataGrid rows={data} columns={field} loading={isLoading} slots={{ toolbar: GridToolbar }} />
        </Grid>
      </TabPanel>
      <TabPanel value="packing_b5_weekly">
        <Grid container spacing={gridSpacing}>
          <DataGrid rows={data} columns={field} loading={isLoading} slots={{ toolbar: GridToolbar }} />
        </Grid>
      </TabPanel>
      <TabPanel value="packing_a3_weekly">
        <Grid container spacing={gridSpacing}>
          <DataGrid rows={data} columns={field} loading={isLoading} slots={{ toolbar: GridToolbar }} />
        </Grid>
      </TabPanel>
    </TabContext>
  </MainCard>
  )
};

export default TableWeeklyPL5;