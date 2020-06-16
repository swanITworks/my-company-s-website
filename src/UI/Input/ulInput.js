import React from "react"
import classes from "./ulInput.module.css"

const Input = (props) => {

  const { type, name, onChange, value, valid, touched } = props

  const inputClasses = []
  let typeOfInput = ""
  let errorMessages = ""

  if (touched && !valid.value) {
    inputClasses.push(classes.error)
    if (valid.errors.length > 0) {
      errorMessages = (
        valid.errors.map(error => {
          return <div className={classes.errorItem}>{error}</div>
        })
      )
    }
  }

  switch (type) {
    case "input":
      typeOfInput = <input className={inputClasses.join(",")} onChange={onChange} name={name}
                           value={value} {...props.elementConfig} />
      break
    case "textArea":
      typeOfInput = <textarea className={inputClasses.join(",")} onChange={onChange} name={name} value={value} {...props.elementConfig} rows='4'/>
      break
    default:
      return null;
  }

  return (
    <div className={classes.item}>
      {typeOfInput}
      {errorMessages}
    </div>
  )
}

export default Input