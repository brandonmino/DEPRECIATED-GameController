import React from 'react';
import {TouchableOpacity} from 'react-native';
import Draggable from 'react-native-draggable';
  
export class GCbutton extends React.Component{
    constructor (props) {
        super(props);
        this.state = {status: true};
    }

    basicPressIn(name) {
        this.setState({status: false});
        let obj = {};
        obj[name] = this.state.status;
        console.log(obj);
        fetch("http://50.28.150.90:3000/data_endpoint", {
            method: 'POST',
            mode: 'no-cors',
            body: JSON.stringify(obj),
        });
    };

    basicPressOut(name) {
        this.setState({status: true});
        let obj = {};
        obj[name] = this.state.status;
        console.log(obj);
        fetch("http://50.28.150.90:3000/data_endpoint", {
            method: 'POST',
            mode: 'no-cors',
            body: JSON.stringify(obj),
        });
    };
  
    render(){
        return(
            <Draggable x={this.props.x} y={this.props.y} disabled={!this.props.drag}>
                <TouchableOpacity activeOpacity={this.props.drag ? 1 : 0.2}
                                  style={this.props.style}
                                  onPressIn={() => {this.props.drag ? {} : this.basicPressIn(this.props.btnname)}}
                                  onPressOut={() => {this.props.drag ? {} : this.basicPressOut(this.props.btnname)}}/>
            </Draggable>
        )
    }
  }
