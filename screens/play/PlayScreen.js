import React from 'react';
import {ScrollView, Text, TouchableOpacity, View, Button} from 'react-native';
import { styleglobal } from '../StylesScreen'
import { styleplay, dragPosition} from './StylesPlay'
import Draggable from 'react-native-draggable';


const overflow={
  overflowY: 'hidden',
  overflowX: 'hidden',
};

function basicPress(event) {
  console.log("Hell yeah!");
  
}

export default class CreateScreen extends React.Component {
  render() { 
    return (
      <View style={[styleglobal.homeContainer, overflow]}>
        <View style={styleglobal.homeContainer} contentContainerStyle={styleglobal.contentContainer}>

          <Draggable {...dragPosition.CL} disabled={true}><TouchableOpacity style={[styleplay.colorButton, styleplay.CL]} onPress={basicPress}/></Draggable>
          <Draggable {...dragPosition.CR} disabled={true}><TouchableOpacity style={[styleplay.colorButton, styleplay.CR]} onPress={basicPress}/></Draggable>
          <Draggable {...dragPosition.CU} disabled={true}><TouchableOpacity style={[styleplay.colorButton, styleplay.CU]} onPress={basicPress}/></Draggable>
          <Draggable {...dragPosition.CD} disabled={true}><TouchableOpacity style={[styleplay.colorButton, styleplay.CD]} onPress={basicPress}/></Draggable>
          <Draggable {...dragPosition.AL} disabled={true}><TouchableOpacity style={styleplay.arrowButton} onPress={basicPress}/></Draggable>
          <Draggable {...dragPosition.AR} disabled={true}><TouchableOpacity style={styleplay.arrowButton} onPress={basicPress}/></Draggable>
          <Draggable {...dragPosition.AU} disabled={true}><TouchableOpacity style={styleplay.arrowButton} onPress={basicPress}/></Draggable>
          <Draggable {...dragPosition.AD} disabled={true}><TouchableOpacity style={styleplay.arrowButton} onPress={basicPress}/></Draggable>

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