import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { signOut } from "firebase/auth";
import { useSelector } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constants';
import { toggleGptSearch } from '../utils/gptSlice';
import { resetGptSearch } from '../utils/gptSlice';
import { changeLanguage, resetLanguage } from '../utils/configSlice';



const Header = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(store => store.user);
  const gptSearch = useSelector(store => store.gpt.showGptSearch)

  const handleToggleGptSearch = () => {
    // Toggle the GPT Search
    dispatch(toggleGptSearch());
    dispatch(resetLanguage());
  }

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  }

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
    dispatch(resetGptSearch());
  }
  return (
    <div className='absolute px-8 py-4 bg-gradient-to-b from-black z-10 w-screen flex justify-between bg-black flex-col md:flex-row '>
      <img className='w-44 mx-auto md:mx-0' src={LOGO} alt='logo' />
      {user && (<div className='p-2 flex justify-between'>
        {gptSearch && (
          <div>
            <select className='mt-2 h-12 p-3 bg-gray-800 mr-3 text-white rounded' onChange={handleLanguageChange}>
              {SUPPORTED_LANGUAGES.map((lang) => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
            </select>
          </div>
        )}
        <button className='p-2 h-10 mt-3 rounded px-2 bg-purple-800 text-white' onClick={handleToggleGptSearch}> {gptSearch ? 'Home Page' : 'GPT Search'}  </button>
        {user.photoURL && <img className='hidden md:inline-block p-2 mt-2 w-12' src={user.photoURL} alt="Profile" />}
        <button onClick={handleSignOut} className='bg-red-700 p-2 h-10 mt-3 rounded shadow-sm text-white'>
          {"Sign Out"}
        </button>
      </div>)}
    </div>
  )
}

export default Header