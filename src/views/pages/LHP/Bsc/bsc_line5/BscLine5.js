import * as React from 'react';
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
// import { Grid, Divider } from '@mui/material';
// import PopularCardA5 from 'views/dashboard/Default/A5/PopularCardA5';
// import EarningCardA5 from 'views/dashboard/Default/A5/EarningCardA5';
// import EarningCardTwoA5 from 'views/dashboard/Default/A5/EarningCardTwoA5';
// import EarningCardThreeA5 from 'views/dashboard/Default/A5/EarningCardThreeA5';
// import EarningCardFiveA5 from 'views/dashboard/Default/A5/EarningCardFiveA5';
// import EarningCardFourA5 from 'views/dashboard/Default/A5/EarningCardFourA5';
// import CardCounterBandet from 'views/dashboard/Default/BB/CardCounterBandet';
// import CardCounterBox from 'views/dashboard/Default/BB/CardCounterBox';
// import GrafekBandet from 'views/dashboard/Default/BB/GrafekBandet';
// import GrafekBox from 'views/dashboard/Default/BB/GrafekBox';
import MainCard from 'ui-component/cards/MainCard';
// import { gridSpacing } from 'store/constant';
import FormLHP from 'views/dashboard/Default/A5/FormLHP_5';
import BscLine5Table from 'views/dashboard/Default/BB/TableLhpL5';
import BscLine5Downtime from './BscLine5Downtime';

// ==============================|| Happy Coding ||============================== //

const BscLine5 = () => {
  const [value, setValue] = React.useState('0');

  const [urlapi] = useState({
    packinga1: 'http://10.37.12.17:3000/packing_a1',
    packinga2: 'http://10.37.12.17:3000/packing_a2',
    packinga5: 'http://10.37.12.17:3000/packing_a5',
    packingb5: 'http://10.37.12.17:3000/packing_b5',
    packinga3: 'http://10.37.12.17:3000/packing_a3',
    grapika1: 'http://10.37.12.17:3000/shift1_a1',
    grapika2: 'http://10.37.12.17:3000/shift1_a2',
    grapika5: 'http://10.37.12.17:3000/shift1_a5',
    grapikb5: 'http://10.37.12.17:3000/shift1_b5',
    grapika3: 'http://10.37.12.17:3000/shift1_a3',
    packingl1_all: 'http://10.37.12.17:3000/packing_l1_all',
    urlp2: 'table',
    pathnih: '/utils/packing-line1/table',
    grapikl1: 'http://10.37.12.17:3000/shift1_l1',
    packingl1: 'http://10.37.12.17:3000/packing_l1',
  })
  const [label] = useState({
    grapa1: 'a1',
    grapa2: 'a2',
    grapa5: 'a5',
    grapb5: 'b5',
    grapa3: 'a3',
    grapl1: 'l1',
    a1: 'MP A1',
    a2: 'MP A2',
    a5: 'MP A5',
    b5: 'MP B5',
    a3: 'MP A3'
  })
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  // const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    // setLoading(false);
  }, []);

  return (
    <MainCard title="LHP Biscuit Line 5">
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} variant="scrollable" scrollButtons="auto" aria-label="scrollable auto tabs example">
            <Tab label="Home" value="0" />
            <Tab label="Downtime Table" value="1" />
            <Tab label="LHP FORM" value="2" />
          </TabList>
        </Box>
        <TabPanel value="0">
          <BscLine5Table />
        </TabPanel>
        <TabPanel value="1">
          <BscLine5Downtime />
        </TabPanel>
        <TabPanel value="2">
          <FormLHP
            pathnih={urlapi.pathnih}
            label0={label.grapl1}
            label1={label.a1}
            label2={label.a2}
            label3={label.a5}
            label4={label.b5}
            label5={label.a3}
          />
        </TabPanel>
      </TabContext>
    </MainCard>
  )
};

export default BscLine5;
