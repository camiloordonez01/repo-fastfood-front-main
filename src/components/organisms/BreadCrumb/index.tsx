import React, { FC } from 'react'
import { useMatches, useNavigate } from 'react-router-dom'
import { Box, Breadcrumbs, Link, Typography } from '@mui/joy'
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded'

import { DASHBOARD } from '../../../utils/constants'

const BreadCrumb: FC = () => {
    const matches = useMatches()
    const navigate = useNavigate()

    const pathList = matches[1].pathname.split('/')
    let pathIteration = ''
    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Breadcrumbs size="sm" aria-label="breadcrumbs" separator={<ChevronRightRoundedIcon />} sx={{ pl: 0 }}>
                <Link underline="none" color="neutral" onClick={() => navigate(DASHBOARD)} aria-label="Panel">
                    <HomeRoundedIcon />
                </Link>
                {pathList.map((path, index) => {
                    if (!['', 'panel'].includes(path)) {
                        pathIteration += `/${path}`
                        console.log(pathIteration)
                        return index === pathList.length - 1 ? (
                            <Typography key={`breadCrumbItem${index}`} color="primary" fontWeight={500} fontSize={12}>
                                {path.replace(/^\w/, (c) => c.toUpperCase())}
                            </Typography>
                        ) : (
                            <Link
                                className={`${pathIteration}`}
                                key={`breadCrumbItem${index}`}
                                underline="hover"
                                color="neutral"
                                onClick={() => navigate(JSON.parse(JSON.stringify(pathIteration)))}
                                fontSize={12}
                                fontWeight={500}
                            >
                                {path.replace(/^\w/, (c) => c.toUpperCase())}
                            </Link>
                        )
                    }
                })}
            </Breadcrumbs>
        </Box>
    )
}

export default BreadCrumb
