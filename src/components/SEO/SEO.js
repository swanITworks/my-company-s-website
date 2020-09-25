import React from 'react'
import { Helmet } from 'react-helmet'

const SEO = ({ title, description, lang }) => {
    return (
        <Helmet htmlAttributes={{ lang: lang }} title={title} >
            <meta name='descritpion' content={description}/>
        </Helmet>
    )
};

export default SEO