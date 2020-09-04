import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../components/01Header/header"
import classes from "./layout.module.css"
import Footer from "../components/Footer/Footer"

const LocaleContext = React.createContext()

const Layout = ({ children, pageContext: { locale } }) => {

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <LocaleContext.Provider value={{ locale }}>
      <Header siteTitle={data.site.siteMetadata.title}/>
      <main className={classes.main}>{children}</main>
      <Footer/>
    </LocaleContext.Provider>
  )
}

export { Layout, LocaleContext }

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

