import React, { Component } from 'react';
import "./App.css"
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

firebase.initializeApp({
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
});

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isSignedIn: false
    }
  }

  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({
        isSignedIn: !!user
      })
    })
  }

  render() {
    return (
      <div className="App">
        {this.state.isSignedIn ?
          <div>
            <label>Signed In</label>
            <br />
            <button onClick={() => firebase.auth().signOut()}>Sign Out</button>
            <br />
            <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
            <br />
            <img src={firebase.auth().currentUser.photoURL} width="500" height="500" />
          </div>
          :
          <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
          />
        }
      </div>
    )
  }
}

export default App;