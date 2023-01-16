import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts } from 'redux/operations';

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
  reducers: {
    removeContact: (state, action) => {
      state.contacts = state.contacts.filter(c => c.id !== action.payload);
    },
    addContact: (state, action) => {
      state.contacts = [action.payload, ...state.contacts];
    },
  },
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
  },
});

export const {
  removeContact,
  addContact,
  fetchingInProgress,
  fetchingSuccess,
  fetchingError,
} = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
