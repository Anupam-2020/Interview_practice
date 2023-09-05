import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        users: []
    },
    reducers: {
        addUser: (state, action) =>  {
            state.users.push(action.payload);
            // console.log(action.payload);
        },
        remove: (state, action) => {
            state.users.splice(action.payload, 1);
            // console.log(state.length);
        },
        deleteUsers: function(state, action) {
            // state.users.splice(0, state.users.length);
            state.users = []
        }
    }
});

// console.log(userSlice.actions);

export const actions = userSlice.actions;
export const userReducer = userSlice.reducer;