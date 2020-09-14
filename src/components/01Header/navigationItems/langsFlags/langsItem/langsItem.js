import React from "react";
import Img from "gatsby-image";
import { Link } from "gatsby";
import locales from "../../../../../../config/i18n.js"

const LangsItem = ( { path, to } ) => {

    const linkPath = (locales[to].default) ? '/' : '/' + to

    return (
       <div style={{width:'30px', height:'30px',display:'inline-block',margin:'2px'}}>
            <Link to={linkPath}><Img fluid={path}/></Link>
       </div> 
   )
};

export default LangsItem