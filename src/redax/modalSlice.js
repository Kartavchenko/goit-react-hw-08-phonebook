import { createSlice } from '@reduxjs/toolkit';

const modalContact = createSlice({
    name: "modal",
    initialState: {},
    reducers: {
        editContact: (_, { payload }) => payload
    }
})

export const { editContact } = modalContact.actions;

export const modalReducer = modalContact.reducer;