import React from 'react'
import SubSidebar from './Sidebars/SubSidebar'
import MainSidebar from './Sidebars/MainSidebar'

const Sidebars = () => {
  return (
    <div className='flex'>
        <SubSidebar />
        <MainSidebar />
    </div>
  )
}

export default Sidebars