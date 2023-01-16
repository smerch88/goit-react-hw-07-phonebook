import { ContactForm } from './Phonebook/ContactForm';
import { ContactList } from './Phonebook/ContactList/ContactList';
import { Filter } from './Phonebook/Filter/Filter';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, removeContact } from 'redux/contacts/contactsSlice';
import { setFilter } from 'redux/filter/filterSlice';
import { SimpleGrid } from '@mantine/core';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);

  const deleteUser = userId => {
    dispatch(removeContact(userId));
  };

  const addUser = data => {
    const newContact = {
      ...data,
      id: nanoid(),
    };
    if (contacts.filter(contact => contact.name === data.name).length) {
      alert(data.name + ' is already in contacts!');
    } else {
      dispatch(addContact(newContact));
    }
  };

  const setFilterValue = data => {
    dispatch(setFilter(data));
  };

  return (
    <>
      <SimpleGrid cols={1} spacing="xl">
        <h1>Phonebook</h1>
        <ContactForm addUser={addUser} />
        <h2>Contacts</h2>
        <Filter setFilterValue={setFilterValue} />
        <ContactList deleteUser={deleteUser} />
      </SimpleGrid>
    </>
  );
};
