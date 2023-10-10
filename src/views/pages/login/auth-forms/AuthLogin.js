import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// store
import { login } from 'store/slices/auth/authThunks';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Button, FormControl, FormHelperText, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

// project imports
import AnimateButton from 'ui-component/extended/AnimateButton';

// assets
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import { DASHBOARD } from 'constants/routeConstants';

const Login = ({ ...others }) => {
    const theme = useTheme();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [btnDisabled, setBtnDisabled] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleSubmit = async (values, { setErrors, setStatus, setSubmitting }) => {
        try {
            setBtnDisabled(true);
            await dispatch(login(values)).unwrap();
            setStatus({ success: true });
            setSubmitting(false);

            navigate(DASHBOARD);
        } catch (error) {
            setBtnDisabled(false);
            setStatus({ success: false });
            setErrors({ submit: error.message[0] });
            setSubmitting(false);
        }
    };

    return (
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
            {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                <form noValidate onSubmit={handleSubmit} {...others}>
                    <FormControl fullWidth error={Boolean(touched.email && errors.email)} sx={{ ...theme.typography.customInput }}>
                        <InputLabel htmlFor="outlined-adornment-email-login">Correo electrónico</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-email-login"
                            type="email"
                            value={values.email}
                            name="email"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            label="Correo electrónico"
                            inputProps={{}}
                            disabled={btnDisabled}
                        />
                        {touched.email && errors.email && (
                            <FormHelperText error id="standard-weight-helper-text-email-login">
                                {errors.email}
                            </FormHelperText>
                        )}
                    </FormControl>

                    <FormControl fullWidth error={Boolean(touched.password && errors.password)} sx={{ ...theme.typography.customInput }}>
                        <InputLabel htmlFor="outlined-adornment-password-login">Contraseña</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password-login"
                            type={showPassword ? 'text' : 'password'}
                            value={values.password}
                            name="password"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                        size="large"
                                    >
                                        {showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Password"
                            inputProps={{}}
                            disabled={btnDisabled}
                        />
                        {touched.password && errors.password && (
                            <FormHelperText error id="standard-weight-helper-text-password-login">
                                {errors.password}
                            </FormHelperText>
                        )}
                    </FormControl>
                    {errors.submit && (
                        <Box sx={{ mt: 3 }}>
                            <FormHelperText error>{errors.submit}</FormHelperText>
                        </Box>
                    )}

                    <Box sx={{ mt: 2 }}>
                        <AnimateButton>
                            <Button
                                disableElevation
                                disabled={isSubmitting}
                                fullWidth
                                size="large"
                                type="submit"
                                variant="contained"
                                color="secondary"
                            >
                                Iniciar sesión
                            </Button>
                        </AnimateButton>
                    </Box>
                </form>
            )}
        </Formik>
    );
};

export default Login;
