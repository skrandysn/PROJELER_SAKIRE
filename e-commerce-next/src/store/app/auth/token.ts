import {PayloadAction, createSlice} from "@reduxjs/toolkit"
import { log } from "console"
import { act } from "react-dom/test-utils"

const initialState = {
  token: ""
}

export const tokenSlice = createSlice({
  initialState,
  name: "token",
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      console.log(action.payload);
      state.token = action.payload
      localStorage.setItem('token', state.token)
    }
  }
})

export default tokenSlice.reducer
export const {setToken}= tokenSlice.actions