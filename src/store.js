import { combineReducers, configureStore } from "@reduxjs/toolkit"
import authReducer from "./features/auth/authSlice";
import transactionsReducer from "./features/transactions/transactionsSlice";


export const store = configureStore({
    reducer: combineReducers({
        auth: authReducer,
        transactions: transactionsReducer,
    })
});