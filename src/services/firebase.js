import { firebase } from '../lib/firebase';

export const doesUsernameExist = async (username) => {
  const result = await firebase
    .firestore()
    .collection('users')
    .where('username', '==', username)
    .get();
  return result.docs.map((user) => user.data().length > 0);
};

// get user from the firestore by Id( passed from auth)
export const getUserByUserId = async (userId) => {
  const result = await firebase
    .firestore()
    .collection('users')
    .where('userId', '==', userId)
    .get();
  return result.docs.map((item) => ({
    ...item.data(),
    docId: item.id
  }))
};

export const getSuggestedProfiles = async (userId,following) => {
  const result = await firebase
    .firestore()
    .collection('users')
    .limit(10)
    .get()
  console.log(result.docs.map((user)=>({...user.data(),docId:user.id})).filter((profile)=>profile.userId !== userId && !following.includes(profile.userId)));
 return result.docs
   .map((user)=>({...user.data(),docId:user.id}))
   .filter((profile)=>profile.userId !== userId && !following.includes(profile.userId))
}
