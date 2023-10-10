import { configureStore } from '@reduxjs/toolkit';

// Reducers
import auth from './slices/auth/authSlice';
import customizationReducer from './customizationReducer';

const getDataLogin = () => {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');
    const expirationDate = localStorage.getItem('expirationDate');
    const uidUser = localStorage.getItem('uidUser');
    let companies = localStorage.getItem('companies');
    const firstName = localStorage.getItem('firstName');
    const lastName = localStorage.getItem('lastName');

    companies = companies ? JSON.parse(companies) : null;
    return { auth: { accessToken, refreshToken, expirationDate, uidUser, companies, firstName, lastName } };
};

export default configureStore({
    preloadedState: getDataLogin(),
    reducer: {
        auth,
        customization: customizationReducer
    }
});
