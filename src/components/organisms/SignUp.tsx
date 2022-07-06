import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { navigate } from 'gatsby'

// Utils
import {
    requiredValidation,
    emailValidationObj,
    passwordValidationObj,
} from '../../utils/formValidations'

// Images
import Logo from '../../images/logo.png'

// Icons
import FacebookIcon from '@mui/icons-material/FacebookRounded'
import GoogleIcon from '@mui/icons-material/Google'

import {
    Card,
    Box,
    Button,
    Container,
    Link,
    TextField,
    Typography,
    Divider,
    Checkbox,
    FormHelperText,
    colors,
} from '@mui/material'

// Services
import { signUp } from '../../services/users'

type RegisterData = {
    firstName: string
    lastName: string
    email: string
    terms: boolean
    password: string
}

const SignUp: React.FC = () => {
    const [submit, setSubmit] = useState(false)
    const [unexpectedError, setUnexpectedError] = useState('')
    const {
        register,
        setValue,
        handleSubmit,
        formState: { errors },
        setError,
    } = useForm<RegisterData>({
        mode: 'onChange',
    })

    const handleRegister = async (data: RegisterData) => {
        setSubmit(true)
        setUnexpectedError('')
        try {
            const result = await signUp(data)
            console.log(result)
            if (result.status === 201) {
                sessionStorage.setItem('validationEmail', data.email)
                navigate('/verify')
            }
        } catch (error) {
            if (error.request.status === 400) {
                setError('email', {
                    type: 'data error',
                    message: error.response.data.message,
                })
            } else {
                setUnexpectedError(error.response.data.message)
            }
            setSubmit(false)
        }
    }

    useEffect(() => {
        if (localStorage.getItem('accessToken') !== null) {
            navigate('/panel')
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
                        onSubmit={handleSubmit(handleRegister)}
                        noValidate
                    >
                        <Box sx={{ mb: 2 }}>
                            <img src={Logo} width="100" />
                            <Typography color="textPrimary" variant="h5">
                                Crea una nueva cuenta
                            </Typography>
                            <Typography
                                color="textSecondary"
                                gutterBottom
                                variant="body2"
                            >
                                Use su correo electrónico para crear una nueva
                                cuenta
                            </Typography>
                        </Box>
                        <TextField
                            required
                            fullWidth
                            label="Nombres"
                            margin="normal"
                            name="firstName"
                            variant="outlined"
                            helperText={errors.firstName?.message}
                            error={errors.firstName !== undefined}
                            {...register('firstName', requiredValidation)}
                            onChange={(e) => {
                                setValue('firstName', e.target.value, {
                                    shouldValidate: true,
                                })
                                setUnexpectedError('')
                            }}
                            disabled={submit}
                        />
                        <TextField
                            required
                            fullWidth
                            label="Apellidos"
                            margin="normal"
                            name="lastName"
                            variant="outlined"
                            helperText={errors.lastName?.message}
                            error={errors.lastName !== undefined}
                            {...register('lastName', requiredValidation)}
                            onChange={(e) => {
                                setValue('lastName', e.target.value, {
                                    shouldValidate: true,
                                })
                                setUnexpectedError('')
                            }}
                            disabled={submit}
                        />
                        <TextField
                            required
                            fullWidth
                            label="Correo electrónico"
                            margin="normal"
                            name="email"
                            type="email"
                            variant="outlined"
                            helperText={errors.email?.message}
                            error={errors.email !== undefined}
                            {...register('email', {
                                ...requiredValidation,
                                ...emailValidationObj,
                            })}
                            onChange={(e) => {
                                setValue('email', e.target.value, {
                                    shouldValidate: true,
                                })
                                setUnexpectedError('')
                            }}
                            disabled={submit}
                        />
                        <TextField
                            required
                            fullWidth
                            label="Contraseña"
                            margin="normal"
                            name="password"
                            type="password"
                            variant="outlined"
                            helperText={errors.password?.message}
                            error={errors.password !== undefined}
                            {...register('password', {
                                ...requiredValidation,
                                ...passwordValidationObj,
                            })}
                            onChange={(e) => {
                                setValue('password', e.target.value, {
                                    shouldValidate: true,
                                })
                                setUnexpectedError('')
                            }}
                            disabled={submit}
                        />
                        <Box
                            sx={{
                                alignItems: 'center',
                                display: 'flex',
                                ml: -1,
                            }}
                        >
                            <Checkbox
                                required
                                name="policy"
                                {...register('terms', requiredValidation)}
                                onChange={(e) => {
                                    let value = null
                                    if (e.target.checked) {
                                        value = true
                                    }
                                    setValue('terms', value, {
                                        shouldValidate: true,
                                    })
                                    setUnexpectedError('')
                                }}
                            />
                            <Typography color="textSecondary" variant="body2">
                                He leído los{' '}
                                <Link
                                    color="primary"
                                    underline="always"
                                    variant="subtitle2"
                                    sx={{
                                        cursor: 'pointer',
                                    }}
                                >
                                    términos y condiciones
                                </Link>
                            </Typography>
                        </Box>
                        <FormHelperText sx={{ color: colors.red[700] }}>
                            {errors.terms
                                ? 'Debes aceptar los términos y condiciones para registrarse.'
                                : ''}
                        </FormHelperText>
                        <Box sx={{ pt: 2 }}>
                            <Button
                                color="primary"
                                fullWidth
                                size="large"
                                type="submit"
                                variant="contained"
                                disabled={submit}
                            >
                                Registrarte ahora
                            </Button>
                        </Box>
                        <FormHelperText
                            sx={{ color: colors.red[700], textAlign: 'center' }}
                        >
                            {unexpectedError}
                        </FormHelperText>
                        {/* <Box sx={{ py: 3 }}>
                            <Grid container spacing={3}>
                                <Grid item xs={3} md={4}>
                                    <Divider sx={{ pt: 2 }} />
                                </Grid>
                                <Grid item xs={6} md={4}>
                                    <Typography
                                        align="center"
                                        color="textPrimary"
                                        variant="body1"
                                    >
                                        O registrarte con
                                    </Typography>
                                </Grid>
                                <Grid item xs={3} md={4}>
                                    <Divider sx={{ pt: 2 }} />
                                </Grid>
                            </Grid>
                        </Box>
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={6}>
                                <Button
                                    color="info"
                                    fullWidth
                                    startIcon={<FacebookIcon />}
                                    size="large"
                                    variant="contained"
                                >
                                    Facebook
                                </Button>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Button
                                    fullWidth
                                    color="error"
                                    startIcon={<GoogleIcon />}
                                    size="large"
                                    variant="contained"
                                >
                                    Google
                                </Button>
                            </Grid>
                        </Grid> */}
                        <Box sx={{ pt: 2 }}>
                            <Typography
                                color="textSecondary"
                                variant="body2"
                                align="right"
                            >
                                ¿Tienes cuenta?{' '}
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
                    </Box>
                </Card>
            </Container>
        </Box>
    )
}

export default SignUp
