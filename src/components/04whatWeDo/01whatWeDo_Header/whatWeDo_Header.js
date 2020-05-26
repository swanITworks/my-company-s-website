import React from "react"
import classes from "./whatWeDo_Header.module.css"

const whatWeDo_Header = () => {
  return (
    <article className={classes.whatWeDoHeader}>
      <h2 className={classes.title}>WHAT WE DO</h2>
      <h3 className={classes.slogan}>Take the world’s <span>best services</span> For you</h3>
      <p className={classes.info}>Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut </p>
    </article>
  )
}

export default whatWeDo_Header