import * as firebase from 'firebase';
import { Alert } from 'react-native';


// Redux requires two files an action.js and a reducer.js. You can think of the action.js page
// as the file that holds all of the functions that affect the state in some way 
// i.e. logins, logout, updating user info

export function login(user){
  return function(dispatch){
    let params = {
      id: user.uid,
      name: user.displayName,
      email: '',
      links: null,
      photoUrl: user.photoURL,
      image: '',
      notification: false,
      show: false,
      report: false,
      collection: {
        [user.uid]: false
      },
      token: '',
    }

  // how we log in the user and refer to whether they exist already and or need to be added to 
  //firebase

    firebase.database().ref('cards/').child(user.uid).once('value', function(snapshot){
      if(snapshot.val() !== null){
        dispatch({ type: 'LOGIN', user: snapshot.val(), loggedIn: true });
      } else {
        firebase.database().ref('cards/' + user.uid ).update(params);
        dispatch({ type: 'LOGIN', user: params, loggedIn: true });
      }
    })
  }
}

export function logout(){
  return function(dispatch){
    firebase.auth().signOut()
    dispatch({ type: 'LOGOUT', loggedIn: false });
    }
}


// this function is called on the Profile page and is called when the user presses a key 

export function updateEmail(value){
  return function(dispatch){
    firebase.database().ref('cards/' + firebase.auth().currentUser.uid).update({ email: value });
    dispatch({ type: 'UPDATE_EMAIL', payload: value });
    setTimeout(function(){
      
    }, 3000);
  }
}
 
// this function is called on the Home page and takes all of the current users 
// and displays them accordingly.
// we will need to edit this so that instead of taking all the cards it only
//takes the data of IDs associated with it

export function getCards(){
  return function(dispatch){
    firebase.database().ref('cards').once('value', (snap) => {
      if(snap) {
        var items = [];
        snap.forEach((child) => {
          item = child.val();
          item.id = child.key;
          items.push(item); 
        });
        dispatch({ type: 'GET_CARDS', payload: items });
      }
    });
  }
}