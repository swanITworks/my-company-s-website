export const checkValidation = (value, rules, validationInfos) => {
  
  let isValid = true
  let errors = []

  if (rules.required) {
    const message = validationInfos.value
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
    const message = `${ validationInfos.max } ${ rules.maxLength } ${ validationInfos.characters }`
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
    const message = `${ validationInfos.max } ${rules.minLength} ${ validationInfos.characters }`
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
    const message = `${ validationInfos.email }`
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