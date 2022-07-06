import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { navigate } from 'gatsby'

// Utils
import { requiredValidation } from '../../utils/formValidations'

// Images
import Logo from '../../images/logo.png'

// Mui
import {
    Box,
    Container,
    Card,
    Input,
    Grid,
    Typography,
    Link,
    Button,
    FormHelperText,
    colors,
} from '@mui/material'

// Services
import { verify } from '../../services/users'

type VerifyData = {
    number1: number
    number2: number
    number3: number
    number4: number
    number5: number
    number6: number
}

const Verify: React.FC = () => {
    const [email, setEmail] = useState('')
    const [submit, setSubmit] = useState(false)
    const [errorSubmit, setErrorSubmit] = useState('')
    const {
        register,
        setValue,
        handleSubmit,
        formState: { errors },
        setFocus,
    } = useForm<VerifyData>({
        mode: 'onChange',
    })

    const handleVerify = async (data: VerifyData) => {
        setSubmit(true)
        try {
            const info = {
                code: `${data.number1}${data.number2}${data.number3}${data.number4}${data.number5}${data.number6}`,
                email: email,
            }
            const result = await verify(info)
            if (result.status === 201) {
                sessionStorage.removeItem('validationEmail')
                navigate('/login')
            }
        } catch (error) {
            console.error(error)
            setSubmit(false)
            setErrorSubmit(error.response.data.message)
        }
    }

    const fullPaste = (paste: string) => {
        const arrayNumber = paste.split('')
        setValue('number1', Number(arrayNumber[0]), {
            shouldValidate: true,
        })
        setValue('number2', Number(arrayNumber[1]), {
            shouldValidate: true,
        })
        setValue('number3', Number(arrayNumber[2]), {
            shouldValidate: true,
        })
        setValue('number4', Number(arrayNumber[3]), {
            shouldValidate: true,
        })
        setValue('number5', Number(arrayNumber[4]), {
            shouldValidate: true,
        })
        setValue('number6', Number(arrayNumber[5]), {
            shouldValidate: true,
        })
    }

    useEffect(() => {
        const validationEmail = sessionStorage.getItem('validationEmail')

        if (localStorage.getItem('accessToken') !== null) {
            navigate('/panel')
        } else if (validationEmail === null) {
            navigate('/login')
        } else {
            setEmail(validationEmail)
        }
    }, [])

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
            <Container maxWidth="sm">
                <Card sx={{ p: 3, my: 4 }}>
                    <Box
                        component="form"
                        onSubmit={handleSubmit(handleVerify)}
                        noValidate
                    >
                        <Box sx={{ mb: 2 }}>
                            <img src={Logo} width="100" />
                            <Typography color="textPrimary" variant="h5">
                                Verificar cuenta
                            </Typography>
                            <Typography
                                color="textSecondary"
                                gutterBottom
                                variant="body2"
                            >
                                ¿Ya verificaste la cuenta?{' '}
                                <Link
                                    variant="subtitle2"
                                    underline="hover"
                                    sx={{
                                        cursor: 'pointer',
                                    }}
                                    onClick={() => navigate('/login')}
                                >
                                    Inicia sesión
                                </Link>
                            </Typography>
                        </Box>
                        <Grid container spacing={2}>
                            <Grid item xs={2}>
                                <Input
                                    type="text"
                                    autoFocus={true}
                                    inputProps={{
                                        min: 1,
                                        max: 1,
                                        style: {
                                            textAlign: 'center',
                                            fontSize: '40px',
                                        },
                                    }}
                                    error={errors.number1 !== undefined}
                                    {...register('number1', requiredValidation)}
                                    onChange={(e) => {
                                        if (
                                            e.target.value !== '' &&
                                            Number(e.target.value) > -1
                                        ) {
                                            if (e.target.value.length >= 6) {
                                                fullPaste(e.target.value)
                                                setFocus('number6')
                                            } else {
                                                e.target.value =
                                                    e.target.value.substr(-1)
                                                setValue(
                                                    'number1',
                                                    Number(e.target.value),
                                                    {
                                                        shouldValidate: true,
                                                    }
                                                )
                                                setFocus('number2')
                                            }
                                        } else {
                                            e.target.value = null
                                            setValue('number1', null, {
                                                shouldValidate: true,
                                            })
                                        }
                                    }}
                                />
                            </Grid>
                            <Grid item xs={2}>
                                <Input
                                    type="text"
                                    inputProps={{
                                        min: 1,
                                        max: 1,
                                        style: {
                                            textAlign: 'center',
                                            fontSize: '40px',
                                        },
                                    }}
                                    error={errors.number2 !== undefined}
                                    {...register('number2', requiredValidation)}
                                    onChange={(e) => {
                                        if (
                                            e.target.value !== '' &&
                                            Number(e.target.value) > -1
                                        ) {
                                            if (e.target.value.length === 6) {
                                                fullPaste(e.target.value)
                                                setFocus('number6')
                                            } else {
                                                e.target.value =
                                                    e.target.value.substr(-1)
                                                setValue(
                                                    'number2',
                                                    Number(e.target.value),
                                                    {
                                                        shouldValidate: true,
                                                    }
                                                )
                                                setFocus('number3')
                                            }
                                        } else {
                                            e.target.value = ''
                                            setValue('number2', null, {
                                                shouldValidate: true,
                                            })
                                            setFocus('number1')
                                        }
                                    }}
                                />
                            </Grid>
                            <Grid item xs={2}>
                                <Input
                                    type="text"
                                    inputProps={{
                                        min: 1,
                                        max: 1,
                                        style: {
                                            textAlign: 'center',
                                            fontSize: '40px',
                                        },
                                    }}
                                    error={errors.number3 !== undefined}
                                    {...register('number3', requiredValidation)}
                                    onChange={(e) => {
                                        if (
                                            e.target.value !== '' &&
                                            Number(e.target.value) > -1
                                        ) {
                                            if (e.target.value.length === 6) {
                                                fullPaste(e.target.value)
                                                setFocus('number6')
                                            } else {
                                                e.target.value =
                                                    e.target.value.substr(-1)
                                                setValue(
                                                    'number3',
                                                    Number(e.target.value),
                                                    {
                                                        shouldValidate: true,
                                                    }
                                                )
                                                setFocus('number4')
                                            }
                                        } else {
                                            e.target.value = ''
                                            setValue('number3', null, {
                                                shouldValidate: true,
                                            })
                                            setFocus('number2')
                                        }
                                    }}
                                />
                            </Grid>
                            <Grid item xs={2}>
                                <Input
                                    type="text"
                                    inputProps={{
                                        min: 1,
                                        max: 1,
                                        style: {
                                            textAlign: 'center',
                                            fontSize: '40px',
                                        },
                                    }}
                                    error={errors.number4 !== undefined}
                                    {...register('number4', requiredValidation)}
                                    onChange={(e) => {
                                        if (
                                            e.target.value !== '' &&
                                            Number(e.target.value) > -1
                                        ) {
                                            if (e.target.value.length === 6) {
                                                fullPaste(e.target.value)
                                                setFocus('number6')
                                            } else {
                                                e.target.value =
                                                    e.target.value.substr(-1)
                                                setValue(
                                                    'number4',
                                                    Number(e.target.value),
                                                    {
                                                        shouldValidate: true,
                                                    }
                                                )
                                                setFocus('number5')
                                            }
                                        } else {
                                            e.target.value = ''
                                            setValue('number4', null, {
                                                shouldValidate: true,
                                            })
                                            setFocus('number3')
                                        }
                                    }}
                                />
                            </Grid>
                            <Grid item xs={2}>
                                <Input
                                    type="text"
                                    inputProps={{
                                        min: 1,
                                        max: 1,
                                        style: {
                                            textAlign: 'center',
                                            fontSize: '40px',
                                        },
                                    }}
                                    error={errors.number5 !== undefined}
                                    {...register('number5', requiredValidation)}
                                    onChange={(e) => {
                                        if (
                                            e.target.value !== '' &&
                                            Number(e.target.value) > -1
                                        ) {
                                            if (e.target.value.length === 6) {
                                                fullPaste(e.target.value)
                                                setFocus('number6')
                                            } else {
                                                e.target.value =
                                                    e.target.value.substr(-1)
                                                setValue(
                                                    'number5',
                                                    Number(e.target.value),
                                                    {
                                                        shouldValidate: true,
                                                    }
                                                )
                                                setFocus('number6')
                                            }
                                        } else {
                                            e.target.value = ''
                                            setValue('number5', null, {
                                                shouldValidate: true,
                                            })
                                            setFocus('number4')
                                        }
                                    }}
                                />
                            </Grid>
                            <Grid item xs={2}>
                                <Input
                                    type="text"
                                    inputProps={{
                                        min: 1,
                                        max: 1,
                                        style: {
                                            textAlign: 'center',
                                            fontSize: '40px',
                                        },
                                    }}
                                    error={errors.number6 !== undefined}
                                    {...register('number6', requiredValidation)}
                                    onChange={(e) => {
                                        if (
                                            e.target.value !== '' &&
                                            Number(e.target.value) > -1
                                        ) {
                                            if (e.target.value.length === 6) {
                                                fullPaste(e.target.value)
                                                setFocus('number6')
                                            } else {
                                                e.target.value =
                                                    e.target.value.substr(-1)
                                                setValue(
                                                    'number6',
                                                    Number(e.target.value),
                                                    {
                                                        shouldValidate: true,
                                                    }
                                                )
                                            }
                                        } else {
                                            e.target.value = ''
                                            setValue('number6', null, {
                                                shouldValidate: true,
                                            })
                                            setFocus('number5')
                                        }
                                    }}
                                />
                            </Grid>
                        </Grid>
                        <Button
                            sx={{ mt: 5 }}
                            color="primary"
                            fullWidth
                            size="large"
                            type="submit"
                            variant="contained"
                            disabled={
                                !(
                                    errors.number1 === undefined &&
                                    errors.number2 === undefined &&
                                    errors.number3 === undefined &&
                                    errors.number4 === undefined &&
                                    errors.number5 === undefined &&
                                    errors.number6 === undefined
                                ) || submit
                            }
                        >
                            Verificar
                        </Button>
                        <FormHelperText
                            sx={{
                                color: colors.red[700],
                                textAlign: 'center',
                                marginTop: '10px',
                            }}
                        >
                            {errorSubmit}
                        </FormHelperText>
                    </Box>
                </Card>
            </Container>
        </Box>
    )
}

export default Verify
