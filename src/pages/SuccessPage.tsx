import React from 'react'
import { useNavigate } from 'react-router-dom'
import'./success.css'

const SuccessPage = () => {
  const navigate = useNavigate()
  const handHome = () => {
    navigate('/')
  }
  return (
    <div>
     <div className='content'>
  <div className="wrapper-1">
    <div className="wrapper-2">
      <h1>Thank you !</h1>
      <p>Thanks for using Olean Project.</p>
      <p>you should receive an email soon of your project </p>
      <p>for all inquiries or questions call us on +2348117830247</p>
      <button className="go-home" onClick={handHome}>
      go home
      </button>
    </div>
    <div className="footer-like">
      
    </div>
</div>
</div>



<link href="https://fonts.googleapis.com/css?family=Kaushan+Script|Source+Sans+Pro" rel="stylesheet"></link>
    </div>
  )
}

export default SuccessPage