import * as React from 'react';
import PropTypes from 'prop-types';
import { useEffect , useState} from 'react';
import { styled } from '@mui/material/styles';
import {  Box, Grid , Typography ,Stack,Avatar} from '@mui/material';
import { ResponsiveChartContainer } from '@mui/x-charts/ResponsiveChartContainer';
import { BarPlot } from '@mui/x-charts/BarChart';
import { ChartsXAxis } from '@mui/x-charts/ChartsXAxis';
import { ChartsTooltip, ChartsYAxis } from '@mui/x-charts';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import MainCard from 'ui-component/cards/MainCard';
import SkeletonEarningCard from 'ui-component/cards/Skeleton/EarningCard';
import { blue } from '@mui/material/colors';
import axios from 'axios';

const CardWrapper = styled(MainCard)(({ theme }) => ({
    backgroundColor: 'whitesmoke',
    color: '#fff',
    overflow: 'hidden',
    marginRight : 4,
    position: 'relative',
    '&:after': {
      content: '""',
      position: 'absolute',
      width: 15,
      height: 480,
      background: blue[300],
      top: -85,
      left: -5,
      [theme.breakpoints.down('sm')]: {
        top: -105,
        left: -140
      }
    }
}));

// ===========================|| DASHBOARD DEFAULT - EARNING CARD ||=========================== //

