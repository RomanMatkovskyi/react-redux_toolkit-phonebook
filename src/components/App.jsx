import Form from './form/form';
import Contacts from './contacts/contacts';
import Filter from './filter/filter';
import { useSelector } from 'react-redux';

const App = () => {
  let contacts = useSelector(state => state.contacts);

  return (
    <>
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      <Contacts data={contacts} />
    </>
  );
};

export default App;
