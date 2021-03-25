import React, { useContext, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FirebaseContext } from '../context/firebase';
import * as ROUTES from '../constants/routes';
import { doesUsernameExist } from '../services/firebase';


const SignUp = () => {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');


  const [username, setUsername] = useState('');
  const [fullName, setFullName] = useState('');
  const [error, setError] = useState('');
  const isInvalid = password === '' || emailAddress === '';
  const handleSignUp = async (e) => {
    e.preventDefault();
    const usernameExists = await doesUsernameExist(username);
    if (!usernameExists.length) {
      try {
        const createdUserResult = await firebase
          .auth()
          .createUserWithEmailAndPassword(emailAddress, password);
        // authentication
        await createdUserResult.user.updateProfile({
          displayName: username
        });
        // firebase user collection
        await firebase.firestore().collection('user').add({
          userId: createdUserResult.user.uid,
          username: username.toLowerCase(),
          fullName,
          emailAddress: emailAddress.toLowerCase(),
          following: [],
          dateCreated: Date.now()
        });
        history.push(ROUTES.DASHBOARD);
      } catch (e) {
        setUsername('');
        setFullName('');
        setPassword('');
        setError(e.message)
      }
    }else {
      setError('That username is already taken, please try another.')
    }
  };


  useEffect(() => {
    document.title = 'Sign Up - Instagram';
  }, []);

  return (
    < div className='container flex mx-auto max-w-screen-md items-center h-screen '>
      <div className='flex w-3/5'><img src='./images/iphone-with-profile.jpg' alt='iPhone with Instagram app' /></div>
      <div className='flex flex-col w-2/5'>
        <div className='flex flex-col items-center bg-white p-4 border border-gray-primary mb-4 rounded'>
          <h1 className='flex justify-center w-full'>
            <img src='./images/logo.png' alt='Instagram' className='mt-2 w-6/12 mb-4' />
          </h1>
          {error && <p className='mb-4 text-xs text-red-primary '>{error}</p>}

          <form onSubmit={handleSignUp} method='POST'>
            <input
              type='text'
              onChange={({ target }) => setUsername(target.value)}
              placeholder='Username'
              aria-label='Enter your Username address'
              className='text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2'
              value={username}
            />
            <input
              type='text'
              onChange={({ target }) => setFullName(target.value)}
              placeholder='Full Name'
              aria-label='Enter your Full name address'
              className='text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2'
              value={fullName}
            />
            <input
              type='text'
              onChange={({ target }) => setEmailAddress(target.value)}
              placeholder='Email address'
              aria-label='Enter your email address'
              className='text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2'
              value={emailAddress}
            />
            <input
              type='password'
              onChange={({ target }) => setPassword(target.value)}
              placeholder='Password'
              aria-label='Enter you password'
              className='text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2'
              value={password}
            />
            <button disabled={isInvalid}
                    type='submit'
                    className={` bg-blue-medium text-white w-full rounded h-8 font-bold ${isInvalid && 'opacity-50'}`}
            >
              Sign Up
            </button>
          </form>
        </div>
        <div
          className='flex justify-center items-center flex-col rounded w-full bg-white p-4 border border-gray-primary '>
          <p className='text-sm'>
            Have an account?{' '}
            <Link to={ROUTES.LOGIN} className='font-bold text-blue-medium'>
              Log in
            </Link>
          </p>
        </div>
      </div>
    < /div>
  );
};
export default SignUp;
