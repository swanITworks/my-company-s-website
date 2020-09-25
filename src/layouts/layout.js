import React from "react"
import PropTypes from "prop-types"
import Header from "../components/01Header/header"
import classes from "./layout.module.css"
import Footer from "../components/Footer/Footer"
import SEO from "../components/SEO/SEO"

const LocaleContext = React.createContext()

const Layout = ({ children, pageContext: { locale, title, description } }) => {

  return (
    <LocaleContext.Provider value={{ locale }}>
        <SEO title={title} lang={locale} description={description}/>
        <Header/>
          <main className={classes.main}>{children}</main>
        <Footer/>
    </LocaleContext.Provider>
  )
}

export { Layout, LocaleContext }

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}