import DashboardLayout from '../components/templates/DashboardLayout'

import { DashboardPage, InventoryPage } from '../pages'

import { BASE, DASHBOARD, INVENTORY } from '../utils/constants'

const DashboardRoutes = {
    path: BASE,
    element: <DashboardLayout />,
    children: [
        {
            path: DASHBOARD,
            element: <DashboardPage />
        },
        {
            path: INVENTORY,
            element: <InventoryPage />
        }
    ]
}

export default DashboardRoutes
