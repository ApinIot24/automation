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
  marginLeft : 4,
  marginTop : 5,
  '&:after': {
    content: '""',
    position: 'absolute',
    width: 15,
    height: 290,
    background: theme.palette.warning.dark,
    top: -85,
    left: -5,
    [theme.breakpoints.down('sm')]: {
      top: -105,
      left: -140
    }
  },
}));

// ===========================|| HAPPY CODING ||=========================== //

const EarningCardFourA5 = ({ isLoading ,url ,label}) => {
  const [counter ,setCounter] = useState(0);
  const [prosen , setProsen] = useState('');
  useEffect(() => {
    axios.get(url)
        .then(response => {
          setCounter(response.data[0].counter)
          var count = response.data[0].counter
          var hitung = Math.floor((count / 50000) * 100)
          var presentase = hitung.toString();
          setProsen(presentase);
        })
        .catch(error => {
          console.log(error);
        });
    const interval = setInterval(() => {
      axios.get(url)
        .then(response => {
          setCounter(response.data[0].counter)
          var count = response.data[0].counter
          var hitung = Math.floor((count / 50000) * 100)
          var presentase = hitung.toString();
          setProsen(presentase);
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
                    <Typography variant="h4">Efficiency {label}</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item sx={{ mb: 0.75 }}>
                <Grid container alignItems="center">
                  <Grid item xs={12}> 
                    <Grid container alignItems="center">
                          <Grid item> 
                          <Typography variant="h4">{counter} / 50000 </Typography>
                          </Grid> 
                      <Grid item> 
                          <Gauge 
                          text={`${prosen} %` } 
                          sx={{ fontSize : 20 , transform: 'translate(7px, 0px)'}} width={275} height={120} value={counter} valueMax={50000} />
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

EarningCardFourA5.propTypes = {
  isLoading: PropTypes.bool,
  url : PropTypes.bool,
  label : PropTypes.bool
};

export default EarningCardFourA5;