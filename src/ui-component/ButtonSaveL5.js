import * as React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';
import axios from 'axios';
import { Alert, Snackbar } from '@mui/material';

// ==============================|| LOADER ||============================== //
const ButtonSave = ({lhp,path}) => {
  let navigate = useNavigate(); 
  const [state] = React.useState({
    vertical: 'top',
    horizontal: 'center',
  });
  const { vertical, horizontal } = state;
  const [open, setOpen] = React.useState(false);
  // console.log("Dataatest", lhp)
  const routeChange = () =>{ 
        if (lhp.shift==="" || lhp.sku==="" || lhp.plan==="" || lhp.real==="" || lhp.ach==="" ) {
          setOpen(true)
        } else {
          axios.post('http://10.37.12.17:3000/lhpl5', lhp)
          .then(response => {
            console.log("Dataatest",response);
            // setAlertContent("Add data sukses");
            // setAlert(true); 
            navigate(path);
          })
          .catch(error => {
            console.log(error);
            if (error.response) {
            console.log("cOBA2",error.response);
            //     setAlertContent("server responded");
            
            // setAlert(true);
            } else if (error.request) {
            console.log("cOBA1",error.response);
            } else {
            console.log(error);
            }
        })
    
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
       Submit
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
              Cannot Input , Input Cannot by Empty or Wrong Input
            </Alert>
        </Snackbar>
      </div>
    );
  };
ButtonSave.propTypes = {
  path : PropTypes.bool,
  lhp : PropTypes.bool
};
export default ButtonSave;
