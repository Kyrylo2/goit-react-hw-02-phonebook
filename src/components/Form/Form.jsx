import React from 'react';
// import styled from '@emotion/styled';
// import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import { nanoid } from 'nanoid';
import styled from 'styled-components';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().required().min(2),
  number: yup.string().required().min(10),
});

const FormStyled = styled(Form)`
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

class ContactsForm extends React.Component {
  state = {
    name: '',
    number: '',
  };

  handleStateChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
    // console.log(this.state);
  };

  handleSubmit = (value, { resetForm }) => {
    // e.preventDefault();
    console.log(value);
    this.props.onSubmit(value, nanoid());
    resetForm();
  };

  // resetState = () => {
  //   this.setState({
  //     name: '',
  //     number: '',
  //   });
  // };

  render() {
    return (
      <Formik
        initialValues={this.state}
        onSubmit={this.handleSubmit}
        validationSchema={schema}
      >
        {/* <TitleH3>Name</TitleH3> */}
        <FormStyled autoComplete="off" onChange={this.handleStateChange}>
          <Lable htmlFor="name">Full Name</Lable>
          <Field
            id="name"
            name="name"
            placeholder="Jane Franklin"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <ErrorMessage name="name" component="div" />
          <Lable htmlFor="number">Number</Lable>
          <Field
            id="number"
            placeholder="050 442 12 34"
            type="tel"
            name="number"
            required
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          />
          <ErrorMessage name="number" component="div" />
          <button type="submit">Add contact</button>
        </FormStyled>
      </Formik>
      // <FormStyle onSubmit={this.handleSubmit}>
      //   <Lable>
      //     <TitleH3>Name</TitleH3>
      //     <input
      //       type="text"
      //       name="name"
      //       pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      //       title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      //       required
      //       value={this.state.name}
      //       onChange={this.handleStateChange}
      //     />
      //   </Lable>
      //   <Lable>
      //     <TitleH3>Tel</TitleH3>
      //     <input
      //       type="tel"
      //       name="number"
      //       pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
      //       title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
      //       required
      //       value={this.state.number}
      //       onChange={this.handleStateChange}
      //     ></input>
      //   </Lable>
      //   <button type="submit">Add contact</button>
      // </FormStyle>
    );
  }
}

// ContactsForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };

export default ContactsForm;
