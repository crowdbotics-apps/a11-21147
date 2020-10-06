import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Tutorial129167Navigator from '../features/Tutorial129167/navigator';
import NotificationList129139Navigator from '../features/NotificationList129139/navigator';
import Settings129138Navigator from '../features/Settings129138/navigator';
import Settings129130Navigator from '../features/Settings129130/navigator';
import UserProfile129128Navigator from '../features/UserProfile129128/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Tutorial129167: { screen: Tutorial129167Navigator },
NotificationList129139: { screen: NotificationList129139Navigator },
Settings129138: { screen: Settings129138Navigator },
Settings129130: { screen: Settings129130Navigator },
UserProfile129128: { screen: UserProfile129128Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
