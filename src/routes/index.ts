import { createBrowserRouter } from 'react-router-dom'

import AuthRoutes from './Auth.routes'
import DashboardRoutes from './Dashboard.routes'

export default createBrowserRouter([AuthRoutes, DashboardRoutes])
