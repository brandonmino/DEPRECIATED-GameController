import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import HomeScreen from '../screens/home/HomeScreen';
import UseScreen from '../screens/use/UseScreen';
import ConnectScreen from '../screens/connect/ConnectScreen';
import PlayScreen from '../screens/play/PlayScreen';
import CreateScreen from '../screens/create/CreateScreen';
import EditScreen from '../screens/edit/EditScreen';
import SettingsScreen from '../screens/settings/SettingsScreen';

export default createAppContainer(
  createSwitchNavigator(
    {
      Home: HomeScreen,
      Use: UseScreen,
      Connect: ConnectScreen,
      Play: PlayScreen,
      Create: CreateScreen,
      Edit: EditScreen,
      Settings: SettingsScreen,
    },
    {
      initialRouteName: 'Home',
    }
  )
);
