import { configureStore } from '@reduxjs/toolkit'

import { authReducer, messageReducer } from './slices'
import { AuthState } from './slices/auth'

export interface Reducers {
    auth: AuthState
}
export const store = configureStore({
    reducer: {
        auth: authReducer,
        message: messageReducer
    }
})

export type AppDispatch = typeof store.dispatch
