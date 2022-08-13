import styles from './style.module.css';

import { nanoid } from 'nanoid';

import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../store/actions/contacts-actions';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);

  const submitHandler = e => {
    e.preventDefault();
    const name = e.target.name.value;
    const number = e.target.number.value;

    if (contacts.find(el => el.name === name)) {
      alert(`${name} is already in contacts`);
    } else {
      dispatch(
        addContact({
          name: name,
          number: number,
          id: nanoid(),
        })
      );
    }
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

export default ContactForm;
