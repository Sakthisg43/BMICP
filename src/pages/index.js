import CreateAdmin from '../components/Create/CreateAdmin'
import React from 'react'
import CreateOperator from '../components/Create/CreateOperator'
import EditAdmin from '../components/Edit/EditAdmin'
import EditOperator from '../components/Edit/EditOperator'
import Login from '@/components/Login/Login'
import DataAnalytics from '@/components/DataAnalytics/DataAnalytics'
import DataAnalyticsData from '@/components/DataAnalytics/DataAnalyticsData'
import POPUP from '@/components/POPUP/POPUP'
import DropDown from "../components/DropDown/DropDown.js"
import CIA from "../components/CIA/CIA.js"



const index = () => {
  return (
    <div>

     {/* <CreateAdmin/>

     <hr/>
     <CreateOperator/>
     <hr/>
     <EditAdmin/>

     <hr/>
     <EditOperator/>

     <hr/>
     <Login/> */}
{/* <POPUP/> */}
<POPUP><CIA/></POPUP>
<DropDown/>
     {/* <DataAnalytics/> */}
     {/* <DataAnalyticsData/> */}

    </div>
  )
}

export default index