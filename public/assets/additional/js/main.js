// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDhb8UBjbINbolsXYdOeTmOhrO8fy7zyTY",
    authDomain: "bharatham-3597d.firebaseapp.com",
    databaseURL: "https://bharatham-3597d.firebaseio.com",
    projectId: "bharatham-3597d",
    storageBucket: "bharatham-3597d.appspot.com",
    messagingSenderId: "213510221799"
  };
  firebase.initializeApp(config);

var dataRef = firebase.database().ref('/');
dataRef.on('value', function(snapshot) {
	app.content = snapshot.val()
});
var app = new Vue({
	el: '#app',
	data: { content: ''} 
})