import styles from './style.module.css';

import ContactForm from '../ContactForm/ContactForm';
import ContactsList from '../ContactsList/ContactsList';
import Filter from '../Filter/Filter';

export const App = () => {
  return (
    <div className={styles.container}>
      <ContactForm />

      <h2 className={styles.SecondTitle}>Contacts</h2>
      <Filter />
      <ContactsList />
    </div>
  );
};
