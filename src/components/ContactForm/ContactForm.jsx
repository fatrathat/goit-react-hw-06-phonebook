import styles from './style.module.css';

import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { useState } from 'react';

const state = {
  name: '',
  number: '',
};

const ContactForm = props => {
  const [states, setStates] = useState(state);

  const changeHandler = e => {
    const { name, value } = e.target;

    setStates(prev => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const submitHandler = e => {
    e.preventDefault();
    props.onAddContacts({ ...states, id: nanoid() });
    e.target.reset();
  };

  return (
    <div className={styles.ContactForm}>
      <form onSubmit={submitHandler}>
        <div className={styles.ContactForm__controls}>
          <label>
            Name
            <input
              className={styles.ContactForm__input}
              onChange={changeHandler}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <div className="ContactForm__control">
            <label>
              Number
              <input
                className={styles.ContactForm__input}
                onChange={changeHandler}
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
              />
            </label>
          </div>
          <button type="submit">Add contact</button>
        </div>
      </form>
    </div>
  );
};

ContactForm.propTypes = {
  states: PropTypes.shape({
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
      })
    ),
  }),
};

export default ContactForm;
