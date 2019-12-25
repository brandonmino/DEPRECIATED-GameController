import { createBrowserApp } from '@react-navigation/web';
import { createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';

const switchNavigator = createSwitchNavigator({
  Main: MainTabNavigator,
  Home: HomeScreen,
  Create: CreateScreen,
  Edit: EditScreen,
  Settings: SettingsScreen,
});
switchNavigator.path = '';

export default createBrowserApp(switchNavigator, { history: 'hash' });
