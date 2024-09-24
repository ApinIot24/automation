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

const TableCkWafer = () => {
  // const [value, setValue] = React.useState('0');
  const [data ,setData] = useState([]);
  const [field ] = useState([
    { field: 'id', headerName: 'No', width: 150 },
    { field: 'tegangan', headerName: 'Tegangan', width: 150 },
    { field: 'arus', headerName: 'Arus', width: 150 },
    { field: 'kw', headerName: 'Daya', width: 150 },
    { field: 'realdatetime', headerName: 'Date', width: 150 },
    { field: 'jam', headerName: 'Time', width: 150 }
  ]);
  // const [fieldtwo] = useState([
  //   { field: 'id', headerName: 'No', width: 150 },
  //   { field: 'cntr_bandet', headerName: 'Counter Banded', width: 150 },
  //   { field: 'cntr_carton', headerName: 'Counter Carton', width: 150 },
  //   { field: 'realdatetime', headerName: 'Date', width: 150 },
  //   { field: 'jam', headerName: 'Time', width: 150 }
  // ])
//   const convertToCSV = (objArray) => {
//     const array = typeof objArray !== 'object' ? JSON.parse(objArray) : objArray;
//     let str = '';

//     for (let i = 0; i < array.length; i++) {
//       let line = '';
//       for (let index in array[i]) {
//         if (line !== '') line += ',';

//         line += array[i][index];
//       }
//       str += line + '\r\n';
//     }
//     return str;
//   };

//   const downloadCSV = () => {
//     const csvData = new Blob([convertToCSV(data)], { type: 'text/csv' });
//     const csvURL = URL.createObjectURL(csvData);
//     const link = document.createElement('a');
//     link.href = csvURL;
//     link.download = `report_utility.csv`;
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };
  const [urlapi] = useState({
    packingb3 : 'http://10.37.12.17:3000/packing_b3',
    packingb1 : 'http://10.37.12.17:3000/packing_b1',
    packingl2 : 'http://10.37.12.17:3000/packing_l2',
    packingb2 : 'http://10.37.12.17:3000/packing_b2',
    packingb4 : 'http://10.37.12.17:3000/packing_b4',
    packinga4 : 'http://10.37.12.17:3000/packing_a4',
    util_ckwafer_all : 'http://10.37.12.17:3000/util_cenkit_all',
    urlp2 : 'table',
    grapikb1 : 'http://10.37.12.17:3000/shift1_b1',
    grapikl2 : 'http://10.37.12.17:3000/shift1_l2',
    grapikb2 : 'http://10.37.12.17:3000/shift1_b2',
    grapikb3 : 'http://10.37.12.17:3000/shift1_b3',
    grapikb4 : 'http://10.37.12.17:3000/shift1_b4',
    grapika4 : 'http://10.37.12.17:3000/shift1_a4'

  })
  const [isLoading , setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
    axios.get(urlapi.util_ckwafer_all)
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
        //  downloadCSV()
        }, 10000);
          return () => clearInterval(interval);
  }, []);

  return (
  <MainCard title="Utility Listri CK Wafer" secondary={<ButtonBack path={'/utility/listrik/ckwafer/table'} />}>
        <Grid container spacing={gridSpacing}>
          <DataGrid rows={data} columns={field} loading={isLoading} slots={{ toolbar: GridToolbar }} />
        </Grid>
  </MainCard>
  )
};

export default TableCkWafer;