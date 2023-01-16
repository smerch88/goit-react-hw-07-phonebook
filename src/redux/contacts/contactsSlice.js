import { createSlice } from '@reduxjs/toolkit';
import { addContact, fetchContacts, removeContact } from 'redux/operations';

const initialState = {
  contacts: [
    { name: 'Arsenii', number: '380681648123', id: 'PMGiyvcatsG-XcVJw1bAk' },
  ],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  extraReducers: {
    [fetchContacts.pending](state) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contacts = action.payload;
    },
    [fetchContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contacts.push(action.payload);
    },
    [addContact.rejected](state, action) {
      state.isLoading = false;
      state.contacts = action.payload;
    },
    [removeContact.pending](state) {
      state.isLoading = true;
    },
    [removeContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.contacts.findIndex(
        contact => contact.id === action.payload.id
      );
      state.contacts.splice(index, 1);
    },
    [removeContact.rejected](state, action) {
      state.isLoading = false;
      state.contacts = action.payload;
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
