/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react'
import { createAppContainer} from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { StyleSheet} from 'react-native'
import Welcome from './src/components/Welcome'
import 'react-native-gesture-handler'
import Splash from './src/components/Splash'
import Login from './src/components/Login'
import Register from './src/components/Register'
import SelectItems from './src/components/SelectItems'
import Home from './src/components/Home'
import Home2 from './src/components/Home2'
import Details from './src/components/Details'
import Form from './src/components/Form'
import Profile from './src/components/Profile'
import SignUp from './src/components/SignUp'
import DrawerContent from './src/components/DrawerContent'
 import Icon from 'react-native-vector-icons/MaterialIcons';
const Tabs =  createBottomTabNavigator({
  Home2: { screen: Home2,navigationOptions: {
        tabBarLabel:"Home Page",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="home" size={30} color="#900" />
        )
      } },
  Register: { screen: Register,navigationOptions: {
        tabBarLabel:"Register",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="home" size={30} color="#900" />
        )
      }},
  Home : { screen: Home,navigationOptions: {
        tabBarLabel:"Profile",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="home" size={30} color="#900" />
        )
      }}, 
},{
        tabBarOptions:{
      activeTintColor: 'white',
       inactiveTintColor: 'white',
      //other properties
      pressColor: 'white',//for click (ripple) effect color
      style: {
        backgroundColor: '#8e44ad',//color you want to change
      }
  }
}
      );

const HomeScreenRouter = createDrawerNavigator(
  {
      customerHome2: { screen: Tabs,
      },
    customerHome: { screen: SignUp,
      },
      Profile: { screen: Profile
      }
  },
  {
    contentComponent: DrawerContent,
  
    drawerPosition : 'right',
     drawerOpenRoute: 'DrawerRightOpen',
      drawerCloseRoute: 'DrawerRightClose',
      drawerToggleRoute: 'DrawerRightToggle',
  }
);




const App = createStackNavigator({
  Splash: {
    screen: HomeScreenRouter,
  },
   Confirm : { screen: HomeScreenRouter
  },
  Welcome: {
    screen: Welcome,
  }, 
  Form : {
    screen: Form,
  },
   Details: {
    screen: Details,
  },
  Login: {
    screen: Login,
  },
  Register: {
    screen: Register,
  },
  Select: {
    screen: SelectItems,
  },
  Home: {
    screen: Home,
  },
  Home2: {
    screen: HomeScreenRouter,
  }
},
 { headerMode: 'none' });

export default createAppContainer(App);


const styles = StyleSheet.create({
  
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  
});


