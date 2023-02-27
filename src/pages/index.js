import CreateAdmin from '../components/Create/CreateAdmin'
import React from 'react'
import CreateOperator from '../components/Create/CreateOperator'
import EditAdmin from '../components/Edit/EditAdmin'
import EditOperator from '../components/Edit/EditOperator'
import Login from '@/components/Login/Login'



const index = () => {
  return (
    <div>

     <CreateAdmin/>

     <hr/>
     <CreateOperator/>
     <hr/>
     <EditAdmin/>

     <hr/>
     <EditOperator/>

     <hr/>
     <Login/>

    </div>
  )
}

export default index