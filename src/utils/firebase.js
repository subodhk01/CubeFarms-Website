import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/analytics';

export function loadFirebase(){
    try{
        const config = {
            apiKey: "AIzaSyDuDwEtXnCVzArhvH_SngIAwykHIxcIm78",
            authDomain: "cube-farms.firebaseapp.com",
            databaseURL: "https://cube-farms.firebaseio.com",
            projectId: "cube-farms",
            storageBucket: "cube-farms.appspot.com",
            messagingSenderId: "609651041158",
            appId: "1:609651041158:web:afb12670e4930b04610207",
            measurementId: "G-81KS1RYJQY"
        };
        firebase.initializeApp(config);
        firebase.analytics();
    }catch (error){
        
    }
    return firebase;
}