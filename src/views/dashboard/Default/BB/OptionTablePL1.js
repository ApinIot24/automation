import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import { IconClock2, IconCalendar, IconCalendarWeek, IconCalendarMonth, IconBorderAll } from '@tabler/icons-react';
import { styled } from '@mui/material/styles';
import { gridSpacing } from 'store/constant';
import MainCard from 'ui-component/cards/MainCard';

const CardWrapper = styled(MainCard)(({ theme }) => ({
  backgroundColor: 'whitesmoke',
  color: '#fff',
  overflow: 'hidden',
  marginRight: 4,
  position: 'relative',
  '&:after': {
    content: '""',
    position: 'absolute',
    width: 15,
    height: 290,
    background: 'black',
    top: -85,
    left: -5,
    [theme.breakpoints.down('sm')]: {
      top: -105,
      left: -140,
    },
  },
}));

const CardItem = ({ title, link, IconComponent }) => (
  <Grid item lg={2.4} md={6} sm={6} xs={6}>
    <Box sx={{ minWidth: 275 }}>
      <Link to={link}>
        <CardWrapper border={false} content={false}>
          <Box sx={{ p: 2.25 }}>
            <Grid container direction="column">
              <Grid item>
                <Grid container justifyContent="space-between">
                  <Grid item>
                    <Typography variant="h4">{title}</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item sx={{ mb: 0.75 }}>
                <Grid container alignItems="center">
                  <Grid item xs={4}></Grid>
                  <Grid item xs={8}>
                    <Grid container alignItems="center">
                      <Grid item>
                        <IconComponent color="black" size={125} />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </CardWrapper>
      </Link>
    </Box>
  </Grid>
);

const OptionTablePL1 = () => {
  return (
    <MainCard title="Packing Wafer Line 1">
      <Grid container spacing={gridSpacing}>
        <CardItem title="Report" link="/utils/packing-line1/table/all" IconComponent={IconBorderAll} />
        <CardItem title="Report Hourly" link="/utils/packing-line1/table/hourly" IconComponent={IconClock2} />
        <CardItem title="Report Daily" link="/utils/packing-line1/table/daily" IconComponent={IconCalendar} />
        <CardItem title="Report Weekly" link="/utils/packing-line1/table/weekly" IconComponent={IconCalendarWeek} />
        <CardItem title="Report Monthly" link="/utils/packing-line1/table/monthly" IconComponent={IconCalendarMonth} />
        <CardItem title="Report LHP" link="/utils/packing-line1/table/lhp" IconComponent={IconBorderAll} />
      </Grid>
    </MainCard>
  );
};

export default OptionTablePL1;
