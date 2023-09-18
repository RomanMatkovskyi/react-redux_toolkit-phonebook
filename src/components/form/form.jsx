import { useState } from 'react';
import s from './form.module.css';
import PropTypes from 'prop-types';

const Form = ({ handleSubmitForm }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInputChange = event => {
    switch (event.target.name) {
      case 'name':
        setName(event.target.value);
        break;
      case 'number':
        setNumber(event.target.value);
        break;
      default:
        return;
    }
  };

  const submitForm = event => {
    event.preventDefault();

    handleSubmitForm({ name, number });
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={submitForm} className={s.form}>
      <label htmlFor="nameInput" className={s.nameinput}>
        Name
      </label>
      <input
        type="text"
        name="name"
        value={name}
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={handleInputChange}
      />
      <label htmlFor="phoneInput">Number</label>
      <input
        type="tel"
        name="number"
        id="phoneInput"
        onChange={handleInputChange}
        value={number}
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button type="submit" className={s.addbutton}>
        Add contact
      </button>
    </form>
  );
};

Form.propTypes = {
  handleSubmitForm: PropTypes.func,
};

export default Form;
