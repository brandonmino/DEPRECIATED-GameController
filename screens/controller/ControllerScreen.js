import React from 'react';
import { AsyncStorage, Text, TouchableHighlight, TouchableOpacity, View} from 'react-native';
import { styleglobal } from '../StylesScreen';
import { stylecontroller, dragPosition} from './StylesController';
import { GCbutton } from '../../components/button';
import { vw, vh } from 'react-native-expo-viewport-units';
import MenuDrawer from 'react-native-side-drawer'

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

    this.state = {startblank: null, mode: null, showEditBar: false, components: []};

    this.setMode();
    this.setController();
  }
  
  async setMode() {
    await AsyncStorage.getItem('editMode', async (err, result) => {
        this.state.mode = (result == 'true')
      })
  }
  
  async setController() {
    await AsyncStorage.getItem('startblank', (err, result) => { 
        this.state.startblank = (result == 'true')
        if (this.state.startblank){
            this.state.components = []
        }
        else{
          let dc = [...defaultController];
          for (let i=0; i<dc.length; i++){
            dc[i].editMode = this.state.mode
          }
          this.state.components = dc
        }});
  }

  toggleEditBar = () => {
    this.setState({ showEditBar: !this.state.showEditBar });
  };
 
  drawerContent = () => {
    return (
      <TouchableOpacity onPress={this.toggleEditBar} style={stylecontroller.drawerBox}>
        <Text>Close</Text>
      </TouchableOpacity>
    );
  };

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
          <MenuDrawer 
            open={this.state.showEditBar} 
            drawerContent={this.drawerContent()}
            drawerPercentage={20}
            animationTime={250}
            overlay={true}
            opacity={0.4}
          >
            <View style={styleglobal.backContainer}>
              <TouchableOpacity style={styleglobal.backButton} onPress={() => this.props.navigation.navigate('Home')}>
                <Text>Back</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.toggleEditBar} style={stylecontroller.drawerContent}>
                <Text>Open</Text>
              </TouchableOpacity>
            </View>
            {create_btn}
            {added_components}
          </MenuDrawer>
        </View>
      </View>
    );
  }
}
