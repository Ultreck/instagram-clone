import React from 'react'
import CenterNav from './CenterNav'

function SideNav() {
  return (
    <div className='d-none d-md-grid col-3 position-relative pt-5 mt-5 ms-4 bg-light' style={{zIndex:"-1"}}>
      <CenterNav/>
    </div>
  )
}

export default SideNav