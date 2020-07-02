export const checkValidation = (value, rules) => {
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