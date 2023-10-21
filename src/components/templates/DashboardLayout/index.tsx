import React, { FC } from 'react'
import { Box } from '@mui/joy'

import Header from '../../organisms/Header'
const DashboardLayout: FC = () => {
    return (
        <Box sx={{ display: 'flex', minHeight: '100dvh' }}>
            <Header />
        </Box>
    )
}

export default DashboardLayout
