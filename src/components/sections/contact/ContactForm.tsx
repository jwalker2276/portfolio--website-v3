import React, { useReducer } from "react";
import styled from "styled-components";
import ContactFormLabel from "./ContactFormLabel";
import ContactFormInput from "./ContactFormInput";

const StyledContactForm = styled.form``;

type Action =
  | { type: "updateName"; value: string }
  | { type: "updateEmail"; value: string }
  | { type: "updateProject"; value: string }
  | { type: "updateMessage"; value: string };

// Form state
const formState = {
  username: "",
  email: "",
  project: "",
  message: "",
};

const formReducer = (
  prevState: typeof formState,
  action: Action
): typeof formState => {
  switch (action.type) {
    case "updateName":
      return { ...prevState, username: prevState.username += action.value };
    default:
      return prevState;
  }
};

const [state, dispatch] = useReducer(formReducer, formState);

const ContactForm = (): JSX.Element => (
  <StyledContactForm action="" method="">
    <ContactFormLabel forValue="name" labelText="Name" />
    {/* <ContactFormInput
      inputType="text"
      inputName="name"
      inputOnChangeEvent={(): void =>
        dispatch({ type: "updateName", value: "" })
      }
      inputValue={state.username}
      required
      placeholderText="Fullname"
    /> */}
  </StyledContactForm>
);

export default ContactForm;
