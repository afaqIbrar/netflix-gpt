import React, { useState, useRef } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate'

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }
  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    // Sign In / Sign Up
  }

  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);
  return (
    <div>
      <Header />
      <div className='absolute'>
        <img className="concord-img vlv-creative" src="https://assets.nflxext.com/ffe/siteui/vlv3/a99688ca-33c3-4099-9baa-07a2e2acb398/0279102c-4f3f-4ed2-a283-cce57434d595/PK-en-20240520-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="" />
      </div>
      <div >
        <form onSubmit={(e) => e.preventDefault()} className='w-3/12 absolute p-12 bg-black bg-opacity-80 my-36 mx-auto right-0 left-0 text-white'>
          <h1 className='font-bold text-3xl py-4'>{isSignInForm ? 'Sign In' : 'Sign Up'}</h1>
          {!isSignInForm && (
            <input ref={fullName} type='text' placeholder='Full Name' className="p-4 my-4 w-full rounded bg-gray-700" />
          )}
          <input ref={email} type='email' placeholder='Email Address' className="p-4 my-4 w-full rounded bg-gray-700" />
          <input ref={password} type='password' placeholder='Password' className="p-4 my-4 w-full rounded bg-gray-700" />
          <p className='text-red-500 font-bold text-lg py-2'>{errorMessage}</p>
          <button className='py-4 my-4 rounded bg-red-700 w-full' onClick={handleButtonClick}>{isSignInForm ? 'Sign In' : 'Sign Up'}</button>
          <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? 'New to Netflix? Sign Up Now' : 'Already Registered? Sign In Now.'}  </p>
        </form>
      </div>
    </div>
  )
}

export default Login