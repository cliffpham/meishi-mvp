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
      phone: '',
      photoUrl: user.photoURL,
      friends: '',
      image: '',
      title: '',
      linkone: '',
      linktwo:'',
      aboutMe: '',
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

export function updateTitle(value){
  return function(dispatch){
    firebase.database().ref('cards/' + firebase.auth().currentUser.uid).update({ title: value });
    dispatch({ type: 'UPDATE_TITLE', payload: value });
    setTimeout(function(){  
      
    }, 3000);
  }
}

export function updateLinkOne(value){
    return function(dispatch){
      firebase.database().ref('cards/' + firebase.auth().currentUser.uid).update({ linkone: value });
      dispatch({ type: 'UPDATE_LINKONE', payload: value });
      setTimeout(function(){  
        
      }, 3000);
    }
  }

export function updateLinkTwo(value){
    return function(dispatch){
      firebase.database().ref('cards/' + firebase.auth().currentUser.uid).update({ linktwo: value });
      dispatch({ type: 'UPDATE_LINKTWO', payload: value });
      setTimeout(function(){  
        
      }, 3000);
    }
  }

export function updatePhone(value){
    return function(dispatch){
      firebase.database().ref('cards/' + firebase.auth().currentUser.uid).update({ phone: value });
      dispatch({ type: 'UPDATE_PHONE', payload: value });
      setTimeout(function(){  
        
      }, 3000);
    }
  }

export function updateAboutMe(value){
    return function(dispatch){
      firebase.database().ref('cards/' + firebase.auth().currentUser.uid).update({ aboutMe: value });
      dispatch({ type: 'UPDATE_ABOUTME', payload: value });
      setTimeout(function(){  
        
      }, 3000);
    }
  }

export function updateImage(value){
    return function(dispatch){
      firebase.database().ref('cards/' + firebase.auth().currentUser.uid).update({ image: value });
      dispatch({ type: 'UPDATE_IMAGE', payload: value });
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
    
  var friendlist = []
  firebase.database().ref('cards/' + firebase.auth().currentUser.uid + '/collection/').on('value', (snap) => {  
    snap.forEach((child) => {
        if(child.node_.value_) {
    friendlist.push(child.key) 
    }}) })

    firebase.database().ref('cards').on('value', (snap) => {
      if(snap) {
        var items = [];
        snap.forEach((child) => {
          if(friendlist.indexOf(child.val().id) !== -1){
          item = child.val();
          item.id = child.key;
          items.push(item); 
          }
        });
        dispatch({ type: 'GET_CARDS', payload: items },{ allowMore: true });
      }
    });
  }
}

