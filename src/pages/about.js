import React from "react"
import Layout from "../hoc/Layout/layout"
import Slider from "../components/02Slider/slider"
import AboutUs from "../components/03AboutUs/aboutUs"
import OurTeam from "../components/05OurTeam/ourTeam"

const about = () => (
  <Layout>
    <Slider selected={1}/>
    <AboutUs/>
    <OurTeam/>
  </Layout>
)

export default about;
