import React from 'react';
import PropTypes from 'prop-types';

export class FormAddUser extends React.Component {
  state = {
    name: '',
    number: '',
  };

  ressetForm = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  inputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  formSubmit = e => {
    e.preventDefault();
    this.props.addUserPhoneBook({
      name: this.state.name,
      number: this.state.number,
    });
    this.ressetForm();
  };

  render() {
    return (
      <form onSubmit={this.formSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            placeholder="Neme Surname"
            value={this.state.name}
            onChange={this.inputChange}
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
            value={this.state.number}
            onChange={this.inputChange}
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit">Add user</button>
      </form>
    );
  }
}
FormAddUser.propTypes = {
  addUserPhoneBook: PropTypes.func.isRequired,
};
