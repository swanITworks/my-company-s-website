import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import LangsItem from './langsItem/langsItem.js';

export const getFlagsImages = graphql`
  {
    allFile(filter: {sourceInstanceName: {eq: "images"}, relativePath: {}, relativeDirectory: {eq: "langFlags"}}) {
      edges {
        node {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
          name
        }
      }
    }
  }
  `

const LangsFlags = ({ items }) => {

    const flagsImagesData = useStaticQuery( getFlagsImages );

    const { allFile: { edges : flags } } = flagsImagesData;

    return (
    items.map((item,index)=>{
        
        const searchElement = flags.find( flag => item.node.name === flag.node.name)

        return (
            <LangsItem key={searchElement.node.name} path={searchElement.node.childImageSharp.fluid} to={item.node.name}/>
                )
            }
        )
   )
}


export default LangsFlags

 //return (<li><Link style={{margin:'10px'}} to={'/' + (item.node.name === 'en' ? '' : item.node.name)} key={4 + index + 1} text={item.node.name}><span>{item.node.name}</span></Link></li>)