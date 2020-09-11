import React from "react"
import NavItem from "./navigationItem/navigationItem"
import classes from './navigationItems.module.css'
import { Link } from "gatsby"
import { graphql, useStaticQuery } from 'gatsby'
import { LocaleContext } from "../../../layouts/layout"
import useTranslations from "../../useTranslations.js"
import LangsItem from "./langsItem/langsItem"

const langs = graphql`
  {
    allFile(filter: {sourceInstanceName: {eq: "translations"}}, sort: {order: ASC, fields: childTranslationsJson___priority}) {
      edges {
        node {
          name
        }
      }
    }
  }`

const NavigationItems = ( props ) => {

  const { links: { home, about, whatWeDo, contact } } = useTranslations();

  const data = useStaticQuery(langs);

  const { allFile: { edges : namesOfLang } } = data

  const scroll = props.isScroll

  const { locale } = React.useContext(LocaleContext);

  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <NavItem key={1} to={'/'} text={home} isScroll={scroll} mobile={false}/>
        </li>
        <li>
          <NavItem key={2} to={'/about'} text={about} isScroll={scroll} mobile={false}/>
        </li>
        <li>
          <NavItem key={3} to={'/whatwedo'} text={whatWeDo} isScroll={scroll} mobile={false}/>
        </li>
        <li>
          <NavItem key={4} to={'/contact'} text={contact} isScroll={scroll} mobile={false}/>
        </li>
          {namesOfLang.map((item,index) =><li><Link style={{margin:'10px'}} to={'/' + (item.node.name === 'en' ? '' : item.node.name)} key={4 + index + 1} text={item.node.name}><span>{item.node.name}</span></Link></li>)}
        </ul>
    </nav>
  )
}



export default NavigationItems