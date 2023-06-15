import { useState } from 'react';
import PropTypes from 'prop-types';

export function FormAddUser({ addUserPhoneBook }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const ressetForm = () => {
    setName('');
    setNumber('');
  };
  // const inputChange = e => {
  //   switch (e.target.name) {
  //     case 'name':
  //       setName(e.target.value);
  //       break;
  //     case 'number':
  //       setNumber(e.target.value);
  //       break;
  //     default:
  //       break;
  //   }
  // };
  const formSubmit = e => {
    e.preventDefault();
    addUserPhoneBook({
      name,
      number,
    });
    ressetForm();
  };
  return (
    <form onSubmit={formSubmit}>
      <label>
        Name
        <input
          type="text"
          name="name"
          placeholder="Neme Surname"
          value={name}
          onChange={e => setName(e.target.value)}
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        Phone
        <input
          type="tel"
          name="number"
          placeholder="+380..."
          value={number}
          onChange={e => setNumber(e.target.value)}
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit">Add user</button>
    </form>
  );
}
FormAddUser.propTypes = {
  addUserPhoneBook: PropTypes.func.isRequired,
};
