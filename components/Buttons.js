import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Constants } from 'expo';
import { connect } from 'react-redux';
import { getCards } from '../redux/actions';
import { ButtonGroup, Button} from 'react-native-elements'; // 0.17.0
import Icon from 'react-native-vector-icons/FontAwesome';
import { withNavigation } from 'react-navigation';

import "@expo/vector-icons"; // 5.2.0

class Buttons extends Component {
   
  render () {
      
  const component1 = () => <Text
  onPress={() => this.props.navigation.navigate("QR")} 
  > Scan </Text>
  const component2 = () =>  <Text
  onPress={() => this.props.navigation.navigate("YourQR")}
  > Share </Text>
    const buttons = [{ element: component1 }, { element: component2 }]
    return (
    <View style={styles.container}>
      <ButtonGroup
        onPress={this.updateIndex}
        buttons={buttons}
        containerStyle={{height: 25, borderWidth: 0}}
      />
    </View>
    )
  }
}

export default withNavigation(Buttons);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    marginBottom: 12
  }
});

// for later to fix//


