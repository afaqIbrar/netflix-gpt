import React, { useState, useRef } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BACK_IMAGE, DEFAULT_USER_AVATAR } from '../utils/constants';

const Login = () => {
  const dispatch = useDispatch();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
    setErrorMessage(null);
  }
  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;
    if (!isSignInForm) {
      // Sign Up here
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredentials) => {
          const user = userCredentials.user;
          updateProfile(user, {
            displayName: fullName.current.value, photoURL: DEFAULT_USER_AVATAR
          }).then(() => {
            const { uid, email, displayName, photoURL } = auth.currentUser;
            dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
          }).catch((err) => {
            setErrorMessage(err.message);
          });
        })
        .catch((err) => {
          setErrorMessage(err.code + err.message);
        })
    } else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
        })
        .catch((err) => {
          setErrorMessage(err.code + err.message);
        });
    }
  }

  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);
  return (
    <div>
      <Header />
      <div className='absolute'>
        <img className="" src={BACK_IMAGE} alt="" />
      </div>
      <div >
        <form onSubmit={(e) => e.preventDefault()} className='w-full md:w-3/12 absolute p-1 md:p-12 bg-black bg-opacity-80 my-36 mx-auto right-0 left-0 text-white'>
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