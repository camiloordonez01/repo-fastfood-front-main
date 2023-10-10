import { Link } from 'react-router-dom';

// material-ui
import { ButtonBase } from '@mui/material';

// project imports
import config from 'config';
// assets
import logo from 'assets/images/logo2.png';

// ==============================|| MAIN LOGO ||============================== //

const LogoSection = () => (
    <ButtonBase disableRipple component={Link} to={config.defaultPath}>
        <img src={logo} alt="Berry" width="50" />
    </ButtonBase>
);

export default LogoSection;
