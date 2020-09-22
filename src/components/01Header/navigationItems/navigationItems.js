import React,{ useState } from "react"
import NavItem from "./navigationItem/navigationItem"
import classes from './navigationItems.module.css'
import { graphql, useStaticQuery } from 'gatsby'
import { LocaleContext } from "../../../layouts/layout"
import useTranslations from "../../useTranslations.js"
import LangsFlags from "./langsFlags/langsFlags"

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
  const scroll = props.isscroll
  const { locale } = React.useContext(LocaleContext);
  const [ mouseOn, setMouseOn ] = useState( false );

  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <NavItem key={1} to={'/'} text={home} isscroll={scroll} mobile={false}/>
        </li>
        <li>
          <NavItem key={2} to={'/about'} text={about} isscroll={scroll} mobile={false}/>
        </li>
        <li>
          <NavItem key={3} to={'/whatwedo'} text={whatWeDo} isscroll={scroll} mobile={false}/>
        </li>
        <li>
          <NavItem key={4} to={'/contact'} text={contact} isscroll={scroll} mobile={false}/>
        </li>
        <li  style={{margin:'0px', transform: 'translateY(8px)'}}>
          <div role="button" tabIndex={0} onMouseEnter={()=>{
            setMouseOn(true);
        }} onMouseLeave={()=>{
          setMouseOn(false);
        }} onFocus={()=>{setMouseOn(true)}}>
          <LangsFlags items={mouseOn ? namesOfLang : [{node:{name:locale}}]}/>
          </div>
        </li>
        </ul>
    </nav>
  )
}

export default NavigationItems