import React, { FC } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { PointOfSale, Timeline, HomeRounded } from '@mui/icons-material'
import { List, ListItem, ListItemButton, ListItemContent, Typography } from '@mui/joy'

import { DASHBOARD, SERVICE, SALES } from '../../../utils/constants'

const Menu: FC = () => {
    const location = useLocation()
    const navigate = useNavigate()

    const items = [
        {
            icon: <HomeRounded />,
            name: 'Panel',
            path: DASHBOARD
        },
        {
            icon: <PointOfSale />,
            name: 'Servicio',
            path: SERVICE
        },
        {
            icon: <Timeline />,
            name: 'Ventas',
            path: SALES
        }
    ]
    return (
        <List
            size="sm"
            sx={{
                gap: 1,
                '--List-nestedInsetStart': '30px',
                '--ListItem-radius': (theme) => theme.vars.radius.sm
            }}
        >
            {items.map((item, index) => (
                <ListItem key={`menuItem${index}`}>
                    <ListItemButton selected={location.pathname === item.path} onClick={() => navigate(item.path)}>
                        {item.icon}
                        <ListItemContent>
                            <Typography level="title-sm">{item.name}</Typography>
                        </ListItemContent>
                    </ListItemButton>
                </ListItem>
            ))}
        </List>
    )
}

export default Menu
