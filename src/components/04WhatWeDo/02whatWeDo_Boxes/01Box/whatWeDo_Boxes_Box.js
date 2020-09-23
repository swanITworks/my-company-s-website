import React from "react"
import classes from "./whateWeDo_Boxes_Box.module.css"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

const getImages = graphql`
{
  mobileApps:file(relativePath: {eq: "whatWeDo/mobileApps.jpg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
  webApps:file(relativePath: {eq: "whatWeDo/webApps.jpg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }  
  websites:file(relativePath: {eq: "whatWeDo/websites.jpg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
  erp:file(relativePath: {eq: "whatWeDo/erp.jpg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
  ecommerce:file(relativePath: {eq: "whatWeDo/ecommerce.jpg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  } 
  cms:file(relativePath: {eq: "whatWeDo/cms.jpg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
  crm:file(relativePath: {eq: "whatWeDo/crm.jpg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
  b2b:file(relativePath: {eq: "whatWeDo/b2b.jpg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
  bespoke:file(relativePath: {eq: "whatWeDo/bespoke.jpg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
  automation:file(relativePath: {eq: "whatWeDo/autom.jpg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
  integrations:file(relativePath: {eq: "whatWeDo/integrations.jpg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
  support:file(relativePath: {eq: "whatWeDo/itsupport.jpg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`

const WhatWeDo_Boxes_Box = (props) => {
  const title = props.title
  const info = props.info
  const even = props.even

  const data = useStaticQuery(getImages)

  const imageStyles = {
    height: "200px",
    backgroundPosition: "center",
  }

  let image

  switch (title) {
    case "Mobile Apps":
      image = <Img fluid={data.mobileApps.childImageSharp.fluid}/>
      break
    case "Web Apps":
      image = <Img fluid={data.webApps.childImageSharp.fluid}/>
      break
    case "Websites":
      image = <Img fluid={data.websites.childImageSharp.fluid}/>
      break
    case "E-commerce":
      image = <Img fluid={data.ecommerce.childImageSharp.fluid}/>
      break
    case "ERP Systems":
      image = <Img fluid={data.erp.childImageSharp.fluid}/>
      break
    case "CRM Software":
      image = <Img fluid={data.crm.childImageSharp.fluid}/>
      break
    case "B2B Systems":
      image = <Img fluid={data.b2b.childImageSharp.fluid}/>
      break
    case "Bespoke Software":
      image = <Img fluid={data.bespoke.childImageSharp.fluid}/>
      break
    case "Automation processes":
      image = <Img fluid={data.automation.childImageSharp.fluid}/>
      break
    case "Integration of systems":
      image = <Img fluid={data.integrations.childImageSharp.fluid}/>
      break
    case "IT support":
      image = <Img fluid={data.support.childImageSharp.fluid}/>
      break
    default:
      image = <Img fluid={data.websites.childImageSharp.fluid}/>
      break
  }

  let classesArray = [classes.whatWeDoBoxes_Box]

  if (even) {
    classesArray.push(classes.hide)
  } else {
    classesArray = [classes.whatWeDoBoxes_Box]
  }

  return (
    <article className={classesArray.join(" ")}>
      {image}
      <div className={even !== true ? classes.bottomEven : classes.bottom}>
        <header className={even !== true ? classes.titleEven : classes.title}>
          {title}
        </header>
        <p className={even !== true ? classes.infoEven : classes.info}>
          {info}
        </p>
        {/*<Link to={props.url} className={even !== true ? classes.LinkEven: classes.Link}>READ MORE</Link>*/}
      </div>
    </article>
  )
}

export default WhatWeDo_Boxes_Box