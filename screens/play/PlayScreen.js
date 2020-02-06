import React from 'react';
import {ScrollView, Text, TouchableOpacity, View, Button} from 'react-native';
import { styleglobal } from '../StylesScreen'
import { styleplay, dragPosition} from './StylesPlay'
import Draggable from 'react-native-draggable';


const overflow={
  overflowY: 'hidden',
  overflowX: 'hidden',
};

export default class CreateScreen extends React.Component {
  render() { 
    return (
      <View style={[styleglobal.homeContainer, overflow]}>
        <View style={styleglobal.homeContainer} contentContainerStyle={styleglobal.contentContainer}>

          <Draggable {...dragPosition.CL}><TouchableOpacity style={[styleplay.colorButton, styleplay.CL]} /></Draggable>
          <Draggable {...dragPosition.CR}><TouchableOpacity style={[styleplay.colorButton, styleplay.CR]} /></Draggable>
          <Draggable {...dragPosition.CU}><TouchableOpacity style={[styleplay.colorButton, styleplay.CU]} /></Draggable>
          <Draggable {...dragPosition.CD}><TouchableOpacity style={[styleplay.colorButton, styleplay.CD]} /></Draggable>
          <Draggable {...dragPosition.AL}><TouchableOpacity style={styleplay.arrowButton} /></Draggable>
          <Draggable {...dragPosition.AR}><TouchableOpacity style={styleplay.arrowButton} /></Draggable>
          <Draggable {...dragPosition.AU}><TouchableOpacity style={styleplay.arrowButton} /></Draggable>
          <Draggable {...dragPosition.AD}><TouchableOpacity style={styleplay.arrowButton} /></Draggable>

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