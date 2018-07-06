import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
  ImageBackground
} from 'react-native';
import { WebBrowser } from 'expo';
import { connect } from 'react-redux';
import { MonoText } from '../components/StyledText';
import { logout, updateEmail, Submit } from '../redux/actions'
import ProfileCard from '../components/ProfileCard'
import FlipCard from 'react-native-flip-card'

class Profile extends React.Component {


 
  render() {
    return (

      //a non-scrollable ScrollView will hide the keyboard
      <ScrollView 
        style={styles.container}
        scrollEnabled={false}
        contentContainerStyle={styles.main}
      >

     
      <Text>Tap On Your Card to See the Other Side</Text>
      <FlipCard 
        style={styles.remove}
        flipHorizontal={true}
        flipVertical={false}
      >
  {/* Face Side */}
  
      <View style={styles.cardFront}>
        <Image style={{ width: 75, height: 75}} source={{uri: this.props.user.photoUrl}}/>
        <Text>{this.props.user.id}</Text>
        <Text>{this.props.user.name}</Text>
        <Text>{this.props.user.email}</Text>
    </View>

  
  {/* Back Side */}

    <View style={styles.cardBack}>
        <ImageBackground
          source={{uri: this.props.user.image}}
          style={{width: '100%', height: '100%'}}
          > 
        <Text>{this.props.user.id}</Text>
        <Text>{this.props.user.name}</Text>
        <Text>{this.props.user.email}</Text>
        </ImageBackground>
    </View>
</FlipCard>

  
      <Text style={styles.bold}>Email</Text>
        <TextInput
            style={styles.textInput}
            multiline={true}
            numberOfLines={5}
            onChangeText={(text) => this.props.dispatch(updateEmail(text))}
            value={this.props.user.email}/>
      
      <TouchableOpacity onPress={ () => this.props.dispatch(logout()) }>
      <Text style={ styles.button }>Logout</Text>
      </TouchableOpacity>
      </ScrollView>
    );
  }
}

//Here we request the user state which we will use to modify individual users' info

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps)(Profile);



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
