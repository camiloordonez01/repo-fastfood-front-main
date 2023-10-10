import { Navigate } from 'react-router-dom';
import { lazy } from 'react';

import { BASE, DASHBOARD } from 'constants/routeConstants';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

const Panel = Loadable(lazy(() => import('views/pages/panel')));
const DashboardDefault = Loadable(lazy(() => import('views/pages/dashboard')));

// utilities routing
// const UtilsTypography = Loadable(lazy(() => import('views/utilities/Typography')));
// const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
// const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));
// const UtilsMaterialIcons = Loadable(lazy(() => import('views/utilities/MaterialIcons')));
// const UtilsTablerIcons = Loadable(lazy(() => import('views/utilities/TablerIcons')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: BASE,
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <Panel />
        },
        {
            path: DASHBOARD,
            element: <DashboardDefault />
        }
        /*{
            path: 'utils',
            children: [
                {
                    path: 'util-typography',
                    element: <UtilsTypography />
                }
            ]
        },
        {
            path: 'utils',
            children: [
                {
                    path: 'util-color',
                    element: <UtilsColor />
                }
            ]
        },
        {
            path: 'utils',
            children: [
                {
                    path: 'util-shadow',
                    element: <UtilsShadow />
                }
            ]
        },
        {
            path: 'icons',
            children: [
                {
                    path: 'tabler-icons',
                    element: <UtilsTablerIcons />
                }
            ]
        },
        {
            path: 'icons',
            children: [
                {
                    path: 'material-icons',
                    element: <UtilsMaterialIcons />
                }
            ]
        }*/
    ]
};

export default MainRoutes;
