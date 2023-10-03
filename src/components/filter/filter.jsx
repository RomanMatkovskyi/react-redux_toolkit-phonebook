import s from './filter.module.css';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const filter = useSelector(state => state.filter);
  return (
    <>
      <p className={s.filtertitle}>Find contacts by name</p>
      <input
        type="text"
        name="filter"
        onChange={e => {
          dispatch(filterContacts(e.target.value));
        }}
      />
    </>
  );
};

export default Filter;

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
