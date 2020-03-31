import React, { Component } from 'react'
import { Text, View, Image,StyleSheet,StatusBar } from 'react-native'
import {createAppContainer} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {createDrawerNavigator,customDrawerComponent, DrawerItems} from 'react-navigation-drawer';

import {createStackNavigator} from 'react-navigation-stack' 

import Home from './src/screens/Home'
import Login from './src/screens/Login'
import SignUP from './src/screens/SignUP'
import Fevorite from './src/screens/Favorite'
import Order from './src/screens/Order'
import Account from './src/screens/Account'
import NewHome from './src/screens/NewHome'

import Category from './src/screens/Category'
import CategoryDetails from './src/screens/CategoryDetails'
import Events from './src/screens/Events'
import DetailsPage from './src/screens/DetailsPage'
import Map from './src/screens/Map'
import { from } from 'rxjs';
import SafeAreaView from 'react-native-safe-area-view';


// export default class App extends Component{

//   render(){
   
//     return(
//      <AppNavigator/>
//     )
//   }
// }

// const customDrawerComponent = (props) =>(
//   <>
//   <SafeAreaView style={{flex:1}}>
//      <View style={{height:150,backgroundColor:'#000'}}>
//        <Text>qwerty</Text>
//      </View>
//   </SafeAreaView>
//   <DrawerItems {...props}/>
//   </>
// )

// const AppDrawerNavigator = createDrawerNavigator({
//     Home:{
//       screen : Home
//     },
//     Category:{
//       screen:Category
//     },
//     CategoryDetails:{
//       screen:Category
//     },
// },{
//   drawerPosition: 'left',
//     drawerBackgroundColor: '#E21717',
//     drawerType:'front',
//     edgeWidth:100,
//     minSwipeDistance:100,
//     unmountInactiveRoutes:'true',
//     backBehavior:'initialRoute',
//     drawerLockMode:'locked-close'

  
// });
// const AppNavigator = createAppContainer(AppDrawerNavigator);

const TabNavigator = createBottomTabNavigator(
  {
    Home:{
      screen: Home,
      navigationOptions: {
        tabBarIcon: ({ focused }) => {
          return <FontAwesome5 name="home" size={20} color={focused ? '#1d9122' : '#a9a9a9'} /> 
        },
        tabBarOptions: {
          activeTintColor: '#1d9122',
        }
      }
    },
    Shop:{
      screen: Category,
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
      screen:Fevorite,
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
      screen: Order,
      navigationOptions: {
        tabBarIcon: ({ focused }) => {
          return <FontAwesome5 name="first-order" size={20} color={focused ? '#1d9122' : '#a9a9a9'} /> 
        },
        tabBarOptions: {
          activeTintColor: '#1d9122',
          paddingVertical: 15
        }
      }
  },
  Account:{
    screen: Account,
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
// Login:{
//   screen: Login,
 
// },


}
)

// const navOptionHandler = (navigation) => ({
//   header:null
// })

// const stackNav = createStackNavigator({
//   Login:{
//     screen:Login,
//     navigationOptions:navOptionHandler
//   },
//   SignUp:{
//     screen:signUP,
//     navigationOptions:navOptionHandler
//   }
// })

export default createAppContainer(TabNavigator);

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  drawerHeader: {
    backgroundColor:'#0071c1',
    height: 150,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  drawerImage: {
    height: 100,
    width: 100,
    alignItems:'center',
    borderRadius: 50
  }

})

// const TabNavigator = createBottomTabNavigator(
//     {
//       Home:{
//         screen: Home,
//         navigationOptions: {
//           tabBarIcon: ({ focused }) => {
//             return <FontAwesome5 name="home" size={20} color={focused ? '#FF2D55' : '#a9a9a9'} /> 
//           },
//           tabBarOptions: {
//             activeTintColor: '#FF2D55',
//           }
//         }
//       },
//       Search:{
//         screen: Category,
//         navigationOptions: {
//           tabBarIcon: ({ focused }) => {
//             return <FontAwesome5 name="search" size={20} color={focused ? '#FF2D55' : '#a9a9a9'} /> 
//           },
//           tabBarOptions: {
//             activeTintColor: '#FF2D55',
//           }
//         }
//     },
//     Cart:{
//         screen:Map,
//         navigationOptions: {
//           tabBarIcon: ({ focused }) => {
//             return <FontAwesome5 name="shopping-cart" size={20} color={focused ? '#FF2D55' : '#a9a9a9'} /> 
//           },
//           tabBarOptions: {
//             activeTintColor: '#FF2D55',
//           }
//         }
//     },
//     Mappa:{
//         screen: Home,
//         navigationOptions: {
//           tabBarIcon: ({ focused }) => {
//             return <FontAwesome5 name="map-marker-alt" size={20} color={focused ? '#FF2D55' : '#a9a9a9'} /> 
//           },
//           tabBarOptions: {
//             activeTintColor: '#FF2D55',
//             paddingVertical: 15
//           }
//         }
//     }
//   }
// )


