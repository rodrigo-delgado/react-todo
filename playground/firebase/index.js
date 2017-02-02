// import firebase from 'firebase'
//
// // Initialize Firebase
//   var config = {
//     apiKey: "AIzaSyCbTAIWKJcKDXzDVMew1WzpAGfJo7-YyzM",
//     authDomain: "rodrigo-todo-app.firebaseapp.com",
//     databaseURL: "https://rodrigo-todo-app.firebaseio.com",
//     storageBucket: "rodrigo-todo-app.appspot.com",
//     messagingSenderId: "652312729478"
//   };
//   firebase.initializeApp(config)
//
//   var firebaseRef = firebase.database().ref()
//
//   firebaseRef.set({
//     app:
//     {
//     name: 'Rodrigo Todo App',
//     version: 2.0
//     },
//     isRunning: true,
//     user:
//     {
//       name: 'Rodrigo Delgado',
//       age: 29
//     }
//   })
//
// const notesRef = firebaseRef.child('notes')
//
// const newNoteRef = notesRef.push()
// newNoteRef.set({
//   text: 'Walk the dog'
// })
