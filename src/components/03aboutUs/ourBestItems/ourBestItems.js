import React from "react"
import BestItem from "./bestItem/bestItem"
import classes from "./ourBestItems.module.css"

const ourBestItems = () => {

  const aboutBestClasses = [classes.aboutBox, classes.aboutBests]

  const bestData = [{
    number: "01.",
    title: "Best understanding of business.",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod numquam eius modi tempora incidunt",
  },
    {
      number: "02.",
      title: "Best innovative technologies.",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod numquam eius modi tempora incidunt",
    },
    {
      number: "03.",
      title: "Best flexibility and speed of action.",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod numquam eius modi tempora incidunt",
    },
  ]

  return (
    <article className={aboutBestClasses.join(" ")}>
      {
        bestData.map(item => (
            <BestItem number={item.number} title={item.title} text={item.text}/>
          )
        )
      }
    </article>
  )
}

export default ourBestItems