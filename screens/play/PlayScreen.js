import React from 'react';
import {ScrollView, Text, TouchableOpacity, View, Button} from 'react-native';
import { styleglobal } from '../StylesScreen'
import { styleplay } from './StylesPlay'
//let Draggable = require('react-native-draggable');

// const overflow={
//   overflowY: 'hidden',
//   overflowX: 'hidden',
// };

export default class CreateScreen extends React.Component {
  render() { 
    return (
      <View style={styleglobal.homeContainer}>
        <View style={styleglobal.homeContainer} contentContainerStyle={styleglobal.contentContainer}>
          <TouchableOpacity style={[styleplay.newButton, styleplay.BL]} />
          <TouchableOpacity style={[styleplay.newButton, styleplay.BR]} />
          <TouchableOpacity style={[styleplay.newButton, styleplay.BU]} />
          <TouchableOpacity style={[styleplay.newButton, styleplay.BD]} />
          <TouchableOpacity style={[styleplay.arrowButton, styleplay.AL]} />
          <TouchableOpacity style={[styleplay.arrowButton, styleplay.AR]} />
          <TouchableOpacity style={[styleplay.arrowButton, styleplay.AU]} />
          <TouchableOpacity style={[styleplay.arrowButton, styleplay.AD]} />
          <View style={styleglobal.backContainer}>
            <TouchableOpacity style={styleglobal.backButton} onPress={() => this.props.navigation.navigate('Use')}>
            <Text>Back</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}