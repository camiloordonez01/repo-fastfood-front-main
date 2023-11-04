import React, { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import * as Yup from 'yup'
import { Formik, FormikHelpers } from 'formik'
import { Sheet, Typography, FormControl, FormLabel, Input, Button, FormHelperText, Alert, IconButton } from '@mui/joy'
import { InfoOutlined, CloseRounded } from '@mui/icons-material'

// store
import { AppDispatch } from '../store'
import { login } from '../store/thunks/auth'

import { DASHBOARD } from '../utils/constants'

import logo from '../assets/images/logo.png'

interface Values {
    email: string
    password: string
}

const LoginPage: FC = () => {
    const dispatch = useDispatch<AppDispatch>()
    const navigate = useNavigate()

    const [btnDisabled, setBtnDisabled] = useState(false)
    const handleSubmit = async (values: Values, { setStatus }: FormikHelpers<Values>) => {
        try {
            setStatus(null)
            setBtnDisabled(true)
            await dispatch(login(values)).unwrap()
            navigate(DASHBOARD)
        } catch (error: any) {
            setStatus(error)
            setBtnDisabled(false)
        }
    }
    return (
        <Sheet sx={{ backgroundColor: 'background.level1', height: '100vh', py: 4 }}>
            <Sheet
                sx={{
                    width: 300,
                    mx: 'auto', // margin left & right
                    py: 3, // padding top & bottom
                    px: 2, // padding left & right
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                    borderRadius: 'sm',
                    boxShadow: 'md'
                }}
                variant="outlined"
            >
                <div>
                    <img className="mx-auto" src={logo} alt="logotipo" width={150} />
                    <Typography level="h4" component="h1" marginTop={2}>
                        <b>¡Bienvenido!</b>
                    </Typography>
                    <Typography level="body-sm">Inicia sesión para continuar.</Typography>
                </div>
                <Formik
                    initialValues={{
                        email: '',
                        password: ''
                    }}
                    onSubmit={handleSubmit}
                    validationSchema={Yup.object().shape({
                        email: Yup.string().email('Debe ser un correo electrónico válido').max(255).required('Email es requerido'),
                        password: Yup.string()
                            .min(8, 'Debe contener mínimo 8 caracteres')
                            .max(50, 'Debe contener máximo 50 caracteres')
                            .required('Password es requerido')
                    })}
                >
                    {({ errors, handleBlur, handleChange, handleSubmit, touched, values, status }) => (
                        <form noValidate onSubmit={handleSubmit}>
                            <FormControl error={Boolean(touched.email && errors.email)}>
                                <FormLabel>Correo electrónico</FormLabel>
                                <Input
                                    value={values.email}
                                    name="email"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    type="email"
                                    placeholder="johndoe@email.com"
                                    disabled={btnDisabled}
                                />
                                {touched.email && errors.email && (
                                    <FormHelperText>
                                        <InfoOutlined />
                                        {errors.email}
                                    </FormHelperText>
                                )}
                            </FormControl>
                            <FormControl sx={{ marginTop: 1 }} error={Boolean(touched.password && errors.password)}>
                                <FormLabel>Contraseña</FormLabel>
                                <Input
                                    value={values.password}
                                    name="password"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    type="password"
                                    placeholder="password"
                                    disabled={btnDisabled}
                                />
                                {touched.password && errors.password && (
                                    <FormHelperText>
                                        <InfoOutlined />
                                        {errors.password}
                                    </FormHelperText>
                                )}
                            </FormControl>

                            <Button type="submit" sx={{ mt: 1, mb: 2 }} color="danger" disabled={btnDisabled}>
                                Iniciar sesión
                            </Button>

                            {status && <Alert color="warning">{status}</Alert>}
                        </form>
                    )}
                </Formik>
            </Sheet>
        </Sheet>
    )
}

export default LoginPage
