import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../context/firebase';

const Login = () => {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState('');
  const isInvalid = password === '' || emailAddress === '';
  const handleLogin = () => {
  };

  useEffect(() => {
    document.title = 'Login - Instagram';
  }, []);
  return (
    < div className='container flex mx-auto max-w-screen-md items-center h-screen '>
      <div className='flex w-3/5'><img src='./images/iphone-with-profile.jpg' alt='iPhone with Instagram app' /></div>
      <div className='flex flex-col w-2/5'>
        <h1 className='flex justify-center w-full'>
          <img src='./images/logo.png' alt='Instagram' className='mt-2 w-6/12 mb-4' />
        </h1>
        {error && <p className='mb-4 text-xs text-red-primary '>{error}</p>}

        <form onSubmit={handleLogin} method='POST'>
          <input
            type='text'
            onChange={({ target }) => setEmailAddress(target.value)}
            placeholder='Email address'
            aria-label='Enter your email address'
            className='text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2'
          />
          <input
            type='password'
            onChange={({ target }) => setPassword(target.value)}
            placeholder='Password'
            aria-label='Enter you password'
            className='text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2'
          />
          <button disabled={isInvalid}
          type='submit'
          className='bg-blue-medium text-white w-full rounded h-8 font-bold'
          >
Log In
          </button>
        </form>
      </div>
    < /div>
  );
};
export default Login;
