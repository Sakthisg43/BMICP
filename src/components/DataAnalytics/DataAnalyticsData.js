import React from 'react'
import DataAnalytics from './DataAnalytics'
import Images from 'public/Assets/img'
import Style from "../../styles/DataAnalytics.module.css"

const DataAnalyticsData = () => {


    const AnalyticsData = [
        {
            ContentImg:Images.CIA,
            description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat."
        },
        {
            ContentImg:Images.CVA,
            description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat."
        }
    ]


    return (

        <div className={Style.Analytics_Container}>



            {AnalyticsData.map((value, index) => {


              



                return (

                    <DataAnalytics key={index}  index={index} data={value} />
                )

            }

            )}

        </div>
    )
}


export default DataAnalyticsData;

// export async function getStaticProps() {





//     const response = await fetch(`http://localhost:5000/DataAnalytics`)
//     const data = await response.json();

//     console.log("sfbeyfeye",data)

//     return {

//         props: {
//             about: {data},
//         }
//     }
// }