import React from 'react';
import { AsyncStorage, Text, TouchableOpacity, View} from 'react-native';
import { styleglobal } from '../StylesScreen';
import { stylecontroller, dragPosition} from './StylesController';
import { GCbutton } from '../../components/button';
import { vw, vh } from 'react-native-expo-viewport-units';

const overflow = {
  overflowY: 'hidden',
  overflowX: 'hidden',
};

const defaultController = [
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
    this.setMode = this.setMode.bind(this);
    this.setController = this.setController.bind(this);
    this.addComponent = this.addComponent.bind(this);
    this.togEdit = this.togEdit.bind(this);
    
    this.state = {init: true, mode: null, startblank: null, components: []};
  }
  
  async setMode() {
    await AsyncStorage.getItem('editMode', (err, result) => {
        this.setState({mode: result == 'true'})
        this.setState({init: false})
      })
  }
  
  async setController() {
    await AsyncStorage.getItem('startblank', (err, result) => { 
        this.setState({startblank: result == 'true'})
        if (this.setState.startblank){
            this.setState({components: []})
        }
        else{
          let dc = [...defaultController];
          for (let i=0; i<dc.length; i++){
            dc[i].editMode = this.state.mode
          }
          this.setState({components: dc})
        }});
  }

  addComponent() {
    let new_component = {editMode: this.state.mode, style: [stylecontroller.colorButton, stylecontroller.CL], x: vw(20), y: vh(20)};
    this.setState({components: [...this.state.components, new_component]});
  }

  async togEdit(bool) {
    //Edit mode
    let all_com = [...this.state.components]
    for (let i=0; i<all_com.length; i++){
      all_com[i].editMode = bool;
    }
    await AsyncStorage.setItem('editMode', bool)
    this.setState({components: all_com})
  }

  render() {
    if (this.state.init){
      this.setMode();
      this.setController();
    }
    
    let create_btn = this.state.mode ? 
        (<TouchableOpacity style={stylecontroller.createnew} onPress={() => this.addComponent()}>
           <Text>Create Button!</Text>
         </TouchableOpacity>) : (<View/>);

    let mode_btn = this.state.mode ? 
        (<TouchableOpacity style={stylecontroller.createnew} onPress={() => this.addComponent()}>
            <Text>Current Mode: { this.state.mode }</Text>
            <Text onPress={() => {this.togEdit(!this.state.mode)}} >Click here to change modes</Text>
        </TouchableOpacity>) : (<View/>);

    let added_components = this.state.components.map((data, index) => {
      return (
        <GCbutton key={index} x={data.x} y={data.y} btnname={data.btnname} style={data.style} editMode={data.editMode}/>
      )
    });
    
    return (
      <View style={[stylecontroller.playContainer, overflow]}>
        <View style={stylecontroller.playContainer} contentContainerStyle={styleglobal.contentContainer}>
          {create_btn}
          <View style={styleglobal.backContainer}>
            <TouchableOpacity style={styleglobal.backButton} onPress={() => this.props.navigation.navigate('Home')}>
              <Text>Back</Text>
            </TouchableOpacity>
          </View>
          {added_components}
        </View>
      </View>
    );
  }
}