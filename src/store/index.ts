import { configureStore } from '@reduxjs/toolkit'

import { authReducer, messageReducer, varsReducer } from './slices'
import { AuthState } from './slices/auth'
import { VarsState } from './slices/vars'

export interface Reducers {
    auth: AuthState
    vars: VarsState
}
export const store = configureStore({
    reducer: {
        auth: authReducer,
        message: messageReducer,
        vars: varsReducer
    }
})

export type AppDispatch = typeof store.dispatch
