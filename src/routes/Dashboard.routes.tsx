import DashboardLayout from '../components/templates/DashboardLayout'
import MinimalLayout from '../components/templates/MinimalLayout'

import { BASE, DASHBOARD } from '../utils/constants'

const DashboardRoutes = {
    path: BASE,
    element: <MinimalLayout />,
    children: [
        {
            path: DASHBOARD,
            element: <DashboardLayout />
        }
    ]
}

export default DashboardRoutes
