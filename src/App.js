import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';

// routing
import Routes from 'routes';
import { DASHBOARD, LOGIN } from 'constants/routeConstants';

// defaultTheme
import themes from 'themes';

// project imports
import NavigationScroll from 'layout/NavigationScroll';
import { useEffect } from 'react';

const App = () => {
    const navigate = useNavigate();
    const { accessToken } = useSelector((state) => state.auth);
    const customization = useSelector((state) => state.customization);

    useEffect(() => {
        if (accessToken) {
            navigate(DASHBOARD);
        } else {
            navigate(LOGIN);
        }
    }, [navigate, accessToken]);

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
