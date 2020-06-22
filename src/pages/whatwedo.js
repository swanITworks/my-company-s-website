import React from "react"
import Layout from "../hoc/Layout/layout"
import Slider from "../components/02Slider/slider"
import WhatWeDo from "../components/04WhatWeDo/whatWeDo"


const about = () => (
  <Layout>
    <Slider selected={2}/>
    <WhatWeDo/>
  </Layout>
)

export default about;
