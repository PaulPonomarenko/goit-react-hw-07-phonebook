import { createSlice } from '@reduxjs/toolkit';
import defaultContact from '../contacts.json';
import { nanoid } from 'nanoid';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: defaultContact,
  },
  reducers: {
    addContact: {
      reducer(state, action) {
        const findContact = state.contacts.find(
          contact => contact.name === action.payload.name
        );
        if (findContact) {
          return alert(`Ooops, ${action.payload.name} is already in contacts`);
        } else {
          state.contacts = [action.payload, ...state.contacts];
        }
      },
      prepare(name, number) {
        return {
          payload: {
            name,
            number,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactReducer = contactsSlice.reducer;
