import React from "react"
import classes from "./ulInput.module.css"
import useTranslations from "../../components/useTranslations"

const Input = (props) => {

  const { type, inputName, onChange, value, valid, touched } = props;
  const { contact: { form: { placeHolders } } } = useTranslations();

  const matchPlaceholder = ( inputName ) => {
    const placeHolder = Object.keys(placeHolders).find( item => item === inputName);
    return placeHolders[placeHolder]
  };

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
      typeOfInput = <input className={inputClasses.join(",")} onChange={onChange} name={inputName}
                           value={value} {...props.elementConfig} placeholder={matchPlaceholder(inputName)} />
      break
    case "textArea":
      typeOfInput = <textarea className={inputClasses.join(",")} onChange={onChange} name={inputName} value={value} {...props.elementConfig} placeholder={matchPlaceholder(inputName)} rows='4'/>
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