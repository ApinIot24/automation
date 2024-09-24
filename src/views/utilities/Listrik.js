import MainCard from 'ui-component/cards/MainCard';
import * as React from 'react';
import { Grid, Box } from '@mui/material';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { gridSpacing } from 'store/constant';
import LvmdpUtility from 'views/listrik/LvmdpUtility';
import MdpSub1 from 'views/listrik/MdpSub1';
import MdpSub2 from 'views/listrik/MdpSub2';
// components
// import SalesOverview from './components/SalesOverview';
// import YearlyBreakup from './components/YearlyBreakup';
// import MonthlyEarnings from './components/MonthlyEarnings';


// =============================|| Happy Coding ||============================= //

const Listrik = () => {
  const [value, setValue] = React.useState('0');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
  <MainCard title="Listrik">
    <TabContext value={value}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <TabList onChange={handleChange} aria-label="lab API tabs example">
          <Tab label="LVMDP Utility" value="0" />
          <Tab label="MDP Sub 1" value="1" />
          <Tab label="MDP Sub 2" value="2" />
        </TabList>
      </Box>
      <TabPanel value="0">
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12} sm={12} lg={12}>
              <LvmdpUtility />
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value="1">
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12} sm={12} lg={12}>
              <MdpSub1/>
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value="2">
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12} sm={12} lg={12}>
              <MdpSub2/>
          </Grid>
        </Grid>
      </TabPanel>
    </TabContext>
  </MainCard>
)};

export default Listrik;