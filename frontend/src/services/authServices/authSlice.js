import { createSlice } from "@reduxjs/toolkit";
import { loginUser, registerUser } from "./authThunk";
import { getAuth, clearAuth } from "../../utils/storage";

const auth = getAuth();

const initialState = {
  token: auth?.token || null,
  isAuthenticated: !!auth,
  loading: false,
  error: null,
  success: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.token = null;
      state.isAuthenticated = false;
      clearAuth();
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(registerUser.fulfilled, (state, action) => {
        state.success = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;