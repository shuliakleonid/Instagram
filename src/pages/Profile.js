import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { getUserByUsername } from '../services/firebase';
import * as ROUTES from '../constants/routes';

const Profile = () => {
  const { username } = useParams();
  const [userExist, setUserExist] = useState(false);
  const [user, setUser] = useState(null);
  const history = useHistory();
  useEffect(() => {
    const checkUserExists = async () => {
      const user = await getUserByUsername(username);
      console.log(user);
      if (user.length > 0) {
        setUser(user[0]);
        setUserExist(true);

      } else {
        setUserExist(false);
        history.push(ROUTES.NOT_FOUND);
      }


    };
    checkUserExists()
    console.log(user);
  }, [username,history]);
  return userExist ? (
    <div className='border-gray-background'>
      <div className='mx-auto max-w-screen-lg' >
        {user.fullName}
      </div>
    </div>
  ): null
};

export default Profile;
