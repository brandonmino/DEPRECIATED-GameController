import React from 'react';
import {AsyncStorage, TouchableOpacity} from 'react-native';
import Draggable from 'react-native-draggable';

export class GCbutton extends React.Component{
    constructor (props) {
        super(props);
        this.toggleDrag = this.toggleDrag.bind(this);
        this.toggleSelect = this.toggleSelect.bind(this);

        let IP;
        AsyncStorage.getItem('ip', (e, res) => {
            let temp_json = JSON.parse(res)
            this.IP = temp_json.ip
        });

        this.state = {
            status: true, 
            moveable: this.props.tog,
            selected: false,
            sendpress: this.props.playing,
            style: null
        };

    }

    basicPressIn(name) {
        if (this.state.sendpress == true) {
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
        }
    };

    basicPressOut(name) {
        if (this.state.sendpress == true) {
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
        }  
    };

    toggleDrag(bool) {
        this.setState({moveable: bool});
    };

    toggleSelect(bool) {
        this.setState({moveable: bool})
    };
  
    render(){
        return(
            <Draggable x={this.props.x} y={this.props.y} disabled={this.state.moveable}>
                <TouchableOpacity style={this.props.style} onPressIn={() => {this.basicPressIn(this.props.btnname)}} onPressOut={() => {this.basicPressOut(this.props.btnname)}}/>
            </Draggable>
        )
    }
  }
