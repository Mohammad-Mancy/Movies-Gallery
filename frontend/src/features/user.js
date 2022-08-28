import { createSlice } from '@reduxjs/toolkit';


const initialStateValue = ""

export const userSlice = createSlice({
    name: "token",
    initialState: {value : initialStateValue},
    reducers: {
        setToken: (state, action) => {
            state.value = action.payload
        },
        clearToken: (state) => {
            state.value = initialStateValue
        }
    }
})

export const { setToken, clearToken } = userSlice.actions;
export default userSlice.reducer