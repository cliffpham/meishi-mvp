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
  ImageBackground,
  Picker,
  Modal,
  TouchableHighlight
} from 'react-native';
import { WebBrowser } from 'expo';
import { connect } from 'react-redux';
import { MonoText } from '../components/StyledText';
import { logout, updateEmail, updatePhone, updateTitle, updateLinkOne, updateAboutMe, updateImage} from '../redux/actions'
import ProfileCard from '../components/ProfileCard'
import FlipCard from 'react-native-flip-card'

class Form extends React.Component {
    state = {
        modalVisible: false,
      };

      setModalVisible(visible) {
        this.setState({modalVisible: visible});
      }

  render() {
    return (

      //a non-scrollable ScrollView will hide the keyboard
     
        <View>
      

        <View style={{marginTop: 22}}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}>
          <View style={{marginTop: 22}}>
            <View>
            <TouchableHighlight
            onPress={() => {
              this.setModalVisible(!this.state.modalVisible);
            }}>
            <Text style={styles.buttonTwo}>Return</Text>
            </TouchableHighlight>
            

            <View style={styles.form}>
            <Text style={styles.bold}>Title</Text>
            <TextInput
              style={styles.textInput}
              multiline={true}
              numberOfLines={5}
              onChangeText={(text) => this.props.dispatch(updateTitle(text))}
              value={this.props.title}
            />

            <Text style={styles.bold}>Email</Text>
            <TextInput
              style={styles.textInput}
              multiline={true}
              numberOfLines={5}
              onChangeText={(text) => this.props.dispatch(updateEmail(text))}
              value={this.props.email}
            />

            <Text style={styles.bold}>Phone</Text>
            <TextInput
              style={styles.textInput}
              multiline={true}
              numberOfLines={5}
              onChangeText={(text) => this.props.dispatch(updatePhone(text))}
              value={this.props.phone}
            />

            <Text style={styles.bold}>About Me</Text>
            <TextInput
              style={styles.textInput}
              multiline={true}
              numberOfLines={10}
              onChangeText={(text) => this.props.dispatch(updateAboutMe(text))}
              value={this.props.phone}
            />
            
            
            <Text style={styles.bold}>Link One</Text>    
            <TextInput
              style={styles.textInput}
              multiline={true}
              numberOfLines={5}
              onChangeText={(text) => this.props.dispatch(updateLinkOne(text))}
              value={this.props.linkone}
            />
    
            <Text style={styles.bold}>Link Two</Text> 
            <TextInput
              style={styles.textInput}
              multiline={true}
              numberOfLines={5}
              onChangeText={(text) => this.props.dispatch(updateLinkOne(text))}
              value={this.props.linktwo}
            />
        </View>
          

          
            </View>
          </View>
        </Modal>
        <View style={styles.buttons}>
        <TouchableHighlight onPress={ () => this.props.dispatch(logout()) }>
        <Text style={ styles.buttonTwo }>Logout</Text>
      </TouchableHighlight>



        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}>
          <Text style={styles.buttonOne}>Edit</Text>
        </TouchableHighlight>

      </View>
      
      </View>

      </View>

    );
  }
}

function mapStateToProps(state) {
    return {
      user: state.user
    };
  }
  
  export default connect(mapStateToProps)(Form);

//Here we request the user state which we will use to modify individual users' info


const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    flex: 1,
    backgroundColor: '#fff'},

  buttons: {
    flexDirection: 'row-reverse',
    paddingBottom: 15
  },

  buttonOne: {
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#A0A0A0',
    alignContent: 'flex-end',
    color: '#A0A0A0',
    padding: 10,
    paddingLeft: 15,
    paddingRight: 15,
    margin: 5,
    fontSize: 18,
    fontWeight: 'bold',
  },

  buttonTwo: {
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#A0A0A0',
    alignSelf: 'flex-end',
    textAlign: 'center',
    color: '#A0A0A0',
    padding: 10,
    margin: 5,
    fontSize: 18,
    fontWeight: 'bold',
  },
  textInput: {
    fontSize: 18,
    borderBottomWidth: 1,
    borderColor: 'grey',
    paddingBottom: 10,
  },

  form: {
    marginTop: 10,
    paddingLeft: 10,
    paddingRight: 10
  },
  bold: {
    fontSize: 24, 
    fontWeight: 'bold',
  },
  remove: {
    borderWidth: 0
  }
});

