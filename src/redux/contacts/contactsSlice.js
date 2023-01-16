import { createSlice } from '@reduxjs/toolkit';

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
    // Виконається в момент старту HTTP-запиту
    fetchingInProgress(state) {
      state.isLoading = true;
    },
    // Виконається якщо HTTP-запит завершився успішно
    fetchingSuccess(state, action) {
      state.isLoading = false;
      state.error = null;
      state.contacts = action.payload;
    },
    // Виконається якщо HTTP-запит завершився з помилкою
    fetchingError(state, action) {
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
