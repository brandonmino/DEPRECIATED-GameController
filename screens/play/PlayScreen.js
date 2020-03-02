import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styleglobal } from '../StylesScreen';
import { styleplay, dragPosition} from './StylesPlay';
import { GCbutton } from '../../components/button';

const overflow={
  overflowY: 'hidden',
  overflowX: 'hidden',
};

export default class CreateScreen extends React.Component {
  render() { 
    return (
      <View style={[styleplay.playContainer, overflow]}>
        <View style={styleplay.playContainer} contentContainerStyle={styleglobal.contentContainer}>
          <GCbutton {...dragPosition.CL} tog={true} playing={true} btnname="CL" style={[styleplay.colorButton, styleplay.CL]}/>
          <GCbutton {...dragPosition.CR} tog={true} playing={true} btnname="CR" style={[styleplay.colorButton, styleplay.CR]}/>
          <GCbutton {...dragPosition.CU} tog={true} playing={true} btnname="CU" style={[styleplay.colorButton, styleplay.CU]}/>
          <GCbutton {...dragPosition.CD} tog={true} playing={true} btnname="CD" style={[styleplay.colorButton, styleplay.CD]}/>
          <GCbutton {...dragPosition.AL} tog={true} playing={true} btnname="left" style={[styleplay.arrowButton, styleplay.AL]}/>
          <GCbutton {...dragPosition.AR} tog={true} playing={true} btnname="right" style={[styleplay.arrowButton, styleplay.AR]}/>
          <GCbutton {...dragPosition.AU} tog={true} playing={true} btnname="up" style={[styleplay.arrowButton, styleplay.AU]}/>
          <GCbutton {...dragPosition.AD} tog={true} playing={true} btnname="down" style={[styleplay.arrowButton, styleplay.AD]}/>

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