import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore"; // <- needed if using firestore
import "firebase/storage";

import { createFirestoreInstance } from "redux-firestore"; // <- needed if using firestore

// const fbConfig = {
//   apiKey: "AIzaSyDHoq8fW-SIRnNl-sAUu-N0LjDVMU3dbok",
//   authDomain: "tradegram-test.firebaseapp.com",
//   projectId: "tradegram-test",
//   storageBucket: "tradegram-test.appspot.com",
//   messagingSenderId: "395031025753",
//   appId: "1:395031025753:web:f03b0ddaa7b596a678f948",
// };
//!new
// 0xconnect
const fbConfig = {
  apiKey: "AIzaSyAv9UnuK-R2m9LRpRLoqZlj4Tg8UlSt5xQ",
  authDomain: "xconnect-a8d98.firebaseapp.com",
  projectId: "xconnect-a8d98",
  storageBucket: "xconnect-a8d98.appspot.com",
  messagingSenderId: "31137271471",
  appId: "1:31137271471:web:90678c1c55fe2ceb9c0e5a",
};
// !old
// const fbConfig = {
//   apiKey: "AIzaSyDHoq8fW-SIRnNl-sAUu-N0LjDVMU3dbok",
//   authDomain: "tradegram-test.firebaseapp.com",
//   databaseURL:
//     "https://tradegram-test-default-rtdb.asia-southeast1.firebasedatabase.app",
//   projectId: "tradegram-test",
//   storageBucket: "tradegram-test.appspot.com",
//   messagingSenderId: "395031025753",
//   appId: "1:395031025753:web:f03b0ddaa7b596a678f948",
// };

// react-redux-firebase config
const rrfConfig = {
  userProfile: `users`,

  useFirestoreForProfile: true, // Firestore for Profile instead of Realtime DB
};

// Initialize firebase instance
firebase.initializeApp(fbConfig);
let storage = firebase.storage();
// Initialize other services on firebase instance
firebase.firestore();
const db = firebase.firestore(); // <- needed if using firestore
export { db, storage };
const store = createStore(rootReducer, composeWithDevTools());

export const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};

export default store;
