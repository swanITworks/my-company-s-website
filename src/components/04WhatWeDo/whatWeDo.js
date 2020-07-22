import React, { useEffect, useState } from "react"
import classes from "./whatWeDo.module.css"
import Header from "./01whatWeDo_Header/whatWeDo_Header"
import Boxes from "./02whatWeDo_Boxes/whatWeDo_Boxes"
import Dots from "./03WhatWeDo_Dots/dots"

const items = [
  {
    title: "Mobile Apps",
    info: "Tell us any design that you wish for, and we can provide it for your Android or iOS mobile app.",
  },
  {
    title: "Web Apps",
    info: "Using modern browsers, we can design anything, just tell us what you want for your web app.",
  },
  {
    title: "Websites",
    info: "We can build blogs, company websites, product configurators, and price comparison systems.",
  },
  {
    title: "E-commerce",
    info: "We are experienced in moving commerce online; it’s been our passion for the last ten years.",
  },
  {
    title: "ERP Systems",
    info: "Simplifying software is our primary speciality; as we know how hard it is to manage a business.",
  },
  {
    title: "CMS Systems",
    info: "Based on your needs and assumptions, we can build content management systems from scratch.",
  },
  {
    title: "CRM Software",
    info: "All of us know how customer relationship management is vital to survive; we can help you.",
  },
  {
    title: "B2B Systems",
    info: "Save more time for your company by allowing clients to order products or services directly.",
  },
  {
    title: "Bespoke Software",
    info: "Share with us your exciting software ideas, which we can custom build for you from scratch.",
  },
  {
    title: "Automation processes",
    info: "To save money, we automate invoice delivery and newsletter self sending to all your clients.",
  },
  {
    title: "Integration of systems",
    info: "We synchronise systems to work together and save you time by eliminating unnecessary work.",
  },
  {
    title: "IT support",
    info: "Our IT help is diverse, ask us, and we can provide our best quote for the service required.",
  }
]

const WhatWeDo = () => {

  const [itemToShow, setItemToShow] = useState(1)

  useEffect(() => {
    let interval = setInterval(() => {
      setItemToShow(prevState => {
        if (prevState < items.length) {
          return prevState + 1
        } else {
          return 1
        }
      })
    }, 5000)
    return ()=> clearInterval(interval);
  }, [])

  const showBoxes = (items) => {
    const quantityOfItems = items.length
    const toShow = []
    if (itemToShow === (quantityOfItems - 1)) {
      toShow.push(items[itemToShow - 1])
      toShow.push(items[itemToShow])
      toShow.push(items[itemToShow - quantityOfItems + 1])
    } else if (itemToShow === (quantityOfItems)) {
      toShow.push(items[itemToShow - 1])
      toShow.push(items[itemToShow - quantityOfItems])
      toShow.push(items[itemToShow - quantityOfItems + 1])
    } else {
      toShow.push(items[itemToShow - 1])
      toShow.push(items[itemToShow])
      toShow.push(items[itemToShow + 1])
    }
    return toShow
  }

  const toShow = showBoxes(items)

  const changeHandler = (changing) => {
    switch (changing) {
      case "plus":
        if (itemToShow < (items.length)) {
          return setItemToShow(itemToShow + 1)
        } else {
          return setItemToShow(1)
        }
      case "minus":
        if ((itemToShow - 1) >= 1) {
          return setItemToShow(itemToShow - 1)
        } else {
          return setItemToShow(items.length)
        }
      default: return null;
    }
  }

  return (
    <section id={'whatWeDo'} className={classes.whatWeDo}>
      <Header/>
      <div className={classes.middleSection}>
        <div aria-label="Change service -" role='button' tabIndex="0" className={classes.buttonLeft} onClick={() => changeHandler("minus")} onKeyPress={() => changeHandler("minus")}></div>
        <Boxes showBoxes={toShow} />
        <div aria-label="Change service +" role='button' tabIndex="0" className={classes.buttonRight} onClick={() => changeHandler("plus")} onKeyPress={() => changeHandler("minus")}></div>
      </div>
      <Dots dotsQuantity={items.length} isShowing={itemToShow}/>
    </section>
  )
}

export default WhatWeDo