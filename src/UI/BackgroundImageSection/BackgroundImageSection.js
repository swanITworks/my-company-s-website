import React, { useState, Children, isValidElement, cloneElement } from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const getImages = graphql`
{
  fluid1:file(relativePath: {eq: "slider/slider1.jpg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
  fluid2:file(relativePath: {eq: "slider/slider2.jpg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }  
  fluid3:file(relativePath: {eq: "slider/slider3.jpg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
  fluid4:file(relativePath: {eq: "slider/slider4.jpg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`

function BackgroundSection({ children }) {

  const [selectedImage, setSelectedImage] = useState(0)
  const data = useStaticQuery(getImages)
  const name = Object.keys(data);

  const changeImageHandler = (action) => {

    switch (action) {
      case "plus":
        setSelectedImage(
          prevState => {
            if (prevState !== (name.length - 1)) {
              return prevState + 1
            } else return 0
          }
        )
        break;
      case "minus":
        setSelectedImage(
          prevState => {
            if (prevState !== 0) {
              return prevState - 1
            } else return (name.length - 1)
          }
        )
        break;
      default:
        console.log('chuj')
    }
  }




  const childrenWithProps = Children.map(children, child => {
    // Checking isValidElement is the safe way and avoids a TS error too.
    if (isValidElement(child)) {
      return cloneElement(child, { changeImageHandler })
    }
    return child
  })

  return (
    <BackgroundImage
      style={{
        height: "100vh",
        backgroundColor: 'black',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '100%'
      }}
      Tag="section"
      fluid={data[name[selectedImage]].childImageSharp.fluid}
      handler={changeImageHandler}
    >
      {childrenWithProps}
    </BackgroundImage>
  )
}


export default BackgroundSection