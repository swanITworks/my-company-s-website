import React from "react"
import classes from "./whateWeDo_Boxes_Box.module.css"
import { Link } from "gatsby"
import mobileApps from "../../../../images/mobileApps.jpg"
import webApps from "../../../../images/webApps.jpg"
import websites from "../../../../images/websites.jpg"


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
      break
    case "Web Apps":
      imageStyles.backgroundImage = `url(${webApps})`
      break
    case "Websites":
      imageStyles.backgroundImage = `url(${websites})`
      break
  }

  const classArray= [classes.even];

  return (
    <article className={classes.whatWeDoBoxes_Box}>
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
        <Link to={props.url} className={even !== true ? classes.LinkEven: classes.Link}>READ MORE</Link>
      </div>
    </article>
  )
}

export default whatWeDo_Boxes_Box