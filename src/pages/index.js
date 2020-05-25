import React from "react"
import Layout from "../hoc/Layout/layout"
import Slider from "../components/slider/slider"
import AboutUs from "../components/aboutUs/aboutUs"
import WhatWeDo from "../components/whatWeDo/whatWeDo"

import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Slider/>
    <AboutUs/>
    <WhatWeDo/>
  </Layout>
)

export default IndexPage
