import * as React from 'react';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
// import axios from 'axios';
import { Alert, Snackbar } from '@mui/material';
// ==============================|| LOADER ||============================== //

const ButtonExcel = ({lhp}) => {
  const [state] = React.useState({
    vertical: 'top',
    horizontal: 'center',
  });
  const { vertical, horizontal } = state;
  const [open, setOpen] = React.useState(false);
  console.log("Data", lhp)
  const routeChange = () =>{ 
        if (lhp === "") {
          setOpen(true)
        } else {
          
          console.log("Data", lhp)
        }
  }
  const handleClose = (reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
    return (
      <div>
        <Button onClick={routeChange} variant="contained" disableElevation>
       Excel
      </Button>
        <Snackbar
          onClose={handleClose}
          anchorOrigin={{ vertical, horizontal }}
          open={open}
          key={vertical + horizontal}
          autoHideDuration={5000}
        >
           <Alert
              onClose={handleClose}
              severity="error"
              variant="filled"
              sx={{ width: '100%' }}
            >
              Cannot Excel, data not found
            </Alert>
        </Snackbar>
      </div>
    );
  };
ButtonExcel.propTypes = {
  lhp : PropTypes.bool
};
export default ButtonExcel;
