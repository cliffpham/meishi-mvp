import React from 'react'
import Chatbox from '../screens/Chatbox'
import {
    View,
    Text
} from 'react-native'

class ChatList extends React.Component {
    render () {
        return (
            <View>
            <Text> List of Chats </Text>
            {this.props.rooms.map(room => {
                return (
                    <Text key={room.id} onPress={() => { this.props.subscribeToRoom(room.id) }} > 
                    # {room.name}
                    </Text>
                )
            })}
            </View>
        )
    }
}

export default ChatList