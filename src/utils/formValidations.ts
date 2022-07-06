import { RegisterOptions } from 'react-hook-form'
import { regexEmail, regexPassword, regexCellPhone } from './utils'

export const requiredValidation: RegisterOptions = {
    required: 'Campo requerido',
}

export const emailValidationObj: RegisterOptions = {
    pattern: {
        value: regexEmail,
        message: 'Correo inválido',
    },
    maxLength: {
        value: 50,
        message: 'Debe contener máximo 50 caracteres',
    },
}

export const passwordValidationObj: RegisterOptions = {
    pattern: {
        value: regexPassword,
        message: 'La contraseña debe tener un mínimo de 8 caracteres y debe contener al menos un letra, un numero, una mayúscula y algunos de estos caracteres !@#$%^&*',
    },
    minLength: {
        value: 8,
        message: 'Debe contener mínimo 8 caracteres',
    },
    maxLength: {
        value: 50,
        message: 'Debe contener máximo 50 caracteres',
    },
}

export const cellPhoneValidationObj: RegisterOptions = {
    pattern: {
        value: regexCellPhone,
        message: 'Teléfono incorrecto',
    }
}