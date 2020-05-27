import React, { useState } from "react"
import classes from "./ourTeam.module.css"
import OurTeam_Header from "./01ourTeam_Header/ourTeam_Header"
import OurTeam_Boxes from "./02ourTeam_Boxes/ourTeam_Boxes"
import OurTeam_Skills from "./03ourTeam_Skills/ourTeam_Skills"
import imageFirst from "../../images/1.jpg"
import imageSecond from "../../images/2.jpg"
import imageThird from "../../images/3.jpg"
import imageFourth from "../../images/4.jpg"

const employeesData = [
  {
    name: "Konrad Olson",
    image: imageFirst,
    title: "SELS EXECUTIVE UK",
    info: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
    skills: [{skill1:67},{skill2: 54},{skill3: 45},{skill4: 89}],
  },
  {
    name: "Jesica Brown",
    image: imageSecond,
    title: "BACK END DEVELOPER",
    info: "Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    skills: [{skill1:67},{skill2: 54},{skill3: 45},{skill4: 89}]
  },
  {
    name: "Crystine Wild",
    image: imageThird,
    title: ".NET DEVELOPER",
    info: "Making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text",
    skills: [{skill1:67},{skill2: 54},{skill3: 45},{skill4: 89}],
  },
  {
    name: "Jevgen Semonov",
    image: imageFourth,
    title: "FRONT END DEVELOPER",
    info: "Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    skills: [{skill1:67},{skill2: 54},{skill3: 45},{skill4: 89}],
  },
]

const OurTeam = () => {
  const [person, setPerson] = useState(0)
  const [employees, setEmployees] = useState(employeesData)
  const changePerson = (action) => {
    switch (action) {
      case "add":
        if (person >= 0 && person < employees.length - 1) {
          setPerson(person + 1)
        } else {
          setPerson(0)
        }
        break
      case "subtract":
        if (person > 0 && person <= employees.length - 1) {
          setPerson(person - 1)
        } else {
          setPerson(employees.length - 1)
        }
        break
    }
  }

  return (
    <section className={classes.ourTeam}>
      <OurTeam_Header/>
      <div className={classes.middleSection}>
        <div className={classes.buttonLeft} onClick={() => changePerson("subtract")}></div>
        <OurTeam_Boxes person={employees[person]}/>
        <div className={classes.buttonRight} onClick={() => changePerson("add")}></div>
      </div>
      <OurTeam_Skills skills={employees[person].skills}/>
    </section>
  )
}

export default OurTeam