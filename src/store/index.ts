import { configureStore } from '@reduxjs/toolkit'

import { authReducer, messageReducer, varsReducer } from './slices'
import { AuthState } from './slices/auth'

export interface Reducers {
    auth: AuthState
}
export const store = configureStore({
    reducer: {
        auth: authReducer,
        message: messageReducer,
        vars: varsReducer
    }
})

export type AppDispatch = typeof store.dispatch
