import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBHCdxsgEMzDrxrs8WUFMonGFYQQ-mNiuI',
  authDomain: 'native-skope.firebaseapp.com',
  projectId: 'native-skope',
  storageBucket: 'native-skope.appspot.com',
  messagingSenderId: '862239647484',
  appId: '1:862239647484:web:b4c59ea90ec8a25b0e1979',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
