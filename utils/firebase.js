import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

import config from '../config';

const firebaseInstance =
  firebase.apps.length === 0 ? firebase.initializeApp(config.firebase) : firebase;

export const db = firebaseInstance.firestore();

export const auth = firebaseInstance.auth();

export default firebaseInstance;
