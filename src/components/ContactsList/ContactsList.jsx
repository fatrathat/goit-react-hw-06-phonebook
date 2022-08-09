import styles from './style.module.css';
import PropTypes from 'prop-types';

const ContactsList = props => (
  <ul>
    {props.contacts.map(contact => {
      return (
        <li className={styles.FilterItem} key={contact.id}>
          {contact.name}: {contact.number}
          <button
            name="delete"
            type="text"
            onClick={() => props.onDeleteContact(contact.id)}
          >
            delete
          </button>
        </li>
      );
    })}
  </ul>
);

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};

export default ContactsList;
