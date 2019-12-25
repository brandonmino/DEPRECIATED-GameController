import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';

import styles from './StylesScreen'
import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  render() { 
    return (
      <View style={styles.homeContainer}>
        <ScrollView style={styles.homeContainer} contentContainerStyle={styles.contentContainer}>
          <View style={styles.profileContainer}>
            <Text style={styles.homeTitle}>Welcome to GameController!</Text>

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

        <View style={styles.tabBarInfoContainer}>
          <Text style={styles.tabBarInfoText}>
            This is a tab bar. You can edit it in:
          </Text>

          <View
            style={[styles.codeHighlightContainer, styles.navigationFilename]}>
            <MonoText style={styles.codeHighlightText}>
              navigation/MainTabNavigator.js
            </MonoText>
          </View>
        </View>
      </View>
    );
  }
}

HomeScreen.navigationOptions = {
  header: null,
};
