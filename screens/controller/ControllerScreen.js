import React from 'react';
import {Button, Text, TouchableOpacity, View, AsyncStorage} from 'react-native';
import { styleglobal } from '../StylesScreen';
import { stylecontroller, dragPosition} from './StylesController';
import { GCbutton } from '../../components/button';
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';

const overflow = {
  overflowY: 'hidden',
  overflowX: 'hidden',
};

const basicController = [
  {x: dragPosition.CL.x, y: dragPosition.CL.y, btnname:"CL", style: [stylecontroller.colorButton, stylecontroller.CL]},
  {x: dragPosition.CR.x, y: dragPosition.CR.y, btnname:"CR", style: [stylecontroller.colorButton, stylecontroller.CR]},
  {x: dragPosition.CU.x, y: dragPosition.CU.y, btnname:"CU", style: [stylecontroller.colorButton, stylecontroller.CU]},
  {x: dragPosition.CD.x, y: dragPosition.CD.y, btnname:"CD", style: [stylecontroller.colorButton, stylecontroller.CD]},
  {x: dragPosition.AL.x, y: dragPosition.AL.y, btnname:"left", style: [stylecontroller.arrowButton, stylecontroller.AL]},
  {x: dragPosition.AR.x, y: dragPosition.AR.y, btnname:"right", style: [stylecontroller.arrowButton, stylecontroller.AR]},
  {x: dragPosition.AU.x, y: dragPosition.AU.y, btnname:"up", style: [stylecontroller.arrowButton, stylecontroller.AU]},
  {x: dragPosition.AD.x, y: dragPosition.AD.y, btnname:"down", style: [stylecontroller.arrowButton, stylecontroller.AD]},
]


export default class ControllerScreen extends React.Component {
  constructor(props) {
    super(props);
    this.addButton = this.addButton.bind(this);
    this.drag = null;
    AsyncStorage.getItem('drag', (err, result) => drag = JSON.parse(result));
    let startblank = null;
    AsyncStorage.getItem('startblank', (err, result) => startblank = JSON.parse(result));
    this.state = {data: startblank ? [] : basicController};
  }

  addButton() {
    let newdata = {style: [stylecontroller.colorButton, stylecontroller.CL], x: vw(20), y: vh(20)};
    this.setState({data: [...this.state.data, newdata]});
  }

  render() {
    let maybe_create_button = this.drag ? 
        (<TouchableOpacity style={stylecontroller.createnew} onPress={() => this.addButton()}>
           <Text>Create Button!</Text>
         </TouchableOpacity>) : (<View />);
    let added_buttons_goes_here = this.state.data.map((data, index) => {
      return (
        <GCbutton key={index} x={data.x} y={data.y} btnname={data.btnname} style={data.style} drag={this.drag}/>
      )
    });
    
    return (
      <View style={[stylecontroller.playContainer, overflow]}>
        <View style={stylecontroller.playContainer} contentContainerStyle={styleglobal.contentContainer}>
          {maybe_create_button}
          <View style={styleglobal.backContainer}>
            <TouchableOpacity style={styleglobal.backButton} onPress={() => this.props.navigation.navigate('Home')}>
              <Text>Back</Text>
            </TouchableOpacity>
          </View>
          {added_buttons_goes_here}
        </View>
      </View>
    );
  }
}