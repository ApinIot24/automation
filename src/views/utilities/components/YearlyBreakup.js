import React from 'react';
import { Gauge } from '@mui/x-charts/Gauge';
import { useTheme } from '@mui/material/styles';
import { Grid, Stack, Typography, Avatar } from '@mui/material';
import { IconArrowUpLeft } from '@tabler/icons-react';

import DashboardCard from './DashboardCard';

const YearlyBreakup = () => {
  // chart color
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  // const primarylight = '#ecf2ff';
  const successlight = theme.palette.success.light;

  // chart

  return (
    <DashboardCard title="COST ENERGY">
      <Grid container spacing={3}>
        {/* column */}
        <Grid item xs={6} sm={6}>
          <Typography variant="h3" fontWeight="700">
            742
          </Typography>
          <Stack direction="row" spacing={1} mt={1} alignItems="center">
            <Avatar sx={{ bgcolor: successlight, width: 27, height: 27 }}>
              <IconArrowUpLeft width={20} color="#39B69A" />
            </Avatar>
            <Typography variant="subtitle2" fontWeight="600">
              +2%
            </Typography>
            <Typography variant="subtitle2" color="textSecondary">
              Saving Energy
            </Typography>
          </Stack>
          <Stack spacing={3} mt={5} direction="row">
            <Stack direction="row" spacing={1} alignItems="center">
              <Avatar
                sx={{ width: 9, height: 9, bgcolor: primary, svg: { display: 'none' } }}
              ></Avatar>
              <Typography variant="subtitle2" color="textSecondary">
                Cost Now
              </Typography>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center">
              <Avatar
                sx={{ width: 9, height: 9, bgcolor: 'gray', svg: { display: 'none' } }}
              ></Avatar>
              <Typography variant="subtitle2" color="textSecondary">
                Cost Max
              </Typography>
            </Stack>
          </Stack>
        </Grid>
        {/* column */}
        <Grid item xs={6} sm={6}>
                <Gauge 
                          text={`${74} %` } 
                          sx={{ fontSize : 20 , transform: 'translate(7px, 0px)'}} width={300} height={120} value={742} valueMax={1000} />
        </Grid>
      </Grid>
    </DashboardCard>
  );
};

export default YearlyBreakup;
