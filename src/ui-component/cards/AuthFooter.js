// material-ui
import { Link, Typography, Stack } from '@mui/material';

// ==============================|| FOOTER - AUTHENTICATION 2 & 3 ||============================== //

const AuthFooter = () => (
  <Stack direction="row" justifyContent="space-between">
    <Typography variant="subtitle2" component={Link} href="https://mayoraindah.co.id" target="_blank" underline="hover">
      Mayora Indah TBK
    </Typography>
  </Stack>
);

export default AuthFooter;
