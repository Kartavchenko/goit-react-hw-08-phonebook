import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import * as contactApi from "./shared";

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
            console.log(data)
            return data
        } catch (error) {
            return error;
        }
    }
);

export const fetchContacts = createAsyncThunk(
    "contacts/fetch",
    async (_, thunkApi) => {
        try {
            const data = await contactApi.getFetch();
            return data;
        } catch (error) {
            return thunkApi.rejectWithValue(error);
        }
    }
);

export const addContact = createAsyncThunk(
    "contacts/add",
    async (item, { rejectWithValue }) => {
        try {
            const data = await contactApi.addToPhonebook(item);
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
            await contactApi.removePhoneNumber(id)
            return id
        } catch (error) {
            return rejectWithValue(error)
        }
    }
);