import React, { FC } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { PointOfSale, Timeline, HomeRounded, AssignmentRounded, KeyboardArrowDown } from '@mui/icons-material'
import { List, ListItem, ListItemButton, ListItemContent, Typography, Box } from '@mui/joy'

import { DASHBOARD, SERVICE, SALES, SERVICES, LISTPRODUCTS } from '../../../utils/constants'

function Toggler({
    defaultExpanded = false,
    renderToggle,
    children
}: {
    defaultExpanded?: boolean
    children: React.ReactNode
    renderToggle: (params: { open: boolean; setOpen: React.Dispatch<React.SetStateAction<boolean>> }) => React.ReactNode
}) {
    const [open, setOpen] = React.useState(defaultExpanded)
    return (
        <React.Fragment>
            {renderToggle({ open, setOpen })}
            <Box
                sx={{
                    display: 'grid',
                    gridTemplateRows: open ? '1fr' : '0fr',
                    transition: '0.2s ease',
                    '& > *': {
                        overflow: 'hidden'
                    }
                }}
            >
                {children}
            </Box>
        </React.Fragment>
    )
}

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
            path: SALES,
            childrens: [
                {
                    name: 'Servicios',
                    path: SERVICES
                },
                {
                    name: 'Productos',
                    path: LISTPRODUCTS
                }
            ]
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
                <ListItem key={`menuItem${index}`} nested={item.childrens ? true : false}>
                    {item.childrens ? (
                        <Toggler
                            renderToggle={({ open, setOpen }) => (
                                <ListItemButton selected={location.pathname.includes(item.path)} onClick={() => setOpen(!open)}>
                                    {item.icon}
                                    <ListItemContent>
                                        <Typography level="title-sm">{item.name}</Typography>
                                    </ListItemContent>
                                    <KeyboardArrowDown sx={{ transform: open ? 'rotate(180deg)' : 'none' }} />
                                </ListItemButton>
                            )}
                        >
                            <List sx={{ gap: 0.5 }}>
                                {item.childrens.map((data, index) => (
                                    <ListItem key={`subMenuItem${index}`}>
                                        <ListItemButton selected={location.pathname.includes(data.path)} onClick={() => navigate(data.path)}>{data.name}</ListItemButton>
                                    </ListItem>
                                ))}
                            </List>
                        </Toggler>
                    ) : (
                        <ListItemButton selected={location.pathname === item.path} onClick={() => navigate(item.path)}>
                            {item.icon}
                            <ListItemContent>
                                <Typography level="title-sm">{item.name}</Typography>
                            </ListItemContent>
                        </ListItemButton>
                    )}
                </ListItem>
            ))}
        </List>
    )
}

export default Menu
