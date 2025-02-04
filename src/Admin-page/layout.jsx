import React from 'react'
import { Outlet} from 'react-router-dom'
import SideBar from '../Admin/SideBar'

function layout() {
  return (
    <div className='d-flex'>
      <SideBar/>
      <Outlet/>
    </div>
  )
}

export default layout