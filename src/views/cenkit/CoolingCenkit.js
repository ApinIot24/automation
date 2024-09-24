import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import {  Box, Grid, Typography } from '@mui/material';
import Slider from '@mui/material/Slider';
import { useEffect, useState } from 'react';
import MainCard from 'ui-component/cards/MainCard';
import SkeletonEarningCard from 'ui-component/cards/Skeleton/EarningCard';
import axios from 'axios';

const CardWrapper = styled(MainCard)(({ theme }) => ({
  backgroundColor: 'whitesmoke',
  color: '#fff',
  overflow: 'hidden',
  position: 'relative',
  margin : 5,
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
const marks = [
  {
    value: 0,
    label: '0°C',
  },
  {
    value: 25,
    label: '25°C',
  },
  {
    value: 50,
    label: '50°C',
  },
];

function valuetext(value) {
  return `${value}°C`;
}

// ===========================|| HAPPY CODING ||=========================== //

const CoolingCenkit = ({ isLoading,url }) => {
  const [cooling ,setCooling] = useState(0);
  useEffect(() => {
    axios.get(url)
        .then(response => {
          setCooling(response.data[0].temp_cooling)
          console.log("datta" ,response.data[0].temp_cooling );
        })
        .catch(error => {
          console.log(error);
        });
    const interval = setInterval(() => {
      axios.get(url)
        .then(response => {
          setCooling(response.data[0].temp_cooling)
        })
        .catch(error => {
          console.log(error);
        });
      }, 60000);
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
                    <Typography variant="h4">Suhu Jacketing</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item sx={{ mb: 0.75 }}>
                <Box sx={{ width: '100%' }}>
                  <Slider
                    aria-label="Always visible"
                    value={cooling}
                    getAriaValueText={valuetext}
                    step={null}
                    min={0}
                    max={50}
                    marks={marks}
                    valueLabelDisplay="on"
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </CardWrapper>
      )}
    </>
  );
};

CoolingCenkit.propTypes = {
  isLoading: PropTypes.bool,
  url : PropTypes.bool
};

export default CoolingCenkit;