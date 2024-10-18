import * as React from 'react';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { Box, Grid, Typography, Stack, Avatar } from '@mui/material';
import { ResponsiveChartContainer } from '@mui/x-charts/ResponsiveChartContainer';
import { ChartsXAxis } from '@mui/x-charts/ChartsXAxis';
import { ChartsTooltip, ChartsYAxis } from '@mui/x-charts';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import SkeletonTotalGrowthBarChart from 'ui-component/cards/Skeleton/TotalGrowthBarChart';
import MainCard from 'ui-component/cards/MainCard';
import { LinePlot, MarkPlot } from '@mui/x-charts/LineChart';
import { mangoFusionPalette } from '@mui/x-charts/colorPalettes';
import axios from 'axios';

const CardWrapper = styled(MainCard)(({ theme, warna }) => ({
  backgroundColor: 'whitesmoke',
  color: '#fff',
  overflow: 'hidden',
  marginRight: 4,
  position: 'relative',
  '&:after': {
    content: '""',
    position: 'absolute',
    width: 15,
    height: 480,
    background: warna,
    // borderRadius: '100%',
    top: -85,
    left: -5,
    [theme.breakpoints.down('sm')]: {
      top: -105,
      left: -140
    }
  },

}));

const GrafikDashboard = ({ isLoading, label, url, urltwo, labeltwo, labelthree, labelfour, labelfive, urlthree, urlfour, urlfive, title, border }) => {
  const [value, setValue] = React.useState('http://10.37.12.17:3000/shift1_');
  const [counternih, setCounter] = useState([]);
  const [counternihdua, setCountertwo] = useState([]);
  const [counternihtiga, setCountertiga] = useState([]);
  const [counternihempat, setCounterempat] = useState([]);
  const [counternihlima, setCounterlima] = useState([]);
  const [dinamisurl, setUrlnya] = useState(url);
  const [dinamisurltwo, setUrlTWOnya] = useState(urltwo);
  const [dinamisurlthree, setUrlThreenya] = useState(urlthree);
  const [dinamisurlfour, setUrlFournya] = useState(urlfour);
  const [dinamisurlfive, setUrlFivenya] = useState(urlfive);
  const colortemplate = mangoFusionPalette();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    let counts = [];
    let countss = [];
    let countsss = [];
    let countssss = [];
    let countsssss = [];
    axios.get(newValue + label)
      .then(response => {
        var datalasts = response.data;
        for (let index = 0; index < datalasts.length; index++) {
          counts.push(datalasts[index].counter)
        }
        setCounter(counts);
      })
      .catch(error => {
        console.log(error);
      });
    axios.get(newValue + labeltwo)
      .then(response => {
        var datalastss = response.data;
        for (let index = 0; index < datalastss.length; index++) {
          countss.push(datalastss[index].counter)
        }
        setCountertwo(countss);
      })
      .catch(error => {
        console.log(error);
      });
    axios.get(newValue + labelthree)
      .then(response => {
        var datalastsss = response.data;
        for (let index = 0; index < datalastsss.length; index++) {
          countsss.push(datalastsss[index].counter)
        }
        setCountertiga(countsss);
      })
      .catch(error => {
        console.log(error);
      });
    axios.get(newValue + labelfour)
      .then(response => {
        var datalastssss = response.data;
        for (let index = 0; index < datalastssss.length; index++) {
          countssss.push(datalastssss[index].counter)
        }
        setCounterempat(countssss);
      })
      .catch(error => {
        console.log(error);
      });
    axios.get(newValue + labelfive)
      .then(response => {
        var datalastsssss = response.data;
        for (let index = 0; index < datalastsssss.length; index++) {
          countsssss.push(datalastsssss[index].counter)
        }
        setCounterlima(countsssss);
      })
      .catch(error => {
        console.log(error);
      });
    setUrlnya(newValue + label)
    setUrlTWOnya(newValue + labeltwo)
    setUrlThreenya(newValue + labelthree)
    setUrlFournya(newValue + labelfour)
    setUrlFivenya(newValue + labelfive)

  }

  useEffect(() => {
    let counts = [];
    axios.get(url)
      .then(response => {
        var datalasts = response.data;
        for (let index = 0; index < datalasts.length; index++) {
          counts.push(datalasts[index].counter)
        }
        setCounter(counts);
      })
      .catch(error => {
        console.log(error);
      });
    let countss = [];
    axios.get(urltwo)
      .then(response => {
        var datalastss = response.data;
        for (let index = 0; index < datalastss.length; index++) {
          countss.push(datalastss[index].counter)
        }
        // console.log("DATA" , count);
        setCountertwo(countss);
      })
      .catch(error => {
        console.log(error);
      });
    let countsss = []
    axios.get(urlthree)
      .then(response => {
        var datalastsss = response.data;
        for (let index = 0; index < datalastsss.length; index++) {
          countsss.push(datalastsss[index].counter)
        }
        // console.log("DATA" , count);
        setCountertiga(countsss);
      })
      .catch(error => {
        console.log(error);
      });
    let countssss = []
    axios.get(urlfour)
      .then(response => {
        var datalastssss = response.data;
        for (let index = 0; index < datalastssss.length; index++) {
          countssss.push(datalastssss[index].counter)
        }
        setCounterempat(countssss);
      })
      .catch(error => {
        console.log(error);
      });
    let countsssss = []
    axios.get(urlfive)
      .then(response => {
        var datalastsssss = response.data;
        for (let index = 0; index < datalastsssss.length; index++) {
          countsssss.push(datalastsssss[index].counter)
        }
        setCounterlima(countsssss);
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
            count.push(datalast[index].counter)
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
            countss.push(datalastss[index].counter)
          }
          setCountertwo(countss);
        })
        .catch(error => {
          console.log(error);
        });
      let countsss = [];
      axios.get(dinamisurlthree)
        .then(response => {
          var datalastsss = response.data;
          for (let index = 0; index < datalastsss.length; index++) {
            countsss.push(datalastsss[index].counter)
          }
          setCountertiga(countsss);
        })
        .catch(error => {
          console.log(error);
        });
      let countssss = [];
      axios.get(dinamisurlfour)
        .then(response => {
          var datalastssss = response.data;
          for (let index = 0; index < datalastssss.length; index++) {
            countssss.push(datalastssss[index].counter)
          }
          setCounterempat(countssss);
        })
        .catch(error => {
          console.log(error);
        });
      let countsssss = [];
      axios.get(dinamisurlfive)
        .then(response => {
          var datalastsssss = response.data;
          for (let index = 0; index < datalastsssss.length; index++) {
            countsssss.push(datalastsssss[index].counter)
          }
          setCounterlima(countsssss);
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
        <SkeletonTotalGrowthBarChart />
      ) : (
        <CardWrapper warna={border} border={false} content={false}>
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
                      <Typography variant="h5">Grafik Counter {title}</Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item sx={{ mb: 0.75, mt: -3 }}>
                  <Box sx={{ width: '100%' }}>
                    <div>
                      <ResponsiveChartContainer
                        series={[
                          {
                            id: '1',
                            label: label,
                            type: 'line',
                            data: counternih,
                            color: colortemplate[0]
                          },
                          {
                            id: '2',
                            label: labeltwo,
                            type: 'line',
                            data: counternihdua,
                             color: colortemplate[1]
                          },
                          {
                            id: '3',
                            label: labelthree,
                            type: 'line',
                            data: counternihtiga,
                             color: colortemplate[2]
                          },
                          {
                            id: '4',
                            label: labelfour,
                            type: 'line',
                            data: counternihempat,
                             color: colortemplate[3]
                          },
                          {
                            id: '5',
                            label: labelfive,
                            type: 'line',
                            data: counternihlima,
                             color: colortemplate[4]
                          },
                        ]}
                        // xAxis={[
                        //   {
                        //     data: ['A', 'B', 'C', 'D', 'E'],
                        //     scaleType: 'band',
                        //     id: 'x-axis-id',
                        //   },
                        // ]}
                        xAxis={[{
                          scaleType: 'band',
                          data: ['6.46', '7.0', '7.30', '8.0', '8.30', '9.0', '9.30', '10.0', '10.30', '11.0', '11.30', '12.0', '12.30', '13.0', '13.30', '14.0', '14.30', '14.45']
                        }]}
                        height={300}
                      >
                        <MarkPlot />
                        <LinePlot />
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
                      <Typography variant="h5">Grafik Counter {title}</Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item sx={{ mb: 0.75, mt: -3 }}>
                  <Box sx={{ width: '100%' }}>
                    <div>
                      <ResponsiveChartContainer
                        series={[
                          {
                            id: '1',
                            label: label,
                            type: 'line',
                            data: counternih,
                             color: colortemplate[0]
                          },
                          {
                            id: '2',
                            label: labeltwo,
                            type: 'line',
                            data: counternihdua,
                             color: colortemplate[1]
                          },
                          {
                            id: '3',
                            label: labelthree,
                            type: 'line',
                            data: counternihtiga,
                              color: colortemplate[2]
                          },
                          {
                            id: '4',
                            label: labelfour,
                            type: 'line',
                            data: counternihempat,
                              color: colortemplate[3]
                          },
                          {
                            id: '5',
                            label: labelfive,
                            type: 'line',
                            data: counternihlima,
                              color: colortemplate[4]
                          },
                        ]}
                        // xAxis={[
                        //   {
                        //     data: ['A', 'B', 'C', 'D', 'E'],
                        //     scaleType: 'band',
                        //     id: 'x-axis-id',
                        //   },
                        // ]}
                        xAxis={[{
                          scaleType: 'band',
                          data: ['14.46', '15.00', '15.30', '16.00', '16.30', '17.00', '17.30', '18.00', '18.30', '19.00', '19.30', '20.00', '20.30', '21.00', '21.30', '22.00', '22.30', '22.45']

                        }]}
                        height={300}
                      >
                        <MarkPlot />
                        <LinePlot />
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
                      <Typography variant="h5">Grafik Counter{title}</Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item sx={{ mb: 0.75, mt: -3 }}>
                  <Box sx={{ width: '100%' }}>
                    <div>
                      <ResponsiveChartContainer
                        series={[
                          {
                            id: '1',
                            label: label,
                            type: 'line',
                            data: counternih,
                             color: colortemplate[0]
                          },
                          {
                            id: '2',
                            label: labeltwo,
                            type: 'line',
                            data: counternihdua,
                             color: colortemplate[1]
                          },
                          {
                            id: '3',
                            label: labelthree,
                            type: 'line',
                            data: counternihtiga,
                              color: colortemplate[2]
                          },
                          {
                            id: '4',
                            label: labelfour,
                            type: 'line',
                            data: counternihempat,
                              color: colortemplate[3]
                          },
                          {
                            id: '5',
                            label: labelfive,
                            type: 'line',
                            data: counternihlima,
                              color: colortemplate[4]
                          },
                        ]}
                        // xAxis={[
                        //   {
                        //     data: ['A', 'B', 'C', 'D', 'E'],
                        //     scaleType: 'band',
                        //     id: 'x-axis-id',
                        //   },
                        // ]}
                        xAxis={[{
                          scaleType: 'band',
                          data: ['22.46', '23.30', '24.00', '00.30', '01.00', '01.30', '02.00', '02.30', '03.00', '03.30', '04.00', '04.30', '05.00', '05.30', '06.00', '06.30', '06.45']

                        }]}
                        height={300}
                      >
                        <MarkPlot />
                        <LinePlot />
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
                  sx={{ width: 12, height: 12, bgcolor: colortemplate[0], svg: { display: 'none' } }}
                ></Avatar>
                <Typography variant="h4" color="textSecondary">
                  Packing {label}
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1} alignItems="center">
                <Avatar
                  sx={{ width: 12, height: 12, bgcolor: colortemplate[1], svg: { display: 'none' } }}
                ></Avatar>
                <Typography variant="h4" color="textSecondary">
                  Packing {labeltwo}
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1} alignItems="center">
                <Avatar
                  sx={{ width: 12, height: 12, bgcolor: colortemplate[2], svg: { display: 'none' } }}
                ></Avatar>
                <Typography variant="h4" color="textSecondary">
                  Packing {labelthree}
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1} alignItems="center">
                <Avatar
                  sx={{ width: 12, height: 12, bgcolor: colortemplate[3], svg: { display: 'none' } }}
                ></Avatar>
                <Typography variant="h4" color="textSecondary">
                  Packing {labelfour}
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1} alignItems="center">
                <Avatar
                  sx={{ width: 12, height: 12, bgcolor: colortemplate[4], svg: { display: 'none' } }}
                ></Avatar>
                <Typography variant="h4" color="textSecondary">
                  Packing {labelfive}
                </Typography>
              </Stack>
            </Stack>
          </TabContext>
        </CardWrapper>
      )}
    </>
  );
};

GrafikDashboard.propTypes = {
  isLoading: PropTypes.bool,
  url: PropTypes.bool,
  urltwo: PropTypes.bool,
  urlthree: PropTypes.bool,
  urlfour: PropTypes.bool,
  urlfive: PropTypes.bool,
  label: PropTypes.bool,
  labeltwo: PropTypes.bool,
  labelthree: PropTypes.bool,
  labelfour: PropTypes.bool,
  labelfive: PropTypes.bool,
  border: PropTypes.bool,
  title: PropTypes.bool
};

export default GrafikDashboard;
