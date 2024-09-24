import * as React from 'react';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import { gridSpacing } from 'store/constant';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Tegangan from './Tegangan';
// import SalesOverview from 'views/utilities/components/SalesOverview';
// import YearlyBreakup from 'views/utilities/components/YearlyBreakup';
// import MonthlyEarnings from 'views/utilities/components/MonthlyEarnings';
import Arus from './Arus';
import Daya from './Daya';
import CardArus from './CardArus';
import CardDaya from './CardDaya';
import CardTegangan from './CardTegangan';
import ButtonEle from 'ui-component/Button';
import SubCard from 'ui-component/cards/SubCard';
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
const MdpSub1 = () => {
    const [value, setValue] = React.useState(0);
    const [isLoading, setLoading] = useState(true);
    const [label] = useState({
      util_cenkitt : 'util_cenkit/',
    })
    const [urlapi] = useState({
      urlp2 : 'ckwafer/table',
      util_cenkit : 'http://10.37.12.17:3000/shift1_util_cenkit/',
      util_by_type : 'http://10.37.12.17:3000/util_cenkit/',
  
    });
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    useEffect(() => {
        setLoading(false);
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
          <Tab sx={{ paddingRight: 6 }} label="LVMDP Sub 1" {...a11yProps(0)} />
          <Tab sx={{ paddingRight: 6 }} label="Proses Wafer" {...a11yProps(1)} />
          <Tab sx={{ paddingRight: 6 }} label="CK Wafer" {...a11yProps(2)} />
          <Tab sx={{ paddingRight: 6 }} label="Formulasi" {...a11yProps(3)} />
          <Tab sx={{ paddingRight: 6 }} label="CK Ballmill" {...a11yProps(4)} />
          <Tab sx={{ paddingRight: 6 }} label="Lampu Koridor" {...a11yProps(5)} />
          <Tab sx={{ paddingRight: 6 }} label="Packing Zone 4.1" {...a11yProps(6)} />
          <Tab sx={{ paddingRight: 6 }} label="Packing Zone 4.2" {...a11yProps(7)} />
          <Tab sx={{ paddingRight: 6 }} label="PP Kompresor" {...a11yProps(8)} />
          <Tab sx={{ paddingRight: 6 }} label="AHU 1" {...a11yProps(9)} />
          <Tab sx={{ paddingRight: 6 }} label="AHU 2" {...a11yProps(10)} />
          <Tab sx={{ paddingRight: 6 }} label="AHU 3" {...a11yProps(11)} />
          <Tab sx={{ paddingRight: 6 }} label="Temp Travo" {...a11yProps(12)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          Item One
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
            <Grid container mt={-5} spacing={gridSpacing}>
                  <Grid item xs={12} >
                    <SubCard title="CK Wafer" secondary={<ButtonEle  path={urlapi.urlp2} />} >
                  </SubCard>
                </Grid>
                <Grid item xs={12} >
                    <Grid container spacing={gridSpacing}>
                        <Grid item lg={4} xs={12}>
                            <CardTegangan isLoading={isLoading} url={urlapi.util_by_type}/>
                        </Grid>
                        <Grid item lg={4}  xs={12}>
                          <CardArus isLoading={isLoading} url={urlapi.util_by_type}/>
                          
                        </Grid>
                        <Grid item lg={4}  xs={12}>
                          <CardDaya isLoading={isLoading}url={urlapi.util_by_type}/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={gridSpacing}>
                        <Grid item lg={4} xs={12}>
                            <Tegangan isLoading={isLoading} label={label.util_cenkitt} url={urlapi.util_cenkit} />
                        </Grid>
                        <Grid item lg={4}  xs={12}>
                            <Arus isLoading={isLoading} label={label.util_cenkitt} url={urlapi.util_cenkit}/>
                        </Grid>
                        <Grid item lg={4}  xs={12}>
                            <Daya isLoading={isLoading} label={label.util_cenkitt} url={urlapi.util_cenkit}/>
                        </Grid>
                    </Grid>
                     {/* <Grid container spacing={gridSpacing}>
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
                    </Grid> */}
                </Grid>
            </Grid>
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
      </Box>
)};

export default MdpSub1;