import React, { useEffect, useState } from "react"
import classes from "./ourTeam.module.css"
import OurTeamHeader from "./01ourTeam_Header/ourTeam_Header"
import OurTeamBoxes from "./02ourTeam_Boxes/ourTeam_Boxes"
import OurTeamSkills from "./03ourTeam_Skills/ourTeam_Skills"
import { graphql, useStaticQuery } from "gatsby"
import useTransltions from "../useTranslations"

const getImages = graphql`
{
  allFile(filter: {relativeDirectory: {eq: "ourTeam"}}) {
    nodes {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
      name
    }
  }
}
`

const OurTeam = () => {
  const { allFile: { nodes : peopleImages }} = useStaticQuery(getImages)
  const { ourTeam: { title, slogan, people } } = useTransltions();

  console.log(peopleImages);

  const findImage = ( name ) => {
    const person = peopleImages.find( person => person.name === name)
    return (
      person.childImageSharp.fluid
        )
  }

  const employeesData = [
    {
      name: "Adrian Sobolewski",
      image: findImage('adrian'),
      title: "SALES EXECUTIVE",
      info: "Adrian will guarantee that you will be served at the highest level. He will help develop your ideas and match the company's offer to your needs.",
      skills: [{ marketing: 67 }, { communication: 93 }, { 'keep smiling': 79 }, { languages: 89 }],
    },
    {
      name: "Konrad Olson",
      image: findImage('adrian'),
      title: "PYTHON DEVELOPER",
      info: "Clean code lover, every bit matters to him. In a previous incarnation, he probably was a snake because Python has no secrets from him. In his spare time he is a fan of various types of beer and rock and roll.",
      skills: [{ Django: 87 }, { Databases: 64 }, { Scrum: 79 }, { "clean code": 89 }],
    },
    {
      name: "Konrad Olson",
      image: findImage('adrian'),
      title: "PYTHON DEVELOPER",
      info: "Clean code lover, every bit matters to him. In a previous incarnation, he probably was a snake because Python has no secrets from him. In his spare time he is a fan of various types of beer and rock and roll.",
      skills: [{ Django: 87 }, { Databases: 64 }, { Scrum: 79 }, { "clean code": 89 }],
    },
  ]

  const [progressValues, setProgressValues] = useState([])
  const [person, setPerson] = useState(0)
  const [employees] = useState(people)

  useEffect(() => {
    changeProgress(person)
  }, [person])

  useEffect(() => {
    setProgressValues([0, 0, 0, 0])
  }, [])

  const changeProgress = (person) => {
    const values = people[person].skills.map((item, index) => {
      const result = []
      result.push( item.skillValue )
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
      <OurTeamHeader title={title} slogan={slogan}/>
      <div className={classes.middleSection}>
        <div aria-label="Change person -" role='button' tabIndex='0' className={classes.buttonLeft} onClick={() => {
          changePerson("subtract")
        }} onKeyPress={() => changePerson("subtract")}></div>
        <OurTeamBoxes person={employees[person]} image={findImage(employees[person].imageName)}/>
        <div aria-label="Change person +" role='button' tabIndex='0' className={classes.buttonRight} onClick={() => {
          changePerson("add")
        }} onKeyPress={() => changePerson("add")}></div>
      </div>
      <OurTeamSkills skills={employees[person].skills} progressValues={progressValues}/>
    </section>
  )
}

export default OurTeam