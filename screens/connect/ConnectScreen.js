import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import { styleglobal } from '../StylesScreen'
import { styleconnect } from './StylesConnect'


function connectText() {
  let count = 0;
  while (true) {
    try {
      let obj = {};
      obj[status] = "Controller 'ID' is trying to connect";
      fetch("http://50.28.150.90:3000/init_connect", {
            method: 'POST',
            mode: 'no-cors',
            body: JSON.stringify(obj),
        });
      console.log("Connection successful.");
      break;      
    } catch (e) {
        console.log("Oh no! Failed to connect.");
      }
  }
}

export default class ConnectScreen extends React.Component {
  componentDidMount () {
    connectText();
    this.props.navigation.navigate('Controller');

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
            <TouchableOpacity style={styleglobal.settingsButton} onPress={() => this.props.navigation.navigate('Controller')}>
            <Text>Connecting to server...</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styleglobal.settingsButton} onPress={() => this.props.navigation.navigate('Controller')}>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}