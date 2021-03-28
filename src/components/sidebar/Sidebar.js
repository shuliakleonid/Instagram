import React from 'react';
import { useUser } from '../../hooks/use-user';
import { User } from './User';
import Suggestion from './Suggestion';

const Sidebar = () => {
  const {
    user: {
      fullName, username, userId,following
    }
  } = useUser();

  return (
    <div className='p-4'>
      <User username={username} fullName={fullName} />
      <Suggestion userId={userId} following={following}/>
    </div>);
};

export default Sidebar

