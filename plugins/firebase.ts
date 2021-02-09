import firebase from "firebase"
if(!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: process.env.firebaseApiKey,
    authDomain: process.env.firebaseAuthDomain,
    databaseURL: process.env.firebaseUrl,
    projectId: process.env.firebaseProjectID,
    storageBucket: process.env.firebaseStrageBucket,
    messagingSenderId: process.env.firebaseMessagingSenderID,
    appId: process.env.firebaseAppID,
    measurementId: process.env.firebaseMeasurementID
  })
}
export default firebase