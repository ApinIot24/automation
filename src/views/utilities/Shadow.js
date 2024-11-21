import * as React from 'react';
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Grid , Divider} from '@mui/material';
import PopularCardA5 from 'views/dashboard/Default/A5/PopularCardA5';
import EarningCardA5 from 'views/dashboard/Default/A5/EarningCardA5';
import EarningCardTwoA5 from 'views/dashboard/Default/A5/EarningCardTwoA5';
import EarningCardThreeA5 from 'views/dashboard/Default/A5/EarningCardThreeA5';
import EarningCardFiveA5 from 'views/dashboard/Default/A5/EarningCardFiveA5';
import EarningCardFourA5 from 'views/dashboard/Default/A5/EarningCardFourA5';
import CardCounterBandet from 'views/dashboard/Default/BB/CardCounterBandet';
import CardCounterBox from 'views/dashboard/Default/BB/CardCounterBox';
import GrafekBandet from 'views/dashboard/Default/BB/GrafekBandet';
import GrafekBox from 'views/dashboard/Default/BB/GrafekBox';
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';
import ButtonEle from 'ui-component/Button';
// import FormLHP from 'views/dashboard/Default/A5/FormLHP';

// ==============================|| Happy Coding ||============================== //

const UtilitiesShadow = () => {
  const [value, setValue] = React.useState('0');
  
  const [urlapi] = useState({
    packinga1 : 'http://10.37.12.17:3000/packing_a1',
    packinga2 : 'http://10.37.12.17:3000/packing_a2',
    packinga5 : 'http://10.37.12.17:3000/packing_a5',
    packingb5 : 'http://10.37.12.17:3000/packing_b5',
    packinga3 : 'http://10.37.12.17:3000/packing_a3',
    grapika1 : 'http://10.37.12.17:3000/shift1_a1',
    grapika2 : 'http://10.37.12.17:3000/shift1_a2',
    grapika5 : 'http://10.37.12.17:3000/shift1_a5',
    grapikb5 : 'http://10.37.12.17:3000/shift1_b5',
    grapika3 : 'http://10.37.12.17:3000/shift1_a3',
    packingl1_all : 'http://10.37.12.17:3000/packing_l1_all',
    urlp2 : 'table',
    pathnih : '/utils/packing-line1/table',
    grapikl1 : 'http://10.37.12.17:3000/shift1_l1',
    packingl1 : 'http://10.37.12.17:3000/packing_l1',
  })
  const [label] = useState({
    grapa1 : 'a1',
    grapa2 : 'a2',
    grapa5 : 'a5',
    grapb5 : 'b5',
    grapa3 : 'a3',
    grapl1 : 'l1',
    a1 : 'MP A1',
    a2 : 'MP A2',
    a5 : 'MP A5',
    b5 : 'MP B5',
    a3 : 'MP A3'
  })
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
   
    setLoading(false);
  }, []);

  return (
  <MainCard title="Packing Wafer Line 1" secondary={<ButtonEle  path={urlapi.urlp2} />}>
    <TabContext value={value}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <TabList onChange={handleChange} variant="scrollable" scrollButtons="auto" aria-label="scrollable auto tabs example">
          <Tab label="Home" value="0" />
          <Tab label="A1" value="1" />
          <Tab label="A2" value="2" />
          <Tab label="A5" value="3" />
          <Tab label="B5" value="4" />
        </TabList>
      </Box>
      <TabPanel value="0">
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12} sm={4}>
              <CardCounterBandet url={urlapi.packingl1} isLoading={isLoading} />
             <Divider sx={{ my: 1.5 }} />
              <CardCounterBox url={urlapi.packingl1} isLoading={isLoading} />
          </Grid>
          <Grid item xs={12} sm={8}>
              <GrafekBandet label={label.grapl1} url={urlapi.grapikl1} isLoading={isLoading} />
            <Divider sx={{ my: 1.5 }} />
              <GrafekBox label={label.grapl1} url={urlapi.grapikl1} isLoading={isLoading} />
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value="1">
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12} sm={4}>
             <PopularCardA5 url={urlapi.packinga1} isLoading={isLoading} />
          </Grid>
          <Grid item xs={12} sm={8}>
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item lg={6} md={12} sm={12} xs={12} >
                <EarningCardA5 url={urlapi.packinga1} isLoading={isLoading} />
              </Grid>
              <Grid item lg={6} md={12} sm={12} xs={12}>
                <EarningCardTwoA5 url={urlapi.packinga1} isLoading={isLoading} />
              </Grid>
            </Grid>
            <Divider sx={{ my: 1.5 }} />
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item lg={6} md={12} sm={12} xs={12} >
                <EarningCardThreeA5 url={urlapi.packinga1} isLoading={isLoading} />
              </Grid>
              <Grid item lg={6} md={12} sm={12} xs={12}>
                <EarningCardFourA5 url={urlapi.packinga1} isLoading={isLoading} />
              </Grid>
            </Grid>
            <Divider sx={{ my: 1.5 }} />
            <Grid container alignItems="center">
              <Grid item lg={12} md={12} sm={12} xs={12} >
                <EarningCardFiveA5 label={label.grapa1} url={urlapi.grapika1} isLoading={isLoading} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value="2">
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12} sm={4}>
             <PopularCardA5 url={urlapi.packinga2} isLoading={isLoading} />
          </Grid>
          <Grid item xs={12} sm={8}>
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item lg={6} md={12} sm={12} xs={12} >
                <EarningCardA5 url={urlapi.packinga2} isLoading={isLoading} />
              </Grid>
              <Grid item lg={6} md={12} sm={12} xs={12}>
                <EarningCardTwoA5 url={urlapi.packinga2} isLoading={isLoading} />
              </Grid>
            </Grid>
            <Divider sx={{ my: 1.5 }} />
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item lg={6} md={12} sm={12} xs={12} >
                <EarningCardThreeA5 url={urlapi.packinga2} isLoading={isLoading} />
              </Grid>
              <Grid item lg={6} md={12} sm={12} xs={12}>
                <EarningCardFourA5 url={urlapi.packinga2} isLoading={isLoading} />
              </Grid>
            </Grid>
            <Divider sx={{ my: 1.5 }} />
            <Grid container alignItems="center">
              <Grid item lg={12} md={12} sm={12} xs={12} >
                <EarningCardFiveA5 label={label.grapa2} url={urlapi.grapika2} isLoading={isLoading} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value="3">
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12} sm={4}>
             <PopularCardA5 url={urlapi.packinga5} isLoading={isLoading} />
          </Grid>
          <Grid item xs={12} sm={8}>
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item lg={6} md={12} sm={12} xs={12} >
                <EarningCardA5 url={urlapi.packinga5} isLoading={isLoading} />
              </Grid>
              <Grid item lg={6} md={12} sm={12} xs={12}>
                <EarningCardTwoA5 url={urlapi.packinga5} isLoading={isLoading} />
              </Grid>
            </Grid>
            <Divider sx={{ my: 1.5 }} />
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item lg={6} md={12} sm={12} xs={12} >
                <EarningCardThreeA5 url={urlapi.packinga5} isLoading={isLoading} />
              </Grid>
              <Grid item lg={6} md={12} sm={12} xs={12}>
                <EarningCardFourA5 url={urlapi.packinga5} isLoading={isLoading} />
              </Grid>
            </Grid>
            <Divider sx={{ my: 1.5 }} />
            <Grid container alignItems="center">
              <Grid item lg={12} md={12} sm={12} xs={12} >
                <EarningCardFiveA5 label={label.grapa5} url={urlapi.grapika5} isLoading={isLoading} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value="4">
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12} sm={4}>
             <PopularCardA5 url={urlapi.packingb5} isLoading={isLoading} />
          </Grid>
          <Grid item xs={12} sm={8}>
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item lg={6} md={12} sm={12} xs={12} >
                <EarningCardA5 url={urlapi.packingb5} isLoading={isLoading} />
              </Grid>
              <Grid item lg={6} md={12} sm={12} xs={12}>
                <EarningCardTwoA5 url={urlapi.packingb5} isLoading={isLoading} />
              </Grid>
            </Grid>
            <Divider sx={{ my: 1.5 }} />
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item lg={6} md={12} sm={12} xs={12} >
                <EarningCardThreeA5 url={urlapi.packingb5} isLoading={isLoading} />
              </Grid>
              <Grid item lg={6} md={12} sm={12} xs={12}>
                <EarningCardFourA5 url={urlapi.packingb5} isLoading={isLoading} />
              </Grid>
            </Grid>
            <Divider sx={{ my: 1.5 }} />
            <Grid container alignItems="center">
              <Grid item lg={12} md={12} sm={12} xs={12} >
                <EarningCardFiveA5 label={label.grapb5} url={urlapi.grapikb5} isLoading={isLoading} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value="5">
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12} sm={4}>
             <PopularCardA5 url={urlapi.packinga3} isLoading={isLoading} />
          </Grid>
          <Grid item xs={12} sm={8}>
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item lg={6} md={12} sm={12} xs={12} >
                <EarningCardA5 url={urlapi.packinga3} isLoading={isLoading} />
              </Grid>
              <Grid item lg={6} md={12} sm={12} xs={12}>
                <EarningCardTwoA5 url={urlapi.packinga3} isLoading={isLoading} />
              </Grid>
            </Grid>
            <Divider sx={{ my: 1.5 }} />
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item lg={6} md={12} sm={12} xs={12} >
                <EarningCardThreeA5 url={urlapi.packinga3} isLoading={isLoading} />
              </Grid>
              <Grid item lg={6} md={12} sm={12} xs={12}>
                <EarningCardFourA5 url={urlapi.packinga3} isLoading={isLoading} />
              </Grid>
            </Grid>
            <Divider sx={{ my: 1.5 }} />
            <Grid container alignItems="center">
              <Grid item lg={12} md={12} sm={12} xs={12} >
                <EarningCardFiveA5 label={label.grapa3} url={urlapi.grapika3} isLoading={isLoading} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </TabPanel>
    </TabContext>
  </MainCard>
  )
};

export default UtilitiesShadow;
