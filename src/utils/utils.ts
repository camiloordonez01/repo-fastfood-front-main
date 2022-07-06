export const regexEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/

export const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/

export const regexCellPhone = /^\+[1-9]{1}[0-9]{3,14}$/

export const typeIdentificationData = [
    {
        label: 'Cédula de identidad (CI)',
        value: 'CI',
    },
    {
        label: 'Cédula de ciudadanía (CC)',
        value: 'CC',
    },
    {
        label: 'Tarjeta de identidad (TI)',
        value: 'TI',
    },
    {
        label: 'Tarjeta pasaporte (TP)',
        value: 'TP',
    },
    {
        label: 'Registro civil (RC)',
        value: 'RC',
    },
    {
        label: 'Cédula de extranjería (CE)',
        value: 'CE',
    },
    {
        label: 'Carné de identidad (CI)',
        value: 'CAI',
    },
    {
        label: 'Documento nacional de identidad (DNI)',
        value: 'DNI',
    },
    {
        label: 'Identificación (ID)',
        value: 'ID',
    },
]
