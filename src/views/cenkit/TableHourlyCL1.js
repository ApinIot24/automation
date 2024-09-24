import * as React from 'react';
import { useEffect, useState } from 'react';
// import Box from '@mui/material/Box';
// import Tab from '@mui/material/Tab';
// import TabContext from '@mui/lab/TabContext';
// import TabList from '@mui/lab/TabList';
// import TabPanel from '@mui/lab/TabPanel';
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
// function sliceser(valuenya) {
//   var last = valuenya.toString().slice(0,4);
//   return last;
// }

const TableHourlyCL1 = () => {
  
  // const [value, setValue] = React.useState('packing_l1_hourly');
  const [data ,setData] = useState([]);
  const [valuedate, setValueDate] = useState(dayjs(new Date()));
  const [field ] = useState([
    { field: 'id', headerName: 'No', width: 150 },
    { field: 'hourly', headerName: 'Time', width: 150 },
    { field: 'cntr_mixing', headerName: 'Mixing Counter', width: 150 },
    { field: 'tanggal', headerName: 'Date', width: 150 }
  ]);
  const [urlapi] = useState({
    cenkit_l1_hourly : 'http://10.37.12.17:3000/cenkit_l1_hourly',
    urlp2 : 'table'

  })
  const [isLoading , setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
    let hour = ['07:00 - 08:00' , '08:00 - 09:00','09:00 - 10:00','10:00 - 11:00','11:00 - 12:00',
                '12:00 - 13:00','13:00 - 14:00','14:00 - 15:00','15:00 - 16:00','16:00 - 17:00','17:00 - 18:00','18:00 - 19:00','19:00 - 20:00','20:00 - 21:00',
                '21:00 - 22:00','22:00 - 23:00','23:00 - 24:00','24:00 - 01:00','01:00 - 02:00','02:00 - 03:00','03:00 - 04:00','04:00 - 05:00','05:00 - 06:00','06:00 - 07:00'];
         axios.get(urlapi.cenkit_l1_hourly)
         .then(response => {
          var dataolah = response.data;
          let objects = [];  
          for (let i = 0; i < dataolah.length; i++) {
            if(i===0|| i===8 || i===16 ){
              objects[i] = {};
              objects[i].id = i + 1;
              objects[i].hourly = hour[i]
              objects[i].cntr_mixing = dataolah[i].cntr_mixing 
              objects[i].tanggal = new Date().toLocaleDateString();
            }else if(i > 16){
              objects[i] = {};
              objects[i].id = i + 1;
              objects[i].hourly = hour[i]
              objects[i].cntr_mixing = dataolah[i].cntr_mixing - dataolah[i-1].cntr_mixing 
              objects[i].tanggal = new Date().toLocaleDateString();
              // objects.push(objects[i]);
            }else{
              objects[i] = {};
              objects[i].id = i + 1;
              objects[i].hourly = hour[i]
              objects[i].cntr_mixing = dataolah[i].cntr_mixing - dataolah[i-1].cntr_mixing 
              objects[i].tanggal = new Date().toLocaleDateString();
            }
        }
            //console.log("Hai" , objects)
            setData(objects)
        })
        .catch(error => {
          console.log(error);
        });
    const interval = setInterval(() => {
      let hour = ['07:00 - 08:00' , '08:00 - 09:00','09:00 - 10:00','10:00 - 11:00','11:00 - 12:00',
                '12:00 - 13:00','13:00 - 14:00','14:00 - 15:00','15:00 - 16:00','16:00 - 17:00','17:00 - 18:00','18:00 - 19:00','19:00 - 20:00','20:00 - 21:00',
                '21:00 - 22:00','22:00 - 23:00','23:00 - 24:00','24:00 - 01:00','01:00 - 02:00','02:00 - 03:00','03:00 - 04:00','04:00 - 05:00','05:00 - 06:00','06:00 - 07:00'];
       axios.get(urlapi.cenkit_l1_hourly)
       .then(response => {
        var dataolah = response.data;
        let objects = [];  
        for (let i = 0; i < dataolah.length; i++) {
          if(i===0|| i===8 || i===16 ){
            objects[i] = {};
            objects[i].id = i + 1;
            objects[i].hourly = hour[i]
            objects[i].cntr_mixing = dataolah[i].cntr_mixing 
            objects[i].tanggal = new Date().toLocaleDateString();
          }else if(i > 16){
            objects[i] = {};
            objects[i].id = i + 1;
            objects[i].hourly = hour[i]
            objects[i].cntr_mixing = dataolah[i].cntr_mixing - dataolah[i-1].cntr_mixing 
            objects[i].tanggal = new Date().toLocaleDateString();
            // objects.push(objects[i]);
          }else{
            objects[i] = {};
            objects[i].id = i + 1;
            objects[i].hourly = hour[i]
            objects[i].cntr_mixing = dataolah[i].cntr_mixing - dataolah[i-1].cntr_mixing 
            objects[i].tanggal = new Date().toLocaleDateString();
          }
      }
          //console.log("Hai" , objects)
          setData(objects)
      })
      .catch(error => {
        console.log(error);
      });
         
        //   setTime(ttime);
        }, 1800000);
          return () => clearInterval(interval);
  }, []);

  return (
  <MainCard title="Central Kitchen Line 1" secondary={<ButtonBack path={'/cenkit/central-kitchen1/table'} />}>
      <Grid container spacing={gridSpacing}>
            <Grid item xs={12} sm={9}>
              {/* <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Typography variant="h5">Grafik Counter</Typography>
              </Box> */}
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
                    var datestring = datenyar.getFullYear()  + "-0" + (datenyar.getMonth()+1) + "-0" + datenyar.getDate() 
                    let hour = ['07:00 - 08:00' , '08:00 - 09:00','09:00 - 10:00','10:00 - 11:00','11:00 - 12:00',
                    '12:00 - 13:00','13:00 - 14:00','14:00 - 15:00','15:00 - 16:00','16:00 - 17:00','17:00 - 18:00','18:00 - 19:00','19:00 - 20:00','20:00 - 21:00',
                    '21:00 - 22:00','22:00 - 23:00','23:00 - 24:00','24:00 - 01:00','01:00 - 02:00','02:00 - 03:00','03:00 - 04:00','04:00 - 05:00','05:00 - 06:00','06:00 - 07:00'];
                      axios.get(`http://10.37.12.17:3000/cenkit_l1_hourly/date/${datestring}`)
                      .then(response => {
                        var dataolah = response.data;
                        let objects = [];  
                        for (let i = 0; i < dataolah.length; i++) {
                          if(i===0|| i===8 || i===16 ){
                            objects[i] = {};
                            objects[i].id = i + 1;
                            objects[i].hourly = hour[i]
                            objects[i].cntr_mixing = dataolah[i].cntr_mixing
                            objects[i].tanggal = new Date(newValue).toLocaleDateString();
                          }else if(i > 16){
                            objects[i] = {};
                            objects[i].id = i + 1;
                            objects[i].hourly = hour[i]
                            objects[i].cntr_mixing = dataolah[i].cntr_mixing - dataolah[i-1].cntr_mixing 
                            objects[i].tanggal = new Date(thisdate).toLocaleDateString();
                            // objects.push(objects[i]);
                          }else{
                            objects[i] = {};
                            objects[i].id = i + 1;
                            objects[i].hourly = hour[i]
                            objects[i].cntr_mixing = dataolah[i].cntr_mixing - dataolah[i-1].cntr_mixing 
                            objects[i].tanggal = new Date(newValue).toLocaleDateString();
                          }
                        }
                        // console.log("Hai" , objects)
                        setData(objects)
                      })
                      .catch(error => {
                        console.log(error);
                      });
                  }}
                />
              </LocalizationProvider>
            </Grid>
      </Grid>
      <Grid container spacing={gridSpacing}>
        <DataGrid rows={data} columns={field} loading={isLoading} slots={{ toolbar: GridToolbar }} />
      </Grid>
  </MainCard>
  )
};

export default TableHourlyCL1;