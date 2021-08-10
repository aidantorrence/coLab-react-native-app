import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

import config from '../config';

const firebaseInstance =
  firebase.apps.length === 0 ? firebase.initializeApp(config.firebase) : firebase;

export const db = firebaseInstance.firestore();

export const auth = firebaseInstance.auth();

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = db.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export default firebaseInstance;
