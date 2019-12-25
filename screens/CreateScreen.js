import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';

import styles from './StylesScreen'
import { MonoText } from '../components/StyledText';

export default class CreateScreen extends React.Component {
  render() { 
    return (
      <View style={styles.homeContainer}>
        <ScrollView style={styles.homeContainer} contentContainerStyle={styles.contentContainer}>
          <View style={styles.optionsContainer}>
            <Text style={styles.homeTitle}>Choose a Component</Text>

            <TouchableOpacity onPress={() => this.props.navigation.navigate('Use')} style={styles.homeLink}>
              <View
                style={styles.homeOptions}>
                <MonoText>Joystick</MonoText>
              </View>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Create')} style={styles.homeLink}>
              <View
                style={styles.homeOptions}>
                <MonoText>Button</MonoText>
              </View>
            </TouchableOpacity>

          </View>
        </ScrollView>
      </View>
    );
  }
}

CreateScreen.navigationOptions = {
  header: null,
};
