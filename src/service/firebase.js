import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAgrRwh8WsKqN5Le9UbNx76tfUVQrwY5Hw",
  authDomain: "cinemaddict-react.firebaseapp.com",
  databaseURL: "https://cinemaddict-react-default-rtdb.firebaseio.com",
  projectId: "cinemaddict-react",
  storageBucket: "cinemaddict-react.appspot.com",
  messagingSenderId: "194788066187",
  appId: "1:194788066187:web:5ee9c1b75ea5ad9b49658e",
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const url = `/movieCards/`;

export const getMovieListData = database.ref(url).once(`value`);

export const setDataRef = (userId, obj) =>
  firebase
    .database()
    .ref(url + userId)
    .set(obj);
    
// export const setDataRef = (dataArr) => database.ref(url).set(dataArr);

export default database;
