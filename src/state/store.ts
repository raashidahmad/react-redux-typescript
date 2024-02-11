import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer
    }
});

export type CounterState = ReturnType<typeof store.getState>;
export type CounterDispatch = typeof store.dispatch;