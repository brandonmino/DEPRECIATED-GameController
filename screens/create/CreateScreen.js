import React from 'react';
import {ScrollView, Text, TouchableOpacity, View, Button} from 'react-native';
import { styleglobal } from '../StylesScreen';
import { stylecreate } from './StylesCreate'
import createButton from '../../components/initbutton';

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
          <Button onPress={() => {createButton("Button A", "Button", "A")}}> Tap this for a new button</Button>
        </ScrollView>
      </View>
    );
  }
}

