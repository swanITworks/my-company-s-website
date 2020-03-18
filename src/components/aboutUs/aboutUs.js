import React from "react"
import classes from "./aboutUs.module.css"

const aboutUs = () => {
  return (
    <section className={classes.aboutUs}>
      <article className={classes.aboutBox}>
        <div className={classes.leftSide}>
          <p>We are the best consulting Company business and innovation marketing</p>
        </div>
        <div className={classes.rightSide}>
          <p>Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
            ipsam voluptatem quia voluptas sit aspernatur aut tortor nec commodo ultricies, vitae viverra urna nulla sed
            turpis. Nullam lacinia faucibus risus, a euismod lorem tincidunt</p>
        </div>
      </article>
    </section>
  )
}

export default aboutUs