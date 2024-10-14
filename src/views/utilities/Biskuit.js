import * as React from 'react';
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Grid , Divider} from '@mui/material';
import PopularCard from '../dashboard/Default/B3/PopularCard';
import EarningCard from '../dashboard/Default/B3/EarningCard';
import EarningCardTwo from 'views/dashboard/Default/B3/EarningCardTwo';
import EarningCardThree from 'views/dashboard/Default/B3/EarningCardThree';
import EarningCardFour from 'views/dashboard/Default/B3/EarningCardFour';
import EarningCardFive from 'views/dashboard/Default/B3/EarningCardFive';
import CardCounterBandet from 'views/dashboard/Default/BB/CardCounterBandet';
import ButtonEle from 'ui-component/Button';
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';
import CardCounterBox from 'views/dashboard/Default/BB/CardCounterBox';
import GrafekBandet from 'views/dashboard/Default/BB/GrafekBandet';
import GrafekBox from 'views/dashboard/Default/BB/GrafekBox';
import FormLHP_5 from 'views/dashboard/Default/A5/FormLHP_5';

// ==============================|| Happy Coding ||============================== //

const Biskuit = () => {
  const [value, setValue] = React.useState('0');
  
  const [label] = useState({
    packingb3 : 'PACKING B3',
    packingb1 : 'http://10.37.12.17:3000/packing_b1',
    packingb2 : 'http://10.37.12.17:3000/packing_b2',
    packingb4 : 'http://10.37.12.17:3000/packing_b4',
    packinga4 : 'http://10.37.12.17:3000/packing_a4',
    packinga5 : 'PACKING A5',
    grapl2 : 'l5',
    grapb1 : 'b1',
    grapb2 : 'b2',
    grapb3 : 'b3',
    grapb4 : 'b4',
    grapa4 : 'a4',
    b1 : 'MP B1',
    b2 : 'MP B2',
    b3 : 'MP B3',
    b4 : 'MP B4',
    a4 : 'MP A4'
  })

  const [urlapi] = useState({
    packingb3 : 'http://10.37.12.17:3000/packing_b3',
    packingb1 : 'http://10.37.12.17:3000/packing_b1',
    packingl2 : 'http://10.37.12.17:3000/packing_l2',
    packingb2 : 'http://10.37.12.17:3000/packing_b2',
    packingb4 : 'http://10.37.12.17:3000/packing_b4',
    packinga4 : 'http://10.37.12.17:3000/packing_a4',
    packingl2_all : 'http://10.37.12.17:3000/packing_l2_all',
    urlp2 : 'table',
    pathnih : '/utils/packing-line5-bsc/table',
    grapikb1 : 'http://10.37.12.17:3000/shift1_b1',
    grapikl2 : 'http://10.37.12.17:3000/shift1_l2',
    grapikb2 : 'http://10.37.12.17:3000/shift1_b2',
    grapikb3 : 'http://10.37.12.17:3000/shift1_b3',
    grapikb4 : 'http://10.37.12.17:3000/shift1_b4',
    grapika4 : 'http://10.37.12.17:3000/shift1_a4'

  })
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
   
    setLoading(false);
  }, []);

  return (
  <MainCard title="Packing Biskuit Line 5" secondary={<ButtonEle  path={urlapi.urlp2} />} >
    <TabContext value={value}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <TabList onChange={handleChange} variant="scrollable" scrollButtons="auto" aria-label="scrollable auto tabs example">
          <Tab label="Home" value="0" />
          <Tab label="E1" value="1" />
          <Tab label="E2" value="2" />
          <Tab label="E3" value="3" />
          <Tab label="E4" value="4" />
          <Tab label="E5" value="5" />
          <Tab label="E6" value="6" />
          <Tab label="E7" value="7" />
          <Tab label="E8" value="8" />
          <Tab label="E9" value="9" />
          <Tab label="E10" value="10" />
          <Tab label="E11" value="11" />
          <Tab label="E12" value="12" />
          <Tab label="LHP" value="13" />
        </TabList>
      </Box>
      <TabPanel value="0">
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12} sm={4}>
              <CardCounterBandet url={urlapi} isLoading={isLoading} />
             <Divider sx={{ my: 1.5 }} />
              <CardCounterBox url={urlapi} isLoading={isLoading} />
          </Grid>
          <Grid item xs={12} sm={8}>
              <GrafekBandet label={label} url={urlapi} isLoading={isLoading} />
            <Divider sx={{ my: 1.5 }} />
              <GrafekBox label={label} url={urlapi} isLoading={isLoading} />
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value="1">
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12} sm={4}>
             <PopularCard url={urlapi} isLoading={isLoading} />
          </Grid>
          <Grid item xs={12} sm={8}>
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item lg={6} md={12} sm={12} xs={12} >
                <EarningCard url={urlapi} isLoading={isLoading} />
              </Grid>
              <Grid item lg={6} md={12} sm={12} xs={12}>
                <EarningCardTwo url={urlapi} isLoading={isLoading} />
              </Grid>
            </Grid>
            <Divider sx={{ my: 1.5 }} />
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item lg={6} md={12} sm={12} xs={12} >
                <EarningCardThree url={urlapi} isLoading={isLoading} />
              </Grid>
              <Grid item lg={6} md={12} sm={12} xs={12}>
                <EarningCardFour url={urlapi} isLoading={isLoading} />
              </Grid>
            </Grid>
            <Divider sx={{ my: 1.5 }} />
            <Grid container alignItems="center">
              <Grid item lg={12} md={12} sm={12} xs={12} >
                <EarningCardFive label={label} url={urlapi} isLoading={isLoading} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value="2">
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12} sm={4}>
             <PopularCard url={urlapi} isLoading={isLoading} />
          </Grid>
          <Grid item xs={12} sm={8}>
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item lg={6} md={12} sm={12} xs={12} >
                <EarningCard url={urlapi} isLoading={isLoading} />
              </Grid>
              <Grid item lg={6} md={12} sm={12} xs={12}>
                <EarningCardTwo url={urlapi} isLoading={isLoading} />
              </Grid>
            </Grid>
            <Divider sx={{ my: 1.5 }} />
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item lg={6} md={12} sm={12} xs={12} >
                <EarningCardThree url={urlapi} isLoading={isLoading} />
              </Grid>
              <Grid item lg={6} md={12} sm={12} xs={12}>
                <EarningCardFour url={urlapi} isLoading={isLoading} />
              </Grid>
            </Grid>
            <Divider sx={{ my: 1.5 }} />
            <Grid container alignItems="center">
              <Grid item lg={12} md={12} sm={12} xs={12} >
                <EarningCardFive label={label} url={urlapi} isLoading={isLoading} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value="3">
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12} sm={4}>
             <PopularCard url={urlapi} isLoading={isLoading} />
          </Grid>
          <Grid item xs={12} sm={8}>
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item lg={6} md={12} sm={12} xs={12} >
                <EarningCard url={urlapi} isLoading={isLoading} />
              </Grid>
              <Grid item lg={6} md={12} sm={12} xs={12}>
                <EarningCardTwo url={urlapi} isLoading={isLoading} />
              </Grid>
            </Grid>
            <Divider sx={{ my: 1.5 }} />
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item lg={6} md={12} sm={12} xs={12} >
                <EarningCardThree url={urlapi} isLoading={isLoading} />
              </Grid>
              <Grid item lg={6} md={12} sm={12} xs={12}>
                <EarningCardFour url={urlapi} isLoading={isLoading} />
              </Grid>
            </Grid>
            <Divider sx={{ my: 1.5 }} />
            <Grid container alignItems="center">
              <Grid item lg={12} md={12} sm={12} xs={12} >
                <EarningCardFive label={label} url={urlapi} isLoading={isLoading} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value="4">
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12} sm={4}>
             <PopularCard url={urlapi} isLoading={isLoading} />
          </Grid>
          <Grid item xs={12} sm={8}>
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item lg={6} md={12} sm={12} xs={12} >
                <EarningCard url={urlapi} isLoading={isLoading} />
              </Grid>
              <Grid item lg={6} md={12} sm={12} xs={12}>
                <EarningCardTwo url={urlapi} isLoading={isLoading} />
              </Grid>
            </Grid>
            <Divider sx={{ my: 1.5 }} />
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item lg={6} md={12} sm={12} xs={12} >
                <EarningCardThree url={urlapi} isLoading={isLoading} />
              </Grid>
              <Grid item lg={6} md={12} sm={12} xs={12}>
                <EarningCardFour url={urlapi} isLoading={isLoading} />
              </Grid>
            </Grid>
            <Divider sx={{ my: 1.5 }} />
            <Grid container alignItems="center">
              <Grid item lg={12} md={12} sm={12} xs={12} >
                <EarningCardFive label={label} url={urlapi} isLoading={isLoading} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value="5">
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12} sm={4}>
             <PopularCard url={urlapi} isLoading={isLoading} />
          </Grid>
          <Grid item xs={12} sm={8}>
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item lg={6} md={12} sm={12} xs={12} >
                <EarningCard url={urlapi} isLoading={isLoading} />
              </Grid>
              <Grid item lg={6} md={12} sm={12} xs={12}>
                <EarningCardTwo url={urlapi} isLoading={isLoading} />
              </Grid>
            </Grid>
            <Divider sx={{ my: 1.5 }} />
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item lg={6} md={12} sm={12} xs={12} >
                <EarningCardThree url={urlapi} isLoading={isLoading} />
              </Grid>
              <Grid item lg={6} md={12} sm={12} xs={12}>
                <EarningCardFour url={urlapi} isLoading={isLoading} />
              </Grid>
            </Grid>
            <Divider sx={{ my: 1.5 }} />
            <Grid container alignItems="center">
              <Grid item lg={12} md={12} sm={12} xs={12} >
                <EarningCardFive label={label} url={urlapi} isLoading={isLoading} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value="6">
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12} sm={4}>
             <PopularCard url={urlapi} isLoading={isLoading} />
          </Grid>
          <Grid item xs={12} sm={8}>
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item lg={6} md={12} sm={12} xs={12} >
                <EarningCard url={urlapi} isLoading={isLoading} />
              </Grid>
              <Grid item lg={6} md={12} sm={12} xs={12}>
                <EarningCardTwo url={urlapi} isLoading={isLoading} />
              </Grid>
            </Grid>
            <Divider sx={{ my: 1.5 }} />
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item lg={6} md={12} sm={12} xs={12} >
                <EarningCardThree url={urlapi} isLoading={isLoading} />
              </Grid>
              <Grid item lg={6} md={12} sm={12} xs={12}>
                <EarningCardFour url={urlapi} isLoading={isLoading} />
              </Grid>
            </Grid>
            <Divider sx={{ my: 1.5 }} />
            <Grid container alignItems="center">
              <Grid item lg={12} md={12} sm={12} xs={12} >
                <EarningCardFive label={label} url={urlapi} isLoading={isLoading} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value="7">
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12} sm={4}>
             <PopularCard url={urlapi} isLoading={isLoading} />
          </Grid>
          <Grid item xs={12} sm={8}>
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item lg={6} md={12} sm={12} xs={12} >
                <EarningCard url={urlapi} isLoading={isLoading} />
              </Grid>
              <Grid item lg={6} md={12} sm={12} xs={12}>
                <EarningCardTwo url={urlapi} isLoading={isLoading} />
              </Grid>
            </Grid>
            <Divider sx={{ my: 1.5 }} />
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item lg={6} md={12} sm={12} xs={12} >
                <EarningCardThree url={urlapi} isLoading={isLoading} />
              </Grid>
              <Grid item lg={6} md={12} sm={12} xs={12}>
                <EarningCardFour url={urlapi} isLoading={isLoading} />
              </Grid>
            </Grid>
            <Divider sx={{ my: 1.5 }} />
            <Grid container alignItems="center">
              <Grid item lg={12} md={12} sm={12} xs={12} >
                <EarningCardFive label={label} url={urlapi} isLoading={isLoading} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value="8">
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12} sm={4}>
             <PopularCard url={urlapi} isLoading={isLoading} />
          </Grid>
          <Grid item xs={12} sm={8}>
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item lg={6} md={12} sm={12} xs={12} >
                <EarningCard url={urlapi} isLoading={isLoading} />
              </Grid>
              <Grid item lg={6} md={12} sm={12} xs={12}>
                <EarningCardTwo url={urlapi} isLoading={isLoading} />
              </Grid>
            </Grid>
            <Divider sx={{ my: 1.5 }} />
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item lg={6} md={12} sm={12} xs={12} >
                <EarningCardThree url={urlapi} isLoading={isLoading} />
              </Grid>
              <Grid item lg={6} md={12} sm={12} xs={12}>
                <EarningCardFour url={urlapi} isLoading={isLoading} />
              </Grid>
            </Grid>
            <Divider sx={{ my: 1.5 }} />
            <Grid container alignItems="center">
              <Grid item lg={12} md={12} sm={12} xs={12} >
                <EarningCardFive label={label} url={urlapi} isLoading={isLoading} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value="9">
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12} sm={4}>
             <PopularCard url={urlapi} isLoading={isLoading} />
          </Grid>
          <Grid item xs={12} sm={8}>
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item lg={6} md={12} sm={12} xs={12} >
                <EarningCard url={urlapi} isLoading={isLoading} />
              </Grid>
              <Grid item lg={6} md={12} sm={12} xs={12}>
                <EarningCardTwo url={urlapi} isLoading={isLoading} />
              </Grid>
            </Grid>
            <Divider sx={{ my: 1.5 }} />
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item lg={6} md={12} sm={12} xs={12} >
                <EarningCardThree url={urlapi} isLoading={isLoading} />
              </Grid>
              <Grid item lg={6} md={12} sm={12} xs={12}>
                <EarningCardFour url={urlapi} isLoading={isLoading} />
              </Grid>
            </Grid>
            <Divider sx={{ my: 1.5 }} />
            <Grid container alignItems="center">
              <Grid item lg={12} md={12} sm={12} xs={12} >
                <EarningCardFive label={label} url={urlapi} isLoading={isLoading} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value="10">
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12} sm={4}>
             <PopularCard url={urlapi} isLoading={isLoading} />
          </Grid>
          <Grid item xs={12} sm={8}>
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item lg={6} md={12} sm={12} xs={12} >
                <EarningCard url={urlapi} isLoading={isLoading} />
              </Grid>
              <Grid item lg={6} md={12} sm={12} xs={12}>
                <EarningCardTwo url={urlapi} isLoading={isLoading} />
              </Grid>
            </Grid>
            <Divider sx={{ my: 1.5 }} />
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item lg={6} md={12} sm={12} xs={12} >
                <EarningCardThree url={urlapi} isLoading={isLoading} />
              </Grid>
              <Grid item lg={6} md={12} sm={12} xs={12}>
                <EarningCardFour url={urlapi} isLoading={isLoading} />
              </Grid>
            </Grid>
            <Divider sx={{ my: 1.5 }} />
            <Grid container alignItems="center">
              <Grid item lg={12} md={12} sm={12} xs={12} >
                <EarningCardFive label={label} url={urlapi} isLoading={isLoading} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value="11">
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12} sm={4}>
             <PopularCard url={urlapi} isLoading={isLoading} />
          </Grid>
          <Grid item xs={12} sm={8}>
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item lg={6} md={12} sm={12} xs={12} >
                <EarningCard url={urlapi} isLoading={isLoading} />
              </Grid>
              <Grid item lg={6} md={12} sm={12} xs={12}>
                <EarningCardTwo url={urlapi} isLoading={isLoading} />
              </Grid>
            </Grid>
            <Divider sx={{ my: 1.5 }} />
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item lg={6} md={12} sm={12} xs={12} >
                <EarningCardThree url={urlapi} isLoading={isLoading} />
              </Grid>
              <Grid item lg={6} md={12} sm={12} xs={12}>
                <EarningCardFour url={urlapi} isLoading={isLoading} />
              </Grid>
            </Grid>
            <Divider sx={{ my: 1.5 }} />
            <Grid container alignItems="center">
              <Grid item lg={12} md={12} sm={12} xs={12} >
                <EarningCardFive label={label} url={urlapi} isLoading={isLoading} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value="12">
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12} sm={4}>
             <PopularCard url={urlapi} isLoading={isLoading} />
          </Grid>
          <Grid item xs={12} sm={8}>
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item lg={6} md={12} sm={12} xs={12} >
                <EarningCard url={urlapi} isLoading={isLoading} />
              </Grid>
              <Grid item lg={6} md={12} sm={12} xs={12}>
                <EarningCardTwo url={urlapi} isLoading={isLoading} />
              </Grid>
            </Grid>
            <Divider sx={{ my: 1.5 }} />
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item lg={6} md={12} sm={12} xs={12} >
                <EarningCardThree url={urlapi} isLoading={isLoading} />
              </Grid>
              <Grid item lg={6} md={12} sm={12} xs={12}>
                <EarningCardFour url={urlapi} isLoading={isLoading} />
              </Grid>
            </Grid>
            <Divider sx={{ my: 1.5 }} />
            <Grid container alignItems="center">
              <Grid item lg={12} md={12} sm={12} xs={12} >
                <EarningCardFive label={label} url={urlapi} isLoading={isLoading} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value="13">
        <FormLHP_5
        pathnih={urlapi.pathnih}
        label0={label.grapl2}
        />
      </TabPanel>
    </TabContext>
  </MainCard>
  )
};

export default Biskuit;