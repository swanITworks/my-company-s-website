import React from "react"
import classes from "./slider.module.css"
import SliderButton from "./sliderButton/sliderButton"
import ActionButton from "./actionButton/actionButton"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"


const slider = () => {
  return (
    <section className={classes.slider}>
      <div className={classes.items}>
        <SliderButton type="prev"/>
        <article className={classes.main}>
          <h3 className={classes.hello}>Welcome in cutting costs world.</h3>
          <h2 className={classes.mainSlogan}>Grow your<br/><span>Business</span> with us.</h2>
          <h1 className={classes.slogan}>We provide bespoke cloud software for your clients and company.</h1>
          <div>
            <ActionButton type='transparent' text='EXPLORE MORE'/><ActionButton type='chuj' text='PORTFOLIO'/>
          </div>
        </article>
        <SliderButton type="next"/>
      </div>
    </section>
  )
}

export default slider