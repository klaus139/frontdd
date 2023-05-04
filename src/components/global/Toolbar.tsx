import React from 'react'
import Menu from '../../assets/menu-line.png'
import './toolbar.css'

const Toolbar = () => {
  return (
    <div className='tool-bar'>
        <div className='burger'>
        <i className="ri-menu-line"></i>
        <img src={Menu} alt='' style={{marginLeft: "5px", marginRight: "5px"}} />
        
        </div>
    </div>
  )
}

export default Toolbar