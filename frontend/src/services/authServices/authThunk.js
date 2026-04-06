import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginAPI, registerAPI } from "../auth.api.js";
import { setAuth } from "../../utils/storage.js";

// LOGIN
export const loginUser = createAsyncThunk(
  "auth/login",
  async (formData, thunkAPI) => {
    try {
      const res = await loginAPI(formData);

      const token = res.data.data.token;
      const expiresIn = res.data.data.expiresIn || 3600;

      setAuth(token, expiresIn);

      return token;
    } catch (err) {
      return thunkAPI.rejectWithValue(
        err.response?.data?.message || "Login failed"
      );
    }
  }
);

// REGISTER
export const registerUser = createAsyncThunk(
  "auth/register",
  async (formData, thunkAPI) => {
    try {
      const res = await registerAPI(formData);
      return res.data.message;
    } catch (err) {
      return thunkAPI.rejectWithValue(
        err.response?.data?.message || "Register failed"
      );
    }
  }
);