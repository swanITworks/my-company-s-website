import React from "react"
import Layout from "../hoc/Layout/layout"
import Slider from "../components/02slider/slider"
import AboutUs from "../components/03aboutUs/aboutUs"
import WhatWeDo from "../components/04whatWeDo/whatWeDo"
import OurTeam from "../components/05ourTeam/ourTeam"

import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Slider/>
    <AboutUs/>
    <WhatWeDo/>
    <OurTeam/>
  </Layout>
)

export default IndexPage
