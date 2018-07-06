import React from 'react'
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native'
import Chatkit from '@pusher/chatkit'
import Chatlist from '../components/Chatlist'
import MessageList from '../components/MessageList'
import MessageInputForm from '../components/MessageInputForm'

import { tokenUrl, instanceLocator } from '../config/chatkit';

class Chat extends React.Component {
    constructor() {
    super()
    this.state = {

        //im assumning this will be joined with information from the backend

        roomId: null,
        messages: [],
        joinableRooms: [],
        joinedRooms: []
    }
    this.sendMessage = this.sendMessage.bind(this)
    this.subscribeToRoom = this.subscribeToRoom.bind(this)
    this.getRooms = this.getRooms.bind(this)
}

// Throw API calls in componentDidMount 
// ChatKit Code - connects to the API and creates a user and chatrooms

    componentDidMount() {


        const chatManager = new Chatkit.ChatManager({
            instanceLocator,
            userId: 'testuser', //this will always be replaced by data from authen creds
            tokenProvider: new Chatkit.TokenProvider({
                url: tokenUrl // this will be used for authentication purposes later
            })
        })

        chatManager.connect()
        .then(currentUser => {
            this.currentUser = currentUser
            this.getRooms()
        })
        .catch(err => console.log('error on connecting: ', err)) 
    }
// current code makes all chatrooms created in the chatkit available - need to find a workaround so that
// a user only chatrooms (friends) they are associated to

    getRooms() {
        this.currentUser.getJoinableRooms()
            .then(joinableRooms => {
              this.setState({
                  joinableRooms,
                  joinedRooms: this.currentUser.rooms
            })
        })
        .catch(err => console.log('error on joinableRooms: ', err))
    }

//aka enter a room - user clicks on one of their friends and directs them to their shared chatroom 
    
subscribeToRoom(roomId) {
        //clears the message state so that the spread operator doesn't keep appending messages 
        this.setState({ messages: [] })        
        this.currentUser.subscribeToRoom({
            roomId: roomId, 
            hooks: {
                onNewMessage: message => {
                    // console.log('message.text: ', message.text);
                    this.setState({

//spread operators basically creates a new instance of the messages array and adds the newest message (push doesnt work)                        
                        messages: [...this.state.messages, message] 
                    })
                }
            }
        }) 
        
// make sures that messages are being sent to the right chatroom
        .then(room => {
            this.setState({
                roomId: room.id
            })
            this.getRooms()
        })
        .catch(err => console.log('error on subscribing to room: ', err))

    }

    
//takes text input and sends it off to Pusher Chatkit
    sendMessage(text) {
        this.currentUser.sendMessage({
            text: text,
            roomId: this.state.roomId
        })
    }


//create a similar function that creates a new chatroom that is shared between two users
// .createRoom

    render() {
        return (
            <View> 
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("Chatbox")} >
                    <Text> Figure out how to change pages on press </Text> 
                    </TouchableOpacity>
                    <MessageList messages={this.state.messages}/>
                    <MessageInputForm sendMessage={this.sendMessage}/> 
                
                    <Chatlist 
                    // function being passed down
                    subscribeToRoom={this.subscribeToRoom}
                    //list of rooms aka shared contacts
                    rooms={[...this.state.joinableRooms, ...this.state.joinedRooms]} />
            </View>

         
        );
    }
}

export default Chat


////////////////////////////////////////////////////////////////////////////  
/////////////////////Intial Pusher ChatKit Attempt//////////////////////////
///////////////////////////////////////////////////////////////////////////  


// import React, { Component } from 'react';
// import { 
//   View,
//   Text,
//   TouchableOpacity
// } from 'react-native';
// import UsernameForm from '../components/UsernameForm';
// import { fetch } from 'fetch';

// class Chat extends Component {
//   constructor() {
//     super()
//     this.state = {
//       currentUsername: '',
//     }
//     this.onUsernameSubmitted = this.onUsernameSubmitted.bind(this)
//   }

