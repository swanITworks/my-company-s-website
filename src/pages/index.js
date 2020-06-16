import React from "react"
import Layout from "../hoc/Layout/layout"
import Slider from "../components/02Slider/slider"
import AboutUs from "../components/03AboutUs/aboutUs"
import WhatWeDo from "../components/04WhatWeDo/whatWeDo"
import OurTeam from "../components/05OurTeam/ourTeam"
import Contact from "../components/06Contact/contact"

const IndexPage = () => (
  <Layout>
    <Slider/>
    <AboutUs/>
    <WhatWeDo/>
    <OurTeam/>
    <Contact/>
  </Layout>
)

export default IndexPage
