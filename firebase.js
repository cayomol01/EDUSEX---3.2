import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBMJrY5RRs4Hm5eusdzDcw-I3iblZNknOM',
  authDomain: 'edusex-462bf.firebaseapp.com',
  projectId: 'edusex-462bf',
  storageBucket: 'edusex-462bf.appspot.com',
  messagingSenderId: '1096845485099',
  appId: '1:1096845485099:web:a28dcf74d36d53d93e766e',
};

firebase.initializeApp(firebaseConfig);

export default firebase;
