import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { StatusCode } from '../util/statusCode';


const productSlice = createSlice({
    name:"Products",
    initialState: {
        data:[],
        loading: StatusCode.IDLE
    },
    reducers: {
        // fetchProducts: (state, actions) => {
        //     state.data = actions.payload
        // }
    },
    extraReducers: (builder) => {
        builder
        .addCase(getProducts.fulfilled, (state, action) => {
            state.data = action.payload
            state.loading = StatusCode.IDLE;
        })
        .addCase(getProducts.pending, (state, action) => {
            // state.loading = action.payload;
            state.loading = StatusCode.LOADING;
        })
        .addCase(getProducts.rejected, (state, action) => {
            state.loading = StatusCode.ERROR;
        })
    }
})

export const actions = productSlice.actions;
export const productReducer = productSlice.reducer;

export const getProducts =  createAsyncThunk('products/get', async () => {
    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json();
    return data
});


// export function getProducts() {
//     return async function getProductsThunk(dispatch, getState) {
//         const response = await fetch('https://fakestoreapi.com/products')
//         const data = await response.json();
//         dispatch(actions.fetchProducts(data))
//     }
// }