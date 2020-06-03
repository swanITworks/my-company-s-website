import React from "react"
import Layout from "../hoc/Layout/layout"
import Slider from "../components/02slider/slider"
import AboutUs from "../components/03aboutUs/aboutUs"
import WhatWeDo from "../components/04whatWeDo/whatWeDo"
import OurTeam from "../components/05ourTeam/ourTeam"

import Image from "../components/image"
import SEO from "../components/seo"
import Contact from "../components/06contact/contact"
import Footer from "../components/Footer/Footer"

const IndexPage = () => (
  <Layout>
    <Slider/>
    <AboutUs/>
    <WhatWeDo/>
    <OurTeam/>
    <Contact/>
    <Footer/>
  </Layout>
)

export default IndexPage
