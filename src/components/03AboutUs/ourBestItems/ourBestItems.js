import React from "react"
import BestItem from "./bestItem/bestItem"
import classes from "./ourBestItems.module.css"
import useTranslations from "../../../components/useTranslations"


const OurBestItems = () => {

  const aboutBestClasses = [classes.aboutBox, classes.aboutBests]

  const { aboutUs: { bestsData } } = useTranslations();
  
  return (
    <article className={aboutBestClasses.join(" ")}>
      {
        bestsData.map(item => (
            <BestItem key={item.number} number={item.number} title={item.title} text={item.text}/>
          )
        )
      }
    </article>
  )
}

export default OurBestItems