import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'





export const fetchPizzas = createAsyncThunk(
    'pizza/fetchPizzasStatus',
    async (params) => {
        const { sortBy, order, category, search, currentPage } = params;
        const { data } = await axios.get(
            `https://659ef14f6ee7621d94dbc67c.mockapi.io/items?page=${currentPage}&limit=6&${category}&${search}&sortBy=${sortBy}&order=${order}`
        );
        return data;
    }
);


const initialState = {
    totalPrice: 0,
    items: [],
    status: 'loading',
};


const pizzaSlice = createSlice({
    name: 'pizza',
    initialState,
    reducers: {
        setItems(state, action) {
            state.items = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchPizzas.pending, (state) => {
            state.status = 'loading'; 
            state.items = [];
            })
            .addCase(fetchPizzas.fulfilled, (state, action) => {
                state.status = 'succeeded'; 
                state.items = action.payload;
                
            })
            .addCase(fetchPizzas.rejected, (state, action) => {
                state.status = 'failed'; 
                state.error = action.error.message;
            });

    },
});


export const { setItems } = pizzaSlice.actions;

export default pizzaSlice.reducer;