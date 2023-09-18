import { useState, useEffect, useRef } from 'react';
import Form from './form/form';
import Contacts from './contacts/contacts';
import Filter from './filter/filter';
import { nanoid } from 'nanoid';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');
  const isFirstRender = useRef(true);

  useEffect(() => {
    let savedContacts = localStorage.getItem('Contacts');
    if (savedContacts) {
      setContacts(JSON.parse(savedContacts));
    }
  }, []);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    let newContacts = JSON.stringify(contacts);
    localStorage.setItem('Contacts', newContacts);
  }, [contacts]);

  const handleInputChange = event => {
    setFilter(event.target.value);
  };

  const handleSubmitForm = data => {
    let contactExists = false;
    contacts.forEach(contact => {
      if (contact.name.toLowerCase() === data.name.toLowerCase()) {
        contactExists = true;
        alert('This contact is already in your list');
      }
    });
    if (!contactExists) {
      const { name, number } = data;
      const newContact = { id: nanoid(), name, number };
      setContacts(prevContacts => [...prevContacts, newContact]);
    }
  };

  const deleteContactHandler = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  const normalizedFilter = filter.toLowerCase();
  const filteredList = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
  return (
    <>
      <h1>Phonebook</h1>
      <Form handleSubmitForm={handleSubmitForm} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={handleInputChange} />
      <Contacts data={filteredList} onDelete={deleteContactHandler} />
    </>
  );
};

export default App;
