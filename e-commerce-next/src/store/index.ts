import { configureStore } from "@reduxjs/toolkit";
import { setupListeners} from "@reduxjs/toolkit/query";
import tokenReducer from "./app/auth/token";
import { loginApi } from "@/services/auth";

export const store = configureStore({
  reducer: {
    tokenState: tokenReducer,
    [loginApi.reducerPath]: loginApi.reducer
  },
  middleware:(getDefaultMiddleware)=> getDefaultMiddleware().concat(loginApi.middleware)
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch =typeof store.dispatch