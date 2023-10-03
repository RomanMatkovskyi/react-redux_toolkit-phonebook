import { useState, useEffect, useRef } from 'react';
import Form from './form/form';
import Contacts from './contacts/contacts';
import Filter from './filter/filter';
import { useSelector, useDispatch } from 'react-redux';
import { addNumber } from 'redux/action';

const App = () => {
  const [filter, setFilter] = useState('');
  const isFirstRender = useRef(true);

  let contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  useEffect(() => {
    let savedContacts = localStorage.getItem('Contacts');
    let parsedData = JSON.parse(savedContacts);
    if (savedContacts) {
      // dispatch(addNumber());
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

  return (
    <>
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={handleInputChange} />
      <Contacts data={contacts} />
    </>
  );
};

export default App;
