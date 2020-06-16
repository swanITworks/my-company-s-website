import React, { useState } from "react"
import classes from "./Footer_Items_BoxWithSubscribe.module.css"


const BoxWithSubscribe = () => {

  const inputClasses = [classes.input];

  const [inputValue, setInputValue] = useState({
    value: "",
    valid: false,
    touched: false,
  })

  if (!inputValue.valid  && inputValue.touched){
    inputClasses.push(classes.inputError)
  }

  const chaneHandler = (event) => {
    const value = event.target.value
    setInputValue({
      value: value,
      valid: checkValidation(value),
      touched: true,
    })
  }

  const checkValidation = (value) => {
    let isValid = true;
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    isValid = re.test(value)
    return isValid
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log('sent');
  }

  return (
    <article className={classes.subscribeBox}>
      <h4 className={classes.title}>SUBSCRIBE TO NEWSLETTER</h4>
      <div className={classes.items}>
        <p>Architecto beatae vitae dicta sunt ipsam voluptatem</p>
        <form onSubmit={submitHandler}>
          <input onChange={chaneHandler} value={inputValue.value} className={inputClasses.join(' ')} placeholder='Enter your email' type={"email"}/>
          {inputValue.touched && !inputValue.valid ? <div className={classes.errorInfo}>Please put correct email</div> : null }
          <button onClick={()=>{
            setInputValue({
              ...inputValue,
              touched: true,
            })
          }} className={classes.subscribeButton} type='submit'>SUBSCRIBE</button>
        </form>
      </div>
    </article>
  )
}

export default BoxWithSubscribe