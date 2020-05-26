import React from "react"
import classes from "./ourTeam.module.css"
import OurTeam_Header from "./01ourTeam_Header/ourTeam_Header"
import OurTeam_Boxes from "./02ourTeam_Boxes/ourTeam_Boxes"


const ourTeam = () => {
  return (
    <section className={classes.ourTeam}>
      <OurTeam_Header/>
      <OurTeam_Boxes/>
    </section>
  )
}

export default ourTeam;