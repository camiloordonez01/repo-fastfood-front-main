import Axios from 'axios'

const { REACT_APP_DEV_ENDPOINT_USERS } = process.env

export interface signInRequest {
    email: string
    password: string
}
export const signIn = (data: signInRequest) =>
    Axios.post(`${REACT_APP_DEV_ENDPOINT_USERS}/login`, data, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
