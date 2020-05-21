# meishi

**Description**

Meishi is a business card app that updates an old convention for the modern life style. It was built with React Native, Javascript and the open source toolchain Expo. 

**Motivation**

Impersonal and fabricated social networking falls flat due to a lack of any human connection. Business cards exchanged are often forgotten or discarded due to a lack of purposeful connection. Meishi creates meaningful business connections on exisiting friend of a friend (or mutual friend) relationships. Meishi combines meaningful, trusted word of mouth recommendations with the convenience of social network.

**Setup**

1) After cloning the repo, running `npm install` in the root folder will install the following npm packages:

    * npm install @expo/samples
    * npm install @pusher/chatkit
    * npm install expo
    * npm install firebase
    * npm install react
    * npm install react-native
    * npm install react-native-elements
    * npm install react-native-flip-card
    * npm install react-native-pages
    * npm install react-navigation
    * npm install react-redux
    * npm install redux
    * npm install redux-thunk

2) Add your web firebase configuration in the `config` folder `firebase.js` file.

``` firebase.js

const firebaseConfig = {
    apiKey: "<apiKey>",
    authDomain: "<authDomain>",
    databaseURL: "<databaseURL>",
    projectId: "<projectId>",
    storageBucket: "<storageBucket>",
    messagingSenderId: "<messagingSenderId>"
};
  
module.exports = firebaseConfig

```
To use Meishi, you will need to download the Expo client app for your smart phone. 

Open Expo XDE and click Open existing project..., then give it the directory to which you cloned this repository.

Expo XDE will start the app. Once it has completed, hit the Share button to send the app to your phone.

**Gif**

<img src='https://github.com/tomkim825/meishi/blob/master/demo.gif?raw=true' width='33%'>

**Team**

* Cliff Pham - https://github.com/cliffpham/
* Thomas Kim - https://github.com/tomkim825
* Chris Huynh - https://github.com/chuynh18/
* Julien Shim - https://github.com/julienshim

**License**

This project is licensed under the terms of the MIT license.
