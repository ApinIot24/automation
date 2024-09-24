import * as React from 'react';
import PropTypes from 'prop-types';
import { useEffect,useState} from 'react';
import { styled } from '@mui/material/styles';
import {  Box, Grid } from '@mui/material';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import MainCard from 'ui-component/cards/MainCard';
import SkeletonEarningCard from 'ui-component/cards/Skeleton/EarningCard';
import { LineChart } from '@mui/x-charts/LineChart';
import axios from 'axios';

const CardWrapper = styled(MainCard)(({ theme }) => ({
    backgroundColor: 'whitesmoke',
    color: '#fff',
    overflow: 'hidden',
    position: 'relative',
    '&:after': {
      content: '""',
      position: 'absolute',
      width: 15,
      height: 480,
      background: '#7C4700',
      top: -85,
      left: -5,
      [theme.breakpoints.down('sm')]: {
        top: -105,
        left: -140
      }
    }
}));

// ===========================|| DASHBOARD DEFAULT - EARNING CARD ||=========================== //

const Daya = ({ isLoading,url,label }) => {
  const [value, setValue] = React.useState('http://10.37.12.17:3000/shift1_');
  const [l1 ,setL1] = useState([0]);
  const [l2 ,setL2] = useState([0]);
  const [l3 ,setL3] = useState([0]);
  const [avg ,setAvg] = useState([0]);
//    const [counternihdua , setCountertwo] = useState([0]);
  const [dinamisurl , setUrlnya] = useState(url);

  const handleChange = (event, newValue) => {
    setValue(newValue)
  let counts = [];
  let countss = [];
  let countsss = [];
  let countssss = [];
  // let countss = [];
  axios.get(newValue + label + 'R' )
    .then(response => {
      var datalasts = response.data;
      if(datalasts.length===0){
        setL1([0]);
      }else{
        for (let index = 0; index < datalasts.length; index++) {
          counts.push(datalasts[index].kw)
        }
        setL1(counts);
      }
    })
    axios.get(newValue + label + 'S')
    .then(response => {
      var datalasts = response.data;
      if(datalasts.length===0){
        setL2([0]);
      }else{
        for (let index = 0; index < datalasts.length; index++) {
          countss.push(datalasts[index].kw)
        }
        setL2(countss);
      }
    })
    axios.get(newValue + label + 'T')
    .then(response => {
      var datalasts = response.data;
      if(datalasts.length===0){
        setL3([0]);
      }else{
        for (let index = 0; index < datalasts.length; index++) {
          countsss.push(datalasts[index].kw)
        }
        setL3(countsss);
      }
    })
    axios.get(newValue + label + 'AVG')
    .then(response => {
      var datalasts = response.data;
      if(datalasts.length===0){
        setAvg([0]);
      }else{
        for (let index = 0; index < datalasts.length; index++) {
          countssss.push(datalasts[index].kw)
        }
        setAvg(countssss);
      }
    })
    .catch(error => {
      console.log(error);
    });
  setUrlnya(newValue + label)
    
  }

  useEffect(() => {
    let counts = [];
    let countss = [];
    let countsss = [];
    let countssss = [];
      axios.get(url + 'R')
        .then(response => {
          var datalasts = response.data;
          if(datalasts.length===0){
            setL1([0]);
          }else{
            for (let index = 0; index < datalasts.length; index++) {
              counts.push(datalasts[index].kw)
            }
            setL1(counts);
          }
        })
        .catch(error => {
          console.log(error);
        });
        axios.get(url + 'S')
        .then(response => {
          var datalasts = response.data;
          if(datalasts.length===0){
            setL2([0]);
          }else{
            for (let index = 0; index < datalasts.length; index++) {
              countss.push(datalasts[index].kw)
            }
            setL2(countss);
          }
        })
        .catch(error => {
          console.log(error);
        });
        axios.get(url + 'T')
        .then(response => {
          var datalasts = response.data;
          if(datalasts.length===0){
            setL3([0]);
          }else{
            for (let index = 0; index < datalasts.length; index++) {
              countsss.push(datalasts[index].kw)
            }
            setL3(countsss);
          }
        })
        .catch(error => {
          console.log(error);
        });
        axios.get(url + 'AVG')
        .then(response => {
          var datalasts = response.data;
          if(datalasts.length===0){
            setAvg([0]);
          }else{
            for (let index = 0; index < datalasts.length; index++) {
              countssss.push(datalasts[index].kw)
            }
            setAvg(countssss);
          }
        })
        .catch(error => {
          console.log(error);
        });
    const interval = setInterval(() => {
      let count = [];
      axios.get(dinamisurl)
        .then(response => {
          var datalast = response.data;
          for (let index = 0; index < datalast.length; index++) {
            count.push(datalast[index].kw)
          }
          setKw(count);
        })
        .catch(error => {
          console.log(error);
        });
      }, 1800000);
        return () => clearInterval(interval);
    }, []);

  return (
    <>
      {isLoading ? (
        <SkeletonEarningCard />
      ) : (
        <CardWrapper border={false} content={false}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList onChange={handleChange} aria-label="lab API tabs example">
                <Tab label="Shift 1" value="http://10.37.12.17:3000/shift1_" />
                <Tab label="Shift 2" value="http://10.37.12.17:3000/shift2_" />
                <Tab label="Shift 3" value="http://10.37.12.17:3000/shift3_" />
              </TabList>
            </Box>
            <TabPanel value="http://10.37.12.17:3000/shift1_">
              <Grid container direction="column">
              <Grid item>
                  <Grid container justifyContent="space-between">
                    <Grid item>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item sx={{ mb: 0.75 , mt : -3}}>
                  <Grid container alignItems="center">
                    <Grid item xs={12}> 
                      <Grid container alignItems="center">
                        <Grid item> 
                            <LineChart
                                 xAxis={[{ scaleType: 'band', 
                                 data: ['07.00','07.30','08.00','08.30','09.00','09.30','10.00','10.30','11.00','11.30','12.00','12.30','13.00','13.30','14.00','14.30','14.59']}]}
                                series={[
                                    {
                                      id: '1',
                                      label: 'Daya L1(Kw)',
                                      curve: "linear",
                                      data: l1,
                                    },
                                    {
                                      id: '2',
                                      label: 'Daya L2(Kw)',
                                      curve: "linear",
                                      data: l2,
                                    },
                                    {
                                      id: '3',
                                      label: 'Daya L3(Kw)',
                                      curve: "linear",
                                      data: l3,
                                    },
                                    {
                                      id: '4',
                                      label: 'Daya Total(Kw)',
                                      curve: "linear",
                                      data: avg,
                                    },
                                ]}
                                height={300}
                                width={450}
                            />
                        </Grid>  
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </TabPanel>
            <TabPanel value="http://10.37.12.17:3000/shift2_">
              <Grid container direction="column">
                <Grid item>
                    <Grid container justifyContent="space-between">
                      <Grid item>
                      </Grid>
                  </Grid>
                </Grid>
                <Grid item sx={{ mb: 0.75 , mt : -3}}>
                  <Grid container alignItems="center">
                    <Grid item xs={12}> 
                      <Grid container alignItems="center">
                        <Grid item> 
                            <LineChart
                                xAxis={[{ scaleType: 'band', 
                                data: ['15.00','15.30','16.00','16.30','17.00','17.30','18.00','18.30','19.00','19.30','20.00','20.30','21.00','21.30','22.00','22.30','22.59'] }]}
                                series={[
                                  {
                                    id: '1',
                                    label: 'Daya L1(Kw)',
                                    curve: "linear",
                                    data: l1,
                                  },
                                  {
                                    id: '2',
                                    label: 'Daya L2(Kw)',
                                    curve: "linear",
                                    data: l2,
                                  },
                                  {
                                    id: '3',
                                    label: 'Daya L3(Kw)',
                                    curve: "linear",
                                    data: l3,
                                  },
                                  {
                                    id: '4',
                                    label: 'Daya Avg(Kw)',
                                    curve: "linear",
                                    data: avg,
                                  },
                                ]}
                                height={300}
                                width={450}
                            />
                        </Grid>  
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </TabPanel>
            <TabPanel value="http://10.37.12.17:3000/shift3_">
                <Grid container direction="column">
                    <Grid item>
                        <Grid container justifyContent="space-between">
                        <Grid item>
                        </Grid>
                    </Grid>
                    </Grid>
                    <Grid item sx={{ mb: 0.75 , mt : -3}}>
                    <Grid container alignItems="center">
                        <Grid item xs={12}> 
                            <Grid container alignItems="center">
                                <Grid item> 
                                    <LineChart
                                       xAxis={[{ scaleType: 'band', 
                                       data: ['23.00','23.30','24.00','00.30','01.00','01.30','02.00','02.30','03.00','03.30','04.00','04.30','05.00','05.30','06.00','06.30','06.59'] }]}
                                        series={[
                                          {
                                            id: '1',
                                            label: 'Daya L1(Kw)',
                                            curve: "linear",
                                            data: l1,
                                          },
                                          {
                                            id: '2',
                                            label: 'Daya L2(Kw)',
                                            curve: "linear",
                                            data: l2,
                                          },
                                          {
                                            id: '3',
                                            label: 'Daya L3(Kw)',
                                            curve: "linear",
                                            data: l3,
                                          },
                                          {
                                            id: '4',
                                            label: 'Daya Avg(Kw)',
                                            curve: "linear",
                                            data: avg,
                                          },
                                        ]}
                                        height={300}
                                        width={450}
                                    />
                                </Grid>  
                            </Grid>
                        </Grid>
                    </Grid>
                    </Grid>
                </Grid>
            </TabPanel>
          </TabContext>
        </CardWrapper>
      )}
    </>
  );
};

Daya.propTypes = {
  isLoading: PropTypes.bool
};

export default Daya;