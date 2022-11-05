import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {url} from "./api";
import jwtDecode from "jwt-decode"

const initialState = {
    token: localStorage.getItem("token"),
    name: "",
    email:"",
    _id:"",
    registerStatus: "",
    registerError: "",
    loginStatus:"",
    loginError:"",
    userLoaded:false,
}


export const registerUser = createAsyncThunk(
    "auth/registerUser",
    async (values, {rejectWithValue}) => {
        try{
            const token = await axios.post(`${url}/register`, {
             name: values.name,
             email:values.email,
             password: values.password,
            });
        localStorage.setItem("token", token.data)
        return token.data
        
    } catch(err){
        console.log (err.response.data);
        return rejectWithValue(err.response.data)
        }
    }
)

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        
       
      
    },
});
export default authSlice.reducer;