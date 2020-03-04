import React from 'react';
import { AsyncStorage, ScrollView, Text, TouchableOpacity, View, TextInput } from 'react-native';
import { styleglobal } from '../StylesScreen';
import { stylecreate } from './StylesCreate';

export default class CreateScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() { 
    return (
      <View style={styleglobal.homeContainer}>
        <ScrollView style={styleglobal.homeContainer} contentContainerStyle={styleglobal.contentContainer}>
          <View style={styleglobal.backContainer}>
            <TouchableOpacity style={styleglobal.backButton} onPress={() => this.props.navigation.navigate('Home')}>
            <Text>Back</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styleglobal.homeTitle}>Name your controller</Text>
            <TextInput
              style={stylecreate.textinput}
              placeholder="Name your controller here!"
              onChangeText={(text) => this.setState({text})}
              value={this.state.text}
            />
            <TouchableOpacity style={stylecreate.enterbtn} onPress={() => {
              this.props.navigation.navigate('Controller')}}>
              {/* make sure to add conditional to see if the name is nonempty and valid */}
              <Text>Start editing!</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

