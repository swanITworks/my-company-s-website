import React from "react"
import classes from "./Footer_Items_BoxWithTwitter.module.css"

const BoxWithTwitter = () => {
  return (
    <article className={classes.twitterBox}>
      <h4 className={classes.title}>TWETTER FEED</h4>
      <div className={classes.items}>
        <p className={classes.twitterTitle}>Twetter Title</p>
        <p>Nam ac elit a ante commodo tristique. Condimentum a vehicula hendrerit ac nisi Lorem ipsum dolor https://t.co/3JqlG2RTn3</p>
        <p>Date</p>
      </div>
    </article>
  )
};

export default BoxWithTwitter;