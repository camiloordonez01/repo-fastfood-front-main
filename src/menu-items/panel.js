// assets
import { IconDashboard } from '@tabler/icons';

// constant
const icons = { IconDashboard };

// ==============================|| PANEL MENU ITEMS ||============================== //

const panel = {
    id: 'dashboard',
    type: 'group',
    children: [
        {
            id: 'default',
            title: 'Dashboard',
            type: 'item',
            url: '/',
            icon: icons.IconDashboard,
            breadcrumbs: false
        }
    ]
};

export default panel;
