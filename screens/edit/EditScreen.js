import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styleglobal } from '../StylesScreen';
import { styleplay, dragPosition} from '../play/StylesPlay';
import { GCbutton } from '../../components/button';

const overflow={
  overflowY: 'hidden',
  overflowX: 'hidden',
};

export default class CreateScreen extends React.Component {
  constructor(props) {
    super(props);

    this.AddButton = this.AddButton.bind(this);
    this.state = {components: []}
  }

  AddButton() {
    let new_component = {moveable: false, style: [styleplay.colorButton, styleplay.CL]};
    this.setState({components: [...this.state.components, new_component]});
  }

  render() {
    let added_buttons = this.state.components.map((data, index) => {
      return (
        <GCbutton key={index} tog={false} playing={false} moveable={data.moveable} style={data.style}/>
      )
    });

    return (
      <View style={[styleplay.playContainer, overflow]}>
        <View style={styleplay.playContainer} contentContainerStyle={styleglobal.contentContainer}>
          <View style={styleglobal.backContainer}>
            <TouchableOpacity style={styleglobal.backButton} onPress={() => this.props.navigation.navigate('Home')}>
              <Text>Back</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => {this.AddButton()}}>
            <Text>Click to create a button</Text>
          </TouchableOpacity>
          {added_buttons}
        </View>
      </View>
    );
  }
}