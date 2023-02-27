import React from 'react'
import Style from "../../styles/DropDown.module.css"
import Images from 'public/Assets/img'
import Image from 'next/image'

const DropDown = ({label}) => {
  return (
    <div>
        <div className={Style.SelectField} >
            <span className={Style.Selectlabel}>{label}</span>
            
          <Image
            className={Style.SelectField_Arrow}
            src={Images.DropDown}

          />
        </div>
    </div>
  )
}

export default DropDown