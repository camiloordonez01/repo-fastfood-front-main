import React from 'react'
import { styled } from '@mui/material/styles'

// Mui
import { StepIconProps } from '@mui/material'

//icons
import { Check, ErrorOutline } from '@mui/icons-material'

const QontoStepIcon: React.FC = (props: StepIconProps) => {
    const { active, completed, error, className } = props
    const QontoStepIconRoot = styled('div')<{
        ownerState: { active?: boolean }
    }>(({ theme, ownerState }) => ({
        color:
            theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#eaeaf0',
        display: 'flex',
        height: 22,
        alignItems: 'center',
        ...(ownerState.active && {
            color: '#784af4',
        }),
        '& .QontoStepIcon-completedIcon': {
            color: '#784af4',
            zIndex: 1,
            fontSize: 22,
        },
        '& .QontoStepIcon-circle': {
            width: 8,
            height: 8,
            borderRadius: '50%',
            backgroundColor: 'currentColor',
        },
        '& .QontoStepIcon-errorIcon': {
            color: 'rgb(255, 76, 81)',
            zIndex: 1,
            fontSize: 22,
        },
    }))

    return (
        <QontoStepIconRoot ownerState={{ active }} className={className}>
            {error ? (
                <ErrorOutline className="QontoStepIcon-errorIcon"></ErrorOutline>
            ) : (
                <>
                    {completed ? (
                        <Check className="QontoStepIcon-completedIcon" />
                    ) : (
                        <div className="QontoStepIcon-circle" />
                    )}
                </>
            )}
        </QontoStepIconRoot>
    )
}

export default QontoStepIcon
