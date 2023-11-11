import { createSlice } from '@reduxjs/toolkit'

export interface VarsState {
    title: string
}
const initialState: VarsState = {
    title: 'Panel'
}

const varsSlice = createSlice({
    name: 'vars',
    initialState,
    reducers: {}
})

export default varsSlice.reducer
