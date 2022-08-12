import styles from './style.module.css';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../store/actions/contacts-actions';
import { selectAllContacts } from '../../store/selectors/contacts-selectors';
// import { selectFilterContacts } from '../../store/selectors/filters-selectors';

const ContactsList = () => {
  const dispatch = useDispatch();
  // const filter = useSelector(selectFilterContacts);
  const contacts = useSelector(selectAllContacts);

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
