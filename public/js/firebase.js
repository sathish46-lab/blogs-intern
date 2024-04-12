let firebaseConfig = 
{
    // PUT Your FireBase Confit file here
};

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // Get a reference to the Firestore database
  let db = firebase.firestore();
