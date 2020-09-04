import React from "react"

import Slider from "../components/02Slider/slider"
import AboutUs from "../components/03AboutUs/aboutUs"
import OurTeam from "../components/05OurTeam/ourTeam"

const about = () => (
  <>
    <Slider selected={1}/>
    <AboutUs/>
    <OurTeam/>
  </>
)

export default about;
