import React from 'react'
import './NewsLetter.css'
const NewsLetter = () => {
  return (
    <div className='newsletter'>
      <h1>Get Exclusivse offers on your email</h1>
      <p>subscribe to our newletter and stay updated </p>
      <div>
        <input type="email" placeholder='your email id' />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter
