import React from 'react'
import './SignUp.css'
import logoBrand from '../../assets/logo.png'

const Signup = () => {
  return (
    <div className="signup-page">
      <div className="signup-content">
        {/* Logo App */}
        <img src={logoBrand} alt="Ful's Crypto" className="signup-logo" />

        {/* Info */}
        <h1>404 Not Found</h1>
        <p className="signup-text">
          You cannot create an account at this time. <br/>
          Please try again later.
        </p>
      </div>
    </div>
  )
}

export default Signup
