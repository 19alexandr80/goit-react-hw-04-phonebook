import React from 'react';
import { nanoid } from 'nanoid';

import { FormAddUser } from 'components/formPhoneBook/FormAddUser';
import { Filter } from 'components/contactList/Filter';
import { ContactList } from 'components/contactList/ContactList';
import { AppStyled } from 'components/AppStyled.styled';

export class App extends React.PureComponent {
  state = {
    contacts: [],
    filter: '',
  };

  onChangeFilter = e => {
    const value = e.target.value;
    this.setState(() => {
      return { filter: value };
    });
  };

  onDeleteUser = eId => {
    this.setState(({ contacts }) => {
      return {
        contacts: contacts.filter(({ id }) => {
          return id !== eId;
        }),
      };
    });
  };

  addUserPhoneBook = add => {
    if (this.state.contacts.find(el => el.name === add.name)) {
      alert(add.name + ' is already in contacts');
      return;
    }

    add.id = nanoid();
    // this.setState({ contacts: [...this.state.contacts, add] });

    this.setState(({ contacts }) => {
      return { contacts: [add, ...contacts] };
    });
  };

  componentDidMount() {
    if (localStorage.getItem('contacts')) {
      this.setState({
        contacts: JSON.parse(localStorage.getItem('contacts')),
      });
    }
  }

  componentDidUpdate(a, b) {
    if (b.contacts !== this.state.contacts) {
      const contactsJson = JSON.stringify(this.state.contacts);
      localStorage.setItem('contacts', contactsJson);
    }
  }

  render() {
    const ren = this.state.contacts.filter(({ name }) => {
      return name.toLowerCase().includes(this.state.filter.toLowerCase());
    });
    return (
      <AppStyled>
        <h1>Phonebook</h1>
        <FormAddUser addUserPhoneBook={this.addUserPhoneBook} />
        <h2>Contacts</h2>
        <Filter filter={this.state.filter} onChange={this.onChangeFilter} />
        {ren.length !== 0 && (
          <ContactList ren={ren} onDeleteUser={this.onDeleteUser} />
        )}
      </AppStyled>
    );
  }
}
