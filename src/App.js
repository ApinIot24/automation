import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';

// routing
import Routes from 'routes';
import themes from 'themes';
import NavigationScroll from 'layout/NavigationScroll';
import connectToSocket from './socket'; // Import logika Socket.IO

const App = () => {
  const customization = useSelector((state) => state.customization);

  useEffect(() => {
    // Hubungkan ke server Socket.IO
    const socket = connectToSocket();

    // Cleanup saat komponen dilepas
    return () => {
      socket.disconnect();
      console.log('Socket.IO disconnected');
    };
  }, []);
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes(customization)}>
        <CssBaseline />
        <NavigationScroll>
          <Routes />
        </NavigationScroll>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
