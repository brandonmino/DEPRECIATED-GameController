import React from 'react';
import {AsyncStorage, TouchableOpacity} from 'react-native';
import Draggable from 'react-native-draggable';

export class GCbutton extends React.Component{
    constructor (props) {
        super(props);
        this.basicPressIn = this.basicPressIn.bind(this);
        this.basicPressOut = this.basicPressOut.bind(this);

        let IP;
        if(this.props.editMode === false) {
            AsyncStorage.getItem('ip', (e, res) => {
                let temp_json = JSON.parse(res)
                this.IP = temp_json.ip
            });
        }

        this.state = {
            status: true,
        };
    }

    basicPressIn(name) {
        this.setState({status: false});
        let component = {
            key : name,
            state : this.state.status
        };
        console.log(component);
        let settings = {
            method: 'POST',
            mode: 'no-cors',
            body: JSON.stringify(component),
        }
        fetch(this.IP+"/data_endpoint", settings);
    };

    basicPressOut(name) {
        this.setState({status: true});
        let component = {
            key : name,
            state : this.state.status
        };
        console.log(component);
        let settings = {
            method: 'POST',
            mode: 'no-cors',
            body: JSON.stringify(component),
        }
        fetch(this.IP + "/data_endpoint", settings); 
    };
  
    render(){
        return(
            <Draggable x={this.props.x} y={this.props.y} disabled={!this.props.editMode}>
                <TouchableOpacity activeOpacity={this.props.editMode ? 1 : 0.2} 
                                  style={this.props.style} 
                                  onPressIn={() => {this.props.editMode ? {} : this.basicPressIn(this.props.btnname)}} 
                                  onPressOut={() => {this.props.editMode ? {} : this.basicPressOut(this.props.btnname)}}/>
            </Draggable>
        )
    }
  }
