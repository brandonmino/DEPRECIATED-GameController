import React from 'react';
import {TouchableOpacity} from 'react-native';
import Draggable from 'react-native-draggable';
  
export class GCbutton extends React.Component{
    constructor (props) {
        super(props);
        this.state = {status: false, disabled: true};
    }

    basicPressIn(name) {
        this.setState({status: true});
        let obj = {};
        obj[name] = this.state.status;
        console.log(obj);
        fetch("http://50.28.161.59:6969/", {
            method: 'POST',
            mode: 'no-cors',
            body: JSON.stringify(obj),
        });
    };

    basicPressOut(name) {
        this.setState({status: false});
        let obj = {};
        obj[name] = this.state.status;
        console.log(obj);
        fetch("http://50.28.161.59:6969/", {
            method: 'POST',
            mode: 'no-cors',
            body: JSON.stringify(obj),
        });
    };

    toggleDrag(bool) {
        this.setState({disabled: bool});
        console.log(name);
        console.log(this.state);
    };
  
    render(){
        return(
            <Draggable x={this.props.x} y={this.props.y} disabled={this.state.disabled}>
                <TouchableOpacity style={this.props.style} onPressIn={() => {this.basicPressIn(this.props.btnname)}} onPressOut={() => {this.basicPressOut(this.props.btnname)}}/>
            </Draggable>
        )
    }
  }
