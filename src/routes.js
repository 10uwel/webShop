import Admin from "./pages/Admin"
import Dashboard from "./pages/Admin/Dashboard"
import Auth from "./pages/Auth"
import Basket from "./pages/Basket/Basket"
import Shipping from "./pages/Basket/Shipping"
import DevicePage from "./pages/DevicePage/DevicePage"
import Shop from "./pages/Shop/Shop"
import { ADMIN_DASHBOARD_ROUTE, ADMIN_ROUTE, BASKET_ROUTE, DEVICE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHIPPING_ROUTE, SHOP_ROUTE } from "./utils/consts"

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: ADMIN_DASHBOARD_ROUTE,
        Component: Dashboard
    }
]

export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: Shop
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: BASKET_ROUTE,
        Component: Basket
    },
    {
        path: DEVICE_ROUTE + '/:id',
        Component: DevicePage
    },
    {
        path: SHIPPING_ROUTE,
        Component: Shipping
    },

]