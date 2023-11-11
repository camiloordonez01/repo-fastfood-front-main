import React, { FC, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'
import { Box, CssBaseline, Grid, Typography } from '@mui/joy'
import { CssVarsProvider } from '@mui/joy/styles'

// Store
import { Reducers } from '../../../store'

import { theme } from '../../../utils/theme'

// Components
import Header from '../../organisms/Header'
import Sidebar from '../../organisms/Sidebar'
import BreadCrumb from '../../organisms/BreadCrumb'
import { LOGIN } from '../../../utils/constants'
const DashboardLayout: FC = () => {
    const navigate = useNavigate()
    const { isLoggedIn } = useSelector((state: Reducers) => state.auth)
    const { title } = useSelector((state: Reducers) => state.vars)

    useEffect(() => {
        if (isLoggedIn !== undefined && !isLoggedIn) {
            navigate(LOGIN)
        }
    }, [navigate, isLoggedIn])
    return (
        <CssVarsProvider theme={theme}>
            <CssBaseline />
            <Box sx={{ display: 'flex', minHeight: '100dvh' }}>
                <Header />
                <Sidebar />
                <Box
                    component="main"
                    className="MainContent"
                    sx={{
                        px: {
                            xs: 2,
                            md: 6
                        },
                        pt: {
                            xs: 'calc(12px + var(--Header-height))',
                            sm: 'calc(12px + var(--Header-height))',
                            md: 3
                        },
                        pb: {
                            xs: 2,
                            sm: 2,
                            md: 3
                        },
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        minWidth: 0,
                        height: '100dvh',
                        gap: 1
                    }}
                >
                    <Grid container>
                        <Grid xs={12}>
                            <BreadCrumb />
                            <Typography level='h1' >{title}</Typography>
                        </Grid>
                        <Grid xs={12}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    my: 1,
                                    gap: 1,
                                    flexDirection: { xs: 'column', sm: 'row' },
                                    alignItems: { xs: 'start', sm: 'center' },
                                    flexWrap: 'wrap',
                                    justifyContent: 'space-between'
                                }}
                            >
                                <Outlet />
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </CssVarsProvider>
    )
}

export default DashboardLayout
