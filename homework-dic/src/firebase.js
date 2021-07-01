import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDgIXZmTKg3ynCAbncuoagX8I6iXUc4IEY",
  authDomain: "sparta-react-kei.firebaseapp.com",
  projectId: "sparta-react-kei",
  storageBucket: "sparta-react-kei.appspot.com",
  messagingSenderId: "176853497255",
  appId: "1:176853497255:web:eaa413130daac50e7af282",
  measurementId: "G-2K2RHP3ZME",
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
