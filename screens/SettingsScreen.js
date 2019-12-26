import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';

import styles from './StylesScreen'
import { MonoText } from '../components/StyledText';

export default class SettingsScreen extends React.Component {
  render() { 
    return (
      <View style={styles.homeContainer}>
        <ScrollView style={styles.homeContainer} contentContainerStyle={styles.contentContainer}>
          <View style={styles.backContainer}>
            <TouchableOpacity style={styles.backButton} onPress={() => this.props.navigation.navigate('Home')}>
            <MonoText> Back </MonoText>
            </TouchableOpacity>
          </View>  
          
          <Text style={styles.homeTitle}>Welcome to GameController!</Text>
          <View style={styles.optionsContainer}>

            <TouchableOpacity onPress={() => this.props.navigation.navigate('Use')} style={styles.homeLink}>
              <View
                style={styles.homeOptions}>
                <MonoText>Setting Options</MonoText>
              </View>
            </TouchableOpacity>
            
          </View>
        </ScrollView>
      </View>
    );
  }
}

SettingsScreen.navigationOptions = {
  header: null,
};

