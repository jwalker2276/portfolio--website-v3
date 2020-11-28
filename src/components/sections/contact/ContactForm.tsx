import React, { useReducer } from "react";
import styled from "styled-components";
import ContactFormLabel from "./ContactFormLabel";
import ContactFormInput from "./ContactFormInput";
import ContactFormTextArea from "./ContactFormTextArea";
import PrimaryCallToAction from "../../common/buttons/PrimaryCallToAction";

type FormState = typeof initialState;

type Action = {
  type: string;
  field: string;
  value: string;
};

const StyledContactForm = styled.form`
  width: 100%;
  height: 100%;
`;

const formReducer = (state: FormState, action: Action): FormState => {
  switch (action.type) {
    case "field": {
      return { ...state, [action.field]: action.value };
    }
    default:
      return state;
  }
};

// Initial Form State
const initialState = {
  username: "",
  email: "",
  project: "",
  message: "",
};

// Component
const ContactForm = (): JSX.Element => {
  // State
  const [state, dispatch] = useReducer(formReducer, initialState);
  const { username, email, project, message } = state;

  // Submit Event
  const onSubmit = (e: React.FormEvent): void => {
    e.preventDefault();

    console.log("Submitted", state);
  };

  return (
    <StyledContactForm onSubmit={onSubmit}>
      <ContactFormLabel forValue="name" labelText="Name" />
      <ContactFormInput
        inputType="text"
        inputName="name"
        inputOnChangeEvent={(e): void =>
          dispatch({
            type: "field",
            field: "username",
            value: e.currentTarget.value,
          })
        }
        inputValue={username}
        placeholderText="Fullname"
      />
      <ContactFormLabel forValue="email" labelText="Email" />
      <ContactFormInput
        inputType="email"
        inputName="email"
        inputOnChangeEvent={(e): void =>
          dispatch({
            type: "field",
            field: "email",
            value: e.currentTarget.value,
          })
        }
        inputValue={email}
        placeholderText="Email Address"
      />
      <ContactFormLabel
        forValue="project"
        labelText="What are you working on?"
      />
      <ContactFormInput
        inputType="text"
        inputName="project"
        inputOnChangeEvent={(e): void =>
          dispatch({
            type: "field",
            field: "project",
            value: e.currentTarget.value,
          })
        }
        inputValue={project}
        placeholderText="New web application"
      />
      <ContactFormLabel forValue="message" labelText="Message" />
      <ContactFormTextArea
        inputName="message"
        inputOnChangeEvent={(e): void =>
          dispatch({
            type: "field",
            field: "message",
            value: e.currentTarget.value,
          })
        }
        inputValue={message}
        placeholderText="I need ..."
      />
      <PrimaryCallToAction buttonText="Send" />
    </StyledContactForm>
  );
};

export default ContactForm;
