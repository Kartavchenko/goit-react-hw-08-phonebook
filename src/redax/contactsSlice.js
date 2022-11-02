import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, removeContact, patchContact } from './operation';
// import {editContact} from '../components/List/List'

const initialState = {
    items: [],
    isLoading: false,
    error: null,
    editForm: [],
}

const phoneContacts = createSlice({
  name: "contacts", 
  initialState,
  reducers: {
    editContact(state, { payload }) {
      state.editForm.push(payload)
    }
  },
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
     [addContact.fulfilled](state, {payload}) {
      state.items.push(payload)
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
    [patchContact.fulfilled] (state, {payload})  {
      state.isLoading = false;
      state.items.push(payload.data);
    },
  }
}) 

export const {editContact} = phoneContacts.actions

export const reduserContacts = phoneContacts.reducer

