import { createAsyncThunk } from '@reduxjs/toolkit'
import { signIn, signInRequest } from '../../services/users'
import { LoginReturn } from '../types'

export const login = createAsyncThunk<LoginReturn, signInRequest>('users/signIn', async (data, { rejectWithValue }) => {
    try {
        const result = await signIn(data)

        const {
            data: { result: ResultData }
        } = result

        localStorage.setItem('token', ResultData.token)
        localStorage.setItem('name', ResultData.name)
        localStorage.setItem('lastName', ResultData.lastName)

        return ResultData
    } catch (error: any) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return rejectWithValue(message)
    }
})

export const isLogged = createAsyncThunk<boolean, void>('users/isLogged', async () => {
    const token = localStorage.getItem('token')
    const name = localStorage.getItem('name')
    const lastName = localStorage.getItem('lastName')

    if (token && name && lastName && token !== '' && name !== '' && lastName !== '') {
        return true
    }
    return false
})

export const logout = createAsyncThunk<void, void>('users/logout', async () => {
    localStorage.removeItem('token')
    localStorage.removeItem('name')
    localStorage.removeItem('lastName')
})
