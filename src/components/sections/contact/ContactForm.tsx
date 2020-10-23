import React, { useReducer } from "react";
import styled from "styled-components";
import ContactFormLabel from "./ContactFormLabel";
import ContactFormInput from "./ContactFormInput";
import PrimaryCallToAction from "../../common/buttons/PrimaryCallToAction";

const StyledContactForm = styled.form``;

// type Action =
//   | { type: "updateName"; value: string }
//   | { type: "updateEmail"; value: string }
//   | { type: "updateProject"; value: string }
//   | { type: "updateMessage"; value: string };

// Form state
const formState = {
  username: "",
  email: "",
  project: "",
  message: "",
};

// const formReducer = (state, action) => {};

// const [state, dispatch] = useReducer(formReducer, formState);

const onSubmit = (): void => {
  // e.preventDefault();

  console.log("Submitted");
};

const ContactForm = (): JSX.Element => (
  <StyledContactForm onSubmit={onSubmit}>
    <ContactFormLabel forValue="name" labelText="Name" />
    <ContactFormInput
      inputType="text"
      inputName="name"
      inputOnChangeEvent={(): void => console.log("changing text")}
      inputValue={"test"}
      required
      placeholderText="Fullname"
    />
    <PrimaryCallToAction buttonText="Send" />
  </StyledContactForm>
);

export default ContactForm;
