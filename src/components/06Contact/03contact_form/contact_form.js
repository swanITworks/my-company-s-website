import React, { useEffect, useState } from "react"
import classes from "./contact_form.module.css"
import Input from "../../../UI/Input/ulInput"
import ActionButton from "../../../UI/actionButton/actionButton"

const formElements = {
  name: {
    elementType: "input",
    elementConfig: {
      type: "text",
      placeholder: "Your Name",
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


const Form = () => {
  const [inputElements, setInputElements] = useState(formElements)
  const [isFormValid, setIsFormValid] = useState(false)
  const [isFormSent, setIsFormSent] = useState(false)

  useEffect(() => {
    let formValid = true
    for (let key in inputElements) {
      formValid = inputElements[key].valid.value && formValid
    }
    setIsFormValid(formValid)
  }, [inputElements])

  const checkValidation = (value, rules) => {
    let isValid = true
    let errors = []

    if (rules.required) {
      const message = "This value is required"
      const thisValid = value.trim() !== ""
      isValid = thisValid && isValid
      if (!thisValid) {
        errors.push(message)
      } else {
        const indexToDelete = errors.indexOf(message)
        if (indexToDelete > 0) {
          errors.splice(indexToDelete, 1)
        }
      }
    }

    if (rules.maxLength) {
      const message = `This field should have maximum ${rules.maxLength} characters`
      const thisValid = value.trim().length <= rules.maxLength
      isValid = thisValid && isValid
      if (!thisValid) {
        errors.push(message)
      } else {
        const indexToDelete = errors.indexOf(message)
        if (indexToDelete > 0) {
          errors.splice(indexToDelete, 1)
        }
      }
    }

    if (rules.minLength) {
      const message = `This field should have minimum ${rules.minLength} characters`
      const thisValid = value.trim().length >= rules.minLength
      isValid = thisValid && isValid
      if (!thisValid) {
        errors.push(message)
      } else {
        const indexToDelete = errors.indexOf(message)
        if (indexToDelete > 0) {
          errors.splice(indexToDelete, 1)
        }
      }
    }

    if (rules.email) {
      const message = `Please put correct email address`
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      const thisValid = re.test(value)
      isValid = thisValid && isValid
      if (!thisValid) {
        errors.push(message)
      } else {
        const indexToDelete = errors.indexOf(message)
        if (indexToDelete > 0) {
          errors.splice(indexToDelete, 1)
        }
      }
    }

    return { value: isValid, errors: errors }
  }

  const onChangeHandler = (event, elementId) => {
    setInputElements({
        ...inputElements,
        [elementId]: {
          ...inputElements[elementId],
          value: event.target.value,
          valid: checkValidation(event.target.value, inputElements[elementId].validation),
          touched: true,
        },
      },
    )
  }

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(inputElements)
    console.log(isFormValid)
    if (isFormValid) {
      setIsFormSent(true)
    }
  }

  const formElementsArray = []
  for (let key in inputElements) {
    formElementsArray.push(
      {
        id: key,
        config: inputElements[key],
      },
    )
  }

  const formInputs = (
    formElementsArray.map(element => {
        if (element.config.elementType === "input") {
          return (
            <Input
              key={element.id}
              type={element.config.elementType}
              name={element.id}
              value={element.config.value}
              valid={element.config.valid}
              touched={element.config.touched}
              elementConfig={element.config.elementConfig}
              onChange={(event) => onChangeHandler(event, element.id)}
            />
          )
        } else return null
      },
    )
  )

  const onClickHandler = () => {
    setInputElements({
      ...inputElements,
      name: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Your Name",
        },
        value: inputElements["name"].value,
        validation: {
          required: true,
          minLength: 2,
          maxLength: 20,
        },
        valid: checkValidation(inputElements["name"].value, inputElements["name"].validation),
        touched: true,
      },
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "Your Email",
        },
        value: inputElements["email"].value,
        validation: {
          required: true,
          minLength: 5,
          maxLength: 320,
          email: true,
        },
        valid: checkValidation(inputElements["email"].value, inputElements["email"].validation),
        touched: true,
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
        valid: checkValidation(inputElements["subject"].value, inputElements["subject"].validation),
        touched: true,
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
        valid: checkValidation(inputElements["message"].value, inputElements["message"].validation),
        touched: true,
      },
    })
  }

  const formTextArea = (
    formElementsArray.map(element => {
        if (element.config.elementType === "textArea") {
          return (
            <Input
              key={element.id}
              type={element.config.elementType}
              name={element.id}
              value={element.config.value}
              valid={element.config.valid}
              touched={element.config.touched}
              elementConfig={element.config.elementConfig}
              onChange={(event) => onChangeHandler(event, element.id)}
            />
          )
        } else return null
      },
    )

  )

  const form = (
    <form onSubmit={onSubmit} className={classes.formBottom}>
      <div className={classes.formInputs}>
        {formInputs}
      </div>
      <div className={classes.formInputs}>
        {formTextArea}
      </div>
      <ActionButton onClick={onClickHandler} type={"orange"} text={"SEND TO US"}/>
    </form>
  )

  const sentMessage = (
    <div className={classes.successMessage}>
      <p>Your message was sent</p>
      <p style={{ marginTop: "2rem" }}>We will answer in 24h</p>
    </div>
  )

  return (
    <article className={classes.form}>
      <div className={classes.formHeader}>
        <h3 className={classes.slogan}>Get in touch with us</h3>
        <p className={classes.info}>Please fill the form below and describe your needs, we will answer in 24h.
        </p>
      </div>
      {isFormSent ? sentMessage : form}
    </article>
  )
}

export default Form