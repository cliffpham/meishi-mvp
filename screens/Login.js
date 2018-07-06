import React from 'react';
import styles from '../styles'
import AppNavigator from '../navigation/AppNavigator';
import { connect } from 'react-redux';
import { login } from '../redux/actions'
import * as firebase from 'firebase';
import firebaseConfig from '../config/firebase.js'
firebase.initializeApp(firebaseConfig);


import { 
  Text, 
  View,
  TouchableOpacity
} from 'react-native';

class Login extends React.Component {
  state = {}

  componentWillMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user != null) {
        this.props.dispatch(login(user))
      }
    });
  }

  login = async () => {
    const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync('244021226377314', {
        permissions: ['public_profile'],
      });
    if (type === 'success') {
      // Build Firebase credential with the Facebook access token.
      const credential = await firebase.auth.FacebookAuthProvider.credential(token);

      // Sign in with credential from the Facebook user.
      firebase.auth().signInAndRetrieveDataWithCredential(credential).catch((error) => {
        // Handle Errors here.
        Alert.alert("Try Again")
      });
    }
  } 

  render() {
    if(this.props.loggedIn){
      return (
        <AppNavigator/>
      )
    } else {
      return (
        <View style={styles.container}>
          <TouchableOpacity onPress={this.login.bind(this)}>
            <Text>Login</Text>
          </TouchableOpacity>
        </View>
      )      
    }
  }
}

// this is how we call upon the overall state manager we created through redux
// specially here we are just requesting the state of loggedIn

function mapStateToProps(state) {
  return {
    loggedIn: state.loggedIn
  };
}

export default connect(mapStateToProps)(Login);