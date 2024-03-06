import { RouteObject } from 'react-router-dom'

import MinimalLayout from '../components/templates/MinimalLayout'
import LoginPage from '../pages/login'

import { BASE, LOGIN } from '../utils/constants'

const AuthRoutes: RouteObject = {
    path: BASE,
    element: <MinimalLayout />,
    children: [
        {
            path: LOGIN,
            element: <LoginPage />
        }
    ]
}

export default AuthRoutes
