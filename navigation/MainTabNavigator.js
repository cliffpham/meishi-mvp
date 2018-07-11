import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import Profile from '../screens/Profile';
import Home from '../screens/Home';
import Chat from '../screens/Chat';
import QRcode from '../screens/QR';
import YourQR from '../screens/YourQR'

const HomeStack = createStackNavigator({
  Home: Home,
  QR: QRcode,
  YourQR: YourQR
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  header:{
    style: {
      backgroundColor: 'black'
    }
  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-albums${focused ? '' : '-outline'}` : 'md-link'}
    />
  ),
};

const ProfileStack = createStackNavigator({
  Profile: Profile,
});

ProfileStack.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-create${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

// const ChatStack = createStackNavigator({
//   Chat: Chat,
// });

// ChatStack.navigationOptions = {
//   tabBarLabel: 'Chat',
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={Platform.OS === 'ios' ? `ios-chatbubbles${focused ? '' : '-outline'}` : 'md-options'}
//     />
//   ),
// };

export default createBottomTabNavigator({
  HomeStack,
  ProfileStack,
  // ChatStack,
});
