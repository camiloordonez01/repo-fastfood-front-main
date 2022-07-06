import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { navigate } from 'gatsby'

// Utils
import { requiredValidation } from '../../../utils/formValidations'

//Components
import StepperHorizontal, { TypeSteps } from '../../molecules/StepperHorizontal'

//Mui
import {
    Box,
    Container,
    Grid,
    TextField,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    SelectChangeEvent,
    FormHelperText,
    colors,
} from '@mui/material'

const steps: TypeSteps[] = [
    {
        title: 'Bienvenido',
        activeButtonNext: true,
    },
    {
        title: 'Datos personales',
        description: 'Complete los datos',
        activeButtonNext: false,
    },
    {
        title: 'Empresa',
        description: 'Cree su empresa',
        activeButtonNext: false,
    },
    {
        title: 'Establecimiento',
        description: 'Cree el primer establecimiento',
        activeButtonNext: false,
    },
]

type TourData = {
    document: string
    documentType: string
    phone: number
    birthday: string
}

const TourInitial: React.FC = () => {
    const [documentType , setDocumentType] = useState('')
    const [document , setDocument] = useState('')
    const [phone , setPhone] = useState('')
    const [birthday , setBirthday] = useState('')
    const {
        register,
        setValue,
        handleSubmit,
        formState: { errors },
        setError,
    } = useForm<TourData>({
        mode: 'onChange',
    })

    const finish = () => {
        console.log('ok')
    }

    const handleTour = (data: TourData) => {}

    useEffect(() => {
        steps[1].activeButtonNext = (
            documentType !== '' &&
            document !== '' &&
            phone !== '' &&
            birthday !== ''
        )
    }, [documentType, document, phone, birthday])
    
    return (
        <Box
            component="main"
            sx={{
                alignItems: 'center',
                display: 'flex',
                flexGrow: 1,
                minHeight: '100%',
            }}
        >
            <Container maxWidth="lg">
                <Box
                    component="form"
                    onSubmit={handleSubmit(handleTour)}
                    noValidate
                    sx={{ p: 3 }}
                >
                    <StepperHorizontal
                        steps={steps}
                        textButtonFinish="Finalizar"
                        activeButtonFinish={true}
                        handleFinish={finish}
                    >
                        <div style={{ textAlign: 'center', marginTop: '20px' }}>
                            <h2>Hola Juan Camilo</h2>
                            <h1 style={{ fontSize: '60px' }}>Bienvenido</h1>
                            <p
                                style={{
                                    maxWidth: '400px',
                                    margin: 'auto',
                                    fontSize: '20px',
                                }}
                            >
                                Es un placer para nosotros tenerte como cliente,
                                ahora solo falta completar los siguientes datos
                                para poder empezar a operar en{' '}
                                <span style={{ color: 'primary' }}></span>
                                FastFood.
                            </p>
                        </div>
                        <div>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <FormControl
                                        fullWidth
                                        required
                                        variant="outlined"
                                        sx={{ marginTop: '16px' }}
                                    >
                                        <InputLabel id="demo-simple-select-label">
                                            Tipo de documento
                                        </InputLabel>
                                        <Select
                                            autoFocus
                                            required
                                            error={
                                                errors.documentType !==
                                                undefined
                                            }
                                            {...register(
                                                'documentType',
                                                requiredValidation
                                            )}
                                            onChange={(
                                                e: SelectChangeEvent
                                            ) => {
                                                setValue(
                                                    'documentType',
                                                    e.target.value,
                                                    {
                                                        shouldValidate: true,
                                                    }
                                                )
                                                setDocumentType(e.target.value)
                                            }}
                                        >
                                            <MenuItem value={10}>Ten</MenuItem>
                                            <MenuItem value={20}>
                                                Twenty
                                            </MenuItem>
                                            <MenuItem value={30}>
                                                Thirty
                                            </MenuItem>
                                        </Select>
                                        <FormHelperText
                                            sx={{ color: colors.red[700] }}
                                        >
                                            {errors.documentType?.message}
                                        </FormHelperText>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        required
                                        fullWidth
                                        label="Numero de documento"
                                        margin="normal"
                                        name="document"
                                        type="number"
                                        variant="outlined"
                                        helperText={errors.document?.message}
                                        error={errors.document !== undefined}
                                        {...register(
                                            'document',
                                            requiredValidation
                                        )}
                                        onChange={(e) => {
                                            setValue(
                                                'document',
                                                e.target.value,
                                                {
                                                    shouldValidate: true,
                                                }
                                            )
                                            setDocument(e.target.value)
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        required
                                        fullWidth
                                        label="Teléfono"
                                        margin="normal"
                                        name="phone"
                                        type="number"
                                        variant="outlined"
                                        helperText={errors.phone?.message}
                                        error={errors.phone !== undefined}
                                        {...register(
                                            'phone',
                                            requiredValidation
                                        )}
                                        onChange={(e) => {
                                            if (Number(e.target.value) > 0) {
                                                setValue(
                                                    'phone',
                                                    Number(e.target.value),
                                                    {
                                                        shouldValidate: true,
                                                    }
                                                )
                                                setPhone(e.target.value)
                                            }
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        required
                                        InputLabelProps={{ shrink: true }}
                                        fullWidth
                                        label="birthday"
                                        margin="normal"
                                        name="birthday"
                                        type="date"
                                        variant="outlined"
                                        helperText={errors.birthday?.message}
                                        error={errors.birthday !== undefined}
                                        {...register(
                                            'birthday',
                                            requiredValidation
                                        )}
                                        onChange={(e) => {
                                            setValue(
                                                'birthday',
                                                e.target.value,
                                                {
                                                    shouldValidate: true,
                                                }
                                            )
                                            setBirthday(e.target.value)
                                        }}
                                    />
                                </Grid>
                            </Grid>
                        </div>
                        <div>
                            <p>step 3</p>
                        </div>
                        <div>
                            <p>step 4</p>
                        </div>
                    </StepperHorizontal>
                </Box>
            </Container>
        </Box>
    )
}

export default TourInitial
