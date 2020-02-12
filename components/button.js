import React from 'react';
import {ScrollView, Text, TouchableOpacity, View, Button} from 'react-native';
import { styleglobal } from '../screens/StylesScreen';
import { styleplay, dragPosition} from '../screens/play/StylesPlay';
import Draggable from 'react-native-draggable';


function basicPress(name) {
    console.log(name);
  };
  
export class Ourbutton extends React.Component{
    constructor (props) {
        super(props);    
    }
  
    render(){
        return(
            <Draggable x={this.props.x} y={this.props.y} disabled={true}>
                <TouchableOpacity style={this.props.style} onPress={() => {basicPress(this.props.btnname)}}/>
            </Draggable>
        )
    }
  }
