import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD7FWFued5aCvcPxKSfwqYcSl-RMbj0ETw",
  authDomain: "testproject-dcc7d.firebaseapp.com",
  projectId: "testproject-dcc7d",
  storageBucket: "testproject-dcc7d.appspot.com",
  messagingSenderId: "879328549174",
  appId: "1:879328549174:web:29edaae479bab445847b97"
};
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
