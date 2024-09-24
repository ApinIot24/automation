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

// ==============================|| Happy Coding ||============================== //

const TablePackingL2 = () => {
  const [value, setValue] = React.useState('0');
  const [data ,setData] = useState([]);
  const [field ] = useState([
    { field: 'id', headerName: 'No', width: 150 },
    { field: 'counter', headerName: 'Counter', width: 150 },
    { field: 'status_mesin', headerName: 'Status', width: 150 },
    { field: 'time', headerName: 'Runing Hour', width: 150 },
    { field: 'speed', headerName: 'Speed', width: 150 },
    { field: 'realdatetime', headerName: 'Date', width: 150 },
    { field: 'jam', headerName: 'Time', width: 150 }
  ]);
  const [fieldtwo] = useState([
    { field: 'id', headerName: 'No', width: 150 },
    { field: 'cntr_bandet', headerName: 'Counter Banded', width: 150 },
    { field: 'cntr_carton', headerName: 'Counter Carton', width: 150 },
    { field: 'realdatetime', headerName: 'Date', width: 150 },
    { field: 'jam', headerName: 'Time', width: 150 }
  ])
  const [urlapi] = useState({
    packingb3 : 'http://10.37.12.17:3000/packing_b3',
    packingb1 : 'http://10.37.12.17:3000/packing_b1',
    packingl2 : 'http://10.37.12.17:3000/packing_l2',
    packingb2 : 'http://10.37.12.17:3000/packing_b2',
    packingb4 : 'http://10.37.12.17:3000/packing_b4',
    packinga4 : 'http://10.37.12.17:3000/packing_a4',
    packingl2_all : 'http://10.37.12.17:3000/packing_l2_all',
    urlp2 : 'table',
    grapikb1 : 'http://10.37.12.17:3000/shift1_b1',
    grapikl2 : 'http://10.37.12.17:3000/shift1_l2',
    grapikb2 : 'http://10.37.12.17:3000/shift1_b2',
    grapikb3 : 'http://10.37.12.17:3000/shift1_b3',
    grapikb4 : 'http://10.37.12.17:3000/shift1_b4',
    grapika4 : 'http://10.37.12.17:3000/shift1_a4'

  })
  const handleChange = (event, newValue) => {
    if(newValue=='3'){
      axios.get('http://10.37.12.17:3000/packing_b3_all')
      .then(response => {
        var dataarray = response.data
            for (var i = 0; i < dataarray.length; i++) {
                var newdate = new Date(dataarray[i].realdatetime).toLocaleDateString()
               dataarray[i].realdatetime = newdate;
            }
            setData(dataarray)
      })
      .catch(error => {
        console.log(error);
      });
    }else if(newValue=='1'){
      axios.get('http://10.37.12.17:3000/packing_b1_all')
      .then(response => {
        var dataarray = response.data
            for (var i = 0; i < dataarray.length; i++) {
                var newdate = new Date(dataarray[i].realdatetime).toLocaleDateString()
               dataarray[i].realdatetime = newdate;
            }
            setData(dataarray)
      })
      .catch(error => {
        console.log(error);
      });
    }else if(newValue=='2'){
      axios.get('http://10.37.12.17:3000/packing_b2_all')
      .then(response => {
        var dataarray = response.data
            for (var i = 0; i < dataarray.length; i++) {
                var newdate = new Date(dataarray[i].realdatetime).toLocaleDateString()
               dataarray[i].realdatetime = newdate;
            }
            setData(dataarray)
      })
      .catch(error => {
        console.log(error);
      });
    }else if(newValue=='4'){
      axios.get('http://10.37.12.17:3000/packing_b4_all')
      .then(response => {
        var dataarray = response.data
        for (var i = 0; i < dataarray.length; i++) {
            var newdate = new Date(dataarray[i].realdatetime).toLocaleDateString()
           dataarray[i].realdatetime = newdate;
        }
        setData(dataarray)
      })
      .catch(error => {
        console.log(error);
      });
    }else if(newValue=='5'){
      axios.get('http://10.37.12.17:3000/packing_a4_all')
      .then(response => {
        var dataarray = response.data
            for (var i = 0; i < dataarray.length; i++) {
                var newdate = new Date(dataarray[i].realdatetime).toLocaleDateString()
               dataarray[i].realdatetime = newdate;
            }
            setData(dataarray)
      })
      .catch(error => {
        console.log(error);
      });
    }else if(newValue=='0'){
        axios.get('http://10.37.12.17:3000/packing_l2_all')
      .then(response => {
        var dataarray = response.data
            for (var i = 0; i < dataarray.length; i++) {
                var newdate = new Date(dataarray[i].realdatetime).toLocaleDateString()
               dataarray[i].realdatetime = newdate;
            }
            setData(dataarray)
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
    axios.get(urlapi.packingl2_all)
          .then(response => {
            var dataarray = response.data
            for (var i = 0; i < dataarray.length; i++) {
                var newdate = new Date(dataarray[i].realdatetime).toLocaleDateString()
               dataarray[i].realdatetime = newdate;
            }
            setData(dataarray)
          })
          .catch(error => {
            console.log(error);
          });
         
    const interval = setInterval(() => {
        axios.get(urlapi.packingl2_all)
          .then(response => {
            var dataarray = response.data
            for (var i = 0; i < dataarray.length; i++) {
                var newdate = new Date(dataarray[i].realdatetime).toLocaleDateString()
               dataarray[i].realdatetime = newdate;
            }
            setData(dataarray)
          })
          .catch(error => {
            console.log(error);
          });
        }, 1800000);
          return () => clearInterval(interval);
  }, []);

  return (
  <MainCard title="Packing Wafer Line 2" secondary={<ButtonBack path={'/utils/packing-line2/table'} />}>
    <TabContext value={value}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <TabList onChange={handleChange} aria-label="lab API tabs example">
          <Tab label="Home" value="0" />
          <Tab label="B1" value="1" />
          <Tab label="B2" value="2" />
          <Tab label="B3" value="3" />
          <Tab label="B4" value="4" />
          <Tab label="A4" value="5" />
        </TabList>
      </Box>
      <TabPanel value="0">
         <DataGrid rows={data} columns={fieldtwo} loading={isLoading} slots={{ toolbar: GridToolbar }} />
      </TabPanel>
      <TabPanel value="1">
        <Grid container spacing={gridSpacing}>
          <DataGrid rows={data} columns={field} loading={isLoading} slots={{ toolbar: GridToolbar }} />
        </Grid>
      </TabPanel>
      <TabPanel value="2">
        <Grid container spacing={gridSpacing}>
          <DataGrid rows={data} columns={field} loading={isLoading} slots={{ toolbar: GridToolbar }} />
        </Grid>
      </TabPanel>
      <TabPanel value="3">
        <Grid container spacing={gridSpacing}>
          <DataGrid rows={data} columns={field} loading={isLoading} slots={{ toolbar: GridToolbar }} />
        </Grid>
      </TabPanel>
      <TabPanel value="4">
        <Grid container spacing={gridSpacing}>
          <DataGrid rows={data} columns={field} loading={isLoading} slots={{ toolbar: GridToolbar }} />
        </Grid>
      </TabPanel>
      <TabPanel value="5">
        <Grid container spacing={gridSpacing}>
          <DataGrid rows={data} columns={field} loading={isLoading} slots={{ toolbar: GridToolbar }} />
        </Grid>
      </TabPanel>
    </TabContext>
  </MainCard>
  )
};

export default TablePackingL2;