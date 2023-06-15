import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import { FormAddUser } from 'components/formPhoneBook/FormAddUser';
import { Filter } from 'components/contactList/Filter';
import { ContactList } from 'components/contactList/ContactList';
import { AppStyled } from 'components/AppStyled.styled';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    return localStorage.getItem('contacts')
      ? JSON.parse(localStorage.getItem('contacts'))
      : [];
  });
  const [filter, setFilter] = useState('');
  const onChangeFilter = e => {
    const value = e.target.value;
    setFilter(value);
  };
  const onDeleteUser = eId => {
    setContacts(
      contacts.filter(({ id }) => {
        return id !== eId;
      })
    );
  };
  const addUserPhoneBook = add => {
    if (contacts.find(el => el.name === add.name)) {
      alert(add.name + ' is already in contacts');
      return;
    }
    add.id = nanoid();
    setContacts(prev => [add, ...prev]);
  };
  useEffect(() => {
    const contactsJson = JSON.stringify(contacts);
    localStorage.setItem('contacts', contactsJson);
  }, [contacts]);
  const ren = contacts.filter(({ name }) => {
    return name.toLowerCase().includes(filter.toLowerCase());
  });
  return (
    <AppStyled>
      <h1>Phonebook</h1>
      <FormAddUser addUserPhoneBook={addUserPhoneBook} />
      <h2>Contacts</h2>
      <Filter filter={filter} onChange={onChangeFilter} />
      {ren.length !== 0 && (
        <ContactList ren={ren} onDeleteUser={onDeleteUser} />
      )}
    </AppStyled>
  );
};
