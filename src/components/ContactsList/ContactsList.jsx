import styles from './style.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../store/actions/contacts-actions';
import { selectVisibleContacts } from '../../store/selectors/contacts-selectors';
import { selectFilterContacts } from '../../store/selectors/filters-selectors';

const ContactsList = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilterContacts);
  const contacts = useSelector(state => selectVisibleContacts(state, filter));

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

export default ContactsList;
