import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [],
    loading: false,
    error: null
}

const userSlice = createSlice({
    name: 'User',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
        .addCase(getUsers.fulfilled, (state, action) => {
            state.users = action.payload;
        })
        .addCase(getUsers.pending, (state, action) => {
            state.loading = true
        })
        .addCase(getUsers.rejected, (state, action) => {
            state.loading = action.payload
        })
        .addCase(createUser.fulfilled, (state, action) => {
            state.users.push(action.payload);
        })
        .addCase(createUser.pending, (state, action) => {
            state.loading = true
        })
        .addCase(createUser.rejected, (state, action) => {
            state.error = action.error
        })
    },
});

export const actions = userSlice.actions;
export const userReducer = userSlice.reducer;

// GET USERS
export const getUsers = createAsyncThunk('User/get', async (_, {rejectWithValue}) => {
    try{
        const response = await fetch('https://64f8223d824680fd217f26b5.mockapi.io/redux_crud')
        const users = await response.json();
        return users;
    } catch(error) {
        // console.log(error)
        return rejectWithValue(error)
    }
});

// POST USER
export const createUser = createAsyncThunk('User/post', async (data, {rejectWithValue}) => {
    try {
            const response = await fetch('https://64f8223d824680fd217f26b5.mockapi.io/redux_crud', {
                method: 'POST',
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })

            const result = await response.json();
            return result;

    } catch(error) {
        return rejectWithValue(error)
    }
});

// UPDATE
