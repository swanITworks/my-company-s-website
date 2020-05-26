import React from 'react';
import { Link } from 'gatsby';
import classes from './navigationItem.module.css'

const navItem = ( props ) => (
  <Link to={ props.url } className={classes.Link}>{ props.text }</Link>
)

export default navItem