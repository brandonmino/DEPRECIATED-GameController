import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import HomeScreen from '../screens/EditScreen';
import CreateScreen from '../screens/CreateScreen';
import EditScreen from '../screens/EditScreen';
import SettingsScreen from '../screens/SettingsScreen';
import { useScreens } from 'react-native-screens';

export default createAppContainer(
  createSwitchNavigator({
    Main: MainTabNavigator,
    Home: HomeScreen,
    Use: UseScreen,
    Create: CreateScreen,
    Edit: EditScreen,
    Settings: SettingsScreen,
  })
);
