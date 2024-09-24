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
import FormLHP_7 from 'views/dashboard/Default/A5/FormLHP_7';

// ==============================|| Happy Coding ||============================== //

const Packingl7 = () => {
  const [value, setValue] = React.useState('0');
  const [label] = useState({
    packingb3 : 'PACKING B3',
    packingb1 : 'http://10.37.12.17:3000/packing_b1',
    packingb2 : 'http://10.37.12.17:3000/packing_b2',
    packingb4 : 'http://10.37.12.17:3000/packing_b4',
    packinga4 : 'http://10.37.12.17:3000/packing_a4',
    packinga5 : 'PACKING A5',
    grapl7 : 'l7',
    grapb1 : 'b1',
    grapb2 : 'b2',
    grapb3 : 'b3',
    grapb4 : 'b4',
    grapa4 : 'a4',
    g1 : 'MP G1',
    g2 : 'MP G2',
    g3 : 'MP G3',
    g4 : 'MP G4',
    g5 : 'MP G5',
    g6 : 'MP G6',
    g7 : 'MP G7',
    g8 : 'MP G8'
  })
  const [urlapi] = useState({
    packingb3 : 'http://10.37.12.17:3000/packing_b3',
    packingb1 : 'http://10.37.12.17:3000/packing_b1',
    packingl7 : 'http://10.37.12.17:3000/packing_l7',
    packingb2 : 'http://10.37.12.17:3000/packing_b2',
    packingb4 : 'http://10.37.12.17:3000/packing_b4',
    packinga4 : 'http://10.37.12.17:3000/packing_a4',
    packingl7_all : 'http://10.37.12.17:3000/packing_l7_all',
    urlp2 : 'table',
    pathnih : '/utils/packing-Line7/table',
    grapikb1 : 'http://10.37.12.17:3000/shift1_b1',
    grapikl7 : 'http://10.37.12.17:3000/shift1_l7',
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
  <MainCard title="Packing Wafer Line 7" secondary={<ButtonEle  path={urlapi.urlp2} />} >
    <TabContext value={value}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <TabList onChange={handleChange} variant="scrollable" scrollButtons="auto" aria-label="scrollable auto tabs example">
          <Tab label="Home" value="0" />
          <Tab label="g1" value="1" />
          <Tab label="g2" value="2" />
          <Tab label="g3" value="3" />
          <Tab label="g4" value="4" />
          <Tab label="g5" value="5" />
          <Tab label="g6" value="6" />
          <Tab label="g7" value="7" />
          <Tab label="g8" value="8" />
          <Tab label="LHP" value="9" />
        </TabList>
      </Box>
      <TabPanel value="0">
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12} sm={4}>
              <CardCounterBandet url={urlapi.packingl7} isLoading={isLoading} />
             <Divider sx={{ my: 1.5 }} />
              <CardCounterBox url={urlapi.packingl7} isLoading={isLoading} />
          </Grid>
          <Grid item xs={12} sm={8}>
              <GrafekBandet label={label.grapl7} url={urlapi.grapikl7} isLoading={isLoading} />
            <Divider sx={{ my: 1.5 }} />
              <GrafekBox label={label.grapl7} url={urlapi.grapikl7} isLoading={isLoading} />
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value="1">
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12} sm={4}>
             <PopularCard url={urlapi.packingb1} isLoading={isLoading} />
          </Grid>
          <Grid item xs={12} sm={8}>
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item lg={6} md={12} sm={12} xs={12} >
                <EarningCard url={urlapi.packingb1} isLoading={isLoading} />
              </Grid>
              <Grid item lg={6} md={12} sm={12} xs={12}>
                <EarningCardTwo url={urlapi.packingb1} isLoading={isLoading} />
              </Grid>
            </Grid>
            <Divider sx={{ my: 1.5 }} />
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item lg={6} md={12} sm={12} xs={12} >
                <EarningCardThree url={urlapi.packingb1} isLoading={isLoading} />
              </Grid>
              <Grid item lg={6} md={12} sm={12} xs={12}>
                <EarningCardFour url={urlapi.packingb1} isLoading={isLoading} />
              </Grid>
            </Grid>
            <Divider sx={{ my: 1.5 }} />
            <Grid container alignItems="center">
              <Grid item lg={12} md={12} sm={12} xs={12} >
                <EarningCardFive label={label.grapb1} url={urlapi.grapikb1} isLoading={isLoading} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value="2">
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12} sm={4}>
             <PopularCard url={urlapi.packingb2} isLoading={isLoading} />
          </Grid>
          <Grid item xs={12} sm={8}>
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item lg={6} md={12} sm={12} xs={12} >
                <EarningCard url={urlapi.packingb2} isLoading={isLoading} />
              </Grid>
              <Grid item lg={6} md={12} sm={12} xs={12}>
                <EarningCardTwo url={urlapi.packingb2} isLoading={isLoading} />
              </Grid>
            </Grid>
            <Divider sx={{ my: 1.5 }} />
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item lg={6} md={12} sm={12} xs={12} >
                <EarningCardThree url={urlapi.packingb2} isLoading={isLoading} />
              </Grid>
              <Grid item lg={6} md={12} sm={12} xs={12}>
                <EarningCardFour url={urlapi.packingb2} isLoading={isLoading} />
              </Grid>
            </Grid>
            <Divider sx={{ my: 1.5 }} />
            <Grid container alignItems="center">
              <Grid item lg={12} md={12} sm={12} xs={12} >
                <EarningCardFive label={label.grapb2} url={urlapi.grapikb2} isLoading={isLoading} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value="3">
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12} sm={4}>
             <PopularCard url={urlapi.packingb3} isLoading={isLoading} />
          </Grid>
          <Grid item xs={12} sm={8}>
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item lg={6} md={12} sm={12} xs={12} >
                <EarningCard url={urlapi.packingb3} isLoading={isLoading} />
              </Grid>
              <Grid item lg={6} md={12} sm={12} xs={12}>
                <EarningCardTwo url={urlapi.packingb3} isLoading={isLoading} />
              </Grid>
            </Grid>
            <Divider sx={{ my: 1.5 }} />
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item lg={6} md={12} sm={12} xs={12} >
                <EarningCardThree url={urlapi.packingb3} isLoading={isLoading} />
              </Grid>
              <Grid item lg={6} md={12} sm={12} xs={12}>
                <EarningCardFour url={urlapi.packingb3} isLoading={isLoading} />
              </Grid>
            </Grid>
            <Divider sx={{ my: 1.5 }} />
            <Grid container alignItems="center">
              <Grid item lg={12} md={12} sm={12} xs={12} >
                <EarningCardFive label={label.grapb3} url={urlapi.grapikb3} isLoading={isLoading} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value="4">
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12} sm={4}>
             <PopularCard url={urlapi.packingb4} isLoading={isLoading} />
          </Grid>
          <Grid item xs={12} sm={8}>
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item lg={6} md={12} sm={12} xs={12} >
                <EarningCard url={urlapi.packingb4} isLoading={isLoading} />
              </Grid>
              <Grid item lg={6} md={12} sm={12} xs={12}>
                <EarningCardTwo url={urlapi.packingb4} isLoading={isLoading} />
              </Grid>
            </Grid>
            <Divider sx={{ my: 1.5 }} />
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item lg={6} md={12} sm={12} xs={12} >
                <EarningCardThree url={urlapi.packingb4} isLoading={isLoading} />
              </Grid>
              <Grid item lg={6} md={12} sm={12} xs={12}>
                <EarningCardFour url={urlapi.packingb4} isLoading={isLoading} />
              </Grid>
            </Grid>
            <Divider sx={{ my: 1.5 }} />
            <Grid container alignItems="center">
              <Grid item lg={12} md={12} sm={12} xs={12} >
                <EarningCardFive label={label.grapb4} url={urlapi.grapikb4} isLoading={isLoading} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value="5">
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12} sm={4}>
             <PopularCard url={urlapi.packinga4} isLoading={isLoading} />
          </Grid>
          <Grid item xs={12} sm={8}>
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item lg={6} md={12} sm={12} xs={12} >
                <EarningCard url={urlapi.packinga4} isLoading={isLoading} />
              </Grid>
              <Grid item lg={6} md={12} sm={12} xs={12}>
                <EarningCardTwo url={urlapi.packinga4} isLoading={isLoading} />
              </Grid>
            </Grid>
            <Divider sx={{ my: 1.5 }} />
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item lg={6} md={12} sm={12} xs={12} >
                <EarningCardThree url={urlapi.packinga4} isLoading={isLoading} />
              </Grid>
              <Grid item lg={6} md={12} sm={12} xs={12}>
                <EarningCardFour url={urlapi.packinga4} isLoading={isLoading} />
              </Grid>
            </Grid>
            <Divider sx={{ my: 1.5 }} />
            <Grid container alignItems="center">
              <Grid item lg={12} md={12} sm={12} xs={12} >
                <EarningCardFive label={label.grapa4} url={urlapi.grapika4} isLoading={isLoading} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value="6">
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12} sm={4}>
             <PopularCard url={urlapi.packinga4} isLoading={isLoading} />
          </Grid>
          <Grid item xs={12} sm={8}>
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item lg={6} md={12} sm={12} xs={12} >
                <EarningCard url={urlapi.packinga4} isLoading={isLoading} />
              </Grid>
              <Grid item lg={6} md={12} sm={12} xs={12}>
                <EarningCardTwo url={urlapi.packinga4} isLoading={isLoading} />
              </Grid>
            </Grid>
            <Divider sx={{ my: 1.5 }} />
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item lg={6} md={12} sm={12} xs={12} >
                <EarningCardThree url={urlapi.packinga4} isLoading={isLoading} />
              </Grid>
              <Grid item lg={6} md={12} sm={12} xs={12}>
                <EarningCardFour url={urlapi.packinga4} isLoading={isLoading} />
              </Grid>
            </Grid>
            <Divider sx={{ my: 1.5 }} />
            <Grid container alignItems="center">
              <Grid item lg={12} md={12} sm={12} xs={12} >
                <EarningCardFive label={label.grapa4} url={urlapi.grapika4} isLoading={isLoading} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value="7">
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12} sm={4}>
             <PopularCard url={urlapi.packinga4} isLoading={isLoading} />
          </Grid>
          <Grid item xs={12} sm={8}>
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item lg={6} md={12} sm={12} xs={12} >
                <EarningCard url={urlapi.packinga4} isLoading={isLoading} />
              </Grid>
              <Grid item lg={6} md={12} sm={12} xs={12}>
                <EarningCardTwo url={urlapi.packinga4} isLoading={isLoading} />
              </Grid>
            </Grid>
            <Divider sx={{ my: 1.5 }} />
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item lg={6} md={12} sm={12} xs={12} >
                <EarningCardThree url={urlapi.packinga4} isLoading={isLoading} />
              </Grid>
              <Grid item lg={6} md={12} sm={12} xs={12}>
                <EarningCardFour url={urlapi.packinga4} isLoading={isLoading} />
              </Grid>
            </Grid>
            <Divider sx={{ my: 1.5 }} />
            <Grid container alignItems="center">
              <Grid item lg={12} md={12} sm={12} xs={12} >
                <EarningCardFive label={label.grapa4} url={urlapi.grapika4} isLoading={isLoading} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value="8">
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12} sm={4}>
             <PopularCard url={urlapi.packinga4} isLoading={isLoading} />
          </Grid>
          <Grid item xs={12} sm={8}>
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item lg={6} md={12} sm={12} xs={12} >
                <EarningCard url={urlapi.packinga4} isLoading={isLoading} />
              </Grid>
              <Grid item lg={6} md={12} sm={12} xs={12}>
                <EarningCardTwo url={urlapi.packinga4} isLoading={isLoading} />
              </Grid>
            </Grid>
            <Divider sx={{ my: 1.5 }} />
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item lg={6} md={12} sm={12} xs={12} >
                <EarningCardThree url={urlapi.packinga4} isLoading={isLoading} />
              </Grid>
              <Grid item lg={6} md={12} sm={12} xs={12}>
                <EarningCardFour url={urlapi.packinga4} isLoading={isLoading} />
              </Grid>
            </Grid>
            <Divider sx={{ my: 1.5 }} />
            <Grid container alignItems="center">
              <Grid item lg={12} md={12} sm={12} xs={12} >
                <EarningCardFive label={label.grapa4} url={urlapi.grapika4} isLoading={isLoading} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value="9">
        <FormLHP_7
        pathnih={urlapi.pathnih}
        label0={label.grapl7}
        label1={label.g1} 
        label2={label.g2} 
        label3={label.g3} 
        label4={label.g4} 
        label5={label.g5}
        label6={label.g6}
        label7={label.g7}
        label8={label.g8}
        />
      </TabPanel>
    </TabContext>
  </MainCard>
  )
};

export default Packingl7;
