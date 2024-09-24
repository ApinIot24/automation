// material-ui
// import logo from 'assets/images/logo.png';
import logo from 'assets/images/Mayora_logo.png';

/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * import logoDark from 'assets/images/logo-dark.svg';
 * import logo from 'assets/images/logo.svg';
 *
 */

// ==============================|| LOGO SVG ||============================== //

const Logo = () => {

  return (
    /**
     * if you want to use image instead of svg uncomment following, and comment out <svg> element.
     *
     *
     */
    <img src={logo} alt="mayora" width="170" />
  );
};

export default Logo;
