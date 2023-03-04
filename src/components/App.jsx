import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';
import { useState, useEffect } from 'react';

export const App = () => {
  const [contacts, setContacts] = useState(
    () =>
      JSON.parse(window.localStorage.getItem('contacts')) ?? [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ]
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  });

  const addContact = ({ name, number }) => {
    const newContact = { name, number, id: nanoid() };
    const isExist = contacts.find(
      contact =>
        contact.name.toLowerCase() === name.toLowerCase() ||
        contact.number === number
    );

    isExist
      ? alert(`Contact with name ${name} and number ${number} already exists`)
      : setContacts([...contacts, newContact]);
  };

  const filterContacts = event => {
    const searchValue = event.target.value.trim();
    setFilter(searchValue);
  };

  const getFilteredContacts = () => {
    const normalisedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalisedFilter)
    );
  };

  const deleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '30',
        paddingBottom: '20px',
        paddingTop: '20px',
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={filterContacts} />
      <ContactList
        contactList={getFilteredContacts}
        deleteContact={deleteContact}
      />
    </div>
  );
};
