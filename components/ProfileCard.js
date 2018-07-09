import React from 'react';

import { 
    Text, 
    View,
    Image,
    ImageBackground,
    TouchableOpacity,
    StyleSheet,
  } from 'react-native';

import FlipCard from 'react-native-flip-card'

export default class ProfileCard extends React.Component {

  render() {
    return (
      
      <FlipCard 
      style={styles.remove}
      flipHorizontal={true}
      flipVertical={false}
      >

        {/* Face Side */}
        <View style={styles.cardFront}>
          <ImageBackground
          source={{uri: this.props.image}}
          style={{width: '100%', height: '100%'}}
          > 
            <Text>{this.props.id}</Text>
            <Text>{this.props.name}</Text>
            <Text>{this.props.email}</Text>
          </ImageBackground>
        </View>

        {/* Back Side */}
        <View style={styles.cardBack}>
          <Image style={{ width: 75, height: 75}} source={{uri: this.props.photo}} />
          <Text>{this.props.id}</Text>
          <Text>{this.props.name}</Text>
          <Text>{this.props.email}</Text>
        </View>

      </FlipCard>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  cardFront: {
    height: 230,
    justifyContent: 'flex-end',
    flex: 1,
    borderWidth: 1,
    borderColor: 'black',
    margin: 5,
    backgroundColor: '#fff',
    },
  cardBack: {
    height: 230,
    justifyContent: 'flex-end',
    flex: 1,
    borderWidth: 1,
    borderColor: 'black',
    margin: 5,
    backgroundColor: '#fff',
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
  remove: {
    borderWidth: 0
  }
});