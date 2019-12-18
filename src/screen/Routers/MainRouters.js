import {createStackNavigator} from 'react-navigation-stack';
import BottomRouters from './BottomRouters'
import Routes from './Routes';

export default Appss= createStackNavigator(
  {
    [Routes.HOME_TABS]: {
      screen: BottomRouters,
      path: 'tabs',
      navigationOptions:{
        header:null
      }
    },
    //More stack screens can be defined here only
  },
  {
    // Default config for all screens
    initialRouteName: Routes.HOME_TABS,
  },
);


