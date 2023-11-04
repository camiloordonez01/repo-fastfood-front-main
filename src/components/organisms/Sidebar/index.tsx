import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { useColorScheme } from '@mui/joy/styles'
import GlobalStyles from '@mui/joy/GlobalStyles'
import { Avatar, Box, Chip, Divider, IconButton, List, ListItem, Typography, Sheet } from '@mui/joy'
import ListItemButton, { listItemButtonClasses } from '@mui/joy/ListItemButton'

//Icons
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded'
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded'

import ColorSchemeToggle from '../../atoms/colorSchemeToggle'
import { closeSidebar } from '../../../utils'

import logoHorizontal from '../../../assets/images/logo-horizontal.png'
import logoHorizontalInvertido from '../../../assets/images/logo-horizontal-invertido.png'
import Menu from '../../molecules/Menu'

import { logout } from '../../../store/thunks/auth'
import { AppDispatch } from '../../../store'

export default function Sidebar() {
    const { mode } = useColorScheme()
    const dispatch = useDispatch<AppDispatch>()

    const logOut = useCallback(() => {
        dispatch(logout())
    }, [dispatch])
    return (
        <Sheet
            className="Sidebar"
            sx={{
                position: {
                    xs: 'fixed',
                    md: 'sticky'
                },
                transform: {
                    xs: 'translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1)))',
                    md: 'none'
                },
                transition: 'transform 0.4s, width 0.4s',
                zIndex: 10000,
                height: '100dvh',
                width: 'var(--Sidebar-width)',
                top: 0,
                p: 2,
                flexShrink: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                borderRight: '1px solid',
                borderColor: 'divider'
            }}
        >
            <GlobalStyles
                styles={(theme) => ({
                    ':root': {
                        '--Sidebar-width': '220px',
                        [theme.breakpoints.up('lg')]: {
                            '--Sidebar-width': '240px'
                        }
                    }
                })}
            />
            <Box
                className="Sidebar-overlay"
                sx={{
                    position: 'fixed',
                    zIndex: 9998,
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    opacity: 'var(--SideNavigation-slideIn)',
                    backgroundColor: 'var(--joy-palette-background-backdrop)',
                    transition: 'opacity 0.4s',
                    transform: {
                        xs: 'translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1) + var(--SideNavigation-slideIn, 0) * var(--Sidebar-width, 0px)))',
                        lg: 'translateX(-100%)'
                    }
                }}
                onClick={() => closeSidebar()}
            />
            <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                <img className="mx-auto" src={mode === 'light' ? logoHorizontal : logoHorizontalInvertido} alt="logotipo" width={150} />
                <ColorSchemeToggle sx={{ ml: 'auto' }} />
            </Box>
            <Box
                sx={{
                    minHeight: 0,
                    overflow: 'hidden auto',
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    [`& .${listItemButtonClasses.root}`]: {
                        gap: 1.5
                    }
                }}
            >
                <Menu />

                <List
                    size="sm"
                    sx={{
                        mt: 'auto',
                        flexGrow: 0,
                        '--ListItem-radius': (theme) => theme.vars.radius.sm,
                        '--List-gap': '8px',
                        mb: 2
                    }}
                >
                    <ListItem>
                        <ListItemButton>
                            <SettingsRoundedIcon />
                            Configuración
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
            <Divider />
            <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                <Avatar
                    variant="outlined"
                    size="sm"
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286"
                />
                <Box sx={{ minWidth: 0, flex: 1 }}>
                    <Typography level="title-sm">Camilo Ordoñez</Typography>
                    <Typography level="body-xs">
                        <Chip color="success" variant="outlined" size="sm">
                            Administrador
                        </Chip>
                    </Typography>
                </Box>
                <IconButton size="sm" variant="plain" color="neutral" onClick={logOut}>
                    <LogoutRoundedIcon />
                </IconButton>
            </Box>
        </Sheet>
    )
}