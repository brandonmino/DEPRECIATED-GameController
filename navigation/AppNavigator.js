import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import HomeScreen from '../screens/EditScreen';
import CreateScreen from '../screens/CreateScreen';
import EditScreen from '../screens/EditScreen';
import SettingsScreen from '../screens/SettingsScreen';

export default createAppContainer(
  createSwitchNavigator({
    Main: MainTabNavigator,
    Home: HomeScreen,
    Create: CreateScreen,
    Edit: EditScreen,
    Settings: SettingsScreen,
  })
);
