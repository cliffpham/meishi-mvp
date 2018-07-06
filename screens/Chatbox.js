import React from 'react'
import MessageList from '../components/MessageList'
import MessageInputForm from '../components/MessageInputForm'
import {
  View
} from 'react-native'



class Chatbox extends React.Component {
  render() {
    return (
      <View>
        The # needs to be populated with the info passed from Chat to MessageList
      </View>
    )
  }
}

export default Chatbox














/////////////////////////single user chat/////////////////////////



// import React from "react";
// import { GiftedChat } from "react-native-gifted-chat";
// import Chatkit from "@pusher/chatkit";

// const CHATKIT_TOKEN_PROVIDER_ENDPOINT = "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/dedda3d2-9546-4eb4-8fc8-f85878223635/token";
// const CHATKIT_INSTANCE_LOCATOR = "v1:us1:dedda3d2-9546-4eb4-8fc8-f85878223635";
// let CHATKIT_ROOM_ID = 10637986;
// let CHATKIT_USER_NAME = "Cliff"; 

// export default class Chat extends React.Component {
//   state = {
//     messages: []
//   };



//   componentDidMount() {
//       // This will create a `tokenProvider` object. This object will be later used to make a Chatkit Manager instance.
//       const tokenProvider = new Chatkit.TokenProvider({
//         url: "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/dedda3d2-9546-4eb4-8fc8-f85878223635/token"
//       });

//       // This will instantiate a `chatManager` object. This object can be used to subscribe to any number of rooms and users and corresponding messages.
//       // For the purpose of this example we will use single room-user pair.
//       const chatManager = new Chatkit.ChatManager({
//         instanceLocator: "v1:us1:dedda3d2-9546-4eb4-8fc8-f85878223635",
//         userId: "Cliff",
//         tokenProvider: tokenProvider
//       });

//       // In order to subscribe to the messages this user is receiving in this room, we need to `connect()` the `chatManager` and have a hook on `onNewMessage`. There are several other hooks that you can use for various scenarios. A comprehensive list can be found [here](https://docs.pusher.com/chatkit/reference/javascript#connection-hooks).
//       chatManager.connect().then(currentUser => {
//         this.currentUser = currentUser;
//         this.currentUser.subscribeToRoom({
//           roomId: 10637986,
//           hooks: {
//             onNewMessage: this.onReceive.bind(this)
//           }
//         });
//       });
//   }
//   onReceive(data) {
//     const { id, senderId, text, createdAt } = data;
//     const incomingMessage = {
//       _id: id,
//       text: text,
//       createdAt: new Date(createdAt),
//       user: {
//         _id: senderId,
//         name: senderId,
//         avatar:
//           "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmXGGuS_PrRhQt73sGzdZvnkQrPXvtA-9cjcPxJLhLo8rW-sVA"
//       }
//     };

//     this.setState(previousState => ({
//       messages: GiftedChat.append(previousState.messages, incomingMessage)
//     }));
//   }

//   onSend([message]) {
//     this.currentUser.sendMessage({
//       text: message.text,
//       roomId: 10637986
//     });
//   }

//   render() {
//     return <GiftedChat messages={this.state.messages} 
//     onSend={messages => this.onSend(messages)}
//         user={{
//          _id: "Cliff"
//         }}
//     />;
//   }
// }