import React, { useState } from 'react'
import Login from "../Login/Login"
import Image from 'next/image'
import Images from 'public/Assets/img'
import  Style from "../../styles/CIA.module.css"
import DropDown from '../DropDown/DropDown'

const CIA = () => {

    const[label,setLabel]=useState();
  return (
    <div className={Style.CIA_Container}>
       
       <div>

        <Login/>
              
       </div>

       <div >
         <Image src={Images.CIA} width={300} height={200}/>
       </div>
      
     </div>
  )
}

export default CIA