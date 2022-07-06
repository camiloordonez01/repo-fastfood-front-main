import Axios from 'axios'

const { ENDPOINT_USERS } = process.env

export const signIn = (data: any) =>
    Axios.post(`${ENDPOINT_USERS}/users/signin`, data, {
        headers: {
            'Content-Type': 'application/json',
        },
    })

export const signUp = (data: any) =>
    Axios.post(`${ENDPOINT_USERS}/users/signup`, data, {
        headers: {
            'Content-Type': 'application/json',
        },
    })

export const verify = (data: any) =>
    Axios.post(`${ENDPOINT_USERS}/users/verify`, data, {
        headers: {
            'Content-Type': 'application/json',
        },
    })

export const resendCode = (email: string) =>
    Axios.post(`${ENDPOINT_USERS}/users/resendcode`, {
        email
    }, {
        headers: {
            'Content-Type': 'application/json',
        },
    })
