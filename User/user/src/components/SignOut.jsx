import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signOutUser } from '../redux/slices/authSlice';
import '../../src/style/sout.css'

const SignOut = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const handleSignOut = () => {
    dispatch(signOutUser());
  };

  return (
    user && (
      <button onClick={handleSignOut} className='sout'>Sign Out</button>
    )
  );
};

export default SignOut;
