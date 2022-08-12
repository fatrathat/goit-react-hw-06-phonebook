export const selectAllContacts = state => state.contacts.items;

export const selectVisibleContacts = (state, filter) => {
  return state.contacts.items.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );
};
