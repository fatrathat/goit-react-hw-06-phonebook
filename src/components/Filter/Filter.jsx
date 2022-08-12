import styles from './style.module.css';
// import PropTypes from 'prop-types';

const Filter = props => {
  const changeHandler = e => {
    const { value } = e.target;

    props.onFilterContacts(value);
  };

  return (
    <label>
      Find contacts by name
      <input
        className={styles.InputFilter}
        name="filter"
        type="text"
        onChange={changeHandler}
      ></input>
    </label>
  );
};

// Filter.propTypes = {
//   contacts: PropTypes.string.isRequired,
//   onFilterContacts: PropTypes.func.isRequired,
// };

export default Filter;
