import React, {useState}from 'react'
import './Auth.css'
import AboutAuth from './AboutAuth'
import logo  from '../../assets/logo.png'
const Auth = () => {
  const [isSignup, setIsSignup] = useState(false)
  const handleSwitch = () =>{
    setIsSignup(!isSignup)
  }
  return (
    <section class='auth-section'>
      {isSignup && 
       <AboutAuth/>
      }
  <div class='auth-container'>
{!isSignup && <img src={logo} height={60}  alt='stackoverflow' className='login-logo'/>}
      <form>
        {   isSignup &&(
          <lable htmlfor='name'>
            <h4>Display Name</h4>
            <input type="text" id='name' name='name'/>

          </lable>
        )

        }
        <label htmlfor ="email">
          <h4 id='email'>Email</h4>
          <input type="email" name='name' id='email'/>
        </label>

        <label htmlfor ="password">
          <div style={{display: "flex" , justifyContent: "space-between"}}>
          <h4 id='pass'>Password</h4>
         { !isSignup && <p style={{color:"#007ac6", fontSize: "13px"}}> Forgot Password</p>}
          </div>
         
          <input type="password" name='password' id='password' />
          { isSignup && <p style={{color : "#666767" , fontSize:"13px"}}>Passwords must contain at least eight <br/>characters, including at least 1 letter and <br/>1 number.</p>}
          { isSignup && 
      <div className='checkbx'>
          <input type="checkbox" id='check'/>
            <p style={{fontSize: "13px"}}>
            Opt-in to receive occasional<br/> product updates, user research invitations,<br/> company announcements, and digests.<br/>
            </p>
      </div>
          }
          <button type='submit'  className='auth-btn' id='auth-btn'>{isSignup ? 'Sign up' : 'Log in'}</button>
          { isSignup && <p style={{color : "#666767" , fontSize:"13px"}}>
            By clicking “Sign up”, you agree to our
            <span style={{color : "#007ac6"}}> terms of<br/>  service</span>,
            <span style={{color : "#007ac6"}}> privacy policy</span>
               and <span style={{color : "#007ac6"}}>cookie policy</span></p>}
         
        </label>
  
      </form>
      <p>
            {isSignup ? 'already have an account?' : "Don't have an account?"}
            <button type='button' className='handle-switch-btn' onClick={handleSwitch } >{isSignup ? 'Log in' : 'Sign up'}</button>
          </p>
  </div>
  </section>
  )
}

export default Auth