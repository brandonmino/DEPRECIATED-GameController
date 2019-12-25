import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import HomeScreen from '../screens/EditScreen';
import CreateScreen from '../screens/CreateScreen';
import EditScreen from '../screens/EditScreen';
import SettingsScreen from '../screens/SettingsScreen';



export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Main: MainTabNavigator,
    Home: HomeScreen,
    Create: CreateScreen,
    Edit: EditScreen,
    Settings: SettingsScreen,
  })
);
