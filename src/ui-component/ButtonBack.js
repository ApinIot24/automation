import * as React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';

// ==============================|| LOADER ||============================== //
const ButtonBack = ({path}) => {
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    navigate(path);
  }
    return (
      <Button onClick={routeChange} variant="contained" disableElevation>
        Back
      </Button>
    );
  };
ButtonBack.propTypes = {
  path : PropTypes.bool
};
export default ButtonBack;
