import React from "react"
import classes from "./whateWeDo_Boxes_Box.module.css"
import mobileApps from "../../../../images/whatWeDo/mobileApps.jpg"
import webApps from "../../../../images/whatWeDo/webApps.jpg"
import websites from "../../../../images/whatWeDo/websites.jpg"
import erp from "../../../../images/whatWeDo/erp.jpg"
import ecommerce from "../../../../images/whatWeDo/ecommerce.jpg"
import cms from "../../../../images/whatWeDo/cms.jpg"
import crm from "../../../../images/whatWeDo/crm.jpg"
import b2b from "../../../../images/whatWeDo/b2b.jpg"
import bespoke from "../../../../images/whatWeDo/bespoke.jpg"
import automation from "../../../../images/whatWeDo/autom.jpg"
import integrations from "../../../../images/whatWeDo/integrations.jpg"
import support from "../../../../images/whatWeDo/itsupport.jpg"


const whatWeDo_Boxes_Box = (props) => {
  const title = props.title
  const info = props.info
  const even = props.even;

  const imageStyles = {
    height: "200px",
    backgroundPosition: "center",
  }

  switch (title) {
    case "Mobile Apps":
      imageStyles.backgroundImage = `url(${mobileApps})`
      break;
    case "Web Apps":
      imageStyles.backgroundImage = `url(${webApps})`
      break;
    case "Websites":
      imageStyles.backgroundImage = `url(${websites})`
      break;
    case "ERP Systems":
      imageStyles.backgroundImage = `url(${erp})`
      break;
    case "E-commerce":
      imageStyles.backgroundImage = `url(${ecommerce})`
      break;
      case "CMS Systems":
      imageStyles.backgroundImage = `url(${cms})`
      break;
      case "CRM Software":
      imageStyles.backgroundImage = `url(${crm})`
      break;
      case "B2B Systems":
      imageStyles.backgroundImage = `url(${b2b})`
      break;
      case "Bespoke Software":
      imageStyles.backgroundImage = `url(${bespoke})`
      break;
      case "Automation processes":
      imageStyles.backgroundImage = `url(${automation})`
      break;
      case "Integration of systems":
      imageStyles.backgroundImage = `url(${integrations})`
      break;
      case "IT support":
      imageStyles.backgroundImage = `url(${support})`
      break;
    default:
      imageStyles.backgroundImage = `url(${mobileApps})`
      break;
  }

  let classesArray = [classes.whatWeDoBoxes_Box]

  if (even){
    classesArray.push(classes.hide)
  } else {
    classesArray = [classes.whatWeDoBoxes_Box]
  }

  return (
    <article className={classesArray.join(' ')}>
      <div className={classes.top}>
        <div style={imageStyles}/>
      </div>
      <div className={even !== true ? classes.bottomEven: classes.bottom}>
        <header className={even !== true ? classes.titleEven: classes.title}>
          {title}
        </header>
        <p className={even !== true ? classes.infoEven: classes.info}>
          {info}
        </p>
        {/*<Link to={props.url} className={even !== true ? classes.LinkEven: classes.Link}>READ MORE</Link>*/}
      </div>
    </article>
  )
}

export default whatWeDo_Boxes_Box