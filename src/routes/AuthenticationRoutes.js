import { Navigate } from 'react-router-dom';
import { lazy } from 'react';

import { LOGIN } from 'constants/routeConstants';

// project imports
import Loadable from 'ui-component/Loadable';
import MinimalLayout from 'layout/MinimalLayout';

// login option routing
const AuthLogin = Loadable(lazy(() => import('views/pages/login')));

// ==============================|| AUTHENTICATION ROUTING ||============================== //

const AuthenticationRoutes = {
    path: '/',
    element: <MinimalLayout />,
    children: [
        {
            path: LOGIN,
            element: <AuthLogin />
        }
    ]
};

export default AuthenticationRoutes;
