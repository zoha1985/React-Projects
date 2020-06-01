import React from 'react'
import './style.css'

/**
* @author
* @function Card
**/

const Card = (props) => {
  return(
    <div className="carde">

        {props.children}
        
        </div>
   )

 }

export default Card