import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import { styleglobal } from '../StylesScreen'
import { styleuse } from './StylesUse'

export default class CreateScreen extends React.Component {
  render() { 
    return (
      <View style={styleglobal.homeContainer}>
        <ScrollView style={styleglobal.homeContainer} contentContainerStyle={styleglobal.contentContainer}>
          <View style={styleglobal.backContainer}>
            <TouchableOpacity style={styleglobal.backButton} onPress={() => this.props.navigation.navigate('Home')}>
            <Text>Back</Text>
            </TouchableOpacity>
          </View>
          <View style={styleglobal.settingsHomeContainer}>
            <TouchableOpacity style={styleglobal.settingsButton} onPress={() => this.props.navigation.navigate('Connect')}>
            <Text>Play</Text>
            </TouchableOpacity>
          </View>
          <View style={styleglobal.settingsHomeContainer}>
            <TouchableOpacity style={styleglobal.settingsButton} onPress={() => this.props.navigation.navigate('Edit')}>
            <Text>Edit</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}