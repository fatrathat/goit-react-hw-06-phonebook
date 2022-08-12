import styles from './style.module.css';

import { useDispatch } from 'react-redux';
import { setFilter } from '../../store/actions/filters-actions';

const Filter = () => {
  const dispatch = useDispatch();

  const changeHandler = e => {
    const { value } = e.target;

    dispatch(setFilter(value));
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

export default Filter;
