import React from "react"
import classes from "./whateWeDo_Boxes.module.css"
import WhatWeDo_Boxes_Box from "./01Box/whatWeDo_Boxes_Box"

const items = [
  {
    title: "Mobile Apps",
    info: "Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  },
  {
    title: "Web Apps",
    info: "Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  },
  {
    title: "Websites",
    info: "Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  },

]

const whatWeDo_Boxes = () => {
  return (
    <article className={classes.whatWeDoBoxes}>
      {items.map((item, index) => {
        if (index % 2 === 0) {
          return <WhatWeDo_Boxes_Box title={item.title} info={item.info} even={true}/>
        } else {
          return <WhatWeDo_Boxes_Box title={item.title} info={item.info} even={false}/>
        }
      })}
    </article>
  )
}

export default whatWeDo_Boxes