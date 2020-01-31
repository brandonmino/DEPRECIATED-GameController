import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import { styleglobal } from '../StylesScreen'
import { styleplay } from './StylesPlay'

export default class CreateScreen extends React.Component {
  render() { 
    return (
      <View style={styleglobal.homeContainer}>
        <ScrollView style={styleglobal.homeContainer} contentContainerStyle={styleglobal.contentContainer}>
          <View style={styleglobal.backContainer}>
            <TouchableOpacity style={styleglobal.backButton} onPress={() => this.props.navigation.navigate('Use')}>
            <Text>Back</Text>
            </TouchableOpacity>
          </View>
          <Text style={styleglobal.homeTitle}>You are now on the play screen! Yay!</Text>
        </ScrollView>
      </View>
    );
  }
}