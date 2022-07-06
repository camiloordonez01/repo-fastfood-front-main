import React, { useState, MouseEventHandler } from 'react'

//Components
import QontoStepIcon from '../../atoms/QontoStepIcon'

//styles
import './style.css'

//Mui
import { Card, Container, Divider, Stepper, Step, StepLabel, Button } from '@mui/material'

interface props {
    steps: TypeSteps[]
    textButtonFinish: string
    activeButtonFinish: boolean
    handleFinish: () => void
    children?: JSX.Element[]
}
const StepperHorizontal: React.FC<props> = ({
    steps,
    textButtonFinish,
    activeButtonFinish,
    handleFinish,
    children
}) => {
    const [activeStep, setActiveStep] = useState(0)

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1)
    }
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1)
    }
    return (
        <Card variant="outlined">
            <div className="header">
                <Stepper>
                    {steps.map((step, index) => (
                        <Step key={index} completed={activeStep >= index}>
                            <StepLabel
                                StepIconComponent={QontoStepIcon}
                                error={step.error ?? false}
                            >
                                <div className="stepLabel">
                                    <p className="stepValue">0{index + 1}</p>
                                    <div className="stepText">
                                        <h3>{step.title}</h3>
                                        <p>{step.description}</p>
                                    </div>
                                </div>
                            </StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </div>
            <Divider />
            <div className="body">
                {children.map((element, index) => (
                    <>
                        {activeStep === index && element}
                    </>
                ))}
            </div>
            <div className="footer">
                {activeStep !== 0 && (
                    <Button
                        className="btnBack"
                        variant="outlined"
                        onClick={handleBack}
                    >
                        {steps[activeStep].textButtonBack ?? 'Atrás'}
                    </Button>
                )}
                {activeStep < steps.length - 1 && (
                    <Button
                        className="btnNext"
                        variant="contained"
                        disabled={!steps[activeStep].activeButtonNext || steps[activeStep].error}
                        onClick={handleNext}
                    >
                        {steps[activeStep].textButtonNext ?? 'Siguiente'}
                    </Button>
                )}
                {activeStep === steps.length - 1 && (
                    <Button
                        className="btnNext"
                        variant="contained"
                        disabled={!activeButtonFinish}
                        onClick={handleFinish}
                    >
                        {textButtonFinish}
                    </Button>
                )}
            </div>
        </Card>
    )
}

export default StepperHorizontal

export interface TypeSteps {
    title: string
    description?: string
    textButtonNext?: string
    textButtonBack?: string
    activeButtonNext: boolean
    error?: boolean
}
