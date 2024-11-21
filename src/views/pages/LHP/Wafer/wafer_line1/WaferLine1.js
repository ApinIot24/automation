import * as React from 'react';
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import MainCard from 'ui-component/cards/MainCard';
import FormLHP from 'views/dashboard/Default/A5/FormLHP';
import WaferLine1Table from 'views/dashboard/Default/BB/TableLhpL1';
import WaferLine1Downtime from './WaferLine1Downtime';
import ControlLhp from '../ControlLhp';


// ==============================|| Happy Coding ||============================== //

const WaferLine1 = () => {
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
    line: '1',
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
    <MainCard title="LHP Wafer Line 1">
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} variant="scrollable" scrollButtons="auto" aria-label="scrollable auto tabs example">
            <Tab label="Home" value="0" />
            <Tab label="Downtime Table" value="1" />
            <Tab label="LHP FORM" value="2" />
            <Tab label="Edit Control LHP" value="3" />
          </TabList>
        </Box>
        <TabPanel value="0">
          <WaferLine1Table />
        </TabPanel>
        <TabPanel value="1">
          <WaferLine1Downtime />
        </TabPanel>
        <TabPanel value="2">
          <FormLHP
            pathnih={urlapi.pathnih}
            label0={label.line}
            label1={label.a1}
            label2={label.a2}
            label3={label.a5}
            label4={label.b5}
            label5={label.a3}
          />
        </TabPanel>
        <TabPanel value="3">
          <ControlLhp label={label.line} />
        </TabPanel>
      </TabContext>
    </MainCard>
  )
};

export default WaferLine1;
