import { createAsyncThunk } from '@reduxjs/toolkit';

import { signIn } from '../../../services/users';

export const login = createAsyncThunk('users/signIn', async (data, { rejectWithValue }) => {
    try {
        const result = await signIn(data);

        const {
            data: { result: ResultData }
        } = result;

        localStorage.setItem('accessToken', ResultData.AccessToken);
        localStorage.setItem('refreshToken', ResultData.RefreshToken);
        localStorage.setItem('expirationDate', ResultData.Expiration);
        localStorage.setItem('uidUser', ResultData.UidUser);
        localStorage.setItem('companies', JSON.stringify(ResultData.Companies));
        localStorage.setItem('firstName', ResultData.userData.firstName);
        localStorage.setItem('lastName', ResultData.userData.lastName);

        return ResultData;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});
