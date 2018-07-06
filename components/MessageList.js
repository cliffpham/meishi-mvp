import React from 'react';
import {
    View,
    Text,
} from 'react-native';
import Message from '../components/Message'


class MessageList extends React.Component {
    render() {
        return (
            <View>
                {this.props.messages.map((message, index) => {
                    return (
                        <Message 
                        key={index} 
                        username={message.senderId} 
                        text={message.text} />
                    )
                })}
            </View>
        )
    }
}

export default MessageList