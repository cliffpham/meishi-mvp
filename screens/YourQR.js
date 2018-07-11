import React from 'react';
import * as firebase from 'firebase';
import { connect } from 'react-redux';
import { 
 View, 
  StyleSheet,
  Text,
  Image,
  TouchableOpacity } from 'react-native';

class YourQR extends React.Component {

  render() {
    return (
      <View style={styles.container}>
      <View style={{backgroundColor: '#0884FF'}}/> 
        <View style={{backgroundColor: 'white'}}>
          <Image
            source={{uri: 'http://api.qrserver.com/v1/create-qr-code/?size=150x150&color=3171B1&data='+ firebase.auth().currentUser.uid}}
              style={{width: 150, height: 150, marginTop: 15}}
            />
        </View>
    </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
 
  };
}

export default connect(mapStateToProps)(YourQR);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
