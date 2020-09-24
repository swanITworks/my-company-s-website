import React, { useEffect, useState } from "react"
import classes from "./whatWeDo.module.css"
import Header from "./01whatWeDo_Header/whatWeDo_Header"
import Boxes from "./02whatWeDo_Boxes/whatWeDo_Boxes"
import Dots from "./03WhatWeDo_Dots/dots"
import useTranslations from "../useTranslations"


const WhatWeDo = () => {

  const [itemToShow, setItemToShow] = useState(1)

const { whatWeDo: { title, description, things, mainSlogan: { slogan, markedSlogan } } } = useTranslations()
  const { whatWeDo: { things : items} } = useTranslations()
  
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
  }, [items.length])

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

  const toShow = showBoxes(things)

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
      <Header title={title} slogan={slogan} markedSlogan={markedSlogan} description={description}/>
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