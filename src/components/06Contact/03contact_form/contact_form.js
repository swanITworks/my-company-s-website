import React, { useEffect, useState } from "react"
import classes from "./contact_form.module.css"
import Input from "../../../UI/Input/ulInput"
import ActionButton from "../../../UI/actionButton/actionButton"
import axios from "axios"
import { Spinner } from "../../../UI/spinner/Spinner"
import { formElements } from "./const/formElements"
import { checkValidation } from "../../../utils/checkValidation"
import Recaptcha from 'react-recaptcha';

const Form = () => {
  const [inputElements, setInputElements] = useState(formElements)
  const [isLoading,setIsLoading] = useState(false)
  const [isFormValid, setIsFormValid] = useState(false)
  const [sentSuccess, setSentSuccess] = useState(false)
  const [sentError, setSentError] = useState(false)
  const [captcha, setCaptcha] = useState(false)

  let recaptchaInstance = new Recaptcha();

  const executeCaptcha = function () {
    recaptchaInstance.execute();

  };

  const verifyCallback = function (response) {
    console.log(response);
    document.getElementById("someForm").submit();
  };

  useEffect(() => {
    let formValid = true
    for (let key in inputElements) {
      formValid = inputElements[key].valid.value && formValid && captcha
    }
    setIsFormValid(formValid)
  }, [inputElements])

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
      setIsLoading(true)
      axios.post("http://localhost:3000/msg", {
        name: inputElements.name.value,
        email: inputElements.email.value,
        title: inputElements.subject.value,
        msg: inputElements.message.value,
      }).then(() => {
          setSentSuccess(true)
          setSentError(false)
          setIsLoading(false)
        },
      ).catch(
        (error) => {
          console.log(error)
          setSentError(true)
          setSentSuccess(false)
          setIsLoading(false)
        },
      )
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

  const callback = function () {
    console.log('Done!!!!');
  };

  const onClickHandler = () => {
    setInputElements({
      ...inputElements,
      name: {
        ...inputElements.name,
        value: inputElements["name"].value,
        valid: checkValidation(inputElements["name"].value, inputElements["name"].validation),
        touched: true,
      },
      email: {
        ...inputElements.email,
        value: inputElements["email"].value,
        valid: checkValidation(inputElements["email"].value, inputElements["email"].validation),
        touched: true,
      },
      subject: {
        ...inputElements.subject,
        value: inputElements["subject"].value,
        valid: checkValidation(inputElements["subject"].value, inputElements["subject"].validation),
        touched: true,
      },
      message: {
        ...inputElements.message,
        value: inputElements["message"].value,
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

  const formArea = (
    <form id={'someForm'} onSubmit={onSubmit} className={classes.formBottom}>
      <div className={classes.formInputs}>
        {formInputs}
      </div>
      <div className={classes.formInputs}>
        {formTextArea}
      </div>
      <Recaptcha sitekey='6LeHcKwZAAAAAIqiRuvwu8rW-Jtaf4JIh_D5pZ2B' theme="dark" render="explicit"
                 onloadCallback={callback} verifyCallback={verifyCallback}/>
      <ActionButton onClick={executeCaptcha} type={"form"} text={"SEND TO US"}/>
    </form>
  )

  const success = (
    <div className={classes.successMessage}>
      <p>Your message was sent</p>
      <p style={{ marginTop: "2rem" }}>We will answer in 24h</p>
    </div>
  )

  const error = (
    <div className={classes.errorMessage}>
      <p>Error! Your message was not send.</p>
      <p>Please write directly on our email or call us.</p>
    </div>
  )



  const sendingForm = () => {
    if (isLoading) {
      return <Spinner/>
    } else if (sentSuccess) {
      return success;
    } else if (sentError) {
      return error
    } else return formArea
  };

  return (
    <article className={classes.form}>
      <div className={classes.formHeader}>
        <h3 className={classes.slogan}>Get in touch with us</h3>
        <p className={classes.info}>Please fill the form below and describe your needs, we will answer in 24h.
        </p>
      </div>
      {sendingForm()}

    </article>
  )
}

export default Form