//   onUsernameSubmitted(username) {
//     fetch('http://localhost:3001/users', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({ username }),
//     })
//       .then(response => {
//         this.setState({
//           currentUsername: username
//         })
//       })
//       .catch(error => console.error('error', error))
//   }
//   render() {
//     return (
//     <UsernameForm onPress={this.onUsernameSubmitted} />
//     );
//   }
// }

// export default Chat






// // import React, { Component } from 'react';
// import {
//  AppRegistry,
//  StyleSheet,
//  Text,
//  View,
//  ListView,
//  TouchableOpacity
// } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialIcons';
// import { fetch } from 'fetch';
// import Chatkit from "@pusher/chatkit";


// import { tokenUrl, instanceLocator } from '../config/chatkit';


// class Chat extends React.Component {
    
//   componentDidMount() {
//       const chatManager = new Chatkit.ChatManager({
//           instanceLocator,
//           userId: "Cliff",
//           tokenProvider: new Chatkit.TokenProvider({
//               url: tokenUrl
//           })
//       })
//   }
  
//   render() {
//       return (
//           <View>
//             chatspace
//           </View>
//       );
//   }
// }

// export default Chat


// const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2})

// class Chatbox extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       peopleDataSource: ds.cloneWithRows([]),
//       loaded: false
//     }
//   }

//   componentDidMount() {
//     fetch('https://gist.githubusercontent.com/cliffpham/aea39d9dd73cb3e8df301fca7cb36417/raw/b7eba43740ec4fdce8c2bba3e2baafd86de26475/sandboxlist.json')
//       .then(response => response.json())
//       .then((data) => {
//         this.setState({
//           peopleDataSource: ds.cloneWithRows(data),
//           loaded: true
//         })
//       });
//   }

//  render() {
//  return (
//   <View style={styles.mainContainer}>
//   <View style={styles.headerContainer}>
   
//   <View style={styles.leftHeaderContainer}>
//    <Text style={styles.logoText}>Meishi</Text>
//    </View>
   
//    <View style={styles.rightHeaderContainer}>
//    <Icon name="search" color='#fff' size={23} style={{padding:5}} />
//   //  <Icon name="chat" color='#fff' size={23} style={{padding:5}} />
//    <Icon name="more-vert" color='#fff' size={23} style={{padding:5}}/>
//    </View>
  
//    </View>
  
//    <View style={styles.contentContainer}>
//    <TouchableOpacity onPress={() => this.props.navigation.navigate("Chatbox")} >
//             <ListView
//             initialListSize={5}
//             enableEmptySections={true}
//             dataSource={this.state.peopleDataSource}
//             renderRow={(person) => { return this.renderPersonRow(person) }} />
//   </TouchableOpacity>
//   </View>
//  </View>
//  );
//  }
//  renderPersonRow(person) {
//   return (
//     <Text>{person.first_name}</Text>
//   )
// }
// }

// export default Chatbox;

// const styles = StyleSheet.create({
//   mainContainer: {
//      flex: 1,
//      backgroundColor: '#F5FCFF',
//      height: 24
//   },
//   headerContainer: {
//      flex: 1,
//      flexDirection: "row",
//      justifyContent: "space-between",
//      backgroundColor: "#075e54",
//      alignItems:"center",
//      paddingRight: 5
//   },
//   leftHeaderContainer: {
//      alignItems: "flex-start",
//      flexDirection: "row"
//   },
//   rightHeaderContainer: {
//      alignItems: "flex-end",
//      flexDirection: "row"
//   },
//   contentContainer: {
//      flex: 6,
//   },
//   logoText: {
//      color: "white",
//      fontWeight: "bold",
//      fontSize: 16,
//      alignItems: "flex-start",
//      marginLeft: 10
//   },
//   logoText: {
//     color: "white",
//     fontWeight: "bold",
//     fontSize: 16,
//     alignItems: "flex-start",
//     marginLeft: 10
//  },
//  });


