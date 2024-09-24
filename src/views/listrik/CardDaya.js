import PropTypes from 'prop-types';
import { useEffect ,useState} from 'react';
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
    height: 580,
    background: '#9999ff',
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
const CardDaya = ({ isLoading,url }) => {

    // const theme = useTheme();
    const [l1 ,setL1] = useState(0);
    const [l2 ,setL2] = useState(0);
    const [l3 ,setL3] = useState(0);
    const [avg ,setAvg] = useState(0);
  useEffect(() => {
    axios.get(url+'R')
    .then(response => {
        setL1(parseFloat(response.data[0].kw))
    })
    .catch(error => {
      console.log(error);
    });
    axios.get(url+'S')
    .then(response => {
        setL2(parseFloat(response.data[0].kw))
    })
    .catch(error => {
      console.log(error);
    });
    axios.get(url+'T')
    .then(response => {
        setL3(parseFloat(response.data[0].kw))
    })
    .catch(error => {
      console.log(error);
    });
    axios.get(url+'AVG')
    .then(response => {
        setAvg(parseFloat(response.data[0].kw))
    })
    .catch(error => {
      console.log(error);
    });
    const interval = setInterval(() => {
        axios.get(url+'R')
        .then(response => {
            setL1(parseFloat(response.data[0].kw))
        })
        .catch(error => {
          console.log(error);
        });
        axios.get(url+'S')
        .then(response => {
            setL2(parseFloat(response.data[0].kw))
        })
        .catch(error => {
          console.log(error);
        });
        axios.get(url+'T')
        .then(response => {
            setL3(parseFloat(response.data[0].kw))
        })
        .catch(error => {
          console.log(error);
        });
        axios.get(url+'AVG')
        .then(response => {
            setAvg(parseFloat(response.data[0].kw))
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
                    <Typography variant="h3">Daya</Typography>
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
                                  paddingAngle: 5,
                                  outerRadius: 80,
                                  startAngle: -180,
                                  endAngle: 90,
                                  data: [{ label: 'Daya L1', value: l1,color : '#4c4cff' },
                                  { label: 'Daya L2', value: l2 ,color : '#0000e5' },
                                  { label: 'Daya L3', value: l3 ,color : '#6666ff'},],
                                  highlightScope: { faded: 'global', highlighted: 'item' },
                                  faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                                },
                                {
                                  innerRadius: 100,
                                  outerRadius: 120,
                                  data: [
                                    { 
                                    label: 'Daya Total', 
                                    value: avg ,
                                    color : '#9999ff'
                                    }
                                    
                                    ,
                                  ],
                                },
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
                            sx={{ width: 16, height: 16, bgcolor: '#4c4cff', svg: { display: 'none' } }}
                        ></Avatar>
                        <Typography variant="h4" color="textSecondary">
                            Daya L1 :
                        </Typography>
                        <Typography variant="h3" color="textSecondary">
                            {l1} Kw
                        </Typography>
                    </Stack>
                    <Stack direction="row" spacing={1} alignItems="center">
                        <Avatar
                            sx={{ width: 16, height: 16, bgcolor: '#0000e5', svg: { display: 'none' } }}
                        ></Avatar>
                        <Typography variant="h4" color="textSecondary">
                            Daya L2 :
                        </Typography>
                        <Typography variant="h3" color="textSecondary">
                            {l2}Kw
                        </Typography>
                    </Stack>
                    
                </Stack>
              </Grid>
              <Grid item>
                <Stack spacing={5} mt={2} ml={5} direction="row">
                    <Stack direction="row" spacing={1} alignItems="center">
                        <Avatar
                            sx={{ width: 16, height: 16, bgcolor: '#6666ff', svg: { display: 'none' } }}
                        ></Avatar>
                        <Typography variant="h4" color="textSecondary">
                            Daya L3 :
                        </Typography>
                        <Typography variant="h3" color="textSecondary">
                           {l3}Kw
                        </Typography>
                    </Stack>
                    <Stack direction="row" spacing={1} alignItems="center">
                        <Avatar
                            sx={{ width: 16, height: 16, bgcolor: '#9999ff', svg: { display: 'none' } }}
                        ></Avatar>
                        <Typography variant="h4" color="textSecondary">
                            Total : 
                        </Typography>
                        <Typography variant="h3" color="textSecondary">
                            {avg}Kw
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

CardDaya.propTypes = {
  isLoading: PropTypes.bool,
  url : PropTypes.bool
};

export default CardDaya;