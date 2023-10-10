// assets
import { IconDashboard } from '@tabler/icons';

import { DASHBOARD } from 'constants/routeConstants';

// constant
const icons = { IconDashboard };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
    id: 'dashboard',
    type: 'group',
    children: [
        {
            id: '',
            title: 'Dashboard',
            type: 'item',
            url: DASHBOARD,
            icon: icons.IconDashboard,
            breadcrumbs: false
        }
    ]
};

export default dashboard;
