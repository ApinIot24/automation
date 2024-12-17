import * as React from 'react';
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import MainCard from 'ui-component/cards/MainCard';
import FormLHP from 'views/dashboard/Default/A5/FormLHP_7';
import WaferLine6Table from 'views/dashboard/Default/BB/TableLhpL6';
import WaferLine6Downtime from './WaferLine6Downtime';
import ControlLhp from '../ControlLhp';

// ==============================|| Happy Coding ||============================== //

const WaferLine6 = () => {
  const [value, setValue] = React.useState('0');

  const [urlapi] = useState({
    packingb3 : 'http://10.37.12.17:3000/packing_b3',
    packingb1 : 'http://10.37.12.17:3000/packing_b1',
    packingl6 : 'http://10.37.12.17:3000/packing_l6',
    packingb2 : 'http://10.37.12.17:3000/packing_b2',
    packingb4 : 'http://10.37.12.17:3000/packing_b4',
    packinga4 : 'http://10.37.12.17:3000/packing_a4',
    packingl6_all : 'http://10.37.12.17:3000/packing_l6_all',
    urlp2 : 'table',
    pathnih : '/utils/packing-Line6/table',
    grapikb1 : 'http://10.37.12.17:3000/shift1_b1',
    grapikl6 : 'http://10.37.12.17:3000/shift1_l6',
    grapikb2 : 'http://10.37.12.17:3000/shift1_b2',
    grapikb3 : 'http://10.37.12.17:3000/shift1_b3',
    grapikb4 : 'http://10.37.12.17:3000/shift1_b4',
    grapika4 : 'http://10.37.12.17:3000/shift1_a4'
  })
  const [label] = useState({
    line: 'l6',
    f1 : 'MP F1',
    f2 : 'MP F2',
    f3 : 'MP F3',
    f4 : 'MP F4',
    f5 : 'MP F5',
    f6 : 'MP F6',
    f7 : 'MP F7',
    f8 : 'MP F8',
    f9 : 'MP F9' ,
    f10: 'MP F10'
  })
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  // const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    // setLoading(false);
  }, []);

  return (
    <MainCard title="LHP Wafer Line 6">
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
          <WaferLine6Table />
        </TabPanel>
        <TabPanel value="1">
          <WaferLine6Downtime />
        </TabPanel>
        <TabPanel value="2">
          <FormLHP
            pathnih={urlapi.pathnih}
            label0={label.line}
            label1={label.f1}
            label2={label.f2}
            label3={label.f3}
            label4={label.f4}
            label5={label.f5}
            label6={label.f6}
            label7={label.f7}
            label8={label.f8}
            label9={label.f9}
            label10={label.f10}
          />
        </TabPanel>
        <TabPanel value="3">
          <ControlLhp label={label.line} />
        </TabPanel>
      </TabContext>
    </MainCard>
  )
};

export default WaferLine6;
