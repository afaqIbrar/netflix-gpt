import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { signOut } from "firebase/auth";
import { useSelector } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';
import { LOGO } from '../utils/constants';


const Header = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(store => store.user);

  useEffect(() => {
    // Subscribing the listener on onAuthStateChanged
    // Also unsubscribe it on unmount as onAuthStateChanged returns a unsubscribe function store it and call it on unmount
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
        navigate('/browse');
      } else {
        dispatch(removeUser());
        navigate('/');
      }
    });
    // Unsubscribing the state change
    return () => unsubscribe();
  }, [])

  const handleSignOut = () => {
    signOut(auth).then(() => {
    }).catch((error) => {
    });
  }
  return (
    <div className='absolute px-8 py-4 bg-gradient-to-b from-black z-10 w-screen flex justify-between'>
      <img className='w-44' src={LOGO} alt='logo' />
      {user && (<div className='p-2 flex'>
        {user.photoURL && <img className='p-2 mt-2 w-12' src={user.photoURL} alt="Profile" />}
        <button onClick={handleSignOut} className='bg-red-700 p-2 h-10 mt-3 rounded shadow-sm'>
          {"Sign Out"}
        </button>
      </div>)}
    </div>
  )
}

export default Header