import * as React from 'react';
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import MainCard from 'ui-component/cards/MainCard';
import FormLHP from 'views/dashboard/Default/A5/FormLHP_7';
import WaferLine7Table from 'views/dashboard/Default/BB/TableLhpL7';
import WaferLine7Downtime from './WaferLine7Downtime';
import ControlLhp from '../ControlLhp';

// ==============================|| Happy Coding ||============================== //

const WaferLine7 = () => {
  const [value, setValue] = React.useState('0');

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
  const [label] = useState({
    line: 'l7',
    g1 : 'MP G1',
    g2 : 'MP G2',
    g3 : 'MP G3',
    g4 : 'MP G4',
    g5 : 'MP G5',
    g6 : 'MP G6',
    g7 : 'MP G7',
    g8 : 'MP G8'
  })
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  // const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    // setLoading(false);
  }, []);

  return (
    <MainCard title="LHP Wafer Line 7">
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
          <WaferLine7Table />
        </TabPanel>
        <TabPanel value="1">
          <WaferLine7Downtime />
        </TabPanel>
        <TabPanel value="2">
          <FormLHP
            pathnih={urlapi.pathnih}
            label0={label.line}
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
        <TabPanel value="3">
          <ControlLhp label={label.line} />
        </TabPanel>
      </TabContext>
    </MainCard>
  )
};

export default WaferLine7;
