import React from 'react';
import {ScrollView, Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './StylesScreen'

export default class HomeScreen extends React.Component {
  render() { 
    return (
      <View style={styles.homeContainer}>
        <ScrollView style={styles.homeContainer} contentContainerStyle={styles.contentContainer}>
          <Text style={styles.homeTitle}>Welcome to GameController!</Text>
          <View style={styles.settingsHomeContainer}>
            <TouchableOpacity style={styles.settingsButton} onPress={() => this.props.navigation.navigate('Settings')}>
            <Text>Settings</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

HomeScreen.navigationOptions = {
  header: null,
};
