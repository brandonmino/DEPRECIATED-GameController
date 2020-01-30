import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import { stylesglobal } from '../StylesScreen'
import { stylesbuild } from './StylesBuild'

export default class CreateScreen extends React.Component {
  render() { 
    return (
      <View style={stylesglobal.homeContainer}>
        <ScrollView style={stylesglobal.homeContainer} contentContainerStyle={stylesglobal.contentContainer}>
          <View style={stylesglobal.backContainer}>
            <TouchableOpacity style={stylesglobal.backButton} onPress={() => this.props.navigation.navigate('Home')}>
            <Text>Back</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}