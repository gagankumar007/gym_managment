import SideBar from './SideBar'
import { Outlet } from 'react-router-dom'
import { useState } from 'react'

export default function DashboardContent() {
  

  return (
    <>
      <div className='dashboard-content'>
        <SideBar />
        <Outlet/>
      </div>
    </>
  )
}
