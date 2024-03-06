import { configureStore } from "@reduxjs/toolkit";
import { setupListeners} from "@reduxjs/toolkit/query";
import tokenReducer from "./app/auth/token";

export const store = configureStore({
  reducer: {
    tokenState: tokenReducer,
  },
  middleware:(getDefaultMiddleware)=> getDefaultMiddleware().concat()
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch =typeof store.dispatch