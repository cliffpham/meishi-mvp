import React from 'react';

import { 
    Text, 
    View,
    Image,
    ImageBackground,
    TouchableOpacity,
    StyleSheet,
  } from 'react-native';

export default class BusinessCardsFront extends React.Component {

    render() {
      return (
        
        <View style={styles.card}>
        <Text>{this.props.id}</Text>
        <Text>{this.props.name}</Text>
        <Text>{this.props.email}</Text>
    
        </View>

      )
    }
  }


const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 15,
      backgroundColor: '#fff',
    },
    card: {
      padding: 50,
      justifyContent: 'flex-end',
      flex: 1,
      borderWidth: 1,
      borderRadius: 15,
      borderColor: 'black',
      margin: 5
    },
    button: {
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#749F8D',
        textAlign: 'center',
        color: '#749F8D',
        padding: 10,
        margin: 5,
        fontSize: 18,
        fontWeight: 'bold',
    },
  });