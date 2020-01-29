import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import styles from './StylesScreen'

export default class CreateScreen extends React.Component {
  render() { 
    return (
      <View style={styles.homeContainer}>
        <ScrollView style={styles.homeContainer} contentContainerStyle={styles.contentContainer}>
          <View style={styles.backContainer}>
            <TouchableOpacity style={styles.backButton} onPress={() => this.props.navigation.navigate('Home')}>
            <Text> Back </Text>
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