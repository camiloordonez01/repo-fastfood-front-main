import Axios from 'axios';

const { REACT_APP_DEV_ENDPOINT_USERS } = process.env;

export const signIn = (data) =>
    Axios.post(`${REACT_APP_DEV_ENDPOINT_USERS}/users/signin`, data, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
