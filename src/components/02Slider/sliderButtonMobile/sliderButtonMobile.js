import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import classes from "../sliderButtonMobile/sliderButtonMobile.module.css"

const sliderButtonMobile = ( props ) => {
  if (props.type === 'prev') {
    return (
      <div role='button' tabIndex="0" className={classes.sliderButtonMobile} onClick={props.onClick} onKeyPress={props.onClick}>
        <FontAwesomeIcon icon={faArrowLeft}/>
      </div>
    )
  }
  if (props.type === 'next') {
    return (
      <div role='button' tabIndex="0" className={classes.sliderButtonMobile} onClick={props.onClick} onKeyPress={props.onClick}>
        <FontAwesomeIcon icon={faArrowRight}/>
      </div>
    )
  }
};

export default sliderButtonMobile;