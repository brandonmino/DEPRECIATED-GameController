import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import { styleglobal } from '../StylesScreen';
import { styleplay, dragPosition} from './StylesPlay';
import { Ourbutton } from '../../components/button';

const overflow={
  overflowY: 'hidden',
  overflowX: 'hidden',
};

export default class CreateScreen extends React.Component {
  render() { 
    return (
      <View style={[styleglobal.homeContainer, overflow]}>
        <View style={styleglobal.homeContainer} contentContainerStyle={styleglobal.contentContainer}>
          <Ourbutton {...dragPosition.CL} btnname="CL" style={[styleplay.colorButton, styleplay.CL]}/>
          <Ourbutton {...dragPosition.CR} btnname="CR" style={[styleplay.colorButton, styleplay.CR]}/>
          <Ourbutton {...dragPosition.CU} btnname="CU" style={[styleplay.colorButton, styleplay.CU]}/>
          <Ourbutton {...dragPosition.CD} btnname="CD" style={[styleplay.colorButton, styleplay.CD]}/>
          <Ourbutton {...dragPosition.AL} btnname="AL" style={[styleplay.arrowButton, styleplay.AL]}/>
          <Ourbutton {...dragPosition.AR} btnname="AR" style={[styleplay.arrowButton, styleplay.AR]}/>
          <Ourbutton {...dragPosition.AU} btnname="AU" style={[styleplay.arrowButton, styleplay.AU]}/>
          <Ourbutton {...dragPosition.AD} btnname="AD" style={[styleplay.arrowButton, styleplay.AD]}/>

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