import * as React from 'react';
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Grid, Divider } from '@mui/material';
import CardCounterBandet from 'views/dashboard/Default/BB/CardCounterBandet';
import ButtonEle from 'ui-component/Button';
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';
import CardCounterBox from 'views/dashboard/Default/BB/CardCounterBox';
import GrafekBandet from 'views/dashboard/Default/BB/GrafekBandet';
import GrafekBox from 'views/dashboard/Default/BB/GrafekBox';

// ==============================|| Happy Coding ||============================== //

const Packingl6 = () => {
  const [value, setValue] = React.useState('0');
  const [label] = useState({
    packingb3: 'PACKING B3',
    packingb1: 'http://10.37.12.17:3000/packing_b1',
    packingb2: 'http://10.37.12.17:3000/packing_b2',
    packingb4: 'http://10.37.12.17:3000/packing_b4',
    packinga4: 'http://10.37.12.17:3000/packing_a4',
    packinga5: 'PACKING A5',
    grapl6: 'l6',
    grapb1: 'b1',
    grapb2: 'b2',
    grapb3: 'b3',
    grapb4: 'b4',
    grapa4: 'a4',
    g1: 'MP G1',
    g2: 'MP G2',
    g3: 'MP G3',
    g4: 'MP G4',
    g5: 'MP G5',
    g6: 'MP G6',
    g7: 'MP G7',
    g8: 'MP G8'
  })
  const [urlapi] = useState({
    packingb3: 'http://10.37.12.17:3000/packing_b3',
    packingb1: 'http://10.37.12.17:3000/packing_b1',
    packingl6: 'http://10.37.12.17:3000/packing_l6',
    packingb2: 'http://10.37.12.17:3000/packing_b2',
    packingb4: 'http://10.37.12.17:3000/packing_b4',
    packinga4: 'http://10.37.12.17:3000/packing_a4',
    packingl6_all: 'http://10.37.12.17:3000/packing_l6_all',
    urlp2: 'table',
    pathnih: '/utils/packing-Line7/table',
    grapikb1: 'http://10.37.12.17:3000/shift1_b1',
    grapikl6: 'http://10.37.12.17:3000/shift1_l6',
    grapikb2: 'http://10.37.12.17:3000/shift1_b2',
    grapikb3: 'http://10.37.12.17:3000/shift1_b3',
    grapikb4: 'http://10.37.12.17:3000/shift1_b4',
    grapika4: 'http://10.37.12.17:3000/shift1_a4'

  })
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {

    setLoading(false);
  }, []);

  return (
    <MainCard title="Packing Wafer Line 6" secondary={<ButtonEle path={urlapi.urlp2} />} >
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} variant="scrollable" scrollButtons="auto" aria-label="scrollable auto tabs example">
            <Tab label="Home" value="0" />
          </TabList>
        </Box>
        <TabPanel value="0">
          <Grid container spacing={gridSpacing}>
            <Grid item xs={12} sm={4}>
              <CardCounterBandet url={urlapi.packingl6} isLoading={isLoading} />
              <Divider sx={{ my: 1.5 }} />
              <CardCounterBox url={urlapi.packingl6} isLoading={isLoading} />
            </Grid>
            <Grid item xs={12} sm={8}>
              <GrafekBandet label={label.grapl6} url={urlapi.grapikl6} isLoading={isLoading} />
              <Divider sx={{ my: 1.5 }} />
              <GrafekBox label={label.grapl6} url={urlapi.grapikl6} isLoading={isLoading} />
            </Grid>
          </Grid>
        </TabPanel>
      </TabContext>
    </MainCard>
  )
};

export default Packingl6;
