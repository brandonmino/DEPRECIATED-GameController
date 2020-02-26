import React from 'react';
import {Button, Text, TouchableOpacity, View} from 'react-native';
import { styleglobal } from '../StylesScreen';
import { styleplay, dragPosition} from './StylesPlay';
import { GCbutton } from '../../components/button';
import { initcomponent } from '../../components/initbutton';

const overflow={
  overflowY: 'hidden',
  overflowX: 'hidden',
};

export default class CreateScreen extends React.Component {
  render() { 
    return (
      <View style={[styleplay.playContainer, overflow]}>
        <View style={styleplay.playContainer} contentContainerStyle={styleglobal.contentContainer}>
          <GCbutton {...dragPosition.CL} btnname="CL" style={[styleplay.colorButton, styleplay.CL]}/>
          <GCbutton {...dragPosition.CR} btnname="CR" style={[styleplay.colorButton, styleplay.CR]}/>
          <GCbutton {...dragPosition.CU} btnname="CU" style={[styleplay.colorButton, styleplay.CU]}/>
          <GCbutton {...dragPosition.CD} btnname="CD" style={[styleplay.colorButton, styleplay.CD]}/>
          <GCbutton {...dragPosition.AL} btnname="AL" style={[styleplay.arrowButton, styleplay.AL]}/>
          <GCbutton {...dragPosition.AR} btnname="AR" style={[styleplay.arrowButton, styleplay.AR]}/>
          <GCbutton {...dragPosition.AU} btnname="AU" style={[styleplay.arrowButton, styleplay.AU]}/>
          <GCbutton {...dragPosition.AD} btnname="AD" style={[styleplay.arrowButton, styleplay.AD]}/>

          <View style={styleglobal.backContainer}>
            <TouchableOpacity style={styleglobal.backButton} onPress={() => this.props.navigation.navigate('Home')}>
              <Text>Back</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}