import axios from "axios";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

export const getFetch = async () => {
    const data = await axios.get(`/contacts`);
    console.log(data)
    return data;
}

export const addToPhonebook = async(item) => {
    const {data} = await axios.post("/contacts", item);
    return data;
}

export const removePhoneNumber = async(id) => {
    const {data} = await axios.delete(`/contacts/${id}`);
    return data;
}