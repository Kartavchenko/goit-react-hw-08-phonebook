import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const token = {
    set(token) {
        axios.defaults.headers.common['Authorization'] = `${token}`
    },
    unset() {
        axios.defaults.headers.common['Authorization'] = '';
    },
};

export const userRegister = createAsyncThunk(
    "user/register",
    async (credentials) => {
        try {
            const { data } = await axios.post('/users/signup', credentials);
            token.set(data.token)
            return data;
        } catch (error) {
            return error;
        }
    }
);

export const userLoggedIn = createAsyncThunk(
    "user/login",
    async (credentials) => {
        try {
            const { data } = await axios.post('/users/login', credentials);
            token.set(data.token)
            return data;
        } catch (error) {
            return error
        }
    }
);

export const userLogOut = createAsyncThunk(
    'user/logout',
    async (_, thunkApi) => {
        try {
            await axios.post('/users/logout');
            token.unset()
        } catch (error) {
            return thunkApi.rejectWithValue(error);
        }
    }
);

export const fetchCurrentUser = createAsyncThunk(
    'user/refresh',
    async (_, thunkApi) => {
        const state = thunkApi.getState();
        const persisterToken = state.user.token;
        if (persisterToken === null) {
            return thunkApi.rejectWithValue()
        }
        token.set(persisterToken)
        try {
            const { data } = await axios.get('/users/current');
            return data
        } catch (error) {
            return error;
        }
    }
);

export const fetchContacts = createAsyncThunk(
    "contacts/fetch",
    async (_, {rejectWithValue}) => {
        try {
            const { data } = await axios.get(`/contacts`);
            return data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const addContact = createAsyncThunk(
    "contacts/add",
    async (item, { rejectWithValue }) => {
        try {
            const { data } = await axios.post("/contacts", item);
            return data
        } catch (error) {
            return rejectWithValue(error)
        }
    }
);

export const removeContact = createAsyncThunk(
    "contacts/delete",
    async (id, { rejectWithValue }) => {
        try {
            await axios.delete(`/contacts/${id}`)
            return id
        } catch (error) {
            return rejectWithValue(error)
        }
    }
);

export const patchContact = createAsyncThunk(
    "contacts/patch",
    async (id, body, thunkApi) => {
        // const state = thunkApi.getState()
        // const changeContact = state.modal
        try {
            const { data } = await axios.patch(`/contacts/${id}`, body)
            console.log(data)
            return data
        } catch (error) {
            return thunkApi.rejectWithValue(error)
        }
    }
);