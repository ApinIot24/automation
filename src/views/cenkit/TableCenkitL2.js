// import * as React from 'react';
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

// ==============================|| Happy Coding ||============================== //

const TableCenkitL2 = () => {
  // const [value, setValue] = React.useState('0');
  const [data ,setData] = useState([]);
  const [field ] = useState([
    { field: 'id', headerName: 'No', width: 150 },
    { field: 'cntr_mixing', headerName: 'Mixing Counter', width: 150 },
    { field: 'status_mesin', headerName: 'Status Mesin', width: 150 },
    { field: 'temp_cooling', headerName: 'Suhu Jacketing', width: 150 },
    { field: 'temp_water', headerName: 'Suhu Air Adonan', width: 150 },
    { field: 'realdatetime', headerName: 'Date', width: 150 },
    { field: 'jam', headerName: 'Time', width: 150 }
  ]);
  const [urlapi] = useState({
    cenkit_l2_all : 'http://10.37.12.17:3000/cenkit_l2_all',
    urlp2 : 'table',

  })
  const [isLoading , setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
    axios.get(urlapi.cenkit_l2_all)
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
        axios.get(urlapi.cenkit_l2_all)
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
  <MainCard title="Central Kitchen L2" secondary={<ButtonBack path={'/cenkit/central-kitchen2/table'} />}>
      <Grid container spacing={gridSpacing}>
        <DataGrid rows={data} columns={field} loading={isLoading} slots={{ toolbar: GridToolbar }} />
      </Grid>
  </MainCard>
  )
};

export default TableCenkitL2;