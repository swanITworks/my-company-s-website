import React, { useState } from "react"
import classes from "./slider.module.css"
import SliderButton from "./sliderButton/sliderButton"
import SliderButtonMobile from "./sliderButtonMobile/sliderButtonMobile"
import ActionButton from "../../UI/actionButton/actionButton"
import BackgroundImage from "gatsby-background-image"
import { graphql, useStaticQuery } from "gatsby"
import useTranslations from "../useTranslations.js"

  
const getData = graphql`
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
  translationsJson {
    slider {
      items {
        introduction
        mainTitleStart
        mainTitleSpan
        mainTitleEnd
        slogan
        onClick
        marginTop
      }
    }
  }
}
`

const Slider = (props) => {
  
  const [chosenSlider, setChosenSlider] = useState(props.selected || 0)
  const data = useStaticQuery(getData)
  const { translationsJson: { slider: { items :sliders } } } = data
  const images = Object.keys(data)
  const { slider: { items :sliderTranslations }} = useTranslations();
  const { slider: { buttons:{ exploreMore, action}}} = useTranslations();
 
  
  
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
        <h3 className={classes.hello}>{sliderTranslations[chosenSlider].introduction}</h3>
        <h2
          className={classes.mainSlogan}>{sliderTranslations[chosenSlider].mainTitleStart}<br/><span>{sliderTranslations[chosenSlider].mainTitleSpan}</span> {sliderTranslations[chosenSlider].mainTitleEnd}
        </h2>
        <h1 className={classes.slogan}>{sliderTranslations[chosenSlider].slogan}</h1>
        <div>
          <ActionButton type='transparent' text={exploreMore} onClick={sliderTranslations[chosenSlider].onClick}/>
          <ActionButton text={action} to={"/contact#contact"}/>
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