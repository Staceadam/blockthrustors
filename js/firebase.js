import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyAVWhNup_UkFCQBM0s_n6hke97j-Ib6xkw",
  authDomain: "svideo-a8510.firebaseapp.com",
  databaseURL: "https://svideo-a8510.firebaseio.com",
  projectId: "svideo-a8510",
  storageBucket: "svideo-a8510.appspot.com",
  messagingSenderId: "580002288398"
};

firebase.initializeApp(config);

export default firebase;
