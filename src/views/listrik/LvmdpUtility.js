import * as React from 'react';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
// import { Grid } from '@mui/material';
// import { gridSpacing } from 'store/constant';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
// import Tegangan from './Tegangan';
// import SalesOverview from 'views/utilities/components/SalesOverview';
// import YearlyBreakup from 'views/utilities/components/YearlyBreakup';
// import MonthlyEarnings from 'views/utilities/components/MonthlyEarnings';
// import Arus from './Arus';
// import Daya from './Daya';
// components
// import SalesOverview from './components/SalesOverview';
// import YearlyBreakup from './components/YearlyBreakup';
// import MonthlyEarnings from './components/MonthlyEarnings';


// =============================|| Happy Coding ||============================= //
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}
const LvmdpUtility = () => {
    const [value, setValue] = React.useState(0);
    // const [setLoading] = useState(true);
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    useEffect(() => {
        // setLoading(false);
      }, []);
    return (
      <Box
        sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex' }}
      >
        <Tabs
          orientation="vertical"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{ borderRight: 1, borderColor: 'divider' }}
        >
          <Tab sx={{ paddingRight: 6 }} label="LVMDP Utilty" {...a11yProps(0)} />
          <Tab sx={{ paddingRight: 6 }} label="Chiller" {...a11yProps(1)} />
          <Tab sx={{ paddingRight: 6 }} label="Cooling Tower" {...a11yProps(2)} />
          <Tab sx={{ paddingRight: 6 }} label="GDFG" {...a11yProps(3)} />
          <Tab sx={{ paddingRight: 6 }} label="Ruang CU" {...a11yProps(4)} />
          <Tab sx={{ paddingRight: 6 }} label="Boiler" {...a11yProps(5)} />
          <Tab sx={{ paddingRight: 6 }} label="WWTP" {...a11yProps(6)} />
          <Tab sx={{ paddingRight: 6 }} label="WTP" {...a11yProps(7)} />
          <Tab sx={{ paddingRight: 6 }} label="Spare Jasira" {...a11yProps(8)} />
          <Tab sx={{ paddingRight: 6 }} label="Spare Alkonnusa" {...a11yProps(9)} />
          <Tab sx={{ paddingRight: 6 }} label="Hydrant" {...a11yProps(10)} />
          <Tab sx={{ paddingRight: 6 }} label="Multikon part 2" {...a11yProps(11)} />
          <Tab sx={{ paddingRight: 6 }} label="Line 1" {...a11yProps(12)} />
          <Tab sx={{ paddingRight: 6 }} label="Line 2" {...a11yProps(13)} />
        </Tabs>
        <TabPanel value={value} index={0}>
            {/* <Grid container spacing={gridSpacing}>
                <Grid item xs={12} >
                    <Grid container spacing={gridSpacing}>
                        <Grid item lg={4} xs={12}>
                            <Tegangan isLoading={isLoading} />
                        </Grid>
                        <Grid item lg={4}  xs={12}>
                            <Arus isLoading={isLoading} />
                        </Grid>
                        <Grid item lg={4}  xs={12}>
                            <Daya isLoading={isLoading} />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                     <Grid container spacing={gridSpacing}>
                        <Grid item lg={6} xs={12}>
                                <SalesOverview/>
                        </Grid>
                        <Grid item lg={6} xs={12}>
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
                </Grid>
            </Grid> */}
           Item One
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={3}>
          Item Four
        </TabPanel>
        <TabPanel value={value} index={4}>
          Item Five
        </TabPanel>
        <TabPanel value={value} index={5}>
          Item Six
        </TabPanel>
        <TabPanel value={value} index={6}>
          Item Seven
        </TabPanel>
        <TabPanel value={value} index={7}>
          Item One
        </TabPanel>
        <TabPanel value={value} index={8}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={9}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={10}>
          Item Four
        </TabPanel>
        <TabPanel value={value} index={11}>
          Item Five
        </TabPanel>
        <TabPanel value={value} index={12}>
          Item Six
        </TabPanel>
        <TabPanel value={value} index={13}>
          Item Seven
        </TabPanel>
      </Box>
)};

export default LvmdpUtility;