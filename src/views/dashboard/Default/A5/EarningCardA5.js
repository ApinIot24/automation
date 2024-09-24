import PropTypes from 'prop-types';
import { useState , useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { Box, Grid, Typography} from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import SkeletonEarningCard from 'ui-component/cards/Skeleton/EarningCard';
import { IconPackages} from '@tabler/icons-react';
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
    height: 290,
    background: 'green',
    top: -85,
    left: -5,
    [theme.breakpoints.down('sm')]: {
      top: -105,
      left: -140
    }
  },
}));

// ===========================|| HAPPY CODING ||=========================== //

const EarningCardA5 = ({ isLoading ,url }) => {
  const [counter ,setCounter] = useState(0);
  useEffect(() => {
    axios.get(url)
      .then(response => {
        setCounter(response.data[0].counter)
      })
      .catch(error => {
        console.log(error);
      });
  const interval = setInterval(() => {
    axios.get(url)
      .then(response => {
        setCounter(response.data[0].counter)
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
                    <Typography variant="h4">Counter</Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item sx={{ mb: 0.75 }}>
                  <Grid container alignItems="center">
                    <Grid item xs={8}> 
                      <Grid container alignItems="center">
                        <Grid item>
                          <Typography sx={{ color : 'black' , fontSize: '1.525rem', fontWeight: 500, mr: 2, mt: 1.75, mb: 0.75 }}>{counter} Pcs</Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={4}>
                      <Grid container alignItems="center">
                          <IconPackages color='green' size={125} />
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

EarningCardA5.propTypes = {
  isLoading: PropTypes.bool,
  url : PropTypes.bool
};

export default EarningCardA5;
