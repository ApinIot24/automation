import { useEffect ,useState} from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import { Card, Grid, Typography } from '@mui/material';
import ApexCharts from 'apexcharts';
import axios from 'axios';
import chartData from '../chart-data/bajaj-area-chart';

// ===========================|| HAPPY CODING ||=========================== //

const BajajAreaChartCard = ({isurl}) => {
  const theme = useTheme();
  const customization = useSelector((state) => state.customization);
  const { navType } = customization;
  const [counter, setCounter] = useState(0);
  const [ realtime, setRealtime] = useState('');
  const orangeDark = theme.palette.secondary[800];

  useEffect(() => {
    const newSupportChart = {
      ...chartData.options,
      colors: [orangeDark],
      tooltip: {
        theme: 'light'
      }
    };
    ApexCharts.exec(`support-chart`, 'updateOptions', newSupportChart);
    axios.get(isurl)
      .then(response => {
        setCounter(response.data[0].counter);
        const dateToTime = date => date.toLocaleString('en-US', {
          hour: 'numeric',
          minute: 'numeric'
        });
        setRealtime(dateToTime(new Date()))
      })
      .catch(error => {
        console.log(error);
      });
    const interval = setInterval(() => {
    axios.get(isurl)
      .then(response => {
        setCounter(response.data[0].counter);
        const dateToTime = date => date.toLocaleString('en-US', {
          hour: 'numeric',
          minute: 'numeric'
        });
        setRealtime(dateToTime(new Date()))
      })
      .catch(error => {
        console.log(error);
      });
    }, 3500);
    return () => clearInterval(interval);
  }, [navType, orangeDark]);

  return (
    <Card sx={{ bgcolor: 'secondary.light' }}>
      <Grid container sx={{ p: 2, pb: 0, color: '#fff' }}>
        <Grid item xs={12}>
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item>
              <Typography variant="subtitle1" sx={{ color: theme.palette.secondary.dark }}>
                Counter Produk
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h4" sx={{ color: theme.palette.grey[800] }}>
                {counter} Pcs
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle2" sx={{ color: theme.palette.grey[800] }}>
            Today ( {realtime} )
          </Typography>
        </Grid>
      </Grid>
    </Card>
  );
};
BajajAreaChartCard.propTypes = {
  isurl : PropTypes.bool
};

export default BajajAreaChartCard;
