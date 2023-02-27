import React, { useState } from 'react'
import Style from "../../styles/PopUp.module.css"

const POPUP = (props) => {

    const[display,setDisplay]=useState(false)
 
     const popUpDisplay=()=>{

        setDisplay(!display);
     }  

  return (

    <div>
          
          <button onClick={popUpDisplay} className={Style.popupbtn}>Open</button>

{display && (
          <div className={Style.popup}>

              <div  onClick={popUpDisplay} className={Style.popupBg}/>

              <div className={Style.popupContent}>


                <main>{props.children}</main>


                <button onClick={popUpDisplay} className={Style.popUpClose}>X</button>


              </div>

              


          </div>
)}


    </div>
  )
}

export default POPUP;