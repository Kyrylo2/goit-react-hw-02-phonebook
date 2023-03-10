import React from 'react';
import ContactsForm from '../components/Form';
import Filter from '../components/Filter';
import ContactList from '../components/ContactsList';
import styled from '@emotion/styled';

const TitleH1 = styled.h2`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

// import { nanoid } from 'nanoid';
// model.id = nanoid() //=> "V1StGXR8_Z5jdHi6B-myT"

class App extends React.Component {
  state = {
    contacts: [],
    filter: '',
  };

  getFormData = ({ name, number }, id) => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { name: name, number: number, id: id }],
    }));
  };

  filterContacts = contactsArr => {
    this.setState({
      contacts: [...contactsArr],
    });
  };

  setFilterToState = data => {
    this.setState({ ...this.state, filter: `${data}` });
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  contactsFilterData = filterData => {
    let newArr = filterData.filter(el =>
      el.name.toLowerCase().includes(this.state.filter)
    );
    return newArr;
  };

  render() {
    return (
      <>
        <TitleH1>Phonebook</TitleH1>
        <ContactsForm onSubmit={this.getFormData} />
        <Filter filterDataToState={this.setFilterToState} />
        <ContactList
          contacts={this.contactsFilterData(this.state.contacts)}
          onDelete={this.deleteContact}
        />
      </>
    );
  }
}

export default App;
