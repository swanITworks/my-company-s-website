import React, { useState } from "react"
import classes from "./ourTeam_Boxes.module.css"
import OurTeam_Boxes_Box from "./01Box/ourTeam_Boxes_Box"

const items = [
  {
    name: "Romek",
    position: "Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    skill1: 67,
    skill2: 100,
    skill3: 99,
    skill4: 99,
  },
  {
    name: "Bogdan",
    position: "Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    skill1: 67,
    skill2: 100,
    skill3: 99,
    skill4: 99,
  },
  {
    name: "Krystian",
    position: "Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    skill1: 67,
    skill2: 100,
    skill3: 99,
    skill4: 99,
  },
]


function ourTeam_Boxes() {
  const [person, setCount] = useState(0)
  return (
    <article className={classes.whatWeDoBoxes}>
      <OurTeam_Boxes_Box data={items[person]}/>
    </article>
  )
}

export default ourTeam_Boxes