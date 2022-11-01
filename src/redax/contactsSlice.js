import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, removeContact } from './operation';

const initialState = {
    items: [],
    isLoading: false,
    error: null,
}

const phoneContacts = createSlice({
  name: "contacts", 
  initialState,
  extraReducers: {
    [fetchContacts.pending] (state)   {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled] (state, {payload}) {
      state.isLoading = false;
      state.items = payload;
    },
    [fetchContacts.rejected] (state, {payload})  {
      state.isLoading = false;
      state.error = payload;
    },
    [addContact.pending](state) {
      state.isLoading = true;
    },
     [addContact.fulfilled](state, action) {
      state.items.push(action.payload)
    },
    [addContact.rejected] (state, {payload})  {
      state.isLoading = false;
      state.error = payload;
    },
    [removeContact.pending] (state)  {
      state.isLoading = true;
    },
    [removeContact.fulfilled] (state, {payload})  {
      state.isLoading = false;
      state.items = state.items.filter(item => item.id !== payload);
    },
    [removeContact.rejected] (state, {payload})  {
      state.isLoading = false;
      state.error = payload;
    },
  }
}) 

export const reduserContacts = phoneContacts.reducer

