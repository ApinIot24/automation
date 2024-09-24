import PropTypes from 'prop-types';
import { useEffect,useState} from 'react';
import { styled } from '@mui/material/styles';
// import { useTheme } from '@mui/material/styles';
import {  Box, Grid, Typography ,Stack,Avatar} from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import SkeletonEarningCard from 'ui-component/cards/Skeleton/EarningCard';
import { PieChart } from '@mui/x-charts/PieChart';
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
    height: 550,
    background: '#ff1919',
    // borderRadius: '100%',
    top: -85,
    left: -5,
    [theme.breakpoints.down('sm')]: {
      top: -105,
      left: -140
    }
  },
}));

// ===========================|| HAPPY CODING ||=========================== //
const CardArus = ({ isLoading ,url }) => {

    // const theme = useTheme();
//   const primary = theme.palette.primary.main;
  // const primarylight = '#ecf2ff';
//   const successlight = theme.palette.success.light;
  const [l1 ,setL1] = useState(0);
  const [l2 ,setL2] = useState(0);
  const [l3 ,setL3] = useState(0);
  const [avg ,setAvg] = useState(0);
  useEffect(() => {
    axios.get(url+'R')
    .then(response => {
        setL1(parseFloat(response.data[0].arus))
    })
    .catch(error => {
      console.log(error);
    });
    axios.get(url+'S')
    .then(response => {
        setL2(parseFloat(response.data[0].arus))
    })
    .catch(error => {
      console.log(error);
    });
    axios.get(url+'T')
    .then(response => {
        setL3(parseFloat(response.data[0].arus))
    })
    .catch(error => {
      console.log(error);
    });
    axios.get(url+'AVG')
    .then(response => {
        setAvg(parseFloat(response.data[0].arus))
    })
    .catch(error => {
      console.log(error);
    });
    const interval = setInterval(() => {
        axios.get(url+'R')
        .then(response => {
            setL1(parseFloat(response.data[0].arus))
        })
        .catch(error => {
          console.log(error);
        });
        axios.get(url+'S')
        .then(response => {
            setL2(parseFloat(response.data[0].arus))
        })
        .catch(error => {
          console.log(error);
        });
        axios.get(url+'T')
        .then(response => {
            setL3(parseFloat(response.data[0].arus))
        })
        .catch(error => {
          console.log(error);
        });
        axios.get(url+'AVG')
        .then(response => {
            setAvg(parseFloat(response.data[0].arus))
        })
        .catch(error => {
          console.log(error);
        });
      }, 5000);
        return () => clearInterval(interval);
    }, []);

  return (
    <>
      {isLoading ? (
        <SkeletonEarningCard />
      ) : (
        <CardWrapper border={false} content={false}>
          <Box sx={{ p: 2.25 }}>
            <Grid container direction="column">
              <Grid item>
                <Grid container justifyContent="space-between">
                  <Grid item>
                    <Typography variant="h3">Arus</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item sx={{ mb: 0.75 }}>
                <Grid container alignItems="center">
                  <Grid item xs={2}> 
                    <Grid container alignItems="center">
                      <Grid item> 
                          
                      </Grid>  
                    </Grid>
                  </Grid>
                  <Grid item xs={10}> 
                    <Grid container alignItems="center">
                        <PieChart
                            series={[
                                {
                                  innerRadius: 27,
                                  outerRadius: 80,
                                  paddingAngle: 5,
                                  startAngle: -90,
                                  endAngle: 180,
                                  data: [{ label: 'Arus L1', value: l1 ,color : '#ff9999' },
                                  { label: 'Arus L2', value: l2 ,color : '#ff3232' },
                                  { label: 'Arus L3', value: l3 ,color : '#e50000'},{ 
                                    label: 'Arus Avg', 
                                    value: avg ,
                                    color : '#990000'
                                    }],
                                  highlightScope: { faded: 'global', highlighted: 'item' },
                                  faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                                },
                                // {
                                //   innerRadius: 100,
                                //   outerRadius: 120,
                                //   data: [
                                //     { 
                                //     label: 'Arus Avg', 
                                //     value: avg ,
                                //     color : '#ff4c4c'
                                //     }
                                    
                                //     ,
                                //   ],
                                // },
                              ]}
                              width={400}
                              height={300}
                              slotProps={{
                                legend: { hidden: true },
                              }}
                        />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Stack spacing={5} mt={5} ml={5} direction="row">
                    <Stack direction="row" spacing={1} alignItems="center">
                        <Avatar
                            sx={{ width: 16, height: 16, bgcolor: '#ff9999', svg: { display: 'none' } }}
                        ></Avatar>
                        <Typography variant="h4" color="textSecondary">
                            L1 :
                        </Typography>
                        <Typography variant="h3" color="textSecondary">
                            {l1} Ampere
                        </Typography>
                    </Stack>
                    <Stack direction="row" spacing={1} alignItems="center">
                        <Avatar
                            sx={{ width: 16, height: 16, bgcolor: '#ff3232', svg: { display: 'none' } }}
                        ></Avatar>
                        <Typography variant="h4" color="textSecondary">
                            L2 :
                        </Typography>
                        <Typography variant="h3" color="textSecondary">
                            {l2} Ampere
                        </Typography>
                    </Stack>
                    
                </Stack>
              </Grid>
              <Grid item>
                <Stack spacing={5} mt={2} ml={5} direction="row">
                    <Stack direction="row" spacing={1} alignItems="center">
                        <Avatar
                            sx={{ width: 16, height: 16, bgcolor: '#e50000', svg: { display: 'none' } }}
                        ></Avatar>
                        <Typography variant="h4" color="textSecondary">
                            L3 :
                        </Typography>
                        <Typography variant="h3" color="textSecondary">
                            {l3} Ampere
                        </Typography>
                    </Stack>
                    <Stack direction="row" spacing={1} alignItems="center">
                        <Avatar
                            sx={{ width: 16, height: 16, bgcolor: '#990000', svg: { display: 'none' } }}
                        ></Avatar>
                        <Typography variant="h4" color="textSecondary">
                            AVG :
                        </Typography>
                        <Typography variant="h3" color="textSecondary">
                           {avg} Ampere
                        </Typography>
                    </Stack>
                </Stack>
              </Grid>
            </Grid>
          </Box>
        </CardWrapper>
      )}
    </>
  );
};

CardArus.propTypes = {
  isLoading: PropTypes.bool,
  url : PropTypes.bool
};

export default CardArus;