import styles from './style.module.css';

import ContactForm from '../ContactForm/ContactForm';
import ContactsList from '../ContactsList/ContactsList';
import Filter from '../Filter/Filter';
import { useState, useEffect } from 'react';

const INITIAL_STATE = {
  contacts: [],
  filter: '',
};

export const App = () => {
  const [states, setStates] = useState(INITIAL_STATE);

  const changeFilterContacts = value => {
    setStates(prev => ({
      ...prev,
      filter: value,
    }));
  };

  const filterContacts = () => {
    const { filter, contacts } = states;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  };

  useEffect(() => {
    const local = localStorage.getItem('contacts');
    if (local) {
      setStates(prev => ({
        ...prev,
        contacts: JSON.parse(local),
      }));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(states.contacts));
  }, [states]);

  return (
    <div className={styles.container}>
      <ContactForm />

      <h2 className={styles.SecondTitle}>Contacts</h2>
      <Filter
        contacts={states.filter}
        onFilterContacts={changeFilterContacts}
      />
      <ContactsList />
    </div>
  );
};
