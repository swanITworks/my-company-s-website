import React from "react"
import Layout from "../hoc/Layout/layout"
import Slider from "../components/02Slider/slider"
import Contact from "../components/06Contact/contact"

const about = () => (
  <Layout>
    <Slider selected={3}/>
    <Contact/>
  </Layout>
)

export default about
