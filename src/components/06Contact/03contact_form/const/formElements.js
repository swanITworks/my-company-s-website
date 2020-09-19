export const formElements = {
  name: {
    elementType: "input",
    elementConfig: {
      type: "text",
      placeholder: "Your Name"
    },
    value: "",
    validation: {
      required: true,
      minLength: 2,
      maxLength: 20,
    },
    valid: {
      value: false,
      errors: [],
    },
    touched: false,
  },
  email: {
    elementType: "input",
    elementConfig: {
      type: "email",
      placeholder: "Your Email",
    },
    value: "",
    validation: {
      required: true,
      minLength: 5,
      maxLength: 320,
      email: true,
    },
    valid: {
      value: false,
      errors: [],
    },
    touched: false,
  },
  subject: {
    elementType: "input",
    elementConfig: {
      type: "text",
      placeholder: "Your Subject",
    },
    value: "",
    validation: {
      required: true,
    },
    valid: {
      value: false,
      errors: [],
    },
    touched: false,
  },
  message: {
    elementType: "textArea",
    elementConfig: {
      placeholder: "Your Message",
    },
    value: "",
    validation: {
      required: true,
    },
    valid: {
      value: false,
      errors: [],
    },
    touched: false,
  },
}