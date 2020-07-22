import React, { useState } from "react"
import classes from "./slider.module.css"
import SliderButton from "./sliderButton/sliderButton"
import SliderButtonMobile from "./sliderButtonMobile/sliderButtonMobile"
import ActionButton from "../../UI/actionButton/actionButton"
import BackgroundImage from "gatsby-background-image"
import { graphql, useStaticQuery } from "gatsby"

const getImages = graphql`
{
  fluid1:file(relativePath: {eq: "slider/slider1.jpg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
  fluid2:file(relativePath: {eq: "slider/slider2.jpg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }  
  fluid3:file(relativePath: {eq: "slider/slider3.jpg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
  fluid4:file(relativePath: {eq: "slider/slider4.jpg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`

const Slider = (props) => {
  const [chosenSlider, setChosenSlider] = useState(props.selected || 0)
  const data = useStaticQuery(getImages)
  const images = Object.keys(data)
  const sliders = [
    {
      introduction: "Stick to the essentials.",
      mainTitleStart: "Make your",
      mainTitleSpan: "business",
      mainTitleEnd: "flourish.",
      slogan: "Just tell us what and we will build your bespoke software.",
      onClick: "/#about",
    },
    {
      introduction: "Code craftsmen.",
      mainTitleStart: "We built the worlds",
      mainTitleSpan: "best team",
      mainTitleEnd: "for you.",
      slogan: "Collaborate with us and be surprised at what can be accomplished.",
      onClick: "/about#ourTeam",
      marginTop: "6rem",
    },
    {
      introduction: "Your business.",
      mainTitleStart: "Can earn",
      mainTitleSpan: "big money",
      mainTitleEnd: "with us.",
      slogan: "Small or large business, we don’t discriminate.",
      onClick: "/whatwedo#whatWeDo",

    },
    {
      introduction: "Time is precious.",
      mainTitleStart: "Contact us and",
      mainTitleSpan: "take back",
      mainTitleEnd: "control.",
      slogan: "All your IT needs can be covered by us.",
      onClick: "/contact#contact",
    },
  ]

  const choseSliderHandler = (action) => {
    switch (action) {
      case "plus":
        if (chosenSlider < (sliders.length - 1)) {
          setChosenSlider(prevState => prevState + 1)
          break
        } else {
          setChosenSlider(0)
          break
        }
      case "minus":
        if (chosenSlider !== 0) {
          setChosenSlider(prevState => prevState - 1)
          break
        } else {
          setChosenSlider(sliders.length - 1)
          break
        }
      default:
        return null
    }
  }

  return (
    <BackgroundImage className={classes.slider} Tag="section" fluid={data[images[chosenSlider]].childImageSharp.fluid}>
      <SliderButton action={'minus'} click={() => choseSliderHandler("minus")}/>
      <article className={classes.main}
               style={sliders[chosenSlider].marginTop ? { marginTop: sliders[chosenSlider].marginTop } : null}>
        <h3 className={classes.hello}>{sliders[chosenSlider].introduction}</h3>
        <h2
          className={classes.mainSlogan}>{sliders[chosenSlider].mainTitleStart}<br/><span>{sliders[chosenSlider].mainTitleSpan}</span> {sliders[chosenSlider].mainTitleEnd}
        </h2>
        <h1 className={classes.slogan}>{sliders[chosenSlider].slogan}</h1>
        <div>
          <ActionButton type='transparent' text='EXPLORE MORE'
                        onClick={sliders[chosenSlider].onClick}/><ActionButton text='CONTACT'
                                                                               onClick={"contact#contact"}/>
        </div>
      </article>
      <SliderButton action={'plus'} click={() => choseSliderHandler("plus")}/>

      <div className={classes.mobileArows}>
        <SliderButtonMobile type="prev" onClick={() => choseSliderHandler("minus")}/>
        <SliderButtonMobile type="next" onClick={() => choseSliderHandler("plus")}/>
      </div>
    </BackgroundImage>
  )
}

export default Slider