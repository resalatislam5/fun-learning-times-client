import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey:  process.env.REACT_APP_apikey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId
};


const app = initializeApp(firebaseConfig);

export default app;
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCJPv_GxdcZZUs0v9i0ILrh97Gx0fvdT7s",
//   authDomain: "fun-learning-time.firebaseapp.com",
//   projectId: "fun-learning-time",
//   storageBucket: "fun-learning-time.appspot.com",
//   messagingSenderId: "170797617217",
//   appId: "1:170797617217:web:c391b9ce6d7353eacbb6c0"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export default app;