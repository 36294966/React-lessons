import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
    backgroundColor: 'red',
};

const backgroundSlice = createSlice({
    name: 'background',
    initialState,
    reducers: {
        setBackgroundColor: (state, action) => {
            state.backgroundColor = action.payload;
        },
    },
});

export const { setBackgroundColor } = backgroundSlice.actions;

export const store = configureStore({
    reducer: {
        background: backgroundSlice.reducer,
    },
});
