import firebase from 'firebase'

try {
  var config = {
    apiKey: "AIzaSyCbTAIWKJcKDXzDVMew1WzpAGfJo7-YyzM",
    authDomain: "rodrigo-todo-app.firebaseapp.com",
    databaseURL: "https://rodrigo-todo-app.firebaseio.com",
    storageBucket: "rodrigo-todo-app.appspot.com",
    messagingSenderId: "652312729478"
  };
  firebase.initializeApp(config)
} catch (e) {

}


  export var firebaseRef = firebase.database().ref()
  export default firebase
