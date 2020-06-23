import React from "react"
import BestItem from "./bestItem/bestItem"
import classes from "./ourBestItems.module.css"

const ourBestItems = () => {

  const aboutBestClasses = [classes.aboutBox, classes.aboutBests]

  const bestData = [{
    number: "01.",
    title: "Best understanding of business.",
    text: "We are not just programmers, understand your needs like no other because we practice business ourselves.",
  },
    {
      number: "02.",
      title: "Best innovative technologies.",
      text: "When others are just learning, we use only the latest technologies. Thanks to which our applications are the fastest.",
    },
    {
      number: "03.",
      title: "Best flexibility and speed of action.",
      text: "Not only our software is fast but we also work quickly. We don't want to be a large corporation, which makes us flexible.",
    },
  ]

  return (
    <article className={aboutBestClasses.join(" ")}>
      {
        bestData.map(item => (
            <BestItem key={item.number} number={item.number} title={item.title} text={item.text}/>
          )
        )
      }
    </article>
  )
}

export default ourBestItems