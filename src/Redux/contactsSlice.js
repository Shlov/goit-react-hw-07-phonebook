import { createSlice, current } from "@reduxjs/toolkit";
import { fatchContacts, addContact, deleteContact } from "./operations";

const contactsInitialState = { 
  items: [],
  // isLoaling: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
}
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,

  extraReducers:{
    [fatchContacts.pending]: handlePending,
    [fatchContacts.fulfilled](state, action) {
      state.isLoaling = false;
      state.error = null;
      state.items = action.payload;
    },
    [fatchContacts.rejected]: handleRejected,
    [addContact.pending]: handlePending,
    [addContact.fulfilled](state, action) {
      state.isLoaling = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addContact.rejected]: handleRejected,
    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled](state, action) {
      state.isLoaling = false;
      state.error = null;
      state.items = state.items.filter((item) => item.id !== action.payload.id);
      // state.items.filter((item) => item.id !== action.payload.id);
    },
    [deleteContact.rejected]: handleRejected,
  },
});


export const contactsReducer = contactsSlice.reducer;

