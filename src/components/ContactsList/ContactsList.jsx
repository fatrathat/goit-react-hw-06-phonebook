import styles from './style.module.css';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../store/store';
import { allContacts } from '../../store/store';

const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(allContacts);

  const deleteButtonHandler = id => {
    dispatch(deleteContact(id));
  };
  return (
    <ul>
      {contacts.map(contact => {
        return (
          <li className={styles.FilterItem} key={contact.id}>
            {contact.name}: {contact.number}
            <button
              name="delete"
              type="text"
              onClick={() => deleteButtonHandler(contact.id)}
            >
              delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};

export default ContactsList;
