import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'

import { CssVarsProvider } from '@mui/joy/styles'
import { CssBaseline } from '@mui/joy'
import { theme } from '../../../utils/theme'

const MinimalLayout: FC = () => {
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
