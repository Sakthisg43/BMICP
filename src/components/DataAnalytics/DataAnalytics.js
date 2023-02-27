import React from 'react'

const DataAnalytics = () => {
    return (

        <div>



            {about.map((abouts, index) => {


                var num = index + 1;
                console.log("iniitail", num)
                {
                    if (num % 2 == 0) {
                        console.log("evem", num)
                        var result = Style.AboutPet
                        console.log("classnam even", result)
                    }
                    else if (num % 2 != 0) {
                        console.log("odd", num)
                        var result = Style.AboutPetReverse
                        console.log("classnameodd", result)
                    }
                }



                return (
                    <div className={result}>

                        <div className={Style.Para}>
                            <span className={Style.ContentHead}>Computer Vision Algorithm</span>
                            <p>{abouts.statement}</p>
                        </div>
                        <div>
                            <Image src={`/${num}.jpg`} width='300' height='420' />
                        </div>
                    </div>
                )
            }

            )}

        </div>
    )
}

export default DataAnalytics

export async function getStaticProps() {





    const response = await fetch(`http://localhost:4000/About`)



    const data = await response.json();









    return {

        props: {
            about: data,
        }
    }
}