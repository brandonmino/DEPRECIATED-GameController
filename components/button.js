import React from 'react';
import {TouchableOpacity} from 'react-native';
import Draggable from 'react-native-draggable';
  
export class Ourbutton extends React.Component{
    constructor (props) {
        super(props);
        this.state = {status: false, disabled: true};
    }

    basicPressIn(name) {
        this.setState({status: true});
        let obj = {};
        obj[name] = this.state.status;
        fetch("https://webhook.site/136e85e7-a1a3-4f38-a311-0bf879120fa1", {
            method: 'POST',
            header: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(obj)
        });
    };

    basicPressOut(name) {
        this.setState({status: false});
        let obj = {};
        obj[name] = this.state.status;
        fetch("https://webhook.site/136e85e7-a1a3-4f38-a311-0bf879120fa1", {
            method: 'POST',
            header: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(obj)
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
