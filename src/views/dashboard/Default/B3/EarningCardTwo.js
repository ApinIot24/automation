import PropTypes from 'prop-types';
import { useState, useEffect} from 'react';
import { styled } from '@mui/material/styles';
import {  Box, Grid, Typography } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import SkeletonEarningCard from 'ui-component/cards/Skeleton/EarningCard';
import {
  GaugeContainer,
  GaugeValueArc,
  GaugeReferenceArc,
  useGaugeState,
} from '@mui/x-charts/Gauge';
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
    background: theme.palette.error.dark,
    top: -85,
    left: -5,
    [theme.breakpoints.down('sm')]: {
      top: -105,
      left: -140
    }
  },
  
}));

function GaugePointer() {
  const { valueAngle, outerRadius, cx, cy } = useGaugeState();

  if (valueAngle === null) {
    return null;
  }

  const target = {
    x: cx + outerRadius * Math.sin(valueAngle),
    y: cy - outerRadius * Math.cos(valueAngle),
  };
  return (
    <g>
      <circle cx={cx} cy={cy} r={5} fill="red" />
      <path
        d={`M ${cx} ${cy} L ${target.x} ${target.y}`}
        stroke="red"
        strokeWidth={3}
      />
    </g>
  );
}

// ===========================|| HAPPY CODING ||=========================== //

const EarningCardTwo = ({ isLoading, url }) => {
  const [speed, setSpeed] = useState(0);
  useEffect(() => {
    axios.get(url)
    .then(response => {
      setSpeed(parseFloat(response.data[0].speed))
    })
    .catch(error => {
      console.log(error);
    });
    const interval = setInterval(() => {
      axios.get(url)
        .then(response => {
          setSpeed(parseFloat(response.data[0].speed))
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
                    <Typography variant="h4">Speed</Typography>
                  </Grid>
                  <Grid item>
                    <Typography sx={{ fontSize: '1.175rem', fontWeight: 250, mr: 5, mt: 1, color : 'black' }}> {speed} Ppm</Typography>
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
                        <GaugeContainer
                          width={200}
                          height={110}
                          startAngle={-110}
                          endAngle={110}
                          value={speed}
                          sx={{ color : 'green'}}
                        >
                          <GaugeReferenceArc />
                          <GaugeValueArc />
                          <GaugePointer />
                        </GaugeContainer>
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

EarningCardTwo.propTypes = {
  isLoading: PropTypes.bool,
  url : PropTypes.bool
};

export default EarningCardTwo;