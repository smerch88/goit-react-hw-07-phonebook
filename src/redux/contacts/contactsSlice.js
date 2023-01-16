import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [
    { name: 'Arsenii', number: '380681648123', id: 'PMGiyvcatsG-XcVJw1bAk' },
  ],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  reducers: {
    removeContact: (state, action) => {
      state.contacts = state.contacts.filter(c => c.id !== action.payload);
    },
    addContact: (state, action) => {
      state.contacts = [action.payload, ...state.contacts];
    },
  },
});

export const { removeContact, addContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
