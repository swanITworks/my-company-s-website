import React,{ useState } from "react"
import classes from "./sideDrawer.module.css"
import NavItem from "../navigationItems/navigationItem/navigationItem"
import { graphql, useStaticQuery } from 'gatsby'
import useTranslations from "../../useTranslations.js"
import LangsFlags from "../navigationItems/langsFlags/langsFlags"
import { LocaleContext } from "../../../layouts/layout"


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

const SideDrawer = (props) => {
  
  const { links: { home, about, whatWeDo, contact } } = useTranslations();
  const [ mouseOn, setMouseOn ] = useState( false );
  const data = useStaticQuery(langs);
  const { allFile: { edges : namesOfLang } } = data
  const { locale } = React.useContext(LocaleContext);
  let classesArray;

  if (props.isscroll) {
    classesArray = [classes.sideDrawerScroll]

  } else {
    classesArray = [classes.sideDrawer]
  }
  return (
    <div className={classesArray.join(" ")}>
      <ul className={classes.listItems}>
        <li>
          <NavItem key={1} to='/' text={ home } isscroll={false} mobile={true}/>
        </li>
        <li>
          <NavItem key={2} to='/about' text={ about } isscroll={false} mobile={true}/>
        </li>
        <li>
          <NavItem key={3} to='/whatwedo' text={ whatWeDo } isscroll={false} mobile={true}/>
        </li>
        <li>
          <NavItem key={4} to='/contact' text={ contact } isscroll={false} mobile={true}/>
        </li>
        <li>
          <div 
            role="button" 
            tabIndex={0} 
            onMouseEnter={()=>{setMouseOn(true);}} 
            onMouseLeave={()=>{setMouseOn(false);}} 
            onFocus={()=>{setMouseOn(true)}}>
              <LangsFlags items={mouseOn ? namesOfLang : [{node:{name:locale}}]}/>
            </div>
          </li>
      </ul>
    </div>
  )
}

export default SideDrawer