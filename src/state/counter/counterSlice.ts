import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

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
        },
    },
    extraReducers: (builder) => {
        builder.addCase(
            incrementAsync.fulfilled,
            (state, action: PayloadAction<number>) => {
                state.value += action.payload;
            }
        )
    }
});

export const incrementAsync = createAsyncThunk(
    "counter/incrementAsync",
    async(amount: number) => {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        return amount;
    }
)

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;