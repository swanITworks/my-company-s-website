import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import classes from "./BackgroundImage.module.css"
import BackgroundImage from "gatsby-background-image"

const getImages = graphql`
{
  slider:file(relativePath: {eq: "slider/slider1.jpg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
    }
  
}
`

const BackgroundSection = (props) => {
  const data = useStaticQuery(getImages)

  return (
    <BackgroundImage
      Tag="section"
      fluid={data.slider.childImageSharp.fluid.src}
      backgroundColor={`#040e18`}>
      <p>chuj</p>
    </BackgroundImage>
  )
}

export default BackgroundSection

