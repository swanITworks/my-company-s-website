import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import classes from "../sliderButton/sliderButton.module.css"

const sliderButton = ( props ) => {
  if (props.type === 'prev') {
    return (
      <div className={classes.sliderButton}>
        <FontAwesomeIcon icon={faArrowLeft}/>
        <p className={classes.sliderButtonText}>PREV</p>
      </div>
    )
  }
  if (props.type === 'next') {
    return (
      <div className={classes.sliderButton}>
        <p className={classes.sliderButtonText}>NEXT</p>
        <FontAwesomeIcon icon={faArrowRight}/>
      </div>
    )
  }
};

export default sliderButton;