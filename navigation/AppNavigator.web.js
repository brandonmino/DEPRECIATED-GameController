import { createBrowserApp } from '@react-navigation/web';
import { createSwitchNavigator } from 'react-navigation';

import HomeScreen from '../screens/home/HomeScreen';
import PlayScreen from '../screens/play/PlayScreen';
import CreateScreen from '../screens/build/CreateScreen';
import EditScreen from '../screens/build/EditScreen';
import SettingsScreen from '../screens/settings/SettingsScreen';

const switchNavigator = createSwitchNavigator(
  {
    Home: HomeScreen,
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
