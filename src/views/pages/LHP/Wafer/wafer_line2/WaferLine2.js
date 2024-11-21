import * as React from 'react';
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import MainCard from 'ui-component/cards/MainCard';
import FormLHP from 'views/dashboard/Default/A5/FormLHP';
import WaferLine2Table from 'views/dashboard/Default/BB/TableLhpL2';
import WaferLine2Downtime from './WaferLine2Downtime';
import ControlLhp from '../ControlLhp';


// ==============================|| Happy Coding ||============================== //

const WaferLine2 = () => {
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
    pathnih: '/utils/packing-line2/table',
    grapikl1: 'http://10.37.12.17:3000/shift1_l1',
    packingl1: 'http://10.37.12.17:3000/packing_l1',
  })
  const [label] = useState({
    line: '2',
    b1: 'MP B1',
    b2: 'MP B2',
    b3: 'MP B3',
    b4: 'MP B4',
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
    <MainCard title="LHP Wafer Line 2">
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
          <WaferLine2Table />
        </TabPanel>
        <TabPanel value="1">
          <WaferLine2Downtime />
        </TabPanel>
        <TabPanel value="2">
          <FormLHP
            pathnih={urlapi.pathnih}
            label0={label.line}
            label1={label.b1}
            label2={label.b2}
            label3={label.b3}
            label4={label.b4}
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

export default WaferLine2;
