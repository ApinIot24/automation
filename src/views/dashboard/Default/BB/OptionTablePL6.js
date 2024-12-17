import * as React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import MainCard from 'ui-component/cards/MainCard';
import { IconClock2 } from '@tabler/icons-react';
import { IconCalendar } from '@tabler/icons-react';
import { IconCalendarWeek } from '@tabler/icons-react';
import { IconCalendarMonth } from '@tabler/icons-react';
import { IconBorderAll } from '@tabler/icons-react';
import { gridSpacing } from 'store/constant';
import ButtonBack from 'ui-component/ButtonBack';

// ==============================|| Happy Coding ||============================== //
const CardWrapper = styled(MainCard)(({ theme }) => ({
  backgroundColor: 'whitesmoke',
  color: '#fff',
  overflow: 'hidden',
  marginRight : 4,
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
      left: -140
    }
  },
}));

const OptionTablePL6 = () => {
  useEffect(() => {
    
  }, []);
  return (
  <MainCard title="Packing Wafer Line 6" secondary={<ButtonBack path={'/utils/packing-line6'} />}>
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Grid container spacing={gridSpacing}>
            <Grid item lg={2.4} md={6} sm={6} xs={6}>
              <Box sx={{ minWidth: 275 }}>
              <Link to="/utils/packing-line6/table/all">
                <CardWrapper border={false} content={false}>
                  <Box sx={{ p: 2.25 }}>
                    <Grid container direction="column">
                      <Grid item>
                        <Grid container justifyContent="space-between">
                          <Grid item>
                            <Typography variant="h4">Report</Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item sx={{ mb: 0.75 }}>
                        <Grid container alignItems="center">
                          <Grid item xs={4}> 
                            <Grid container alignItems="center">
                              <Grid item>
                                
                              </Grid>
                            </Grid>
                          </Grid>
                          <Grid item xs={8}> 
                            <Grid container alignItems="center">
                              <Grid item>
                                <IconBorderAll color='black' size={125} />
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
            <Grid item lg={2.4} md={6} sm={6} xs={6}>
              <Box sx={{ minWidth: 275 }}>
              <Link to="/utils/packing-line6/table/hourly">
                <CardWrapper border={false} content={false}>
                  <Box sx={{ p: 2.25 }}>
                    <Grid container direction="column">
                      <Grid item>
                        <Grid container justifyContent="space-between">
                          <Grid item>
                            <Typography variant="h4">Report Hourly</Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item sx={{ mb: 0.75 }}>
                        <Grid container alignItems="center">
                          <Grid item xs={4}> 
                            <Grid container alignItems="center">
                              <Grid item>
                                
                              </Grid>
                            </Grid>
                          </Grid>
                          <Grid item xs={8}> 
                            <Grid container alignItems="center">
                              <Grid item>
                                <IconClock2 color='black' size={125} />
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
            <Grid item lg={2.4} md={6} sm={6} xs={6}>
              <Box sx={{ minWidth: 275 }}>
                <Link to="/utils/packing-line6/table/daily">
                <CardWrapper border={false} content={false}>
                  <Box sx={{ p: 2.25 }}>
                    <Grid container direction="column">
                      <Grid item>
                        <Grid container justifyContent="space-between">
                          <Grid item>
                            <Typography variant="h4">Report Daily</Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item sx={{ mb: 0.75 }}>
                        <Grid container alignItems="center">
                          <Grid item xs={4}> 
                            <Grid container alignItems="center">
                              <Grid item>
                                
                              </Grid>
                            </Grid>
                          </Grid>
                          <Grid item xs={8}> 
                            <Grid container alignItems="center">
                                <IconCalendar color='black' size={125} />
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
            <Grid item lg={2.4} md={6} sm={6} xs={6}>
              <Box sx={{ minWidth: 275 }}>
                <Link to="/utils/packing-line6/table/weekly">
                <CardWrapper border={false} content={false}>
                  <Box sx={{ p: 2.25 }}>
                    <Grid container direction="column">
                      <Grid item>
                        <Grid container justifyContent="space-between">
                          <Grid item>
                            <Typography variant="h4">Report Weekly</Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item sx={{ mb: 0.75 }}>
                        <Grid container alignItems="center">
                          <Grid item xs={4}> 
                            <Grid container alignItems="center">
                              <Grid item>
                                
                              </Grid>
                            </Grid>
                          </Grid>
                          <Grid item xs={8}> 
                            <Grid container alignItems="center">
                                <IconCalendarWeek color='black' size={125} />
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
            <Grid item lg={2.4} md={6} sm={6} xs={6}>
              <Box sx={{ minWidth: 275 }}>
                <Link to="/utils/packing-line6/table/monthly">
                <CardWrapper border={false} content={false}>
                  <Box sx={{ p: 2.25 }}>
                    <Grid container direction="column">
                      <Grid item>
                        <Grid container justifyContent="space-between">
                          <Grid item>
                            <Typography variant="h4">Report Monthly</Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item sx={{ mb: 0.75 }}>
                        <Grid container alignItems="center">
                          <Grid item xs={4}> 
                            <Grid container alignItems="center">
                              <Grid item>
                                
                              </Grid>
                            </Grid>
                          </Grid>
                          <Grid item xs={8}> 
                            <Grid container alignItems="center">
                              <Grid item>
                                <IconCalendarMonth color='black' size={125} />
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
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={gridSpacing}>
            <Grid item lg={2.4} md={6} sm={6} xs={6}>
              <Box sx={{ minWidth: 275 }}>
              <Link to="/utils/packing-line6/table/lhp">
                <CardWrapper border={false} content={false}>
                  <Box sx={{ p: 2.25 }}>
                    <Grid container direction="column">
                      <Grid item>
                        <Grid container justifyContent="space-between">
                          <Grid item>
                            <Typography variant="h4">Report LHP</Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item sx={{ mb: 0.75 }}>
                        <Grid container alignItems="center">
                          <Grid item xs={4}> 
                            <Grid container alignItems="center">
                              <Grid item>
                                
                              </Grid>
                            </Grid>
                          </Grid>
                          <Grid item xs={8}> 
                            <Grid container alignItems="center">
                              <Grid item>
                                <IconBorderAll color='black' size={125} />
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
          </Grid>
        </Grid>
      </Grid>
  </MainCard>
  )
};

export default OptionTablePL6;