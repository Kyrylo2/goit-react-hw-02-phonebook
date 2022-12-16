import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const ContactListDiv = styled.ul`
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: center;
`;

const TitleH2 = styled.h2`
  text-align: center;
`;

const ContactList = ({ contacts, onDelete }) => {
  return (
    <>
      <TitleH2>Contacts</TitleH2>
      <ContactListDiv>
        {contacts.map(({ name, number, id }) => {
          return (
            <li key={id}>
              <p>
                {name} {number}
              </p>
              <button onClick={() => onDelete(id)}>Delete</button>
            </li>
          );
        })}
      </ContactListDiv>
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;
