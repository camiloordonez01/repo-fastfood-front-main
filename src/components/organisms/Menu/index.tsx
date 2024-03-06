import { FC, useCallback } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { Box } from '@mui/joy'
import { HomeOutlined as HomeOutlinedIcon, Inventory2Outlined as Inventory2OutlinedIcon, Logout as LogoutIcon } from '@mui/icons-material'

import ItemMenu from '../../molecules/ItemMenu'

import { DASHBOARD, INVENTORY } from '../../../utils/constants'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../../store'
import { logout } from '../../../store/thunks/auth'

const Menu: FC = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const dispatch = useDispatch<AppDispatch>()

    const logOut = useCallback(() => {
        dispatch(logout())
    }, [dispatch])

    const items = [
        {
            icon: HomeOutlinedIcon,
            name: 'Inicio',
            path: DASHBOARD
        },
        {
            icon: Inventory2OutlinedIcon,
            name: 'Inventario',
            path: INVENTORY
        }
    ]
    return (
        <Box className="flex flex-col justify-between min-h-min border-r border-r-gray-200 bg-white">
            <Box className="flex flex-col gap-2 px-1 py-3">
                {items.map((item, index) => (
                    <ItemMenu
                        key={`ItemMenu${index}`}
                        IconElement={item.icon}
                        title={item.name}
                        selected={location.pathname === item.path}
                        onClick={() => navigate(item.path)}
                    />
                ))}
            </Box>
            <Box className="flex flex-col justify-self-end gap-2 px-1 py-3">
                <ItemMenu IconElement={LogoutIcon} title="Salir" selected={false} onClick={logOut} />
            </Box>
        </Box>
    )
}

export default Menu
