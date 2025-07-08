import React from 'react'
import './CSS/LoginSignup.css'

const LoginSignup = () => {
  return (
    <div className='loginsingup-container'>
      <h1>Sign Up</h1> 
      <div className="loginsignup-fields">
        <input type="text" placeholder='Your Name' />
        <input type="email" placeholder='Email Address' />
        <input type="password" placeholder='Password' />
      </div>
      <button>Continue</button>
      <p className="loginsignup-login">Already have an account? <span>login here</span></p>
      <div className="loginsignup-agree">
        <input type="checkbox" name='' id='' />
        <p>By c0ntinuing,i agree to the terms of use & privarcy policy</p>
      </div>
    </div>
  )
}

export default LoginSignup
