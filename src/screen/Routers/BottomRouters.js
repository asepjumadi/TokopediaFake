import React from 'react';
import {Image} from 'react-native'
import {createStackNavigator} from 'react-navigation-stack';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
// import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import Routes from './Routes'
import {Home,Akun,Feed,Keranjang,Official,Test } from '@page';
import {IconX,ICON_TYPE} from '../../common/icons'

const HomeStack       = createStackNavigator({Home,Test},{defaultNavigationOptions:{header:null}});
const FeedStack       = createStackNavigator({Feed},{defaultNavigationOptions:{header:null}});
const OfficialStack   = createStackNavigator({Official},{defaultNavigationOptions:{header:null}});
const KeranjangStack  = createStackNavigator({Keranjang},{defaultNavigationOptions:{header:null}});
const AkunStack       = createStackNavigator({Akun},{defaultNavigationOptions:{header:null}});
const BottomTabs      = createMaterialBottomTabNavigator(
    {
      [Routes.HOME_SCREEN]: {
        screen: HomeStack,
        path: 'home',
        navigationOptions: {
          tabBarIcon: getHomeIcon,
          tabBarColor:'#f5f5f5',
          title:'HOME'
        },
        
      },
      
      [Routes.FEED_SCREEN]: {
        screen: FeedStack,
        path: 'students',
        navigationOptions: {
          headerTitle: 'PROFILE',
          title: 'FEED',
          tabBarIcon: getFeedIcons,
          tabBarColor:'#e9f0e4',
        },
      },
      [Routes.Official_SCREEN]:{
        screen:OfficialStack,
        path:'upload',
        navigationOptions:{
          tabBarColor:"#edf2f2",
          title:'Official Store',
          tabBarIcon:getOfficial
  
        },
      },
      [Routes.KERANJANG_SCREEN]:{
        screen:KeranjangStack,
        path:'Keranjang',
        navigationOptions:{
          tabBarColor:"#ecf0e9",
          title:'Keranjang',
          tabBarIcon:getChartIcons
  
        },
      },
      [Routes.AKUN_SCREEN]: {
        screen: AkunStack,
        path: 'notifications',
        navigationOptions: {
          tabBarIcon: getAkunIcons,
          title: 'Akun',
          tabBarColor:'#edf2f2',
         
        },
      },
    },
    {
      initialRouteName: Routes.HOME_SCREEN,
      activeColor: 'green',
      shifting: true,
      labeled: true,
      backBehavior:'history',
      inactiveColor: 'grey',
      barStyle: { backgroundColor: '#694fad' },
      
    },
  );
  
  
  function getHomeIcon({focused, horizontal, tintColor}) {
    return (
      <IconX
        style={{marginBottom: 5}}
        origin={ICON_TYPE.ENTYPO}
        name={'home'}
        color={tintColor}
      />
    );
  }
  
  function getFeedIcons({focused, horizontal, tintColor}) {
    return (
      <Image source={require('../../assets/rss.png')} style={{tintColor:tintColor,width:25,height:25}}/>
      // <IconX
      //   style={{marginBottom: 5}}
      //   origin={ICON_TYPE.FONT_TISTO}
      //   name={'flipboard'}
      //   color={tintColor}
      // />
    );
  }
  
  function getOfficial({focused, horizontal, tintColor}) {
    return (
      <IconX
        style={{marginBottom: 5}}
        origin={ICON_TYPE.FONT_AWESOME}
        name={'check-square-o'}
        color={tintColor}
      />
    );
  }
  function getChartIcons({focused, horizontal, tintColor}) {
    return (
      <IconX
        style={{marginBottom: 5}}
        origin={ICON_TYPE.FONT_AWESOME}
        name={'shopping-cart'}
        color={tintColor}
      />
    );
  }
  function getAkunIcons({focused, horizontal, tintColor}) {
    return (
      <IconX
        style={{marginBottom: 5}}
        origin={ICON_TYPE.FONT_AWESOME}
        name={'smile-o'}
        color={tintColor}
      />
    );
  }
  
  export default createStackNavigator(
    {
      bottomTabs: BottomTabs,
    },
    {
      headerMode: 'none',
      navigationOptions: {
        header: null,
      },
      initialRouteName: 'bottomTabs',
    },
  );