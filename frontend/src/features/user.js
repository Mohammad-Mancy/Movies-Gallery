import { createSlice } from '@reduxjs/toolkit';
import { reactLocalStorage } from 'reactjs-localstorage'


const initialStateValue = reactLocalStorage.get('token') || "" ;

export const userSlice = createSlice({
    name: "token",
    initialState: {value : initialStateValue},
    reducers: {
        setToken: (state, action) => {
            state.value = action.payload
        },
        clearToken: (state) => {
            state.value = ""
        }
    }
})

export const { setToken, clearToken } = userSlice.actions;
export default userSlice.reducer