const GrafekBoxDashboard = ({ isLoading ,url ,label ,urltwo , labeltwo }) => {
    const [value, setValue] = React.useState('http://10.37.12.17:3000/shift1_');
   const [counternih ,  setCounter] = useState([0]);
   const [counternihdua , setCountertwo] = useState([0]);
   const [dinamisurl , setUrlnya] = useState(url);                                                                                                                                  
   const [dinamisurltwo , setUrlTWOnya] = useState(urltwo);

  const handleChange = (event, newValue) => {
    setValue(newValue)
    let counts = [];
    let countss = [];
    axios.get(newValue + label)
      .then(response => {
        var datalasts = response.data;
        if(datalasts.length===0){
          setCounter([0]);
        }else{
          for (let index = 0; index < datalasts.length; index++) {
            counts.push(datalasts[index].cntr_carton)
          }
          setCounter(counts);
        }
      })
      .catch(error => {
        console.log(error);
      });
      axios.get(newValue + labeltwo)
      .then(response => {
        var datalastss = response.data;
        if(datalastss.length===0){
          setCountertwo([0]);
          }else{
            for (let index = 0; index < datalastss.length; index++) {
              countss.push(datalastss[index].cntr_carton)
            }
            setCountertwo(countss);
          }
      })
      .catch(error => {
        console.log(error);
      });
    setUrlnya(newValue + label)
    setUrlTWOnya(newValue + labeltwo)
  }

  useEffect(() => {
    let counts = [];
      axios.get(url)
        .then(response => {
          var datalasts = response.data;
          if(datalasts.length===0){
            setCounter([0]);
          }else{
            for (let index = 0; index < datalasts.length; index++) {
              counts.push(datalasts[index].cntr_carton)
            }
            setCounter(counts);
          }
        })
        .catch(error => {
          console.log(error);
        });
        let countss = [];
        axios.get(urltwo)
          .then(response => {
            var datalastss = response.data;
            if(datalastss.length===0){
              setCountertwo([0]);
              }else{
                for (let index = 0; index < datalastss.length; index++) {
                  // ttimes.push(datalasts[index].jam)
                  countss.push(datalastss[index].cntr_carton)
                }
                // console.log("DATA" , count);
                // setTime(ttimes);
                setCountertwo(countss);
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
            count.push(datalast[index].cntr_carton)
          }
          setCounter(count);
        })
        .catch(error => {
          console.log(error);
        });
        let countss = [];
        axios.get(dinamisurltwo)
          .then(response => {
            var datalastss = response.data;
            for (let index = 0; index < datalastss.length; index++) {
              countss.push(datalastss[index].cntr_carton)
            }
            setCountertwo(countss);
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
                      <Typography variant="h5">Grafik Counter Carton</Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item sx={{ mb: 0.75 , mt : -3}}>
                  <Box sx={{ width: '100%' }}>
                    <div>
                      <ResponsiveChartContainer
                        series={[
                          {
                            id: '1',
                            type : 'bar',
                            label: label,
                            data: counternih,
                            color : '#7C4700'
                            },
                            {
                                id: '2',
                                type : 'bar',
                                label: labeltwo,
                                data: counternihdua,
                                color : '#a52a2a'
                            }
                        ]}
                        // xAxis={[
                        //   {
                        //     data: ['A', 'B', 'C', 'D', 'E'],
                        //     scaleType: 'band',
                        //     id: 'x-axis-id',
                        //   },
                        // ]}
                        xAxis={[{ scaleType: 'band', 
                                    data: ['06.46','07.30','08.00','08.30','09.00','09.30','10.00','10.30','11.00','11.30','12.00','12.30','13.00','13.30','14.00','14.30','14.45']
                                    
                                    }]}
                        height={300}
                      >
                        <BarPlot />
                        <ChartsTooltip />
                        <ChartsXAxis />
                        <ChartsYAxis />
                      </ResponsiveChartContainer>
                    </div>
                  </Box>
                </Grid>
              </Grid>
            </TabPanel>
            <TabPanel value="http://10.37.12.17:3000/shift2_">
              <Grid container direction="column">
                <Grid item>
                    <Grid container justifyContent="space-between">
                      <Grid item>
                        <Typography variant="h5">Grafik Counter Carton</Typography>
                      </Grid>
                  </Grid>
                </Grid>
                <Grid item sx={{ mb: 0.75 , mt : -3}}>
                  <Box sx={{ width: '100%' }}>
                    <div>
                      <ResponsiveChartContainer
                      
                        series={[
                          {
                            id: '1',
                            type : 'bar',
                            label: label,
                            data: counternih,
                            color : '#7C4700'
                            },
                            {
                                id: '2',
                                type : 'bar',
                                label: labeltwo,
                                data: counternihdua,
                                color : '#a52a2a'
                            }
                        ]}
                        // xAxis={[
                        //   {
                        //     data: ['A', 'B', 'C', 'D', 'E'],
                        //     scaleType: 'band',
                        //     id: 'x-axis-id',
                        //   },
                        // ]}
                        
                        xAxis={[{ scaleType: 'band', 
                                    data: ['14.46','15.30','16.00','16.30','17.00','17.30','18.00','18.30','19.00','19.30','20.00','20.30','21.00','21.30','22.00','22.30','22.45']
                                    
                                    }]}
                        height={300}
                      >
                        <BarPlot />
                        <ChartsTooltip />
                        <ChartsXAxis />
                        <ChartsYAxis />
                      </ResponsiveChartContainer>
                    </div>
                  </Box>
                </Grid>
              </Grid>
            </TabPanel>
            <TabPanel value="http://10.37.12.17:3000/shift3_">
            <Grid container direction="column">
                <Grid item>
                    <Grid container justifyContent="space-between">
                      <Grid item>
                        <Typography variant="h5">Grafik Counter Carton</Typography>
                      </Grid>
                  </Grid>
                </Grid>
                <Grid item sx={{ mb: 0.75 , mt : -3}}>
                  <Box sx={{ width: '100%' }}>
                    <div>
                      <ResponsiveChartContainer
                      
                        series={[
                          {
                            id: '1',
                            type : 'bar',
                            label: label,
                            data: counternih,
                            color : '#7C4700'
                            },
                            {
                                id: '2',
                                type : 'bar',
                                label: labeltwo,
                                data: counternihdua,
                                color : '#a52a2a'
                            }
                        ]}
                        // xAxis={[
                        //   {
                        //     data: ['A', 'B', 'C', 'D', 'E'],
                        //     scaleType: 'band',
                        //     id: 'x-axis-id',
                        //   },
                        // ]}
                        xAxis={[{ scaleType: 'band', 
                                    data: ['22.46','23.30','24.00','00.30','01.00','01.30','02.00','02.30','03.00','03.30','04.00','04.30','05.00','05.30','06.00','06.30','06.45']
                                    
                                    }]}
                        height={300}
                      >
                        <BarPlot />
                        <ChartsTooltip />
                        <ChartsXAxis />
                        <ChartsYAxis />
                      </ResponsiveChartContainer>
                    </div>
                  </Box>
                </Grid>
              </Grid>
            </TabPanel>
            <Stack spacing={5} ml={10} mt={-5} mb={2} direction="row">
                <Stack direction="row" spacing={1} alignItems="center">
                    <Avatar
                        sx={{ width: 12, height: 12, bgcolor: '#a52a2a', svg: { display: 'none' } }}
                    ></Avatar>
                    <Typography variant="h4" color="textSecondary">
                      Packing L1
                    </Typography>
                </Stack>
                <Stack direction="row" spacing={1} alignItems="center">
                    <Avatar
                        sx={{ width: 12, height: 12, bgcolor: '#7C4700', svg: { display: 'none' } }}
                    ></Avatar>
                    <Typography variant="h4" color="textSecondary">
                       Packing L2
                    </Typography>
                </Stack>
            </Stack>         
          </TabContext>
        </CardWrapper>
      )}
    </>
  );
};

GrafekBoxDashboard.propTypes = {
  isLoading: PropTypes.bool,
  url : PropTypes.bool,
  label : PropTypes.bool,
  urltwo : PropTypes.bool,
  labeltwo : PropTypes.bool
};

export default GrafekBoxDashboard;