import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import AppNavigator from './navigation/AppNavigator';
import Login from './screens/Login';
import reducers from './redux/reducers';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
const middleware = applyMiddleware(thunkMiddleware)
const store = createStore(reducers, middleware);

export default class App extends React.Component {


  render() {
    
      return (

          <Provider store={store}>
          <Login/>
          </Provider>

      );
    }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
