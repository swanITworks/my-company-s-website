import React, { useEffect, useState } from "react"
import classes from "./ourTeam.module.css"
import OurTeamHeader from "./01ourTeam_Header/ourTeam_Header"
import OurTeamBoxes from "./02ourTeam_Boxes/ourTeam_Boxes"
import OurTeamSkills from "./03ourTeam_Skills/ourTeam_Skills"
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
    skills: [{ marketing: 67 }, { communication: 54 }, { smailing: 79 }, { languages: 89 }],
  },
  {
    name: "Jesica Brown",
    image: imageSecond,
    title: "BACK END DEVELOPER",
    info: "Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    skills: [{ Python: 60 }, { Databases: 85 }, { Linux: 64 }, { happinesae: 79 }],
  },
  {
    name: "Crystine Wild",
    image: imageThird,
    title: ".NET DEVELOPER",
    info: "Making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text",
    skills: [{ "C#": 85 }, { ".NET": 78 }, { "Java": 65 }, { "SQL:": 89 }],
  },
  {
    name: "Jevgen Semonov",
    image: imageFourth,
    title: "FRONT END DEVELOPER",
    info: "Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    skills: [{ "Java Script": 99 }, { "Adobe Ilustrator": 54 }, { "React JS": 45 }, { "CSS": 70 }],
  },
]

const OurTeam = () => {

  const [progressValues, setProgressValues] = useState([])
  const [person, setPerson] = useState(0)
  const [employees] = useState(employeesData)

  useEffect(() => {
    changeProgress(person)
  }, [person])

  useEffect(() => {
    setProgressValues([0, 0, 0, 0])
  }, [])

  const changeProgress = (person) => {
    const values = employeesData[person].skills.map((item, index) => {
      const [result] = Object.values(item)
      return result
    })
    const newValues = [...values]
    setProgressValues(newValues)
  }

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
      default:
        return null
    }
  }

  return (
    <section tabIndex='-1' role="textbox" id={"ourTeam"} className={classes.ourTeam} onMouseEnter={() => changeProgress(person)}>
      <OurTeamHeader/>
      <div className={classes.middleSection}>
        <div aria-label="Change person -" role='button' tabIndex='0' className={classes.buttonLeft} onClick={() => {
          changePerson("subtract")
        }} onKeyPress={() => changePerson("subtract")}></div>
        <OurTeamBoxes person={employees[person]}/>
        <div aria-label="Change person +" role='button' tabIndex='0' className={classes.buttonRight} onClick={() => {
          changePerson("add")
        }} onKeyPress={() => changePerson("add")}></div>
      </div>
      <OurTeamSkills skills={employees[person].skills} progressValues={progressValues}/>
    </section>
  )
}

export default OurTeam