import React from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { signOut } from "firebase/auth";
import { useSelector } from 'react-redux';


const Header = () => {
  
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  
  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate('/')
    }).catch((error) => {
      navigate('/error');
    });
  } 
  return (
    <div className='absolute px-8 py-4 bg-gradient-to-b from-black z-10 w-full flex justify-between'>
      <img className='w-44' src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt='logo' />
      {user && (<div className='p-2 flex'>
        {user.photoURL && <img className='p-2 mt-2 w-12' src={user.photoURL} alt="Profile" />} 
        <button onClick={handleSignOut} className='bg-red-700 p-2 mt-2 rounded shadow-sm'>
          {"Sign Out"}
        </button>
      </div>)}
    </div>
  )
}

export default Header