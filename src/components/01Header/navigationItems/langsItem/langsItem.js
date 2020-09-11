import React from "react";
import UkFlag from "../../../../assets/uk.svg";
import DeFlag from "../../../../assets/de.svg";
import PlFlag from "../../../../assets/pl.svg";

const LangsItem = ( { lang } ) => {

    switch( lang ) {
        case 'en':
          return (
              <UkFlag style={{height: '50px'}}/>
          )

        case 'de':
            return (
            <DeFlag style={{height: '50px'}}/>
            )
        case 'pl':
            return (
            <PlFlag style={{height: '50px'}}/>
            )
        default:
          return (
              <div style={{width:'20px', height:'50px'}}>chuj</div>
          )
      }

};

export default LangsItem