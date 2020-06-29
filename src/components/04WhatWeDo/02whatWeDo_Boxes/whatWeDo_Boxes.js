import React from "react"
import classes from "./whateWeDo_Boxes.module.css"
import WhatWeDoBoxesBox from "./01Box/whatWeDo_Boxes_Box"

const WhatWeDo_Boxes = (props) => {

  const showBoxes = props.showBoxes
  return (
    <article className={classes.whatWeDoBoxes}>
      {showBoxes.map((item, index) => {
          if (index % 2 === 0) {
            return <WhatWeDoBoxesBox key={index} title={item.title} info={item.info} even={true}/>
          } else {
            return <WhatWeDoBoxesBox key={index} title={item.title} info={item.info} even={false}/>
          }
      })}

    </article>
  )
}

export default WhatWeDo_Boxes