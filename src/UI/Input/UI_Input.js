import React from "react"
import classes from "./UI_Input.module.css"

const Input = (props) => {

  const { type, name } = props

  switch (type) {
    case 'input':
      return <input/>;
    case 'textArea':
      return <textarea/>
  }
}

export default Input