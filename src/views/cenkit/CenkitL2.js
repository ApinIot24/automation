import * as React from 'react';
import { useEffect, useState } from 'react';
import { Grid , Divider} from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';
import MachineCenkit from './MachineCenkit';
import CounterCenkit from './CounterCenkit';
import WaterCenkit from './WaterCenkit';
import CoolingCenkit from './CoolingCenkit';
import GrafekCenkit from './GrafekCenkit';
import ButtonEle from 'ui-component/Button';

// ==============================|| HAPPY CODING ||============================== //

const CenkitL1 = () => {
  const [label] = useState({
    grapck2 : 'cenkit_l2'
  })
  const [urlapi] = useState({
    urlp2 : 'table',
    cenkitl2 : 'http://10.37.12.17:3000/cenkit_l2',
    grapikck2 : 'http://10.37.12.17:3000/shift1_cenkit_l2'

  })
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    
    setLoading(false);
  }, []);

  return (
  <MainCard title="Central Kitchen Line 2" secondary={<ButtonEle  path={urlapi.urlp2} />}>
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12} sm={4}>
          <MachineCenkit url={urlapi.cenkitl2} isLoading={isLoading} />
          <Divider sx={{ my: 1.5 }} />
          <CounterCenkit url={urlapi.cenkitl2} isLoading={isLoading} />
      </Grid>
      <Grid item xs={12} sm={8}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item lg={6} md={12} sm={12} xs={12} >
            <WaterCenkit url={urlapi.cenkitl2} isLoading={isLoading} />
          </Grid>
          <Divider sx={{ my: 1.5 }} />
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <CoolingCenkit url={urlapi.cenkitl2} isLoading={isLoading} />
          </Grid>
        </Grid>
        <Divider sx={{ my: 1.5 }} />
        <Grid container alignItems="center">
          <Grid item lg={12} md={12} sm={12} xs={12} >
            <GrafekCenkit label={label.grapck2} url={urlapi.grapikck2} isLoading={isLoading} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </MainCard>
  )
};

export default CenkitL1;