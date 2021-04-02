import firebase from 'firebase/app'
import 'firebase/firestore'
import firebaseConfig from './secret'

// init firebase
firebase.initializeApp(firebaseConfig)
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, timestamp }
