import React from 'react';

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
    deviceWidth
  } from 'react-native';

import FlipCard from 'react-native-flip-card'
import { Pages } from 'react-native-pages';

export default class BusinessCards extends React.Component {

 
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
  style={styles.cardView}
> 
<View style={{backgroundColor:'rgba(0,0,0,.4)',
height:deviceRowHeight,width:deviceWidth}}>
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
  <Image style={styles.profilePic} source={{uri: this.props.photo}}/>

  <View style={styles.contact}>
  <Text style={styles.email}>Email: {this.props.email}</Text>
  <Text style={styles.email}>Phone: {this.props.phone}</Text>
  

  <View style={styles.icons}>
  <View style={styles.icon}>
  <TouchableOpacity onPress={() => Linking.openURL({uri: this.props.photo})}>
  <Image
    style={{width: 25, height: 25}}
    source={require('../img/linkedin.png')}
  />
  </TouchableOpacity>
  </View>

  <View style={styles.icon}>
  
  <TouchableOpacity onPress={() => Linking.openURL('http://google.com')}>
  <Image
   style={{width: 25, height: 25}}
   source={require('../img/github.png')}
  />
  </TouchableOpacity>
  </View>
  </View>

  </View>


  </View>
  
  <View style={styles.additional}>
  
 

  <Text style={styles.aboutMe}>Short one to two sentence description about the specific person and what they are about</Text>
  <Text>{this.props.id}</Text>
  </View>
  
  
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
      flexDirection: 'column-reverse'
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
      fontSize: 24,
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
      paddingLeft: 6,
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
      paddingLeft: 5
    },

    aboutMe: {
      alignSelf: 'flex-end',
      fontWeight: '400',
      fontSize: 14,
      paddingRight: 20
      
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