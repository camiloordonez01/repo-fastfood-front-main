import React, { FC, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'
import { CssVarsProvider } from '@mui/joy/styles'
import { CssBaseline } from '@mui/joy'

import { theme } from '../../../utils/theme'

import { Reducers } from '../../../store'
import { DASHBOARD } from '../../../utils/constants'

const MinimalLayout: FC = () => {
    const navigate = useNavigate()
    const { isLoggedIn } = useSelector((state: Reducers) => state.auth)

    useEffect(() => {
        if (isLoggedIn !== undefined && isLoggedIn) {
            navigate(DASHBOARD)
        }
    }, [navigate, isLoggedIn])
    return (
        <>
            <CssVarsProvider theme={theme}>
                <CssBaseline />
                <Outlet />
            </CssVarsProvider>
        </>
    )
}

export default MinimalLayout
