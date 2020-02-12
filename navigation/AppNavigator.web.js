import { createBrowserApp } from '@react-navigation/web';
import { createSwitchNavigator } from 'react-navigation';

import HomeScreen from '../screens/home/HomeScreen';
import ConnectScreen from '../screens/connect/ConnectScreen';
import PlayScreen from '../screens/play/PlayScreen';
import CreateScreen from '../screens/create/CreateScreen';
import EditScreen from '../screens/edit/EditScreen';
import SettingsScreen from '../screens/settings/SettingsScreen';

const switchNavigator = createSwitchNavigator(
  {
    Home: HomeScreen,
    Connect: ConnectScreen,
    Play: PlayScreen,
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
