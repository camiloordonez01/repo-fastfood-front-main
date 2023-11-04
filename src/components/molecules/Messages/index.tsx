import React, { FC } from 'react'
import { Alert, IconButton } from '@mui/joy'

import InfoIcon from '@mui/icons-material/Info'
import WarningIcon from '@mui/icons-material/Warning'
import ReportIcon from '@mui/icons-material/Report'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'

interface Data {
    type: 'success' | 'warning' | 'danger' | 'neutral'
    message: string
}
const Messages: FC<Data> = ({ type, message }) => {
    let icon = <CheckCircleIcon />
    if (type === 'warning') {
        icon = <WarningIcon />
    } else if (type === 'danger') {
        icon = <ReportIcon />
    } else if (type === 'neutral') {
        icon = <InfoIcon />
    }
    return (
        <Alert
            sx={{ alignItems: 'flex-start' }}
            startDecorator={icon}
            variant="soft"
            color={type}
            endDecorator={
                <IconButton variant="soft" color={type}>
                    <CloseRoundedIcon />
                </IconButton>
            }
        >
            {message}
        </Alert>
    )
}

export default Messages
