import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../context/user';
import { getUserByUserId } from '../services/firebase';


export const useUser = () => {
  const [activeUser, setActiveUser] = useState({});
  const { user } = useContext(UserContext);
  console.log(user,'user');
  useEffect(() => {
    const getUserObjById = async () => {
      // we need a function  that we can call (firebase service )  that gets the user data based on the id
      const [response] = await getUserByUserId(user.uid);
      setActiveUser(response);
    };
    if (user?.uid) {
      getUserObjById();
    }
  }, [user]);
  return { user: activeUser };
};

