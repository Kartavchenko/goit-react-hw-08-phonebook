import { createSlice } from '@reduxjs/toolkit';
import { userRegister, userLoggedIn, userLogOut, fetchCurrentUser } from 'redax/operation';

const initialState = {
    body: { name: null, email: null, password: null },
    token: null,
    isLoggedIn: false,
    error: null,
}

const userAccount = createSlice({
    name: "user",
    initialState,
    extraReducers: {
        [userRegister.fulfilled](state, action) {
            state.body = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        },
        [userLoggedIn.fulfilled](state, action) {
            state.body = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        },
        [userLoggedIn.rejected](state) {
            state.error = null;
        },
        [userLogOut.fulfilled](state) {
            state.body = { name: null, email: null, password: null };
            state.token = null;
            state.isLoggedIn = false;
        },
        [fetchCurrentUser.pending](state) {
            state.isLoggedIn = true;
        },
        [fetchCurrentUser.fulfilled](state, action) {
            state.body = action.payload;
            state.isLoggedIn = true;
        },
        [fetchCurrentUser.rejected](state) {
            state.isLoggedIn = false;
        },
    }
})

export const reduserUser = userAccount.reducer