import { createBrowserApp } from '@react-navigation/web';
import { createSwitchNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import CreateScreen from '../screens/CreateScreen';
import EditScreen from '../screens/EditScreen';
import SettingsScreen from '../screens/SettingsScreen';
import UseScreen from '../screens/UseScreen';

const switchNavigator = createSwitchNavigator(
  {
    Home: HomeScreen,
    Use: UseScreen,
    Create: CreateScreen,
    Edit: EditScreen,
    Settings: SettingsScreen,
  },
  {
    initialRouteName: 'Home',
  }
);
switchNavigator.path = '';

export default createBrowserApp(switchNavigator, { history: 'hash' });
