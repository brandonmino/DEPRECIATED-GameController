import React from 'react';
import {ScrollView, Text, TouchableOpacity, View, Button} from 'react-native';
import { styleglobal } from '../StylesScreen';
import { stylecreate } from './StylesCreate';
import { GCbutton } from '../../components/button';

let createButton = (name, type, descriptor) => {
  if (type == "Button" || type == "dpad" || type == "jstick"){
      console.log("descriptor recognized");
      return(
          <GCbutton/>
        )
  }
  else{
      console.log("The descriptor was not defined correctly");
  }
}

export default class CreateScreen extends React.Component {
  render() { 
    return (
      <View style={styleglobal.homeContainer}>
        <ScrollView style={styleglobal.homeContainer} contentContainerStyle={styleglobal.contentContainer}>
          <View style={styleglobal.backContainer}>
            <TouchableOpacity style={styleglobal.backButton} onPress={() => this.props.navigation.navigate('Home')}>
            <Text>Back</Text>
            </TouchableOpacity>
          </View>
          <Text style={styleglobal.homeTitle}>This is the create screen!</Text>
          <Button onPress={() => {createButton("ButtonA", "Button", "A")}}> Tap this for a new button</Button>
        </ScrollView>
      </View>
    );
  }
}

