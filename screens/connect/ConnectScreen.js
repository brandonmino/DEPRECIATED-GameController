import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import { styleglobal } from '../StylesScreen'
import { styleconnect } from './StylesConnect'


async function connectText() {
  while (True) {
    try {
      const response = await fetch('http://137.99.162.1:8080');
      const answer = await response.text();
      console.log(answer);
      console.log("connection successful.");
      this.props.navigation.navigate('Play');
      break;
    } catch (e) {
      console.log("Oh no! Failed to connect.");
    }
  }
}



export default class ConnectScreen extends React.Component {
  componentDidMount () {
    connectText();
  };
  render() { 
    return (
      <View style={styleglobal.homeContainer}>
        <ScrollView style={styleglobal.homeContainer} contentContainerStyle={styleglobal.contentContainer}>
          <View style={styleglobal.backContainer}>
            <TouchableOpacity style={styleglobal.backButton} onPress={() => this.props.navigation.navigate('Home')}>
            <Text>Back</Text>
            </TouchableOpacity>
          </View>
          <View style={styleglobal.settingsHomeContainer}>
            <TouchableOpacity style={styleglobal.settingsButton} onPress={() => this.props.navigation.navigate('Play')}>
            <Text>Connecting to server...</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styleglobal.settingsButton} onPress={() => this.props.navigation.navigate('Play')}>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}