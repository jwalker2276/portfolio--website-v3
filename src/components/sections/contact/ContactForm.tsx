import React, { useReducer, useRef, useState } from "react";
import styled from "styled-components";
import ContactFormLabel from "./ContactFormLabel";
import ContactFormInput from "./ContactFormInput";
import ContactFormTextArea from "./ContactFormTextArea";
import PrimaryCallToAction from "../../common/buttons/PrimaryCallToAction";
import SentButton from "../../common/buttons/SentButton";

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

// Initial Form State
const initialState = {
  name: "",
  email: "",
  project: "",
  message: "",
};

const formReducer = (state: FormState, action: Action): FormState => {
  switch (action.type) {
    case "field": {
      return { ...state, [action.field]: action.value };
    }
    case "reset": {
      return initialState;
    }
    default:
      return state;
  }
};

// Component
const ContactForm = (): JSX.Element => {
  // State
  const [state, dispatch] = useReducer(formReducer, initialState);
  const { name, email, project, message } = state;

  // Button state
  const [isSent, setIsSent] = useState(false);

  // Ref to form
  const formRef = useRef(null);

  // Form types
  type formDataProps = {
    name: string;
    email: string;
    project: string;
    message: string;
    "form-name": string;
  };

  // Encode form data for netlify
  const encode = (data: formDataProps): string => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  // Submit Event
  const onSubmit = (e: React.FormEvent): void => {
    e.preventDefault();

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": formRef.current.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => {
        dispatch({ type: "reset", field: "all", value: "" });
        setIsSent(true);
      })
      .catch((error) => console.error(error));
  };

  return (
    <StyledContactForm
      onSubmit={onSubmit}
      method="post"
      netlify-honeypot="bot-field"
      data-netlify="true"
      name="contact"
      ref={formRef}
    >
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="contact" />
      <ContactFormLabel forValue="name" labelText="Name" />
      <ContactFormInput
        idName="name"
        inputType="text"
        inputName="name"
        inputOnChangeEvent={(e): void =>
          dispatch({
            type: "field",
            field: "name",
            value: e.currentTarget.value,
          })
        }
        inputValue={name}
        placeholderText="Fullname"
      />
      <ContactFormLabel forValue="email" labelText="Email" />
      <ContactFormInput
        idName="email"
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
        idName="project"
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
        idName="message"
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
      {isSent && <SentButton />}
      {isSent === false && <PrimaryCallToAction buttonText="Send" />}
    </StyledContactForm>
  );
};

export default ContactForm;
