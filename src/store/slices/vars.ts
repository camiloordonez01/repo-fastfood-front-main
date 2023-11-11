import { createSlice } from '@reduxjs/toolkit'

export interface VarsState {
    title: string
}
const initialState: VarsState = {
    title: 'Panel'
}

export const varsSlice = createSlice({
    name: 'vars',
    initialState,
    reducers: {
        setTitle: (state, action) => {
            state.title = action.payload
        }
    }
})

const { reducer, actions } = varsSlice;

export const { setTitle } = actions
export default reducer
