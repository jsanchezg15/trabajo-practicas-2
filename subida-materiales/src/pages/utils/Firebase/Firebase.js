import firebase from "firebase";

// Initialize Firebase


// Jorge
const firebaseConfig = {
	apiKey: "AIzaSyCODAIOCd62-7k4cg2stwltuexYzY-myC0",
	authDomain: "imagenes-firebase-2f967.firebaseapp.com",
	projectId: "imagenes-firebase-2f967",
	storageBucket: "imagenes-firebase-2f967.appspot.com",
	messagingSenderId: "294396471518",
	appId: "1:294396471518:web:b415a3107ff17c574cfa4f",
	measurementId: "G-7WL5XGTV4C"
};

// GS Middle School
/*const firebaseConfig = {
	apiKey: "AIzaSyA39HyUvgK70W61LSQCmBWb87pFqD5iVP0",
	authDomain: "gs-middle-school-students.firebaseapp.com",
	projectId: "gs-middle-school-students",
	storageBucket: "gs-middle-school-students.appspot.com",
	messagingSenderId: "588767401280",
	appId: "1:588767401280:web:32581d653b30d36056d6a5",
	measurementId: "G-52ZYQTJWPC"
}*/

// GS Kids 4-6
/*const firebaseConfig = {
	apiKey: "AIzaSyDvVc1XGIlFkacX6P32CsVmnrJJjREyPkg",
	authDomain: "general-spanish-kids-4-6.firebaseapp.com",
	projectId: "general-spanish-kids-4-6",
	storageBucket: "general-spanish-kids-4-6.appspot.com",
	messagingSenderId: "983454195319",
	appId: "1:983454195319:web:5dfe9ed46990a4311a3072",
	measurementId: "G-GW8GE6JZZ3"
};*/

// Spanish Teens
/*const firebaseConfig = {
	apiKey: "AIzaSyAsWVkAfxX_R9nqqVGbNkPY8AMnipi2dwQ",
	authDomain: "general-spanish-teens.firebaseapp.com",
	databaseURL: "https://general-spanish-teens-default-rtdb.firebaseio.com",
	projectId: "general-spanish-teens",
	storageBucket: "general-spanish-teens.appspot.com",
	messagingSenderId: "23130519259",
	appId: "1:23130519259:web:fb0e59f5fc71821da87efe"
  };*/

  // Spanish Adults
  /*const firebaseConfig = {
	apiKey: "AIzaSyBM5Xl2GPQmzWhNSh1wG6jqdf1BKZgBFBI",
	authDomain: "general-spanish.firebaseapp.com",
	databaseURL: "https://general-spanish-default-rtdb.firebaseio.com",
	projectId: "general-spanish",
	storageBucket: "general-spanish.appspot.com",
	messagingSenderId: "1951431434",
	appId: "1:1951431434:web:47219e32614bf27afbd8f3"
  };*/

  /*
  // SF Business
  const firebaseConfig = {
	apiKey: "AIzaSyB_Wwt5DegLiTuK6g3SbU8ctW4IL8dYOuc",
	authDomain: "spanish-for-business.firebaseapp.com",
	projectId: "spanish-for-business",
	storageBucket: "spanish-for-business.appspot.com",
	messagingSenderId: "106211572040",
	appId: "1:106211572040:web:84ee4c41060b964f9c9b7d"
  };*/

  /*
  // Brazil Adults
  const firebaseConfig = {
	apiKey: "AIzaSyAeABCXpyJJi1W34nuMazFsE60UwOIuvcY",
	authDomain: "general-spanish-brazil.firebaseapp.com",
	projectId: "general-spanish-brazil",
	storageBucket: "general-spanish-brazil.appspot.com",
	messagingSenderId: "85541811081",
	appId: "1:85541811081:web:6cf6888f578baa2259e758"
  };*/
  /*
  // GS Kids 7 - 9
  const firebaseConfig = {
	apiKey: "AIzaSyBv7lLytld1D3eFZXNPZcOP5TPthNqo7lw",
	authDomain: "general-spanish-kids-7-9.firebaseapp.com",
	projectId: "general-spanish-kids-7-9",
	storageBucket: "general-spanish-kids-7-9.appspot.com",
	messagingSenderId: "276854982143",
	appId: "1:276854982143:web:f83326895c306194b293ca"
  };*/
  
const app  = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth()
const db   = firebase.storage()

firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)

export { auth, db, firebase }