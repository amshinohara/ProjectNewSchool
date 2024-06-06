import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAtngjOzpkNqiawQubDtHIn84hiOjpQJCw',
  authDomain: 'newschool-fd7d3.firebaseapp.com',
  projectId: 'newschool-fd7d3',
  storageBucket: 'newschool-fd7d3.appspot.com',
  messagingSenderId: '304321326527',
  appId: '1:304321326527:web:5a103b85220b65b0ea050a',
  measurementId: 'G-TZY1M5KYNH',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();

export default firebase;
