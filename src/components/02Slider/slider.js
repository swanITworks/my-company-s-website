import React, { useState } from "react"
import classes from "./slider.module.css"
import SliderButton from "./sliderButton/sliderButton"
import ActionButton from "../../UI/actionButton/actionButton"
import slider1 from "../../images/slider/slider1.jpg"
import slider2 from "../../images/slider/slider2.jpg"
import slider3 from "../../images/slider/slider3.jpg"
import slider4 from "../../images/slider/slider4.jpg"

const Slider = (props) => {
  const [chosenSlider, setChosenSlider] = useState(props.selected || 0);
  const sliders = [
    {
      introduction: "Welcome in cutting costs world.",
      mainTitleStart: "Grow your",
      mainTitleSpan: "business",
      mainTitleEnd: "with us",
      slogan: "We provide bespoke cloud software for your clients and company.",
      photo: slider1,
      onClick: '/#about',
    },
    {
      introduction: "Code craftsmen.",
      mainTitleStart: "We built worlds",
      mainTitleSpan: "the best",
      mainTitleEnd: "team for you.",
      slogan: "Our people make wonders, you will be surprised by the effects of our work.",
      photo: slider2,
      onClick: '/about#ourTeam',
      marginTop: '6rem',
    },
    {
      introduction: "Your manufacture.",
      mainTitleStart: "Can earn",
      mainTitleSpan: "big money",
      mainTitleEnd: "thanks us.",
      slogan: "We work with small and big Players, everybody is important!",
      photo: slider3,
      onClick: '/whatwedo#whatWeDo',

    },
    {
      introduction: "Time is going",
      mainTitleStart: "Contact Us and get",
      mainTitleSpan: "control",
      mainTitleEnd: "of your business",
      slogan: "All what you need we can pack to your watch.",
      photo: slider4,
      onClick: '/contact#contact',
    },
  ]

  const sliderStyles = {
    backgroundImage: `url(${sliders[chosenSlider].photo})`,
  }

  const choseSliderHandler = (action) => {
    switch (action) {
      case "plus":
        if (chosenSlider < (sliders.length-1) ) {
          setChosenSlider(prevState => prevState + 1)
          break;
        } else {
          setChosenSlider(0)
          break;
        }
      case "minus":
        if (chosenSlider !== 0) {
          setChosenSlider(prevState => prevState - 1)
          break;
        } else {
          setChosenSlider(sliders.length-1);
          break;
        }
    }
  }

  return (
    <section className={classes.slider} style={sliderStyles}>
      <div className={classes.items} >
        <SliderButton type="prev" onClick={()=>choseSliderHandler('minus')}/>
        <article className={classes.main} style={ sliders[chosenSlider].marginTop ? {marginTop:sliders[chosenSlider].marginTop} : null}>
          <h3 className={classes.hello}>{sliders[chosenSlider].introduction}</h3>
          <h2
            className={classes.mainSlogan}>{sliders[chosenSlider].mainTitleStart}<br/><span>{sliders[chosenSlider].mainTitleSpan}</span> {sliders[chosenSlider].mainTitleEnd}
          </h2>
          <h1 className={classes.slogan}>{sliders[chosenSlider].slogan}</h1>
          <div>
            <ActionButton type='transparent' text='EXPLORE MORE' onClick={sliders[chosenSlider].onClick}/><ActionButton text='CONTACT' onClick={'contact#contact'}/>
          </div>
        </article>
        <SliderButton type="next" onClick={()=>choseSliderHandler('plus')}/>
      </div>
    </section>
  )
}

export default Slider