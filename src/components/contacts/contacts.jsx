import s from './contacts.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { deleteNumber } from 'redux/contactSlice';
import PropTypes from 'prop-types';

const Contacts = () => {
  const value = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();
  const deleteContact = id => dispatch(deleteNumber(id));

  const normalizedFilter = filter.toLowerCase();
  const filteredList = value.filter(contact =>
    contact.nickname.toLowerCase().includes(normalizedFilter)
  );

  return (
    <>
      {value.length === 0 ? (
        <p className={s.nocontacts}>No contacts found</p>
      ) : (
        <ul className={s.contactlist}>
          {filteredList.map(({ id, nickname, number }) => (
            <li key={id} id={id} className={s.contactitem}>
              <p>
                {nickname}: {number}
              </p>
              <button
                type="button"
                className={s.deletebutton}
                onClick={() => deleteContact(id)}
              >
                x
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

Contacts.propTypes = {
  data: PropTypes.array,
  onDelete: PropTypes.func,
};

export default Contacts;
