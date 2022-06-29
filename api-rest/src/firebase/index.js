const firebase = require('firebase')
require('firebase/storage')

/*
// Jorge
const firebaseConfig = {
	apiKey: "AIzaSyCODAIOCd62-7k4cg2stwltuexYzY-myC0",
	authDomain: "imagenes-firebase-2f967.firebaseapp.com",
	projectId: "imagenes-firebase-2f967",
	storageBucket: "imagenes-firebase-2f967.appspot.com",
	messagingSenderId: "294396471518",
	appId: "1:294396471518:web:b415a3107ff17c574cfa4f",
	measurementId: "G-7WL5XGTV4C"
};*/

/*
// Spanish Teens
const firebaseConfig = {
	apiKey: "AIzaSyAsWVkAfxX_R9nqqVGbNkPY8AMnipi2dwQ",
	authDomain: "general-spanish-teens.firebaseapp.com",
	databaseURL: "https://general-spanish-teens-default-rtdb.firebaseio.com",
	projectId: "general-spanish-teens",
	storageBucket: "general-spanish-teens.appspot.com",
	messagingSenderId: "23130519259",
	appId: "1:23130519259:web:fb0e59f5fc71821da87efe"
  };*/

  // Spanish Adults
  const firebaseConfig = {
    apiKey: "AIzaSyBM5Xl2GPQmzWhNSh1wG6jqdf1BKZgBFBI",
    authDomain: "general-spanish.firebaseapp.com",
    databaseURL: "https://general-spanish-default-rtdb.firebaseio.com",
    projectId: "general-spanish",
    storageBucket: "general-spanish.appspot.com",
    messagingSenderId: "1951431434",
    appId: "1:1951431434:web:47219e32614bf27afbd8f3"
    };
  
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

firebase.initializeApp(firebaseConfig)

const storage = firebase.storage()
const auth    = firebase.auth()
const db      = firebase.firestore()

module.exports = { storage, db, auth }