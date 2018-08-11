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
  deviceRowHeight,
  deviceWidth, 
  Picker
} from 'react-native';
import { WebBrowser } from 'expo';
import { connect } from 'react-redux';
import { logout, updateEmail, updateTitle, updateLinkOne, updateImage} from '../redux/actions'
import { MonoText } from '../components/StyledText';
import ProfileCard from '../components/ProfileCard'
import FlipCard from 'react-native-flip-card'
import Form from '../components/Form'

class Profile extends React.Component {
  render() {
    return (

      //a non-scrollable ScrollView will hide the keyboard
      <ScrollView 
        style={styles.container}
        // scrollEnabled={false}
        // contentContainerStyle={styles.main}
      >
      
      <Form
      id={this.props.user.id}
      key={this.props.user.id}
      name={this.props.user.name}
      email={this.props.user.email}
      photo={this.props.user.photoUrl}
      image={this.props.user.image}
      title={this.props.user.title}
      phone={this.props.user.phone}
      aboutMe={this.props.user.aboutMe}
      linkone={this.props.user.linkone}
      linkone={this.props.user.linktwo}
      />
       
        <FlipCard 
          style={styles.remove}
          flipHorizontal={true}
          flipVertical={false}
          perspective={1000}
        >
          {/* Face Side */}
      
          <View style={styles.cardFront}>
          <ImageBackground
          source={{uri: this.props.user.image}}
          style={{width: '100%', height: '100%'}}
        > 
      
        </ImageBackground>
        </View>



             {/* Back Side */}

          <View style={styles.cardBack}>
         
          <View style={styles.header}>
          <Text style={styles.name}>{this.props.user.name}</Text>
          <Text style={styles.title}>{this.props.user.title}</Text>
          <View style={styles.main}>
          <Image style={styles.profilePic} source={{uri: this.props.user.photoUrl}} />
          <View style={styles.contact}>
          <Text style={styles.email}>Email: {this.props.user.email}</Text>
          <Text style={styles.email}>Phone: {this.props.user.phone}</Text>
          <View style={styles.icons}>
          <View style={styles.icon}>
            <TouchableOpacity>
            <Image
              style={{width: 25, height: 25}}
              source={require('../img/linkedin.png')}
            />
            </TouchableOpacity>
          </View>

        <View style={styles.icon}>
        
          <TouchableOpacity>
            <Image
              style={{width: 25, height: 25}}
              source={require('../img/github.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
          </View>
          </View>
          <Text style={{alignSelf: 'center', paddingTop: 10, fontStyle: 'italic', fontSize: 16}}>{this.props.user.aboutMe}</Text>
        </View>
       

        </View>
        </FlipCard>

        <View>
        <View>
        <Text style={styles.select}> Give Your Card Some Color </Text>
        <Picker
        selectedValue={this.props.user.image}
        
        style={styles.picker}
        mode="dropdown"
        itemStyle={{ backgroundColor: 'white', marginLeft: 0, paddingLeft: 15,  borderRadius: 5}}
        onValueChange={(itemValue) => this.props.dispatch(updateImage(itemValue))}>
        <Picker.Item label="Creative Drool" value="https://i.imgur.com/3cwcCwc.jpg" />
        <Picker.Item label="Subtly Loud" value="https://i.imgur.com/g26WauY.jpg" />
        <Picker.Item label="Hurt Schtummy" value="https://i.imgur.com/qneFWhl.jpg" />
        <Picker.Item label="KimoKawa" value="https://images2.alphacoders.com/446/thumb-1920-446324.jpg" />
        <Picker.Item label="Vectory" value="https://i.imgur.com/Vt112CC.png" />
        <Picker.Item label="Big O" value="https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=af485355b45dcffa63adcb990631bea7&auto=format&fit=crop&w=2866&q=80" />
        <Picker.Item label="Skyline" value="https://images.unsplash.com/photo-1441484295955-db07de1fdbad?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bf92d3187d1e3d66c11350e493bb2180&auto=format&fit=crop&w=2850&q=80" />
        <Picker.Item label="Blue Heron" value="https://i.imgur.com/ofpyJwN.jpg" />
        <Picker.Item label="Guernville" value="https://i.imgur.com/huBNmnI.jpg" />
        <Picker.Item label="Phonet" value="https://i.imgur.com/OrRRXUN.jpg" />
        <Picker.Item label="The Left Leg of Exodia" value="https://i.imgur.com/bRLWA8S.jpg" />
        <Picker.Item label="Rotter" value="https://i.imgur.com/kTrB8vt.jpg" />
        <Picker.Item label="Rad Dad" value="https://i.imgur.com/U1A72z4.jpg" />
        <Picker.Item label="Lazy Daisey" value="https://i.imgur.com/DVQmsCG.jpg" />
        <Picker.Item label="Chicken" value="https://i.imgur.com/22PhsKm.jpg" />
        </Picker>
        </View>


        <View>

        </View>
        </View>
      
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
    backgroundColor: '#FFFFFF',
    paddingTop: 0
    
  },
  picker: {
    height: 100,
    width: 300,
    alignSelf: 'center'
  },
  select: {
    color: 'black',
    fontWeight: '700',
    fontSize: 24,
    alignSelf: 'center',
    paddingTop: 10,
    paddingBottom:10
  },
  cardBack: {

    height: 287,
    justifyContent: 'flex-end',
    flex: 1,
    margin: 5,
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
    fontSize: 24,
    marginRight: 10,
    alignSelf: 'flex-end'
  },
  main: {
    flexDirection: 'row',
    flexWrap:'wrap'
  },

  profilePic: {
    alignSelf: 'flex-start',
    width: 100,
    height: 100,
    borderRadius: 50,
    marginLeft: 15,
    marginRight: 5
  },
  contact: {
    alignSelf: 'center',
  },
  icons: {
    flexDirection: 'row',
    marginTop: 5
  },
  icon: {
    marginRight: 15
  },
  
  cardFront: {
    height: 287,
    flexWrap: 'wrap',
    flex: 1,
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
  imageSelector: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderColor: 'black',
  },
  remove: {
    borderWidth: 0,
    flex: 1
  }
});
