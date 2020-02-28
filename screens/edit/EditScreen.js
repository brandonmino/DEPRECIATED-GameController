import React from 'react';
import {Button, Text, TouchableOpacity, View} from 'react-native';
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

    this._handleAddButton = this._handleAddButton.bind(this);

    this.state = {    /* initial your state. without any added component */
      data: []
    }
  }

  _handleAddButton() {
    let newly_added_data = {style: [styleplay.colorButton, styleplay.CL]};

    this.setState({
      data: [...this.state.data, newly_added_data]
    });
  }
  render() {
    let added_buttons_goes_here = this.state.data.map((data, index) => {
      return (
        <GCbutton key={index} style={data.style}/>
      )
    });
    for (let button of added_buttons_goes_here) {
      button.toggleDrag(false);
    }
    return (
      <View style={[styleplay.playContainer, overflow]}>
        <View style={styleplay.playContainer} contentContainerStyle={styleglobal.contentContainer}>
          {added_buttons_goes_here}
          <TouchableOpacity onPress={() => this._handleAddButton()}>
              <Text>Click to create a button</Text>
            </TouchableOpacity>
          <View style={styleglobal.backContainer}>
            <TouchableOpacity style={styleglobal.backButton} onPress={() => this.props.navigation.navigate('Home')}>
              <Text>Back</Text>
            </TouchableOpacity>
            
          </View>
        </View>
      </View>
    );
  }
}