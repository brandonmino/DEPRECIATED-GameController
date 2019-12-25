import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';

import styles from './StylesScreen'
import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  render() { 
    return (
      <View style={styles.homeContainer}>
        <ScrollView style={styles.homeContainer} contentContainerStyle={styles.contentContainer}>
          <Text style={styles.homeTitle}>Welcome to GameController!</Text>
          <View style={styles.optionsContainer}>

            <TouchableOpacity onPress={() => this.props.navigation.navigate('Use')} style={styles.homeLink}>
              <View
                style={styles.homeOptions}>
                <MonoText>Use a Controller</MonoText>
              </View>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Create')} style={styles.homeLink}>
              <View
                style={styles.homeOptions}>
                <MonoText>Create a Profile</MonoText>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.props.navigation.navigate('Edit')} style={styles.homeLink}>
              <View
                style={styles.homeOptions}>
                <MonoText>Edit Existing Profile</MonoText>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.props.navigation.navigate('Settings')} style={styles.homeLink}>
              <View
                style={styles.homeOptions}>
                <MonoText>Settings</MonoText>
              </View>
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
