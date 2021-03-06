import React, { useEffect, useState } from "react"
import classes from "./contact_form.module.css"
import Input from "../../../UI/Input/ulInput"
import ActionButton from "../../../UI/actionButton/actionButton"
import axios from "axios"
import { Spinner } from "../../../UI/spinner/Spinner"
import { formElements } from "./const/formElements"
import { checkValidation } from "../../../utils/checkValidation"
import Recaptcha from "react-recaptcha"

const Form = ( { form }) => {
  const [inputElements, setInputElements] = useState(formElements)
  const [isLoading, setIsLoading] = useState(false)
  const [isFormValid, setIsFormValid] = useState(false)
  const [sentSuccess, setSentSuccess] = useState(false)
  const [sentError, setSentError] = useState(false)
  const [captcha, setCaptcha] = useState({ status: false, error: "", token: "" })
  
  const verifyCallback = function(response) {
    setCaptcha({ status: true, error: "", token: response })
  }

  const expiredCallback = () => {
    setCaptcha({ status: false, error: "", token: "" })
  }

  useEffect(() => {
    let formValid = true
    for (let key in inputElements) {
      formValid = inputElements[key].valid.value && formValid && captcha.status
    }
    setIsFormValid(formValid)
  }, [inputElements, captcha.status])

  const onChangeHandler = (event, elementId) => {
    setInputElements({
        ...inputElements,
        [elementId]: {
          ...inputElements[elementId],
          value: event.target.value,
          valid: checkValidation(event.target.value, inputElements[elementId].validation, form.validationInfos),
          touched: true,
        },
      },
    )
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (isFormValid) {
      setIsLoading(true)
      axios.post("http://swanitworks.com:3000/msg", {
        name: inputElements.name.value,
        email: inputElements.email.value,
        title: inputElements.subject.value,
        message: inputElements.message.value,
        token: captcha.token,
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
              inputName={element.id}
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
        ...inputElements.name,
        value: inputElements["name"].value,
        valid: checkValidation(inputElements["name"].value, inputElements["name"].validation,form.validationInfos),
        touched: true,
      },
      email: {
        ...inputElements.email,
        value: inputElements["email"].value,
        valid: checkValidation(inputElements["email"].value, inputElements["email"].validation,form.validationInfos),
        touched: true,
      },
      subject: {
        ...inputElements.subject,
        value: inputElements["subject"].value,
        valid: checkValidation(inputElements["subject"].value, inputElements["subject"].validation,form.validationInfos),
        touched: true,
      },
      message: {
        ...inputElements.message,
        value: inputElements["message"].value,
        valid: checkValidation(inputElements["message"].value, inputElements["message"].validation,form.validationInfos),
        touched: true,
      },
    })
    if (!captcha.status) {
      setCaptcha({
        status: false,
        error: "Please check the checkbox"
        //form.validationInfos.captchaError,
      })
    }
  }

  const formTextArea = (
    formElementsArray.map(element => {
        if (element.config.elementType === "textArea") {
          return (
            <Input
              key={element.id}
              type={element.config.elementType}
              inputName={element.id}
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
    <form id={"someForm"} onSubmit={onSubmit} className={classes.formBottom}>
      <div className={classes.formInputs}>
        {formInputs}
      </div>
      <div className={classes.formInputs}>
        {formTextArea}
      </div>
      <div className={classes.captchaArea}>
        <div style={{marginRight: 'auto', visibility: 'hidden', width: '350px'}} className={classes.hide}>
        </div>
        <ActionButton onClick={onClickHandler} type={"form"} text={ form.button }/>
        <div style={{marginLeft: 'auto'}} className={classes.captchaMobile}>
          { inputElements.name.touched ? <Recaptcha 
            render='explicit' 
            onloadCallback={console.log.bind(this, "recaptcha loaded")} 
            sitekey='6LeHcKwZAAAAAIqiRuvwu8rW-Jtaf4JIh_D5pZ2B' 
            theme="light" size='normal'
            verifyCallback={verifyCallback} expiredCallback={expiredCallback}/> : null}
          {captcha.error ? <p className={classes.captchaError}>{captcha.error}</p> : null}
        </div>
      </div>
    </form>
  )

  const success = (
    <div className={classes.successMessage}>
      <p>{form.messages.success.status}</p>
      <p style={{ marginTop: "2rem" }}>{form.messages.success.info}</p>
    </div>
  )

  const error = (
    <div className={classes.errorMessage}>
      <p>{form.messages.error.status}</p>
      <p>{form.messages.error.info}</p>
    </div>
  )


  const sendingForm = () => {
    if (isLoading) {
      return <Spinner/>
    } else if (sentSuccess) {
      return success
    } else if (sentError) {
      return error
    } else return formArea
  }
  
  return (
    <article className={classes.form}>
      <div className={classes.formHeader}>
      <h3 className={classes.slogan}>{ form.title }</h3>
        <p className={classes.info}>{ form.description}</p>
      </div>
      {sendingForm()}
    </article>
  )
}

export default Form