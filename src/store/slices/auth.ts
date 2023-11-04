import { createSlice } from '@reduxjs/toolkit'

import { login, logout,isLogged } from '../thunks/auth'

export interface AuthState {
    token: string | null
    name: string | null
    lastName: string | null
    isLoggedIn?: boolean
}
const initialState: AuthState = {
    token: null,
    name: null,
    lastName: null
}
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(login.fulfilled, (state, action) => {
            state.isLoggedIn = true
            state.token = action.payload.token
            state.name = action.payload.name
            state.lastName = action.payload.lastName
        })

        builder.addCase(login.rejected, (state) => {
            state.isLoggedIn = false
            state.token = null
            state.name = null
            state.lastName = null
        })

        builder.addCase(isLogged.fulfilled, (state, action) => {
            state.isLoggedIn = action.payload
        })

        builder.addCase(logout.fulfilled, (state, action) => {
            state.isLoggedIn = false
        })
    }
})

export default authSlice.reducer
