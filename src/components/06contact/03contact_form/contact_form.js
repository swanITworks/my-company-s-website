import React, { useState } from "react"
import classes from "./contact_form.module.css"
import Input from "../../../UI/Input/UI_Input"
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
    },
    valid: false,
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
    },
    valid: false,
    touched: false,
  },
  subject: {
    elementType: "input",
    elementConfig: {
      type: "email",
      placeholder: "Your Email",
    },
    value: "",
    validation: {
      required: true,
    },
    valid: false,
    touched: false,
  },
  message: {
    elementType: "textArea",
    elementConfig: {
      type: "email",
      placeholder: "Your Email",
    },
    value: "",
    validation: {
      required: true,
    },
    valid: false,
    touched: false,
  },
}

const onSubmit = (e) => {
  e.preventDefault()
  console.log("send")
}

const Form = () => {
  const [inputElements, setInputElements] = useState(formElements)

  // const onChange = (event) => {
  //   if (formValues[event.target.name].validationHandler(event.target.value)) {
  //     console.log("ok")
  //   }
  //   setFormValues({
  //       ...formValues,
  //       [event.target.name]: { value: event.target.value },
  //     },
  //   )
  //   console.log(formValues)
  // }
  const formElementsArray = []
  for (let key in inputElements) {
        formElementsArray.push(
          {
            id: key,
            config: formElements[key],
          }
        )
  }

  const form = (
    formElementsArray.map(element => <Input type={element.config.elementType} name={element.id} />)
  )

  return (
    <article className={classes.form}>
      <div className={classes.formHeader}>
        <h3 className={classes.slogan}>Get in touch with us</h3>
        <p className={classes.info}>Quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
          voluptas sit aspernatur aut
        </p>
      </div>
      <form onSubmit={onSubmit} className={classes.formBottom}>
        <div className={classes.formInputs}>
          {form}
        </div>
        <div>
          <textarea id="message" name="message" rows="4" cols="150" placeholder="Your message here">
          </textarea>
        </div>
        <ActionButton type={"orange"} text={"SEND TO US"}/>
      </form>
    </article>
  )
}

export default Form