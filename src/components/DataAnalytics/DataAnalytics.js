import React from 'react'
import Style from "../../styles/DataAnalytics.module.css"
import Images from 'public/Assets/img';
import Image from 'next/image';

const DataAnalytics = ({ index, data }) => {


    let result = index % 2 === 0 ? Style.fixContent : Style.reverseContent;
    let resultSub = index % 2 === 0 ? Style.fixContentSub : Style.reverseContentSub;

    
   
    return (




        <div className={result}>

            <div className={resultSub} >
                <span className={Style.ContentHead}>Computer Vision Algorithm</span>
                <p className={Style.ContentPara}>{data.description}</p>
            </div>
            <div>
                <Image src={data.ContentImg} width='300' height='420' />
            </div>


        </div>


    )
}

export default DataAnalytics;

