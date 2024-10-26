import React from 'react'
import Img from "../../../src/assets/Images/SignIn/SignIn_logo.png"
import "../SignIn/SignIn.css"

const SignIn = () => {
  return (
    <div id='SignIn'>
        <div className="container">
<form className='signIn-content'>
  <a href="/signIN" className='signIn-content-logo'><img src={Img} alt="signIn-logo"  /></a>
  <div className="input_group">
   <input className='sign__input' type="email"  placeholder="Email"  required/>
   </div>
   <div className="input_group">
   <input className='sign__input' type="password"  placeholder="Password" required />
   </div>
   <div className="chechBox input_group">
   <input type="checkbox" className='checkBox-inp'  />Remember Me
   </div>
   

  <button>SIGN In</button>
  <span>or</span>
  <div className="signIn-social">
<a href="/signIN">Sign in with</a>
<a href="/signIN">Sign in with</a>
<a href="/signIN">Sign in with</a>
  </div>

    <span className="sign__text">Don't have an account? <a href="/signIN">Sign up!</a></span>
    <span className="sign__text"><a href="/signIN">Forgot password?</a></span>
    </form>
        </div>
    </div>
  )
}

export default SignIn
