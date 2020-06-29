import React, { useEffect, useState } from "react"
import classes from "./whatWeDo.module.css"
import Header from "./01whatWeDo_Header/whatWeDo_Header"
import Boxes from "./02whatWeDo_Boxes/whatWeDo_Boxes"
import Dots from "./03WhatWeDo_Dots/dots"

const items = [
  {
    title: "Mobile Apps",
    info: "Provide mobile apps for Android and iOS operating system. Can design everything you need. ",
  },
  {
    title: "Web Apps",
    info: "Our systems support all modern browsers. Imagine something and we'll take it to your card",
  },
  {
    title: "Websites",
    info: "Blogs, companies websites, product configurators, price comparison systems... we can do it all",
  },
  {
    title: "E-commerce",
    info: "We can move your selling to Internet. Online shops have been our passion for ten years",
  },
  {
    title: "ERP Systems",
    info: "This is our specialty. We know how hard is maneging business, our software simplify it.",
  },
  {
    title: "CMS Systems",
    info: "We can build from scratch the content management systems regarding your needs and assumptions.",
  },
  {
    title: "CRM Software",
    info: "Everybody knows how customer relationship management is important, our company can help in it.",
  },
  {
    title: "B2B Systems",
    info: "Your clients can order products or service directly without time-consuming calls or emails.",
  },
  {
    title: "Bespoke Software",
    info: "Maybe have idea for your own software, we can build it for you from scratch.",
  },
  {
    title: "Automation processes",
    info: "Automatic invoice delivery, newsletter self sending to all your clients, etc. We can do it to save your money.",
  },
  {
    title: "Integration of systems",
    info: "We can connect few systems to work together to save your time and eliminate unnecessary work",
  },
  {
    title: "IT support",
    info: "We can help you in many IT processes. Just ask and we quote the best service.",
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
        <div role='button' tabIndex="2" className={classes.buttonLeft} onClick={() => changeHandler("minus")} onKeyPress={() => changeHandler("minus")}></div>
        <Boxes showBoxes={toShow} />
        <div role='button' tabIndex="3" className={classes.buttonRight} onClick={() => changeHandler("plus")} onKeyPress={() => changeHandler("minus")}></div>
      </div>
      <Dots dotsQuantity={items.length} isShowing={itemToShow}/>
    </section>
  )
}

export default WhatWeDo