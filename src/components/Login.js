import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState();

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }
  return (
    <div>
      <Header />
      <div className='absolute'>
        <img class="concord-img vlv-creative" src="https://assets.nflxext.com/ffe/siteui/vlv3/a99688ca-33c3-4099-9baa-07a2e2acb398/0279102c-4f3f-4ed2-a283-cce57434d595/PK-en-20240520-popsignuptwoweeks-perspective_alpha_website_small.jpg" srcset="https://assets.nflxext.com/ffe/siteui/vlv3/a99688ca-33c3-4099-9baa-07a2e2acb398/0279102c-4f3f-4ed2-a283-cce57434d595/PK-en-20240520-popsignuptwoweeks-perspective_alpha_website_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/a99688ca-33c3-4099-9baa-07a2e2acb398/0279102c-4f3f-4ed2-a283-cce57434d595/PK-en-20240520-popsignuptwoweeks-perspective_alpha_website_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/a99688ca-33c3-4099-9baa-07a2e2acb398/0279102c-4f3f-4ed2-a283-cce57434d595/PK-en-20240520-popsignuptwoweeks-perspective_alpha_website_large.jpg 1800w" alt="" />
      </div>
      <div >
        <form className='w-3/12 absolute p-12 bg-black bg-opacity-80 my-36 mx-auto right-0 left-0 text-white'>
          <h1 className='font-bold text-3xl py-4'>{isSignInForm ? 'Sign In' : 'Sign Up'}</h1>
          {!isSignInForm && (
            <input type='text' placeholder='Full Name' className="p-4 my-4 w-full rounded bg-gray-700" />
          )}
          <input type='email' placeholder='Email Address' className="p-4 my-4 w-full rounded bg-gray-700" />
          <input type='password' placeholder='Password' className="p-4 my-4 w-full rounded bg-gray-700" />
          <button className='py-4 my-4 rounded bg-red-700 w-full'>{isSignInForm ? 'Sign In' : 'Sign Up'}</button>
          <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? 'New to Netflix? Sign Up Now' : 'Already Registered? Sign In Now.'}  </p>
        </form>
      </div>
    </div>
  )
}

export default Login