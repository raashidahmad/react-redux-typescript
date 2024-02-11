import { createSlice } from "@reduxjs/toolkit";

interface counterState {
    value: number;
    square: number;
}

const initialState: counterState = {
    value: 0,
    square: 0
};

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
            state.square = (state.value * state.value);
        },
        decrement: (state) => {
            state.value -= 1;
            state.square = (state.square - 10);
        }
    }
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;