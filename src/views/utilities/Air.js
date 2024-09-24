import MainCard from 'ui-component/cards/MainCard';
import * as React from 'react';
import { Grid, Box } from '@mui/material';
// components
import SalesOverview from './components/SalesOverview';
import YearlyBreakup from './components/YearlyBreakup';
import MonthlyEarnings from './components/MonthlyEarnings';


// =============================|| Happy Coding ||============================= //

const Air = () => (
  <MainCard title="Air">
    <Box>
      <Grid container spacing={3}>
        <Grid item xs={12} lg={8}>
          <SalesOverview />
        </Grid>
        <Grid item xs={12} lg={4}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <YearlyBreakup />
            </Grid>
            <Grid item xs={12}>
              <MonthlyEarnings />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  </MainCard>
);

export default Air;