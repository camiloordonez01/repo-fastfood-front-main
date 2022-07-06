import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { navigate } from 'gatsby'

// Images
import Logo from '../../images/logo.png'

// Icons
import FacebookIcon from '@mui/icons-material/FacebookRounded'
import GoogleIcon from '@mui/icons-material/Google'

// Utils
import {
    requiredValidation,
    emailValidationObj,
    passwordValidationObj,
} from '../../utils/formValidations'

// Mui
import {
    Box,
    Button,
    Container,
    Grid,
    Link,
    TextField,
    Typography,
    Divider,
    Card,
    FormHelperText,
    colors,
} from '@mui/material'

// Services
import { signIn } from '../../services/users'

type LoginData = {
    email: string
    password: string
}

const SignIn: React.FC = () => {
    const [submit, setSubmit] = useState(false)
    const [resendCode, setResendCode] = useState(false)
    const {
        register,
        setValue,
        handleSubmit,
        formState: { errors },
        setError,
    } = useForm<LoginData>({
        mode: 'onChange',
    })

    const handleLogin = async (data: LoginData) => {
        setSubmit(true)
        try {
            const result = await signIn(data)
            if (result.status === 200) {
                const {
                    data: { result: ResultData },
                } = result

                localStorage.setItem('accessToken', ResultData.AccessToken)
                localStorage.setItem('refreshToken', ResultData.RefreshToken)
                localStorage.setItem('expirationDate', ResultData.Expiration)
                localStorage.setItem('uidUser', ResultData.UidUser)

                if (ResultData.Relations.length > 0) {
                    localStorage.setItem('relations', ResultData.Relations)
                    navigate('/panel')
                } else {
                    navigate('/welcome')
                }
            }
        } catch (error) {
            setSubmit(false)
            if (error.request.status === 400) {
                console.log('entro')
                setResendCode(true)
            } else {
                setError('password', {
                    type: 'data error',
                    message: error.response.data.message,
                })
            }
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
                        onSubmit={handleSubmit(handleLogin)}
                        noValidate
                    >
                        <Box sx={{ mb: 2 }}>
                            <img src={Logo} width="100" />
                            <Typography color="textPrimary" variant="h5">
                                Bienvenido a FastFood
                            </Typography>
                            <Typography
                                color="textSecondary"
                                gutterBottom
                                variant="body2"
                            >
                                ¿Eres nuevo en FastFood?{' '}
                                <Link
                                    variant="subtitle2"
                                    underline="hover"
                                    sx={{
                                        cursor: 'pointer',
                                    }}
                                    onClick={() => navigate('/register')}
                                >
                                    Crea una cuenta
                                </Link>
                            </Typography>
                        </Box>
                        <TextField
                            required
                            fullWidth
                            label="Correo electrónico"
                            margin="normal"
                            name="email"
                            type="email"
                            variant="outlined"
                            autoFocus
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
                                setResendCode(false)
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
                            id="password"
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
                                setResendCode(false)
                            }}
                            disabled={submit}
                        />
                        <Box sx={{ pt: 2 }}>
                            <Button
                                color="primary"
                                fullWidth
                                size="large"
                                type="submit"
                                variant="contained"
                                disabled={submit}
                            >
                                Iniciar sesión
                            </Button>
                            {resendCode && (
                                <FormHelperText
                                    sx={{
                                        color: colors.red[700],
                                        textAlign: 'center',
                                        marginTop: '10px',
                                    }}
                                >
                                    Tu cuenta aun no esta verificada. Para
                                    verificar haga {' '}
                                    <Link
                                        variant="subtitle2"
                                        underline="hover"
                                        sx={{
                                            cursor: 'pointer',
                                        }}
                                        onClick={() => navigate('/resendcode')}
                                    >
                                        click aquí
                                    </Link>
                                </FormHelperText>
                            )}
                            <Typography
                                color="textSecondary"
                                gutterBottom
                                variant="body2"
                                align="right"
                                sx={{ pt: 2 }}
                            >
                                <Link
                                    variant="subtitle2"
                                    underline="hover"
                                    sx={{
                                        cursor: 'pointer',
                                    }}
                                    onClick={() => navigate('/register')}
                                >
                                    ¿Olvidaste tu contraseña?
                                </Link>
                            </Typography>
                        </Box>
                        {/* <Box sx={{ py: 3 }}>
                            <Grid container spacing={3}>
                                <Grid item xs={2} md={4}>
                                    <Divider sx={{ pt: 2 }} />
                                </Grid>
                                <Grid item xs={8} md={4}>
                                    <Typography
                                        align="center"
                                        color="textPrimary"
                                        variant="body1"
                                    >
                                        O inicia sesión con
                                    </Typography>
                                </Grid>
                                <Grid item xs={2} md={4}>
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
                    </Box>
                </Card>
            </Container>
        </Box>
    )
}

export default SignIn
