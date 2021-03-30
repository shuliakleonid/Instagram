import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../context/user';
import { getPhotos, getUserByUserId } from '../services/firebase';

export const usePhotos = () => {
  const [photos, setPhotos] = useState(null);
  const {
    user: { uid: userId = '' }
  } = useContext(UserContext);

  useEffect(() => {
    const getTimelinePhotos = async () => {
      const [{following}] = await getUserByUserId(userId)

      if(following.length > 0){
        const followedUsersPhotos = await getPhotos(userId,following)
        followedUserPhotos.sort((a, b) => b.dateCreated - a.dateCreated);
        setPhotos(followedUsersPhotos)
      }
    };
    getTimelinePhotos()
  },[]);

  return {photos}
};
