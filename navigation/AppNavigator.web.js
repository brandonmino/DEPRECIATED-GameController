import { createBrowserApp } from '@react-navigation/web';
import { createSwitchNavigator } from 'react-navigation';

import HomeScreen from '../screens/home/HomeScreen';
import ConnectScreen from '../screens/connect/ConnectScreen';
import CreateScreen from '../screens/create/CreateScreen';
import ControllerScreen from '../screens/controller/ControllerScreen';
import SettingsScreen from '../screens/settings/SettingsScreen';

const switchNavigator = createSwitchNavigator(
  {
    Home: HomeScreen,
    Connect: ConnectScreen,
    Controller: ControllerScreen,
    Create: CreateScreen,
    Settings: SettingsScreen,
  },
  {
    initialRouteName: 'Home',
  }
);
switchNavigator.path = '';

export default createBrowserApp(switchNavigator, { history: 'hash' });
