import React from 'react'
import {
    View,
    TextInput

} from 'react-native'

class MessageInputForm extends React.Component {
    
    constructor() {
        super()
        this.state = {
            message: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    handleSubmit(e) {
        console.log(this.state.message)
        /** passed down from Chat sends back input data and displays on screen*/
        this.props.sendMessage(this.state.message)
        // clears text input
        this.textInput.clear()
    }
    
    render() {
        return (
            <View>
                <TextInput
                // onChangeText is a simplified version of onChange no need to target the value  //
                    onChangeText={(chicken) => this.setState({message: chicken})} 
                    value={this.state.message}
                    placeholder="Type your message and hit ENTER"
                    ref={input => { this.textInput = input }} 
                    onSubmitEditing={this.handleSubmit}
                />   
            </View>
        )
    }
}

export default MessageInputForm