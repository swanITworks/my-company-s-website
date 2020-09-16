import React, { useEffect, useState } from "react"
import classes from "./ourTeam.module.css"
import OurTeamHeader from "./01ourTeam_Header/ourTeam_Header"
import OurTeamBoxes from "./02ourTeam_Boxes/ourTeam_Boxes"
import OurTeamSkills from "./03ourTeam_Skills/ourTeam_Skills"

import { graphql, useStaticQuery } from "gatsby"

const getImages = graphql`
{
  adrian:file(relativePath: {eq: "ourTeam/adrian.jpg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  },
  konrad:file(relativePath: {eq: "ourTeam/konrad.jpg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  },
  jessica:file(relativePath: {eq: "ourTeam/jessica.jpg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  },
  chrystina:file(relativePath: {eq: "ourTeam/chrystina.jpg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  },
  jevgeni:file(relativePath: {eq: "ourTeam/jevgeni.jpg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  },
  michal:file(relativePath: {eq: "ourTeam/michal.jpg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  },
  
}
`

const OurTeam = () => {
  const data = useStaticQuery(getImages)
  console.log(data);
  console.log(Object.keys(data).find( item => item === 'adrian'));
  const employeesData = [
    {
      name: "Adrian Sobolewski",
      image: data.adrian.childImageSharp.fluid,
      title: "SALES EXECUTIVE",
      info: "Adrian will guarantee that you will be served at the highest level. He will help develop your ideas and match the company's offer to your needs.",
      skills: [{ marketing: 67 }, { communication: 93 }, { 'keep smiling': 79 }, { languages: 89 }],
    },
    {
      name: "Konrad Olson",
      image: data.konrad.childImageSharp.fluid,
      title: "PYTHON DEVELOPER",
      info: "Clean code lover, every bit matters to him. In a previous incarnation, he probably was a snake because Python has no secrets from him. In his spare time he is a fan of various types of beer and rock and roll.",
      skills: [{ Django: 87 }, { Databases: 64 }, { Scrum: 79 }, { "clean code": 89 }],
    },
    {
      name: "Jessica Brown",
      image: data.jessica.childImageSharp.fluid,
      title: "BACK END DEVELOPER",
      info: "Linux enthusiast, knows all commands by heart. He moves around the SQL database with deadly accuracy. No data is foreign to her, give her some characteristics and she will calculate the size of your shoe.",
      skills: [{ Java: 84 }, { SQL: 85 }, { Linux: 74 }, { diligence: 99 }],
    },
    {
      name: "Chrystina Wild",
      image: data.chrystina.childImageSharp.fluid,
      title: ".NET DEVELOPER",
      info: "She is an open mind person, software architecture is her specialty. Can predict the future and direction of software development. She loves horse riding and dreams of her own stud.",
      skills: [{ "C#": 85 }, { ".NET": 78 }, { "Java": 65 }, { "software architecture": 89 }],
    },
    {
      name: "Jevgeni Simonov",
      image: data.jevgeni.childImageSharp.fluid,
      title: "FRONT END DEVELOPER",
      info: "He likes vanilla javascript, preferably every piece of code written by himself. He knows design and user experience. Sometimes he can draw by hand too.",
      skills: [{ "Java Script": 99 }, { "Adobe Ilustrator": 54 }, { "React JS": 45 }, { "CSS": 70 }],
    },
    {
      name: "Michal Labedz",
      image: data.michal.childImageSharp.fluid,
      title: "JUNIOR FULL STACK DEVELOPER",
      info: "Ambitious, highly motivated to achieve goals. He has experience in business processes. Consistently increases his knowledge in programming. In his spare time he loves to sail the seas and oceans.",
      skills: [{ "React JS": 75 }, { "Node JS": 54 }, { "MongoDB": 45 }, { "HTML/CSS": 90 }],
    },
  ]

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