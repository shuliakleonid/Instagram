import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../context/user';
import { getPhotos, getUserByUserId } from '../services/firebase';

export const usePhotos = (user) => {
  const [photos, setPhotos] = useState(null);
  // const {
  //   user: { uid: userId = '' }
  // } = useContext(UserContext);

  useEffect(() => {
    const getTimelinePhotos = async () => {
      // const [{following}] = await getUserByUserId(userId)
      // let followedUsersPhotos=[]
      if(user?.following?.length > 0){
      const  followedUsersPhotos = await getPhotos(user.userId,user.following)

      followedUsersPhotos.sort((a, b) => b.dateCreated - a.dateCreated);
      setPhotos(followedUsersPhotos)
      }
    };
    getTimelinePhotos()
  },[user?.userId]);

  return {photos}
};
