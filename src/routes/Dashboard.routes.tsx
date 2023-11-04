import DashboardLayout from '../components/templates/DashboardLayout'

import { DashboardPage, ServicePage, SalesPage } from '../pages'

import { BASE, DASHBOARD, SERVICE, SALES } from '../utils/constants'

const DashboardRoutes = {
    path: BASE,
    element: <DashboardLayout />,
    children: [
        {
            path: DASHBOARD,
            element: <DashboardPage />
        },
        {
            path: SERVICE,
            element: <ServicePage />
        },
        {
            path: SALES,
            element: <SalesPage />
        }
    ]
}

export default DashboardRoutes
