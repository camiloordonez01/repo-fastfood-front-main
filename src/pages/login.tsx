import React, { FC } from 'react'
import { Sheet, Typography, FormControl, FormLabel, Input, Button } from '@mui/joy'

import logo from '../assets/images/logo.png'

const LoginPage: FC = () => {
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
                <FormControl>
                    <FormLabel>Correo</FormLabel>
                    <Input
                        // html input attribute
                        name="email"
                        type="email"
                        placeholder="johndoe@email.com"
                    />
                </FormControl>
                <FormControl>
                    <FormLabel>Contraseña</FormLabel>
                    <Input
                        // html input attribute
                        name="password"
                        type="password"
                        placeholder="password"
                    />
                </FormControl>

                <Button sx={{ mt: 1 /* margin top */ }} color="danger">
                    Iniciar sesión
                </Button>
            </Sheet>
        </Sheet>
    )
}

export default LoginPage
