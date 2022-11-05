import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    editContact: null,
    isOpen: false,
}

const modalContact = createSlice({
    name: "modal",
    initialState,
    reducers: {
        editContact: (state, actions) => {state.editContact = actions.payload},
    }
})

export const { editContact } = modalContact.actions;

export const modalReducer = modalContact.reducer;