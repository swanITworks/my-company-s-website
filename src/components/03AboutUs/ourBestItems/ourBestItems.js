import React from "react"
import BestItem from "./bestItem/bestItem"
import classes from "./ourBestItems.module.css"

const ourBestItems = () => {

  const aboutBestClasses = [classes.aboutBox, classes.aboutBests]
  const bestData = [{
    number: "01.",
    title: "Implement what we preach.",
    text: "We are more than digesters of code; we understand your needs like no other because we practice business.",
  },
    {
      number: "02.",
      title: "Use cutting edge technology.",
      text: "To ease learning, we use the latest technology. So our applications are the most efficient and fastest.",
    },
    {
      number: "03.",
      title: "Focus on quality yet deliver fast.",
      text: "Just like our software, we’re an agile and flexible workforce. We don’t want to be a large corporation.",
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