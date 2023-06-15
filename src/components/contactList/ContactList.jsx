import PropTypes from 'prop-types';

import { Contact } from 'components/contactList/Contact';

import { ContactsLitsStyled } from 'components/contactList/ContactListStyled.styled';

export const ContactList = ({ ren, onDeleteUser }) => {
  return (
    <ContactsLitsStyled>
      {ren.map(({ id, name, number }) => {
        return (
          <Contact
            key={id}
            id={id}
            name={name}
            number={number}
            onDeleteUser={onDeleteUser}
          />
        );
      })}
    </ContactsLitsStyled>
  );
};

ContactList.propTypes = {
  ren: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onDeleteUser: PropTypes.func.isRequired,
};
