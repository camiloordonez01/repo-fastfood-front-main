import DashboardLayout from '../components/templates/DashboardLayout'

import { DashboardPage, ServicePage } from '../pages'
import { ListProductsPage } from '../pages/sales/products'
import { ListCategoriesPage, EditCategoriesPage } from '../pages/sales/products/categories'

import { BASE, DASHBOARD, SERVICE, LISTPRODUCTS, LISTCATEGORIES, EDITCATEGORIES } from '../utils/constants'

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
            path: LISTPRODUCTS,
            element: <ListProductsPage />,
        },
        {
            path: LISTCATEGORIES,
            element: <ListCategoriesPage />,
        },
        {
            path: EDITCATEGORIES,
            element: <EditCategoriesPage />,
        }
    ]
}

export default DashboardRoutes
