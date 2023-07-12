import { createSlice } from "@reduxjs/toolkit";
import { getCurrentUser, userLogin, userRegister } from "./authAction";

const token = localStorage.getItem("token")
  ? localStorage.getItem("token")
  : null;

const initialState = {
  loading: false,
  error: null,
  user: null,
  token,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builders) => {
    // LOGIN USERS
    builders.addCase(userLogin.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builders.addCase(userLogin.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.user = payload.user;
      state.token = payload.token;
    });
    builders.addCase(userLogin.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });

    // Register USERS
    builders.addCase(userRegister.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builders.addCase(userRegister.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.user = payload.user;
    });
    builders.addCase(userRegister.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });
    // GET CURRENT USERS
    builders.addCase(getCurrentUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builders.addCase(getCurrentUser.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.user = payload.user;
    });
    builders.addCase(getCurrentUser.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });
  },
});

export default authSlice;
