import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'Cart',
    initialState: {
        products: [],
    },
    reducers: {
        addProducts: (state, action) => {
            state.products.push(action.payload)
        },
        removeItems: (state, action) => {
            state.products = state.products.filter(product => product.id !== action.payload);
        }
    }
});

export const actions = cartSlice.actions;
export const cartReducer = cartSlice.reducer;