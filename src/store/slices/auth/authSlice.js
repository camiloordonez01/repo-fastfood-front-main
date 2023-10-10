import { createSlice } from '@reduxjs/toolkit';

// Thunks
import { login } from './authThunks';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        uidUser: null,
        accessToken: null,
        refreshToken: null,
        expirationDate: null,
        companies: null,
        firstName: null,
        lastName: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(login.fulfilled, (state, action) => {
            state.accessToken = action.payload.AccessToken;
            state.uidUser = action.payload.UidUser;
            state.refreshToken = action.payload.RefreshToken;
            state.expirationDate = action.payload.Expiration;
            state.companies = action.payload.Companies;
            state.firstName = action.payload.userData.firstName;
            state.lastName = action.payload.userData.lastName;
        });
    }
});

export default authSlice.reducer;
