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
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import ButtonBack from 'ui-component/ButtonBack';

// ==============================|| Happy Coding ||============================== //

const TablePackingL6 = () => {
  const [value, setValue] = React.useState('packing_l6_daily');
  const [valuedate, setValueDate] = useState(dayjs(new Date()));
  const [data ,setData] = useState([]);
  const [field ] = useState([
    { field: 'id', headerName: 'No', width: 150 },
    { field: 'daily', headerName: 'Time', width: 150 },
    { field: 'counter', headerName: 'Counter', width: 150 },
    { field: 'tanggal', headerName: 'Date', width: 150 }
  ]);
  const [fieldtwo] = useState([
    { field: 'id', headerName: 'No', width: 150 },
    { field: 'daily', headerName: 'Time', width: 150 },
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
    packingl6_all : 'http://10.37.12.17:3000/packing_l6_all',
    packingl6_daily : 'http://10.37.12.17:3000/packing_l6_daily',
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
    let day = ['Shift 1' , 'Shift 2','Shift 3','Total'];
    if(newValue=='packing_l6_daily'){
      axios.get(urlapi.packingl6)
      .then(response => {
        var dataolah = response.data;
        var jamnya = dataolah[0].jam.replace(/\D/g,"");
        let jamnih = 0;
        if(jamnya.length===3){
          jamnih = jamnya.substring(0,2)
        }else{
          jamnih = jamnya.substring(0,3)
        }
        console.log("DATA", jamnih)
        let objects = [];  
        if (jamnih < 150 ) {
          objects[0] = {};
          objects[0].id = 0 + 1;
          objects[0].daily = day[0]
          objects[0].cntr_bandet = dataolah[0].cntr_bandet 
          objects[0].cntr_carton = dataolah[0].cntr_carton
          objects[0].tanggal = new Date(dataolah[0].realdatetime).toLocaleDateString();
          objects[1] = {};
          objects[1].id = 1 + 1;
          objects[1].daily = day[1]
          objects[1].cntr_bandet = 0 
          objects[1].cntr_carton = 0
          objects[1].tanggal = new Date(dataolah[0].realdatetime).toLocaleDateString();
          objects[2] = {};
          objects[2].id = 2 + 1;
          objects[2].daily = day[2]
          objects[2].cntr_bandet = 0 
          objects[2].cntr_carton = 0
          objects[2].tanggal = new Date(dataolah[0].realdatetime).toLocaleDateString();
          objects[3] = {};
          objects[3].id = 3 + 1;
          objects[3].daily = day[3]
          objects[3].cntr_bandet = dataolah[0].cntr_bandet 
          objects[3].cntr_carton = dataolah[0].cntr_carton
          objects[3].tanggal = new Date(dataolah[0].realdatetime).toLocaleDateString();
          setData(objects)
        }else{
          axios.get(urlapi.packingl6_daily)
            .then(response => {
                var dataarray = response.data;
                let objects = [];
                objects[0] = {};
                objects[0].id = 0 + 1;
                objects[0].daily = day[0]
                objects[0].cntr_bandet = dataarray[0].cntr_bandet 
                objects[0].cntr_carton = dataarray[0].cntr_carton
                objects[0].tanggal = new Date(dataolah[0].realdatetime).toLocaleDateString();
                objects[1] = {};
                objects[1].id = 1 + 1;
                objects[1].daily = day[1]
                objects[1].cntr_bandet = dataolah[0].cntr_bandet 
                objects[1].cntr_carton = dataolah[0].cntr_carton
                objects[1].tanggal = new Date(dataolah[0].realdatetime).toLocaleDateString();
                objects[2] = {};
                objects[2].id = 2 + 1;
                objects[2].daily = day[2]
                objects[2].cntr_bandet = 0 
                objects[2].cntr_carton = 0
                objects[2].tanggal = new Date(dataolah[0].realdatetime).toLocaleDateString();
                objects[3] = {};
                objects[3].id = 3 + 1;
                objects[3].daily = day[3]
                objects[3].cntr_bandet = dataarray[0].cntr_bandet + dataolah[0].cntr_bandet 
                objects[3].cntr_carton = dataarray[0].cntr_carton + dataolah[0].cntr_carton
                objects[3].tanggal = new Date(dataolah[0].realdatetime).toLocaleDateString();
                setData(objects)
            })
            .catch(error => {
              console.log(error);
            });
        }
      })
    } else if(newValue=='packing_b1_daily'){
      axios.get(urlapi.packingb1)
        .then(response => {
          var dataolah = response.data;
          var jamnya = dataolah[0].jam.replace(/\D/g,"");
          let jamnih = 0;
          if(jamnya.length===3){
            jamnih = jamnya.substring(0,2)
          }else{
            jamnih = jamnya.substring(0,3)
          }
          console.log("DATA", jamnih)
          let objects = [];  
          if (jamnih < 150 ) {
            objects[0] = {};
            objects[0].id = 0 + 1;
            objects[0].daily = day[0]
            objects[0].counter = dataolah[0].counter 
            objects[0].tanggal = new Date(dataolah[0].realdatetime).toLocaleDateString();
            objects[1] = {};
            objects[1].id = 1 + 1;
            objects[1].daily = day[1]
            objects[1].counter = 0 
            objects[1].tanggal = new Date(dataolah[0].realdatetime).toLocaleDateString();
            objects[2] = {};
            objects[2].id = 2 + 1;
            objects[2].daily = day[2]
            objects[2].counter = 0 
            objects[2].tanggal = new Date(dataolah[0].realdatetime).toLocaleDateString();
            objects[3] = {};
            objects[3].id = 3 + 1;
            objects[3].daily = day[3]
            objects[3].counter = dataolah[0].counter 
            objects[3].tanggal = new Date(dataolah[0].realdatetime).toLocaleDateString();
            setData(objects)
          }else{
            axios.get(`http://10.37.12.17:3000/${newValue}`)
              .then(response => {
                  var dataarray = response.data;
                  let objects = [];
                  objects[0] = {};
                  objects[0].id = 0 + 1;
                  objects[0].daily = day[0]
                  objects[0].counter = dataarray[0].counter 
                  objects[0].tanggal = new Date(dataolah[0].realdatetime).toLocaleDateString();
                  objects[1] = {};
                  objects[1].id = 1 + 1;
                  objects[1].daily = day[1]
                  objects[1].counter = dataolah[0].counter 
                  objects[1].tanggal = new Date(dataolah[0].realdatetime).toLocaleDateString();
                  objects[2] = {};
                  objects[2].id = 2 + 1;
                  objects[2].daily = day[2]
                  objects[2].counter = 0 
                  objects[2].tanggal = new Date(dataolah[0].realdatetime).toLocaleDateString();
                  objects[3] = {};
                  objects[3].id = 3 + 1;
                  objects[3].daily = day[3]
                  objects[3].counter = dataarray[0].counter + dataolah[0].counter
                  objects[3].tanggal = new Date(dataolah[0].realdatetime).toLocaleDateString();
                  setData(objects)
              })
              .catch(error => {
                console.log(error);
              });
          }
        })
        .catch(error => {
          console.log(error);
        });
    } else if(newValue=='packing_b2_daily'){
      axios.get(urlapi.packingb2)
      .then(response => {
        var dataolah = response.data;
        var jamnya = dataolah[0].jam.replace(/\D/g,"");
        let jamnih = 0;
        if(jamnya.length===3){
          jamnih = jamnya.substring(0,2)
        }else{
          jamnih = jamnya.substring(0,3)
        }
        console.log("DATA", jamnih)
        let objects = [];  
        if (jamnya < 150 ) {
          objects[0] = {};
          objects[0].id = 0 + 1;
          objects[0].daily = day[0]
          objects[0].counter = dataolah[0].counter 
          objects[0].tanggal = new Date(dataolah[0].realdatetime).toLocaleDateString();
          objects[1] = {};
          objects[1].id = 1 + 1;
          objects[1].daily = day[1]
          objects[1].counter = 0 
          objects[1].tanggal = new Date(dataolah[0].realdatetime).toLocaleDateString();
          objects[2] = {};
          objects[2].id = 2 + 1;
          objects[2].daily = day[2]
          objects[2].counter = 0 
          objects[2].tanggal = new Date(dataolah[0].realdatetime).toLocaleDateString();
          objects[3] = {};
          objects[3].id = 3 + 1;
          objects[3].daily = day[3]
          objects[3].counter = dataolah[0].counter 
          objects[3].tanggal = new Date(dataolah[0].realdatetime).toLocaleDateString();
          setData(objects)
        }else{
          axios.get(`http://10.37.12.17:3000/${newValue}`)
            .then(response => {
                var dataarray = response.data;
                let objects = [];
                objects[0] = {};
                objects[0].id = 0 + 1;
                objects[0].daily = day[0]
                objects[0].counter = dataarray[0].counter 
                objects[0].tanggal = new Date(dataolah[0].realdatetime).toLocaleDateString();
                objects[1] = {};
                objects[1].id = 1 + 1;
                objects[1].daily = day[1]
                objects[1].counter = dataolah[0].counter 
                objects[1].tanggal = new Date(dataolah[0].realdatetime).toLocaleDateString();
                objects[2] = {};
                objects[2].id = 2 + 1;
                objects[2].daily = day[2]
                objects[2].counter = 0
                objects[2].tanggal = new Date(dataolah[0].realdatetime).toLocaleDateString();
                objects[3] = {};
                objects[3].id = 3 + 1;
                objects[3].daily = day[3]
                objects[3].counter = dataarray[0].counter + dataolah[0].counter
                objects[3].tanggal = new Date(dataolah[0].realdatetime).toLocaleDateString();
                setData(objects)
            })
            .catch(error => {
              console.log(error);
            });
        }
      })
      .catch(error => {
        console.log(error);
      });
    } else if(newValue=='packing_b3_daily'){
      axios.get(urlapi.packingb3)
      .then(response => {
        var dataolah = response.data;
        var jamnya = dataolah[0].jam.replace(/\D/g,"");
        let jamnih = 0;
        if(jamnya.length===3){
          jamnih = jamnya.substring(0,2)
        }else{
          jamnih = jamnya.substring(0,3)
        }
        console.log("DATA", jamnih)
        let objects = [];  
        if (jamnih < 150 ) {
          objects[0] = {};
          objects[0].id = 0 + 1;
          objects[0].daily = day[0]
          objects[0].counter = dataolah[0].counter 
          objects[0].tanggal = new Date(dataolah[0].realdatetime).toLocaleDateString();
          objects[1] = {};
          objects[1].id = 1 + 1;
          objects[1].daily = day[1]
          objects[1].counter = 0 
          objects[1].tanggal = new Date(dataolah[0].realdatetime).toLocaleDateString();
          objects[2] = {};
          objects[2].id = 2 + 1;
          objects[2].daily = day[2]
          objects[2].counter = 0 
          objects[2].tanggal = new Date(dataolah[0].realdatetime).toLocaleDateString();
          objects[3] = {};
          objects[3].id = 3 + 1;
          objects[3].daily = day[3]
          objects[3].counter = dataolah[0].counter 
          objects[3].tanggal = new Date(dataolah[0].realdatetime).toLocaleDateString();
          setData(objects)
        }else{
          axios.get(`http://10.37.12.17:3000/${newValue}`)
            .then(response => {
                var dataarray = response.data;
                let objects = [];
                objects[0] = {};
                objects[0].id = 0 + 1;
                objects[0].daily = day[0]
                objects[0].counter = dataarray[0].counter 
                objects[0].tanggal = new Date(dataolah[0].realdatetime).toLocaleDateString();
                objects[1] = {};
                objects[1].id = 1 + 1;
                objects[1].daily = day[1]
                objects[1].counter = dataolah[0].counter 
                objects[1].tanggal = new Date(dataolah[0].realdatetime).toLocaleDateString();
                objects[2] = {};
                objects[2].id = 2 + 1;
                objects[2].daily = day[2]
                objects[2].counter = 0 
                objects[2].tanggal = new Date(dataolah[0].realdatetime).toLocaleDateString();
                objects[3] = {};
                objects[3].id = 3 + 1;
                objects[3].daily = day[3]
                objects[3].counter = dataarray[0].counter + dataolah[0].counter
                objects[3].tanggal = new Date(dataolah[0].realdatetime).toLocaleDateString();
                setData(objects)
            })
            .catch(error => {
              console.log(error);
            });
        }
      })
      .catch(error => {
        console.log(error);
      });
    } else if(newValue=='packing_b4_daily'){
      axios.get(urlapi.packingb4)
      .then(response => {
        var dataolah = response.data;
        var jamnya = dataolah[0].jam.replace(/\D/g,"");
        let jamnih = 0;
        if(jamnya.length===3){
          jamnih = jamnya.substring(0,2)
        }else{
          jamnih = jamnya.substring(0,3)
        }
        console.log("DATA", jamnih)
        let objects = [];  
        if (jamnih < 150 ) {
          objects[0] = {};
          objects[0].id = 0 + 1;
          objects[0].daily = day[0]
          objects[0].counter = dataolah[0].counter 
          objects[0].tanggal = new Date(dataolah[0].realdatetime).toLocaleDateString();
          objects[1] = {};
          objects[1].id = 1 + 1;
          objects[1].daily = day[1]
          objects[1].counter = 0 
          objects[1].tanggal = new Date(dataolah[0].realdatetime).toLocaleDateString();
          objects[2] = {};
          objects[2].id = 2 + 1;
          objects[2].daily = day[2]
          objects[2].counter = 0 
          objects[2].tanggal = new Date(dataolah[0].realdatetime).toLocaleDateString();
          objects[3] = {};
          objects[3].id = 3 + 1;
          objects[3].daily = day[3]
          objects[3].counter = dataolah[0].counter 
          objects[3].tanggal = new Date(dataolah[0].realdatetime).toLocaleDateString();
          setData(objects)
        }else{
          axios.get(`http://10.37.12.17:3000/${newValue}`)
            .then(response => {
                var dataarray = response.data;
                let objects = [];
                objects[0] = {};
                objects[0].id = 0 + 1;
                objects[0].daily = day[0]
                objects[0].counter = dataarray[0].counter 
                objects[0].tanggal = new Date(dataolah[0].realdatetime).toLocaleDateString();
                objects[1] = {};
                objects[1].id = 1 + 1;
                objects[1].daily = day[1]
                objects[1].counter = dataolah[0].counter 
                objects[1].tanggal = new Date(dataolah[0].realdatetime).toLocaleDateString();
                objects[2] = {};
                objects[2].id = 2 + 1;
                objects[2].daily = day[2]
                objects[2].counter = 0 
                objects[2].tanggal = new Date(dataolah[0].realdatetime).toLocaleDateString();
                objects[3] = {};
                objects[3].id = 3 + 1;
                objects[3].daily = day[3]
                objects[3].counter = dataarray[0].counter + dataolah[0].counter
                objects[3].tanggal = new Date(dataolah[0].realdatetime).toLocaleDateString();
                setData(objects)
            })
            .catch(error => {
              console.log(error);
            });
        }
      })
      .catch(error => {
        console.log(error);
      });
    }else{
      axios.get(`http://10.37.12.17:3000/${newValue}`)
        .then(response => {
          var dataolah = response.data;
          var jamnya = dataolah[0].jam.replace(/\D/g,"");
          let jamnih = 0;
        if(jamnya.length===3){
          jamnih = jamnya.substring(0,2)
        }else{
          jamnih = jamnya.substring(0,3)
        }
        console.log("DATA", jamnih)
          let objects = [];  
          if (jamnih < 150 ) {
            objects[0] = {};
            objects[0].id = 0 + 1;
            objects[0].daily = day[0]
            objects[0].cntr_bandet = dataolah[0].counter 
            objects[0].tanggal = new Date(dataolah[0].realdatetime).toLocaleDateString();
            objects[1] = {};
            objects[1].id = 1 + 1;
            objects[1].daily = day[1]
            objects[1].cntr_bandet = 0 
            objects[1].cntr_carton = 0
            objects[1].tanggal = new Date(dataolah[0].realdatetime).toLocaleDateString();
            objects[2] = {};
            objects[2].id = 2 + 1;
            objects[2].daily = day[2]
            objects[2].cntr_bandet = 0 
            objects[2].cntr_carton = 0
            objects[2].tanggal = new Date(dataolah[0].realdatetime).toLocaleDateString();
            objects[3] = {};
            objects[3].id = 3 + 1;
            objects[3].daily = day[3]
            objects[3].cntr_bandet = dataolah[0].counter 
            objects[3].tanggal = new Date(dataolah[0].realdatetime).toLocaleDateString();
            setData(objects)
          }else{
            axios.get(`http://10.37.12.17:3000/${newValue}`)
              .then(response => {
                  var dataarray = response.data;
                  let objects = [];
                  objects[0] = {};
                  objects[0].id = 0 + 1;
                  objects[0].daily = day[0]
                  objects[0].cntr_bandet = dataarray[0].counter 
                  objects[0].tanggal = new Date(dataolah[0].realdatetime).toLocaleDateString();
                  objects[1] = {};
                  objects[1].id = 1 + 1;
                  objects[1].daily = day[1]
                  objects[1].cntr_bandet = dataolah[0].counter 
                  objects[1].tanggal = new Date(dataolah[0].realdatetime).toLocaleDateString();
                  objects[2] = {};
                  objects[2].id = 2 + 1;
                  objects[2].daily = day[2]
                  objects[2].cntr_bandet = 0 
                  objects[2].cntr_carton = 0
                  objects[2].tanggal = new Date(dataolah[0].realdatetime).toLocaleDateString();
                  objects[3] = {};
                  objects[3].id = 3 + 1;
                  objects[3].daily = day[3]
                  objects[3].cntr_bandet = dataarray[0].counter + dataolah[0].counter
                  objects[3].tanggal = new Date(dataolah[0].realdatetime).toLocaleDateString();
                  setData(objects)
              })
              .catch(error => {
                console.log(error);
              });
          }
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
      let day = ['Shift 1' , 'Shift 2','Shift 3','Total'];
      axios.get(urlapi.packingl6)
      .then(response => {
        var dataolah = response.data;
        var jamnya = dataolah[0].jam.replace(/\D/g,"");
        let jamnih = 0;
        if(jamnya.length===3){
          jamnih = jamnya.substring(0,2)
        }else{
          jamnih = jamnya.substring(0,3)
        }
        console.log("DATA", jamnih)
        let objects = [];  
        if (jamnih < 150 ) {
          objects[0] = {};
          objects[0].id = 0 + 1;
          objects[0].daily = day[0]
          objects[0].cntr_bandet = dataolah[0].cntr_bandet 
          objects[0].cntr_carton = dataolah[0].cntr_carton
          objects[0].tanggal = new Date(dataolah[0].realdatetime).toLocaleDateString();
          objects[1] = {};
          objects[1].id = 1 + 1;
          objects[1].daily = day[1]
          objects[1].cntr_bandet = 0 
          objects[1].cntr_carton = 0
          objects[1].tanggal = new Date(dataolah[0].realdatetime).toLocaleDateString();
          objects[2] = {};
          objects[2].id = 2 + 1;
          objects[2].daily = day[2]
          objects[2].cntr_bandet = 0 
          objects[2].cntr_carton = 0
          objects[2].tanggal = new Date(dataolah[0].realdatetime).toLocaleDateString();
          objects[3] = {};
          objects[3].id = 3 + 1;
          objects[3].daily = day[3]
          objects[3].cntr_bandet = dataolah[0].cntr_bandet 
          objects[3].cntr_carton = dataolah[0].cntr_carton
          objects[3].tanggal = new Date(dataolah[0].realdatetime).toLocaleDateString();
          console.log("mASUK SINI")
          setData(objects)
        }else{
          axios.get(urlapi.packingl6_daily)
            .then(response => {
                var dataarray = response.data;
                let objects = [];
                objects[0] = {};
                objects[0].id = 0 + 1;
                objects[0].daily = day[0]
                objects[0].cntr_bandet = dataarray[0].cntr_bandet 
                objects[0].cntr_carton = dataarray[0].cntr_carton
                objects[0].tanggal = new Date(dataolah[0].realdatetime).toLocaleDateString();
                objects[1] = {};
                objects[1].id = 1 + 1;
                objects[1].daily = day[1]
                objects[1].cntr_bandet = dataolah[0].cntr_bandet 
                objects[1].cntr_carton = dataolah[0].cntr_carton
                objects[1].tanggal = new Date(dataolah[0].realdatetime).toLocaleDateString();
                objects[2] = {};
                objects[2].id = 2 + 1;
                objects[2].daily = day[2]
                objects[2].cntr_bandet = 0 
                objects[2].cntr_carton = 0
                objects[2].tanggal = new Date(dataolah[0].realdatetime).toLocaleDateString();
                objects[3] = {};
                objects[3].id = 3 + 1;
                objects[3].daily = day[3]
                objects[3].cntr_bandet = dataarray[0].cntr_bandet + dataolah[0].cntr_bandet 
                objects[3].cntr_carton = dataarray[0].cntr_carton + dataolah[0].cntr_carton
                objects[3].tanggal = new Date(dataolah[0].realdatetime).toLocaleDateString();
                setData(objects)
            })
            .catch(error => {
              console.log(error);
            });
        }
      })
      .catch(error => {
        console.log(error);
      });
         
    const interval = setInterval(() => {
        // let ttime = []
        axios.get(urlapi.packingl6)
          .then(response => {
            var dataolah = response.data;
            var jamnya = dataolah[0].jam.replace(/\D/g,"");
            let jamnih = 0;
            if(jamnya.length===3){
              jamnih = jamnya.substring(0,2)
            }else{
              jamnih = jamnya.substring(0,3)
            }
            console.log("DATA", jamnih)
            let objects = [];  
            if (jamnih < 150 ) {
              objects[0] = {};
              objects[0].id = 0 + 1;
              objects[0].daily = day[0]
              objects[0].cntr_bandet = dataolah[0].cntr_bandet 
              objects[0].cntr_carton = dataolah[0].cntr_carton
              objects[0].tanggal = new Date(dataolah[0].realdatetime).toLocaleDateString();
              objects[1] = {};
              objects[1].id = 1 + 1;
              objects[1].daily = day[1]
              objects[1].cntr_bandet = 0 
              objects[1].cntr_carton = 0
              objects[1].tanggal = new Date(dataolah[0].realdatetime).toLocaleDateString();
              objects[2] = {};
              objects[2].id = 2 + 1;
              objects[2].daily = day[2]
              objects[2].cntr_bandet = 0 
              objects[2].cntr_carton = 0
              objects[2].tanggal = new Date(dataolah[0].realdatetime).toLocaleDateString();
              objects[3] = {};
              objects[3].id = 3 + 1;
              objects[3].daily = day[3]
              objects[3].cntr_bandet = dataolah[0].cntr_bandet 
              objects[3].cntr_carton = dataolah[0].cntr_carton
              objects[3].tanggal = new Date(dataolah[0].realdatetime).toLocaleDateString();
              setData(objects)
            }else{
              axios.get(urlapi.packingl6_daily)
                .then(response => {
                    var dataarray = response.data;
                    let objects = [];
                    objects[0] = {};
                    objects[0].id = 0 + 1;
                    objects[0].daily = day[0]
                    objects[0].cntr_bandet = dataarray[0].cntr_bandet 
                    objects[0].cntr_carton = dataarray[0].cntr_carton
                    objects[0].tanggal = new Date(dataolah[0].realdatetime).toLocaleDateString();
                    objects[1] = {};
                    objects[1].id = 1 + 1;
                    objects[1].daily = day[1]
                    objects[1].cntr_bandet = dataolah[0].cntr_bandet 
                    objects[1].cntr_carton = dataolah[0].cntr_carton
                    objects[1].tanggal = new Date(dataolah[0].realdatetime).toLocaleDateString();
                    objects[2] = {};
                    objects[2].id = 2 + 1;
                    objects[2].daily = day[2]
                    objects[2].cntr_bandet = 0 
                    objects[2].cntr_carton = 0
                    objects[2].tanggal = new Date(dataolah[0].realdatetime).toLocaleDateString();
                    objects[3] = {};
                    objects[3].id = 3 + 1;
                    objects[3].daily = day[3]
                    objects[3].cntr_bandet = dataarray[0].cntr_bandet + dataolah[0].cntr_bandet 
                    objects[3].cntr_carton = dataarray[0].cntr_carton + dataolah[0].cntr_carton
                    objects[3].tanggal = new Date(dataolah[0].realdatetime).toLocaleDateString();
                    setData(objects)
                })
                .catch(error => {
                  console.log(error);
                });
            }
          })
          .catch(error => {
            console.log(error);
          });
         
        //   setTime(ttime);
        }, 1800000);
          return () => clearInterval(interval);
  }, []);

  return (
  <MainCard title="Packing Wafer Line 7" secondary={<ButtonBack path={'/utils/packing-Line7/table'} />} >
    <TabContext value={value}>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12} sm={10}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList onChange={handleChange} aria-label="lab API tabs example">
                <Tab label="Home" value="packing_l6_daily" />
                <Tab label="B1" value="packing_b1_daily" />
                <Tab label="B2" value="packing_b2_daily" />
                <Tab label="B3" value="packing_b3_daily" />
                <Tab label="B4" value="packing_b4_daily" />
                <Tab label="A4" value="packing_a4_daily" />
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
                  var datenyar = new Date(newValue);
                  var datestring = datenyar.getFullYear()  + "-0" + (datenyar.getMonth()+1) + "-" + datenyar.getDate() 
                  let day = ['Shift 1' , 'Shift 2','Shift 3','Total'];
                  console.log("Tanggal" , datestring)
                  if (value==='packing_l6_daily') {
                    axios.get(`http://10.37.12.17:3000/packing_l6_daily/date/${datestring}`)
                    .then(response => {
                      var dataolah = response.data;
                      console.log("Tanggal" , dataolah)
                      let objects = [];  
                      objects[0] = {};
                      objects[0].id = 0 + 1;
                      objects[0].daily = day[0]
                      objects[0].cntr_bandet = dataolah[0].cntr_bandet 
                      objects[0].cntr_carton = dataolah[0].cntr_carton
                      objects[0].tanggal = new Date(newValue).toLocaleDateString();
                      objects[1] = {};
                      objects[1].id = 1 + 1;
                      objects[1].daily = day[1]
                      objects[1].cntr_bandet = dataolah[1].cntr_bandet 
                      objects[1].cntr_carton = dataolah[1].cntr_carton
                      objects[1].tanggal = new Date(newValue).toLocaleDateString();
                      objects[2] = {};
                      objects[2].id = 2 + 1;
                      objects[2].daily = day[2]
                      objects[2].cntr_bandet = dataolah[2].cntr_bandet
                      objects[2].cntr_carton = dataolah[2].cntr_carton
                      objects[2].tanggal = new Date(newValue).toLocaleDateString();
                      objects[3] = {};
                      objects[3].id = 3 + 1;
                      objects[3].daily = day[3]
                      objects[3].cntr_bandet = dataolah[0].cntr_bandet + dataolah[1].cntr_bandet + dataolah[2].cntr_bandet
                      objects[3].cntr_carton = dataolah[0].cntr_carton + dataolah[1].cntr_carton + dataolah[2].cntr_carton
                      objects[3].tanggal = new Date(newValue).toLocaleDateString();
                      setData(objects)
                    })
                    .catch(error => {
                      console.log(error);
                    });
                  } else {
                    axios.get(`http://10.37.12.17:3000/${value}/date/${datestring}`)
                      .then(response => {
                        var dataolah = response.data;
                        let objects = [];  
                        objects[0] = {};
                        objects[0].id = 0 + 1;
                        objects[0].daily = day[0]
                        objects[0].counter = dataolah[0].counter 
                        objects[0].tanggal = new Date(newValue).toLocaleDateString();
                        objects[1] = {};
                        objects[1].id = 1 + 1;
                        objects[1].daily = day[1]
                        objects[1].counter = dataolah[1].counter 
                        objects[1].tanggal = new Date(newValue).toLocaleDateString();
                        objects[2] = {};
                        objects[2].id = 2 + 1;
                        objects[2].daily = day[2]
                        objects[2].counter = dataolah[2].counter
                        objects[2].tanggal = new Date(newValue).toLocaleDateString();
                        objects[3] = {};
                        objects[3].id = 3 + 1;
                        objects[3].daily = day[3]
                        objects[3].counter = dataolah[0].counter + dataolah[1].counter + dataolah[2].counter
                        objects[3].tanggal = new Date(newValue).toLocaleDateString();
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
      <TabPanel value="packing_l6_daily">
         <DataGrid rows={data} columns={fieldtwo} loading={isLoading} slots={{ toolbar: GridToolbar }} />
      </TabPanel>
      <TabPanel value="packing_b1_daily">
        <Grid container spacing={gridSpacing}>
          <DataGrid rows={data} columns={field} loading={isLoading} slots={{ toolbar: GridToolbar }} />
        </Grid>
      </TabPanel>
      <TabPanel value="packing_b2_daily">
        <Grid container spacing={gridSpacing}>
          <DataGrid rows={data} columns={field} loading={isLoading} slots={{ toolbar: GridToolbar }} />
        </Grid>
      </TabPanel>
      <TabPanel value="packing_b3_daily">
        <Grid container spacing={gridSpacing}>
          <DataGrid rows={data} columns={field} loading={isLoading} slots={{ toolbar: GridToolbar }} />
        </Grid>
      </TabPanel>
      <TabPanel value="packing_b4_daily">
        <Grid container spacing={gridSpacing}>
          <DataGrid rows={data} columns={field} loading={isLoading} slots={{ toolbar: GridToolbar }} />
        </Grid>
      </TabPanel>
      <TabPanel value="packing_a4_daily">
        <Grid container spacing={gridSpacing}>
          <DataGrid rows={data} columns={field} loading={isLoading} slots={{ toolbar: GridToolbar }} />
        </Grid>
      </TabPanel>
    </TabContext>
  </MainCard>
  )
};

export default TablePackingL6;