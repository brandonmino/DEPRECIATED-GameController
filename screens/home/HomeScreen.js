import React from 'react';
import {Image, FlatList, ScrollView, Text, TouchableHighlight, TouchableOpacity, View} from 'react-native';
import { styleglobal } from '../StylesScreen'
import { stylehome } from './StylesHome'

const ControllerList = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Controller1',
    jsonlocation: 'NONE',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Controller2',
    jsonlocation: 'NONE',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Controller3',
    jsonlocation: 'NONE',
  },
];

export default class HomeScreen extends React.Component {
  render() { 
    return (
      <View style={styleglobal.homeContainer}>
        <ScrollView style={styleglobal.homeContainer} contentContainerStyle={styleglobal.contentContainer}>
          <Text style={styleglobal.homeTitle}>Welcome to GameController!</Text>
          <FlatList
            data={ControllerList}
            renderItem={({item}) => (
            <View style={stylehome.listStyle}>
              <View style={stylehome.listTextCon}>
                <Text style={stylehome.listText} onPress={() => this.props.navigation.navigate('Connect')}>{item.title}</Text>
              </View>
              <View style={stylehome.settingLogoCon}>
                <TouchableHighlight style={stylehome.settingClickLogo} onPress={() => this.props.navigation.navigate('Edit')}>
                  <Image style={stylehome.settingLogo} source={require('../../images/settings_dots.png')}/>
                </TouchableHighlight>
              </View>    
            </View>
            )}
            keyExtractor={item => item.id}
          />
          <View style={styleglobal.settingsHomeContainer}>
            <TouchableOpacity style={styleglobal.settingsButton} onPress={() => this.props.navigation.navigate('Create')}>
            <Text>Create</Text>
            </TouchableOpacity>
          </View>
          <View style={styleglobal.settingsHomeContainer}>
            <TouchableOpacity style={styleglobal.settingsButton} onPress={() => this.props.navigation.navigate('Settings')}>
            <Text>Settings</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}
