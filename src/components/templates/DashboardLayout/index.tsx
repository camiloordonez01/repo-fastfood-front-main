import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { Box, CssBaseline, CssVarsProvider } from '@mui/joy'
import { Person as PersonIcon, Wifi as WifiIcon } from '@mui/icons-material'

import { theme } from '../../../utils/theme'

import Menu from '../../organisms/Menu'

import logoHorizontal from '../../../assets/images/logo-horizontal.png'

const DashboardLayout: FC = () => {
    return (
        <CssVarsProvider theme={theme}>
            <CssBaseline />
            <Box className="h-dvh bg-[#f6f6f6]">
                <Box className="flex justify-between py-2 px-4 border-b border-b-gray-200 bg-white">
                    <img className="max-w-min h-8" src={logoHorizontal} alt="" />
                    <Box className="flex">
                        <Box className="bg-[#f4f4f4] hover:!bg-gray-300 rounded p-1 cursor-pointer mr-2">
                            <WifiIcon className="!text-green-600" />
                        </Box>
                        <Box className="bg-[#f4f4f4] hover:!bg-gray-300 rounded p-1 cursor-pointer">
                            <PersonIcon className="!text-dark" />
                        </Box>
                    </Box>
                </Box>
                <Box className="flex" sx={{ height: 'calc(100dvh - 50px)' }}>
                    <Menu />
                    <Box className="grow grid grid-cols-3">
                        <Box className="col-span-2 p-2">
                            <Outlet />
                        </Box>
                        <Box className="flex justify-center items-center bg-white border-l border-l-gray-200">Información aquí</Box>
                    </Box>
                </Box>
            </Box>
        </CssVarsProvider>
    )
}

export default DashboardLayout
