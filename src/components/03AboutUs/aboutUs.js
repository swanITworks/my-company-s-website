import React from "react"
import classes from "./aboutUs.module.css"
import OurBestItems from "./ourBestItems/ourBestItems"
import useTranslations from "../useTranslations.js"

const AboutUs = () => {

  const { aboutUs: { title, about, additionalText, main: { firstPart, firstSpan, secondPart, secondSpan, thirdPart }} } = useTranslations()

  return (
    <section id={'about'} className={classes.aboutUs}>
      <article className={classes.aboutBox}>
        <div className={classes.leftSide}>
        <p className={classes.title}>{title}</p>
          <p>{about}</p>
        </div>
        <div className={classes.rightSide}>
          <p>{firstPart}<span> {firstSpan} </span> {secondPart} <span> {secondSpan} </span>{thirdPart}</p>
          <p className={classes.additionalText}>{additionalText}</p>
        </div>
      </article>
      <OurBestItems/>
    </section>
  )
}

export default AboutUs