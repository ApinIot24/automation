import * as React from 'react';
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Grid } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';
import axios from 'axios';
import ButtonBack from 'ui-component/ButtonBack';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

// ==============================|| Happy Coding ||============================== //

function sliceser(valuenya) {
  var last = valuenya.toString().slice(0,4);
  return last;
}
const TablePackingL6 = () => {
  
  
  const [value, setValue] = React.useState('packing_l6_hourly');
  const [data ,setData] = useState([]);
  const [valuedate, setValueDate] = useState(dayjs(new Date()));
  const [field ] = useState([
    { field: 'id', headerName: 'No', width: 150 },
    { field: 'hourly', headerName: 'Time', width: 150 },
    { field: 'counter', headerName: 'Counter', width: 150 },
    { field: 'time', headerName: 'Runing(Minutes)', width: 150 },
    { field: 'speed', headerName: 'AVG Speed', width: 150 },
    { field: 'tanggal', headerName: 'Date', width: 150 }
  ]);
  const [fieldtwo] = useState([
    { field: 'id', headerName: 'No', width: 150 },
    { field: 'hourly', headerName: 'Time', width: 150 },
    { field: 'cntr_bandet', headerName: 'Counter Banded', width: 150 },
    { field: 'cntr_carton', headerName: 'Counter Carton', width: 150 },
    { field: 'tanggal', headerName: 'Date', width: 150 }
  ])
  const [urlapi] = useState({
    packingb3 : 'http://10.37.12.17:3000/packing_b3',
    packingb1 : 'http://10.37.12.17:3000/packing_b1',
    packingl6 : 'http://10.37.12.17:3000/packing_l6',
    packingb2 : 'http://10.37.12.17:3000/packing_b2',
    packingb4 : 'http://10.37.12.17:3000/packing_b4',
    packinga4 : 'http://10.37.12.17:3000/packing_a4',
    packingl6_all : 'http://10.37.12.17:3000/packing_l6_hourly',
    urlp2 : 'table',
    grapikb1 : 'http://10.37.12.17:3000/shift1_b1',
    grapikl6 : 'http://10.37.12.17:3000/shift1_l6',
    grapikb2 : 'http://10.37.12.17:3000/shift1_b2',
    grapikb3 : 'http://10.37.12.17:3000/shift1_b3',
    grapikb4 : 'http://10.37.12.17:3000/shift1_b4',
    grapika4 : 'http://10.37.12.17:3000/shift1_a4'

  })
  const handleChange = (event, newValue) => {
    setValueDate(dayjs(new Date()));
    if(newValue=='packing_l6_hourly'){
      let hour = ['07:00 - 08:00' , '08:00 - 09:00','09:00 - 10:00','10:00 - 11:00','11:00 - 12:00',
      '12:00 - 13:00','13:00 - 14:00','14:00 - 15:00','15:00 - 16:00','16:00 - 17:00','17:00 - 18:00','18:00 - 19:00','19:00 - 20:00','20:00 - 21:00',
      '21:00 - 22:00','22:00 - 23:00','23:00 - 24:00','24:00 - 01:00','01:00 - 02:00','02:00 - 03:00','03:00 - 04:00','04:00 - 05:00','05:00 - 06:00','06:00 - 07:00'];
      axios.get(urlapi.packingl6_all)
        .then(response => {
        var dataolah = response.data;
        let objects = [];  
        for (let i = 0; i < dataolah.length; i++) {
          if(i===0|| i===8 || i===16 ){
            objects[i] = {};
            objects[i].id = i + 1;
            objects[i].hourly = hour[i]
            objects[i].cntr_bandet = dataolah[i].cntr_bandet 
            objects[i].cntr_carton = dataolah[i].cntr_carton
            objects[i].tanggal = new Date().toLocaleDateString();
          }else if(i > 16){
            objects[i] = {};
            objects[i].id = i + 1;
            objects[i].hourly = hour[i]
            objects[i].cntr_bandet = dataolah[i].cntr_bandet - dataolah[i-1].cntr_bandet 
            objects[i].cntr_carton = dataolah[i].cntr_carton - dataolah[i-1].cntr_carton
            objects[i].tanggal = new Date().toLocaleDateString();
            // objects.push(objects[i]);
          }else{
            objects[i] = {};
            objects[i].id = i + 1;
            objects[i].hourly = hour[i]
            objects[i].cntr_bandet = dataolah[i].cntr_bandet - dataolah[i-1].cntr_bandet 
            objects[i].cntr_carton = dataolah[i].cntr_carton - dataolah[i-1].cntr_carton
            objects[i].tanggal = new Date().toLocaleDateString();
          }
        }
          console.log("Hai" , objects)
          setData(objects)
        })
        .catch(error => {
        console.log(error);
        });
    }else{
      let hour = ['07:00 - 08:00' , '08:00 - 09:00','09:00 - 10:00','10:00 - 11:00','11:00 - 12:00',
      '12:00 - 13:00','13:00 - 14:00','14:00 - 15:00','15:00 - 16:00','16:00 - 17:00','17:00 - 18:00','18:00 - 19:00','19:00 - 20:00','20:00 - 21:00',
      '21:00 - 22:00','22:00 - 23:00','23:00 - 24:00','24:00 - 01:00','01:00 - 02:00','02:00 - 03:00','03:00 - 04:00','04:00 - 05:00','05:00 - 06:00','06:00 - 07:00'];
        axios.get(`http://10.37.12.17:3000/${newValue}`)
        .then(response => {
          var dataolah = response.data;
          let objects = [];  
          for (let i = 0; i < dataolah.length; i++) {
            if(i===0|| i===8 || i===16 ){
              objects[i] = {};
              objects[i].id = i + 1;
              objects[i].hourly = hour[i]
              objects[i].counter = dataolah[i].counter 
              objects[i].speed = sliceser(dataolah[i].counter / 60)
              objects[i].time = Math.round(dataolah[i].time * 60)
              objects[i].tanggal = new Date().toLocaleDateString();
            }else if(i > 16){
              objects[i] = {};
              objects[i].id = i + 1;
              objects[i].hourly = hour[i]
              objects[i].counter = dataolah[i].counter - dataolah[i-1].counter
              objects[i].time = Math.round((dataolah[i].time * 60) - (dataolah[i-1].time * 60)) 
              objects[i].speed = sliceser((dataolah[i].counter - dataolah[i-1].counter) / 60)
              objects[i].tanggal = new Date().toLocaleDateString();
              // objects.push(objects[i]);
            }else{
              objects[i] = {};
              objects[i].id = i + 1;
              objects[i].hourly = hour[i]
              objects[i].counter = dataolah[i].counter - dataolah[i-1].counter
              objects[i].time = Math.round((dataolah[i].time * 60) - (dataolah[i-1].time * 60))  
              objects[i].speed = sliceser((dataolah[i].counter - dataolah[i-1].counter) / 60)
              objects[i].tanggal = new Date().toLocaleDateString();
            }
          }
            console.log("Hai" , objects)
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
    let hour = ['07:00 - 08:00' , '08:00 - 09:00','09:00 - 10:00','10:00 - 11:00','11:00 - 12:00',
                '12:00 - 13:00','13:00 - 14:00','14:00 - 15:00','15:00 - 16:00','16:00 - 17:00','17:00 - 18:00','18:00 - 19:00','19:00 - 20:00','20:00 - 21:00',
                '21:00 - 22:00','22:00 - 23:00','23:00 - 24:00','24:00 - 01:00','01:00 - 02:00','02:00 - 03:00','03:00 - 04:00','04:00 - 05:00','05:00 - 06:00','06:00 - 07:00'];
         axios.get(urlapi.packingl6_all)
         .then(response => {
          var dataolah = response.data;
          let objects = [];  
          for (let i = 0; i < dataolah.length; i++) {
            if(i===0|| i===8 || i===16 ){
              objects[i] = {};
              objects[i].id = i + 1;
              objects[i].hourly = hour[i]
              objects[i].cntr_bandet = dataolah[i].cntr_bandet 
              objects[i].cntr_carton = dataolah[i].cntr_carton
              objects[i].tanggal = new Date().toLocaleDateString();
            }else if(i > 16){
              objects[i] = {};
              objects[i].id = i + 1;
              objects[i].hourly = hour[i]
              objects[i].cntr_bandet = dataolah[i].cntr_bandet - dataolah[i-1].cntr_bandet 
              objects[i].cntr_carton = dataolah[i].cntr_carton - dataolah[i-1].cntr_carton
              objects[i].tanggal = new Date().toLocaleDateString();
              // objects.push(objects[i]);
            }else{
              objects[i] = {};
              objects[i].id = i + 1;
              objects[i].hourly = hour[i]
              objects[i].cntr_bandet = dataolah[i].cntr_bandet - dataolah[i-1].cntr_bandet 
              objects[i].cntr_carton = dataolah[i].cntr_carton - dataolah[i-1].cntr_carton
              objects[i].tanggal = new Date().toLocaleDateString();
            }
        }
            console.log("Hai" , objects)
            setData(objects)
        })
        .catch(error => {
          console.log(error);
        });
    const interval = setInterval(() => {
      let hour = ['07:00 - 08:00' , '08:00 - 09:00','09:00 - 10:00','10:00 - 11:00','11:00 - 12:00',
                '12:00 - 13:00','13:00 - 14:00','14:00 - 15:00','15:00 - 16:00','16:00 - 17:00','17:00 - 18:00','18:00 - 19:00','19:00 - 20:00','20:00 - 21:00',
                '21:00 - 22:00','22:00 - 23:00','23:00 - 24:00','24:00 - 01:00','01:00 - 02:00','02:00 - 03:00','03:00 - 04:00','04:00 - 05:00','05:00 - 06:00','06:00 - 07:00'];
       axios.get(urlapi.packingl6_all)
       .then(response => {
        var dataolah = response.data;
        let objects = [];  
        for (let i = 0; i < dataolah.length; i++) {
          if(i===0|| i===8 || i===16 ){
            objects[i] = {};
            objects[i].id = i + 1;
            objects[i].hourly = hour[i]
            objects[i].cntr_bandet = dataolah[i].cntr_bandet 
            objects[i].cntr_carton = dataolah[i].cntr_carton
            objects[i].tanggal = new Date().toLocaleDateString();
          }else if(i > 16){
            objects[i] = {};
            objects[i].id = i + 1;
            objects[i].hourly = hour[i]
            objects[i].cntr_bandet = dataolah[i].cntr_bandet - dataolah[i-1].cntr_bandet 
            objects[i].cntr_carton = dataolah[i].cntr_carton - dataolah[i-1].cntr_carton
            objects[i].tanggal = new Date().toLocaleDateString();
          }else{
            objects[i] = {};
            objects[i].id = i + 1;
            objects[i].hourly = hour[i]
            objects[i].cntr_bandet = dataolah[i].cntr_bandet - dataolah[i-1].cntr_bandet 
            objects[i].cntr_carton = dataolah[i].cntr_carton - dataolah[i-1].cntr_carton
            objects[i].tanggal = new Date().toLocaleDateString();
          }
      }
          console.log("Hai" , objects)
          setData(objects)
      })
      .catch(error => {
        console.log(error);
      });
        }, 1800000);
          return () => clearInterval(interval);
  }, []);

  return (
  <MainCard title="Packing Wafer Line 7" secondary={<ButtonBack path={'/utils/packing-Line7/table'} />}>
    <TabContext value={value}>
    <Grid container spacing={gridSpacing}>
          <Grid item xs={12} sm={10}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList onChange={handleChange} aria-label="lab API tabs example">
                <Tab label="Home" value="packing_l6_hourly" />
                <Tab label="B1" value="packing_b1_hourly" />
                <Tab label="B2" value="packing_b2_hourly" />
                <Tab label="B3" value="packing_b3_hourly" />
                <Tab label="B4" value="packing_b4_hourly" />
                <Tab label="A4" value="packing_a4_hourly" />
              </TabList>
            </Box>
          </Grid>
          <Grid item xs={12} sm={2}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Search Date"
              value = {valuedate}
              onChange={(newValue) => {
                setValueDate(newValue);
                var thisdate = new Date(newValue);
                thisdate.setDate(thisdate.getDate() + 1)
                const formattedDate = dayjs(newValue).format('YYYY-MM-DD');
                let hour = ['07:00 - 08:00' , '08:00 - 09:00','09:00 - 10:00','10:00 - 11:00','11:00 - 12:00',
                '12:00 - 13:00','13:00 - 14:00','14:00 - 15:00','15:00 - 16:00','16:00 - 17:00','17:00 - 18:00','18:00 - 19:00','19:00 - 20:00','20:00 - 21:00',
                '21:00 - 22:00','22:00 - 23:00','23:00 - 24:00','24:00 - 01:00','01:00 - 02:00','02:00 - 03:00','03:00 - 04:00','04:00 - 05:00','05:00 - 06:00','06:00 - 07:00'];
                if (value==='packing_l6_hourly') {
                  axios.get(`http://10.37.12.17:3000/packing_l6_hourly/date/${formattedDate}`)
                  .then(response => {
                    var dataolah = response.data;
                    let objects = [];  
                    for (let i = 0; i < dataolah.length; i++) {
                      if(i===0|| i===8 || i===16 ){
                        objects[i] = {};
                        objects[i].id = i + 1;
                        objects[i].hourly = hour[i]
                        objects[i].cntr_bandet = dataolah[i].cntr_bandet 
                        objects[i].cntr_carton = dataolah[i].cntr_carton
                        objects[i].tanggal = new Date(newValue).toLocaleDateString();
                      }else if(i > 16){
                        objects[i] = {};
                        objects[i].id = i + 1;
                        objects[i].hourly = hour[i]
                        objects[i].cntr_bandet = dataolah[i].cntr_bandet - dataolah[i-1].cntr_bandet 
                        objects[i].cntr_carton = dataolah[i].cntr_carton - dataolah[i-1].cntr_carton
                        objects[i].tanggal = new Date(thisdate).toLocaleDateString();
                        // objects.push(objects[i]);
                      }else{
                        objects[i] = {};
                        objects[i].id = i + 1;
                        objects[i].hourly = hour[i]
                        objects[i].cntr_bandet = dataolah[i].cntr_bandet - dataolah[i-1].cntr_bandet 
                        objects[i].cntr_carton = dataolah[i].cntr_carton - dataolah[i-1].cntr_carton
                        objects[i].tanggal = new Date(newValue).toLocaleDateString();
                      }
                    }
                    console.log("Hai" , objects)
                    setData(objects)
                  })
                  .catch(error => {
                    console.log(error);
                  });
                } else {
                  axios.get(`http://10.37.12.17:3000/${value}/date/${formattedDate}`)
                    .then(response => {
                      var dataolah = response.data;
                      let objects = [];  
                      for (let i = 0; i < dataolah.length; i++) {
                        if(i===0|| i===8 || i===16 ){
                          objects[i] = {};
                          objects[i].id = i + 1;
                          objects[i].hourly = hour[i]
                          objects[i].counter = dataolah[i].counter
                          objects[i].time = Math.round(dataolah[i].time * 60)
                          objects[i].speed = sliceser(dataolah[i].counter / 60)
                          objects[i].tanggal = new Date(newValue).toLocaleDateString();
                        }else if(i > 16){
                          objects[i] = {};
                          objects[i].id = i + 1;
                          objects[i].hourly = hour[i]
                          objects[i].counter = dataolah[i].counter - dataolah[i-1].counter
                          objects[i].time = Math.round((dataolah[i].time * 60) - (dataolah[i-1].time * 60))
                          objects[i].speed = sliceser((dataolah[i].counter - dataolah[i-1].counter) / 60)
                          objects[i].tanggal = new Date(thisdate).toLocaleDateString();
                        }else{
                          objects[i] = {};
                          objects[i].id = i + 1;
                          objects[i].hourly = hour[i]
                          objects[i].counter = dataolah[i].counter - dataolah[i-1].counter
                          objects[i].time = Math.round((dataolah[i].time * 60) - (dataolah[i-1].time * 60)) 
                          objects[i].speed = sliceser((dataolah[i].counter - dataolah[i-1].counter) / 60)
                          objects[i].tanggal = new Date(newValue).toLocaleDateString();
                        }
                      }
                      console.log("Hai" , objects)
                      setData(objects)
                      })
                    .catch(error => {
                      console.log(error);
                    });
                }
              }}
            />
    </LocalizationProvider>
          </Grid>
    </Grid>
      <TabPanel value="packing_l6_hourly">
         <DataGrid rows={data} columns={fieldtwo} loading={isLoading} slots={{ toolbar: GridToolbar }} />
      </TabPanel>
      <TabPanel value="packing_b1_hourly">
        <Grid container spacing={gridSpacing}>
          <DataGrid rows={data} columns={field} loading={isLoading} slots={{ toolbar: GridToolbar }} />
        </Grid>
      </TabPanel>
      <TabPanel value="packing_b2_hourly">
        <Grid container spacing={gridSpacing}>
          <DataGrid rows={data} columns={field} loading={isLoading} slots={{ toolbar: GridToolbar }} />
        </Grid>
      </TabPanel>
      <TabPanel value="packing_b3_hourly">
        <Grid container spacing={gridSpacing}>
          <DataGrid rows={data} columns={field} loading={isLoading} slots={{ toolbar: GridToolbar }} />
        </Grid>
      </TabPanel>
      <TabPanel value="packing_b4_hourly">
        <Grid container spacing={gridSpacing}>
          <DataGrid rows={data} columns={field} loading={isLoading} slots={{ toolbar: GridToolbar }} />
        </Grid>
      </TabPanel>
      <TabPanel value="packing_a4_hourly">
        <Grid container spacing={gridSpacing}>
          <DataGrid rows={data} columns={field} loading={isLoading} slots={{ toolbar: GridToolbar }} />
        </Grid>
      </TabPanel>
    </TabContext>
  </MainCard>
  )
};

export default TablePackingL6;