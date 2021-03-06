import React from 'react';
import * as firebase from 'firebase';
import { connect } from 'react-redux';
import { getCards } from '../redux/actions';

import { 
    Text, 
    View,
    Image,
    ImageBackground,
    TouchableOpacity,
    StyleSheet,
    WebView,
    Linking,
    TouchableHighlight,
    deviceRowHeight,
    deviceWidth,
    Modal,
    Alert
  } from 'react-native';
  
import FlipCard from 'react-native-flip-card'
import { Pages } from 'react-native-pages';
import { withNavigation } from 'react-navigation';

class BusinessCards extends React.Component {
  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  componentDidMount(){
    
    this.props.dispatch(getCards());

  }

 
  render() {
    return (
      <View>
      <FlipCard 
        style={styles.remove}
        flipHorizontal={true}
        flipVertical={false}
        flip={false}
        flipCount = {0}
        perspective={1000}
        onFlipEnd={(isFlipEnd)=>{console.log('isFlipEnd', isFlipEnd)}}
        
      >
        {/* Face Side */}

        <View style={styles.cardFront}>
        <ImageBackground
          source={{uri: this.props.image}}
          style={styles.cardView}
        > 
          <View style={{backgroundColor:'rgba(0,0,0,.4)',
          height:deviceRowHeight,width:deviceWidth, paddingLeft: 5}}>
            <Text style={styles.cName}>{this.props.name}</Text>
            <Text style={styles.cInfo}>{this.props.title}</Text>



          </View>

        </ImageBackground>

        </View>

        
        {/* Back Side */}
        <View style={styles.cardBack}>

        <View style={styles.header}>
          <Text style={styles.name}>{this.props.name}</Text>
          <Text style={styles.title}>{this.props.title}</Text>
        </View>

        <View style={styles.main}>
          <Image style={styles.profilePic} source={{uri: this.props.photo}} />

            <View style={styles.contact}>
              <Text style={styles.email}>Email: {this.props.email}</Text>
              <Text style={styles.email}>Phone: {this.props.phone}</Text>
              

              <View style={styles.icons}>
                <View style={styles.icon}>
                  <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/')}>
                  <Image
                    style={{width: 25, height: 25}}
                    source={require('../img/linkedin.png')}
                  />
                  </TouchableOpacity>
                </View>

              <View style={styles.icon}>
              
                <TouchableOpacity onPress={() => Linking.openURL('https://www.github.com/')}>
                  <Image
                    style={{width: 25, height: 25}}
                    source={require('../img/github.png')}
                  />
                </TouchableOpacity>
                
              </View>

              <View style={styles.icon}>
              
              <TouchableHighlight onPress={() => this.setModalVisible(true)}>
              <Image
              source={require('../img/qrcode.png')}
                style={{width: 30, height: 30}}
              />
              </TouchableHighlight>
              
            </View>

            <View style={styles.icon}>
              
            <TouchableHighlight onPress={() => {
              Alert.alert('Removed Card');
              firebase.database().ref('cards/' + firebase.auth().currentUser.uid + '/collection/').update({[this.props.id]:false});
              this.props.dispatch(getCards());
            }}>
            <Image
            source={require('../img/delete.png')}
              style={{width: 24, height: 24, marginTop: 2}}
            />
            </TouchableHighlight>
            
          </View>


            </View>

          </View>

        </View>
        
        <View style={styles.additional}>
          <Text style={styles.aboutMe}>{this.props.aboutMe}</Text>


        </View>

        </View>

      </FlipCard>

      <Modal
        animationType="fade"
        transparent={false}
        visible={this.state.modalVisible}
        onRequestClose={() => {
          alert('Modal has been closed.');
        }}>
        
        <View style={styles.modalContainer}>
       
          
          <Image
          source={{uri: 'http://api.qrserver.com/v1/create-qr-code/?size=150x150&color=3171B1&data='+ this.props.id}}
            style={{width: 150, height: 150, alignSelf: 'center'}}
          />
        
          </View>

          <TouchableHighlight
          onPress={() => {
            this.setModalVisible(!this.state.modalVisible);
          }}>
          <Text style={styles.button}>Return</Text>
        </TouchableHighlight>
       
      </Modal>
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    cards: state.cards,
 
  };
}

export default connect(mapStateToProps)(BusinessCards);

const styles = StyleSheet.create({

  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
    flexDirection: 'column-reverse'
  },

  modalContainer : {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardFront: {
    height: 287,
    flex: 1,
    borderWidth: 1,
    borderColor: 'black',
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  cardView: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  cName: {
    fontWeight: '700',
    fontSize: 30,
    color: 'white'
  },
  cInfo: {
    fontWeight: '500',
    fontSize: 20,
    color: 'white'
  },

///////////////Below this line is all cardBack styling/////////////////////////////////////////

  cardBack: {
    height: 287,
    flex: 1,
    flexWrap: 'wrap', 
    borderWidth: 1,
    borderColor: 'black',
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
  },

  header: {
    flex: 1     
    
  },
  name: {
    fontWeight: '700',
    fontSize: 28,
    marginTop:10,
    marginRight: 10,
    alignSelf: 'flex-end'

  },

  title: {
    fontWeight: '600',
    fontSize: 20,
    marginRight: 10,
    alignSelf: 'flex-end'
  },
  main: {
    flex: 2,
    flexDirection: 'row',
    flexWrap:'wrap'
  },
  
  profilePic: {
    alignSelf: 'flex-start',
    width: 100,
    height: 100,
    borderRadius: 50,
    marginLeft: 25,
  
  },
  contact: {
    marginTop: 45,
    paddingLeft: 0,
    alignSelf: 'center',
  },
  icons: {
    flexDirection: 'row',
    marginTop: 5
  },
  icon: {
    marginRight: 15
  },
  email: {  
    paddingLeft: 35
  },
  additional: {
    flex: 3,
    marginTop: 15,
    paddingLeft: 5,
    paddingTop: 10
  },

  aboutMe: {
    alignSelf: 'center',
    fontWeight: '400',
    fontSize: 14,
    fontStyle: 'italic'

    
  },
  button: {
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#A0A0A0',
    textAlign: 'center',
    color: '#A0A0A0',
    padding: 10,
    margin: 5,
    fontSize: 18,
    fontWeight: 'bold',
  },
  remove: {
    borderWidth: 0
  }
});
