import React from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native';


// Use this function when your component is dumb as shit

const Message = (props) => {
 return (
     <View>
    <Text style={styles.userName}>{props.username}</Text>
    <Text style={styles.baseText}>{props.text}</Text>
    </View>
 )
}

export default Message

const styles = StyleSheet.create({
    baseText: {
      fontSize: 16,
    },
    userName: {
      fontSize: 20,
      fontWeight: 'bold',
    },
  });