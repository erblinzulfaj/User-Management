import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    items: [],
    searchQuery: "",
};

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        setUsers: (state, action) => {
            state.items = action.payload || [];
        },
        addUser: (state, action) => {
            state.items.unshift({...action.payload, id: Date.now()});
        },
        updateUser: (state, action) => {
            const {id, changes} = action.payload;
            const idx = state.items.findIndex(u => String(u.id) === String(id));
            if (idx !== -1) state.items[idx] = {...state.items[idx], ...changes};
        },
        deleteUser: (state, action) => {
            const id = action.payload;
            state.items = state.items.filter(u => String(u.id) !== String(id));
        },
        setSearch: (state, action) => {
            state.searchQuery = action.payload;
        },

    },
});

export const {setUsers, addUser, updateUser, deleteUser, setSearch} = usersSlice.actions;


export const selectUsers = (s) => s.users.items;
export const selectUserById = (s, id) => s.users.items.find(u => String(u.id) === String(id));
export const selectSearch = (state) => state.users.searchQuery;
export const selectFilteredUsers = (state) => {
    const q = state.users.searchQuery.toLowerCase();
    if (!q) return state.users.items;
    return state.users.items.filter(
        (u) =>
            u.name.toLowerCase().includes(q) ||
            u.email.toLowerCase().includes(q)
    );
};

export default usersSlice.reducer;
