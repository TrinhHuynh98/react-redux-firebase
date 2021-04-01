import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAPrXRBUWQCA2SqV8glFroLYebps4DSYmM",
    authDomain: "sainy-blog-web.firebaseapp.com",
    projectId: "sainy-blog-web",
    storageBucket: "sainy-blog-web.appspot.com",
    messagingSenderId: "57654510430",
    appId: "1:57654510430:web:9275c996dd873c857c05cf",
    measurementId: "G-E3R38NDN3P"
};
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({timestampsInSnapShots: true});

export default firebase;