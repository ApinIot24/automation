import PropTypes from 'prop-types';
import { useState, useEffect} from 'react';
import { styled } from '@mui/material/styles';
import {  Box, Grid, Typography } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import SkeletonEarningCard from 'ui-component/cards/Skeleton/EarningCard';
import { Gauge } from '@mui/x-charts/Gauge';
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
    height: 290,
    background: theme.palette.primary.dark,
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

const EarningCardThree = ({ isLoading ,url }) => {
  const [runhour ,setRunhour] = useState(0);
  useEffect(() => {
    axios.get(url)
    .then(response => {
      setRunhour(parseFloat(response.data[0].time))
    })
    .catch(error => {
      console.log(error);
    });
    const interval = setInterval(() => {
      axios.get(url)
        .then(response => {
          setRunhour(parseFloat(response.data[0].time))
        })
        .catch(error => {
          console.log(error);
        });
      }, 3000);
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
                    <Typography variant="h4">Runing Hours</Typography>
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
                      <Grid item> 
                          <Gauge 
                          text={({value }) => `${value} / ${8}` } 
                          sx={{ fontSize : 28 , transform: 'translate(7px, 0px)'}} width={275} height={120} value={runhour} valueMax={8} startAngle={-110} endAngle={110} />
                      </Grid>  
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </CardWrapper>
      )}
    </>
  );
};

EarningCardThree.propTypes = {
  isLoading: PropTypes.bool,
  url : PropTypes.bool
};

export default EarningCardThree;