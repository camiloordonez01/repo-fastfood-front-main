import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { navigate } from 'gatsby'

// Utils
import { requiredValidation, emailValidationObj } from '../../utils/formValidations'

// Images
import Logo from '../../images/logo.png'

// Mui
import {
    Box,
    Container,
    Card,
    TextField,
    Typography,
    Link,
    Button,
    FormHelperText,
    colors,
} from '@mui/material'

// Services
import { resendCode } from '../../services/users'

type ResendCodeData = {
    email: string
}

const ResendCode: React.FC = () => {
    const [submit, setSubmit] = useState(false)

    const {
        register,
        setValue,
        handleSubmit,
        formState: { errors },
        setFocus,
    } = useForm<ResendCodeData>({
        mode: 'onChange',
    })

    const handleResendCode = async (data: ResendCodeData) => {
        setSubmit(true)
        try {
            const result = await resendCode(data.email)
            if (result.status === 200) {
                sessionStorage.setItem('validationEmail', data.email)
                navigate('/verify')
            }
        } catch (error) {
            setSubmit(false)
        }
    }
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
                        onSubmit={handleSubmit(handleResendCode)}
                        noValidate
                    >
                        <Box sx={{ mb: 2 }}>
                            <img src={Logo} width="100" />
                            <Typography color="textPrimary" variant="h5">
                                Reenviar código de verificación
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
                            }}
                            disabled={submit}
                        />
                        <Button
                            sx={{ mt: 2 }}
                            color="primary"
                            fullWidth
                            size="large"
                            type="submit"
                            variant="contained"
                            disabled={submit}
                        >
                            Verificar
                        </Button>
                    </Box>
                </Card>
            </Container>
        </Box>
    )
}

export default ResendCode