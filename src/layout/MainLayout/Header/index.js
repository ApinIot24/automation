import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import { Avatar, Box, ButtonBase, Button } from '@mui/material';
import { IconMenu2 } from '@tabler/icons-react';
import LogoSection from '../LogoSection';
import SearchSection from './SearchSection';
import ProfileSection from './ProfileSection';
import NotificationSection from './NotificationSection';

// ==============================|| MAIN NAVBAR / HEADER ||============================== //

const Header = ({ handleLeftDrawerToggle }) => {
  const theme = useTheme();

  // Format tanggal hari ini
  const today = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const todayFormatted = today.toLocaleDateString('id-ID', options);

  // Fungsi untuk mengaktifkan fullscreen
  const handleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  };

  return (
    <>
      {/* logo & toggler button */}
      <Box
        sx={{
          width: 228,
          display: 'flex',
          [theme.breakpoints.down('md')]: {
            width: 'auto'
          }
        }}
      >
        <Box component="span" sx={{ display: { xs: 'none', md: 'block' }, flexGrow: 1 }}>
          <LogoSection />
        </Box>
        <ButtonBase sx={{ borderRadius: '12px', overflow: 'hidden' }}>
          <Avatar
            variant="rounded"
            sx={{
              ...theme.typography.commonAvatar,
              ...theme.typography.mediumAvatar,
              transition: 'all .2s ease-in-out',
              background: theme.palette.secondary.light,
              color: theme.palette.secondary.dark,
              '&:hover': {
                background: theme.palette.secondary.dark,
                color: theme.palette.secondary.light
              }
            }}
            onClick={handleLeftDrawerToggle}
            color="inherit"
          >
            <IconMenu2 stroke={1.5} size="1.3rem" />
          </Avatar>
        </ButtonBase>
      </Box>

      {/* header search */}
      <SearchSection />
      <Box sx={{ flexGrow: 1 }} />
      <Box sx={{ flexGrow: 1 }} />


      {/* Tombol Fullscreen */}
      <Button
        variant="contained"
        onClick={handleFullScreen}
        sx={{
          backgroundColor: 'transparent', // Transparansi penuh
          color: 'inherit', // Tidak ada warna teks, mengikuti warna teks bawaan dari elemen di sekitarnya
          boxShadow: 'none', // Menghapus bayangan jika ada
          '&:hover': {
            backgroundColor: 'transparent', // Tidak ada efek hover
            boxShadow: 'none', // Tidak ada bayangan saat hover
          },
          '&:active': {
            backgroundColor: 'transparent', // Tidak ada warna saat ditekan
          },
          border: 'none', // Menghapus border jika ada
        }}
      >
        <h2>{todayFormatted}</h2>
      </Button>

      {/* notification & profile */}
      <NotificationSection />
      <ProfileSection />
    </>
  );
};

Header.propTypes = {
  handleLeftDrawerToggle: PropTypes.func
};

export default Header;
