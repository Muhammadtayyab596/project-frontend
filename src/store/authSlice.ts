import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { login } from "../services/authServices";

type User = {
  id: string;
  name: string;
};

type InitialStateProps = {
  isAuthenticate: boolean;
  user: any;
  loading: boolean;
  error: any;
};

type LoginData = {
  email: string;
  password: string;
};

const initialState: InitialStateProps = {
  isAuthenticate: false,
  user: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.isAuthenticate = false;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuthenticate = true;
        state.loading = false;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.isAuthenticate = false;
        console.log("action: ", action);
        state.error = action.error.message;
      });
  },
});

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (payload: LoginData) => {
    try {
      const response = await login(payload);
      if (response?.data?.token) {
        localStorage.setItem("ACCESS_TOKEN", response?.data?.token);
      }
      return response;
    } catch (error: any) {
      console.log("error slice: ", error);

      throw new Error(error?.response?.data?.message ?? "Something went wrong");
    }
  }
);

export default authSlice.reducer;
