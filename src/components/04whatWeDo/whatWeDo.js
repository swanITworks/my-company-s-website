import React from "react"
import classes from "./whatWeDo.module.css"
import Header from "./01whatWeDo_Header/whatWeDo_Header"
import Boxes from "./02whatWeDo_Boxes/whatWeDo_Boxes"
import Gradient from "./03backgroundGradient/whatWeDo_Gradient"

const whatWeDo = () => {
  return (
    <section className={classes.whatWeDo}>
      <Header/>
      <Boxes/>
      <Gradient/>
    </section>
  )
}

export default whatWeDo