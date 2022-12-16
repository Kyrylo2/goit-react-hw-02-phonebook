import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import { nanoid } from 'nanoid';
// model.id = nanoid() //=> "V1StGXR8_Z5jdHi6B-myT"

const FormStyle = styled.form`
  display: flex;
  gap: 20px;
  flex-direction: column;
  align-items: center;
`;

const Lable = styled.label`
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: center;
`;

const TitleH3 = styled.h2`
  font-size: 14px;
  text-align: center;
`;

class Form extends React.Component {
  state = {
    name: '',
    number: '',
  };

  handleStateChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
    // console.log(this.state);
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state, nanoid());
    this.resetState();
  };

  resetState = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <FormStyle onSubmit={this.handleSubmit}>
        <Lable>
          <TitleH3>Name</TitleH3>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.handleStateChange}
          />
        </Lable>
        <Lable>
          <TitleH3>Tel</TitleH3>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
            onChange={this.handleStateChange}
          ></input>
        </Lable>
        <button type="submit">Add contact</button>
      </FormStyle>
    );
  }
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
