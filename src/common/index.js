import React, { Component } from 'react'
import { Text, View, Image,StyleSheet,StatusBar,Button } from 'react-native'
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {createDrawerNavigator, DrawerItems, DrawerActions} from 'react-navigation-drawer';


import Intro from '../screens/Intro'
import Home from '../screens/Home'
import Login from '../screens/Login'
import SignUP from '../screens/SignUP'
import Fevorite from '../screens/Favorite'
import Order from '../screens/Order'
import Account from '../screens/Account'
import Shop from '../screens/Shop'
import Grocery from '../screens/Grocery'
import SpicesAndSalt from '../screens/SpicesAndSalt'
import Perishable from '../screens/Perishable'
import Items from '../screens/Items'
import Checkout from '../screens/Checkout'
import Cart from '../screens/Cart'
import Delivery from '../screens/Delivery'
import ChangeAddress from '../screens/ChangeAddress'
import AddNewAddress from '../screens/AddNewAddress'
import OrderDetail from '../screens/OrderDetail'
import ChangePassword from '../screens/ChangePassword'
import EditProfile from '../screens/EditProfile'
import Product from '../screens/Product'
// import CategoryDetails from './src/screens/CategoryDetails'
// import Events from './src/screens/Events'
// import DetailsPage from './src/screens/DetailsPage'
// import Map from './src/screens/Map'
import { from } from 'rxjs';
import SafeAreaView from 'react-native-safe-area-view';

const navOptionHandler = (navigation) =>({
    header:null
  })
  
  const HomeStack = createStackNavigator({
   
    Home:{
      screen:Home,
      navigationOptions:navOptionHandler
    },
   
   
    Login:{
      screen:Login,
      navigationOptions:navOptionHandler
    },
    Signup:{
      screen:SignUP,
      navigationOptions:navOptionHandler
    },
  })
  const ShopStack = createStackNavigator({
    Shop:{
      screen:Shop,
      navigationOptions:navOptionHandler
    },
    Grocery:{
      screen:Grocery,
      navigationOptions:navOptionHandler
    },
    SpicesAndSalt:{
      screen:SpicesAndSalt,
      navigationOptions:navOptionHandler
    },
    Perishable:{
      screen:Perishable,
      navigationOptions:navOptionHandler
    },
    Items:{
      screen:Items,
      navigationOptions:navOptionHandler
    },
    Checkout:{
      screen:Checkout,
      navigationOptions:navOptionHandler
    },
    Cart:{
      screen:Cart,
      navigationOptions:navOptionHandler
    },
    Delivery:{
      screen:Delivery,
      navigationOptions:navOptionHandler
    },
    ChangeAddress:{
      screen:ChangeAddress,
      navigationOptions:navOptionHandler
    },
    AddNewAddress:{
      screen:AddNewAddress,
      navigationOptions:navOptionHandler
    },
    
   
  })
  
  const FevoriteStack = createStackNavigator({
    Fevorite:{
      screen:Fevorite,
      navigationOptions:navOptionHandler
    },
    Checkout:{
      screen:Checkout,
      navigationOptions:navOptionHandler
    },
   
  
  })
  
  const OrderStack = createStackNavigator({
    Order:{
      screen:Order,
      navigationOptions:navOptionHandler
    },
    OrderDetail:{
      screen:OrderDetail,
      navigationOptions:navOptionHandler
    }
  
  })
  
  const AccountStack = createStackNavigator({
    Account:{
      screen:Account,
      navigationOptions:navOptionHandler
    },
    ChangePassword:{
      screen:ChangePassword,
      navigationOptions:navOptionHandler
    },
    AddNewAddress:{
      screen:AddNewAddress,
      navigationOptions:navOptionHandler
    },
    ChangeAddress:{
      screen:ChangeAddress,
      navigationOptions:navOptionHandler
    },
    EditProfile:{
      screen:EditProfile,
      navigationOptions:navOptionHandler
    },
  
  })
  
  
  const TabNavigator = createBottomTabNavigator({
  
    
          Home:{
            screen:HomeStack,
            navigationOptions: {
              tabBarIcon: ({ focused }) => {
                return <FontAwesome5 name="home" size={20} color={focused ? '#1d9122' : '#a9a9a9'} /> 
              },
              tabBarOptions: {
                activeTintColor: '#1d9122',
                paddingVertical: 15
              }
            }
          },
          Shop:{
            screen:ShopStack,
            navigationOptions: {
              tabBarIcon: ({ focused }) => {
                return <FontAwesome5 name="shopping-cart" size={20} color={focused ? '#1d9122' : '#a9a9a9'} /> 
              },
              tabBarOptions: {
                activeTintColor: '#1d9122',
              }
            }
        },
         
        Fevorites:{
            screen:FevoriteStack,
            navigationOptions: {
              tabBarIcon: ({ focused }) => {
                return <FontAwesome5 name="heart" size={20} color={focused ? '#1d9122' : '#a9a9a9'} /> 
              },
              tabBarOptions: {
                activeTintColor: '#1d9122',
              }
            }
        },
        Orders:{
            screen: OrderStack,
            navigationOptions: {
              tabBarIcon: ({ focused }) => {
                return <FontAwesome5 name="clock" size={20} color={focused ? '#1d9122' : '#a9a9a9'} /> 
              },
              tabBarOptions: {
                activeTintColor: '#1d9122',
                paddingVertical: 15
              }
            }
        },
        Account:{
          screen: AccountStack,
          navigationOptions: {
            tabBarIcon: ({ focused }) => {
              return <FontAwesome5 name="user" size={20} color={focused ? '#1d9122' : '#a9a9a9'} /> 
            },
            tabBarOptions: {
              activeTintColor: '#1d9122',
              paddingVertical: 15
            }
          }
      },
  });
  
//   export default createAppContainer(TabNavigator);
export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: Intro,
      App: TabNavigator,
    }
  ));

//const AppContainer = createAppContainer(AppDrawer);
// export default AppDrawer;
