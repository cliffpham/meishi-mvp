import * as firebase from 'firebase';
import { Alert } from 'react-native';

export function login(user){
    return function(dispatch){
    let params = {
      id: user.uid,
      name: user.displayName,
      email: '',
      links: '',
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

export function updateEmail(value){
    return function(dispatch){
      firebase.database().ref('cards/' + firebase.auth().currentUser.uid).update({ email: value });
      dispatch({ type: 'UPDATE_EMAIL', payload: value });
      setTimeout(function(){  
        
      }, 3000);
    }
  }
  
export function Submit(){
    return function(dispatch){
    Alert.alert("Profile Updated!")
    }
  }

export function getCards(){
  return function(dispatch){
    firebase.database().ref('cards').once('value', (snap) => {
      var items = [];
      snap.forEach((child) => {
        item = child.val();
        item.id = child.key;
        items.push(item); 
      });
      dispatch({ type: 'GET_CARDS', payload: items });
    });
  }
}