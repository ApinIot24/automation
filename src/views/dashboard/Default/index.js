import { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';
import GrafikDashboard from './GrafikDashboard';
import GrafekBandetDashboard from './GrafekBandetDashboard';
import GrafekBoxDashboard from './GrafekBoxDashboard';
import { blue } from '@mui/material/colors';

// ==============================|| Happy Coding ||============================== //

const Dashboard = () => {
  const [urlapi] = useState({
    packingb3 : 'http://10.37.12.17:3000/packing_b3',
    packingb1 : 'http://10.37.12.17:3000/packing_b1',
    packingb2 : 'http://10.37.12.17:3000/packing_b2',
    packingb4 : 'http://10.37.12.17:3000/packing_b4',
    packinga4 : 'http://10.37.12.17:3000/packing_a4',
    packinga5 : 'http://10.37.12.17:3000/packing_a5',
    packinga1 : 'http://10.37.12.17:3000/packing_a1',
    grapika1 : 'http://10.37.12.17:3000/shift1_a1',
    grapika2 : 'http://10.37.12.17:3000/shift1_a2',
    grapikb5 : 'http://10.37.12.17:3000/shift1_b5',
    grapika5 : 'http://10.37.12.17:3000/shift1_a5',
    grapikb3 : 'http://10.37.12.17:3000/shift1_b3',
    grapikb1 : 'http://10.37.12.17:3000/shift1_b1',
    grapikb2 : 'http://10.37.12.17:3000/shift1_b2',
    grapikb4 : 'http://10.37.12.17:3000/shift1_b4',
    grapika4 : 'http://10.37.12.17:3000/shift1_a4',
    grapikl2 : 'http://10.37.12.17:3000/shift1_l2',
    grapikl1 : 'http://10.37.12.17:3000/shift1_l1'
  })
  const [label] = useState({
    packingb3 : 'PACKING B3',
    packinga5 : 'PACKING A5',
    packinga1 : 'PACKING A1',
    packingb1 : 'PACKING B1',
    grapa1 : 'a1',
    grapl2 : 'l2',
    grapl1 : 'l1',
    grapa2 : 'a2',
    grapb3 : 'b3',
    grapa5 : 'a5',
    grapb5 : 'b5',
    grapb1 : 'b1',
    grapb2 : 'b2',
    grapb4 : 'b4',
    grapa4 : 'a4',
    border1 : blue[300],
    border2 : blue[300]
  })
  const [title] = useState({
    line2 : 'Packing Line 2',
    line1 : 'Packing Line 1',
  })
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <MainCard title="Dashboard">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Grid container spacing={gridSpacing}>
            <Grid item xs={12} md={6}>
              <GrafekBandetDashboard 
              label={label.grapl2}
              labeltwo={label.grapl1}
              url={urlapi.grapikl2}
              urltwo={urlapi.grapikl1}
              isLoading={isLoading} />
            </Grid>
            <Grid item xs={12} md={6}>
              <GrafekBoxDashboard 
              label={label.grapl2}
              labeltwo={label.grapl1}
              url={urlapi.grapikl2}
              urltwo={urlapi.grapikl1}
              isLoading={isLoading} 
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={gridSpacing}>
            <Grid item xs={12} md={6}>
              <GrafikDashboard 
                title={title.line1} 
                label={label.grapa1} 
                labeltwo={label.grapa2}
                labelthree={label.grapa5}
                labelfour={label.grapb5}
                url={urlapi.grapika1} 
                urltwo={urlapi.grapika2}
                urlthree={urlapi.grapika5}
                urlfour={urlapi.grapikb5}
                border={ label.border1}
                isLoading={isLoading} />
            </Grid>
            <Grid item xs={12} md={6}>
              <GrafikDashboard 
                title={title.line2} 
                label={label.grapb1} 
                labeltwo={label.grapb2}
                labelthree={label.grapb3}
                labelfour={label.grapb4}
                labelfive={label.grapa4}
                url={urlapi.grapikb1} 
                urltwo={urlapi.grapikb2}
                urlthree={urlapi.grapikb3}
                urlfour={urlapi.grapikb4}
                urlfive={urlapi.grapika4}
                border={label.border2}
                isLoading={isLoading} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </MainCard>
  );
};

export default Dashboard;
