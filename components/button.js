import React from 'react';
import {TouchableOpacity} from 'react-native';
import Draggable from 'react-native-draggable';
  
export class Ourbutton extends React.Component{
    constructor (props) {
        super(props);
        this.state = {status: false};    
    }

    basicPress(name) {
        this.setState({status: true});
        console.log(name);
        console.log(this.state);
    };
  
    render(){
        return(
            <Draggable x={this.props.x} y={this.props.y} disabled={true}>
                <TouchableOpacity style={this.props.style} onPress={() => {this.basicPress(this.props.btnname)}}/>
            </Draggable>
        )
    }
  }
