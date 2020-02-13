import React from 'react';
import {TouchableOpacity} from 'react-native';
import Draggable from 'react-native-draggable';
  
export class Ourbutton extends React.Component{
    constructor (props) {
        super(props);
        this.state = {status: false, disabled: true};
    }

    basicPress(name) {
        this.setState({status: true});
        console.log(name);
        console.log(this.state);
    };

    toggleDrag(bool) {
        this.setState({disabled: bool});
        console.log(name);
        console.log(this.state);
    };
  
    render(){
        return(
            <Draggable x={this.props.x} y={this.props.y} disabled={this.state.disabled}>
                <TouchableOpacity style={this.props.style} onPress={() => {this.basicPress(this.props.btnname)}}/>
            </Draggable>
        )
    }
  }
