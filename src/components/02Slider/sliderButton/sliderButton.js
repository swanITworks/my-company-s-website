import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import useTranslations from "../../useTranslations.js"
import classes from "../sliderButton/sliderButton.module.css"

const SliderButton = ( {click,action} ) => {

  const { slider:{ buttons: { next, prev }}}= useTranslations();

  if (action === 'minus') {
    return (
      <div role='button' tabIndex="0" className={classes.sliderButton} onClick={click} onKeyPress={click}>
        <FontAwesomeIcon icon={faArrowLeft}/>
        <p className={classes.sliderButtonText}>{prev}</p>
      </div>
    )
  }
  if (action === 'plus') {
    return (
      <div role='button' tabIndex="0" className={classes.sliderButton} onClick={click} onKeyPress={click}>
        <p className={classes.sliderButtonText}>{next}</p>
        <FontAwesomeIcon icon={faArrowRight}/>
      </div>
    )
  }
};

export default SliderButton;