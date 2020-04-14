import React, { Component } from 'react'
import { Text, View, Image,StyleSheet,StatusBar,Button,AsyncStorage,YellowBox } from 'react-native'

import SyncStorage from 'sync-storage';
import AppContainer from './src/common/index';
import SplashScreen from './src/screens/SplashScreen'



// const CustomDrawerContentComponent = (props) => (
//   <Drawer {...props}/>
// );



export default class App extends Component {

  constructor(props) {
    super(props)
    console.disableYellowBox = true;
    YellowBox.ignoreWarnings(['Remote debugger']);
    this.state = { isLoading: true }
  }

  async componentDidMount() {
    const data = await this.performTimeConsumingTask();
    
    if (data !== null) {
      this.setState({ isLoading: false });
    }
  }
  performTimeConsumingTask = async () => {
    return new Promise((resolve) =>
      setTimeout(
        () => { resolve('result') },
        2000
      )
    );
  }
  render() {
    if (this.state.isLoading) {
      return <SplashScreen />;
    }
    return (
      
      <View style={{ flex: 1 }}>
        <StatusBar
          backgroundColor={'green'}
          
        />
        {this.state.isLoading ? (
          <View style={{ flex: 1, justifyContent: 'center',backgroundColor:'green',minHeight:600 }}>
         <Text>isLoading</Text>
          </View>
        ) : (
          <AppContainer />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  // drawerHeader: {
  //   backgroundColor:'#0071c1',
  //   height: 150,
  //   alignItems: 'center',
  //   justifyContent: 'flex-start',
  //   flexDirection: 'row',
  // },
  drawerImage: {
    height: 100,
    width: 100,
    alignItems:'center',
    borderRadius: 50
  }
  
  })

// const RootStack = createStackNavigator(
//   {
//     Home: Home,
//     Login: Login,
//   },
//   {
//     initialRouteName: 'Home',
//   }
// );

// const AppContainer = createAppContainer(RootStack);

// export default class App extends React.Component {
//   render() {
//     return <AppContainer />;
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

// const TabNavigator = createBottomTabNavigator(
//   {
//     Home:{
//       screen: Home,
//       navigationOptions: {
//         tabBarIcon: ({ focused }) => {
//           return <FontAwesome5 name="home" size={20} color={focused ? '#1d9122' : '#a9a9a9'} /> 
//         },
//         tabBarOptions: {
//           activeTintColor: '#1d9122',
//         }
//       }
//     },
//     Shop:{
//       screen: Category,
//       navigationOptions: {
//         tabBarIcon: ({ focused }) => {
//           return <FontAwesome5 name="shopping-cart" size={20} color={focused ? '#1d9122' : '#a9a9a9'} /> 
//         },
//         tabBarOptions: {
//           activeTintColor: '#1d9122',
//         }
//       }
//   },
//   Fevorites:{
//       screen:Fevorite,
//       navigationOptions: {
//         tabBarIcon: ({ focused }) => {
//           return <FontAwesome5 name="heart" size={20} color={focused ? '#1d9122' : '#a9a9a9'} /> 
//         },
//         tabBarOptions: {
//           activeTintColor: '#1d9122',
//         }
//       }
//   },
//   Orders:{
//       screen: Order,
//       navigationOptions: {
//         tabBarIcon: ({ focused }) => {
//           return <FontAwesome5 name="first-order" size={20} color={focused ? '#1d9122' : '#a9a9a9'} /> 
//         },
//         tabBarOptions: {
//           activeTintColor: '#1d9122',
//           paddingVertical: 15
//         }
//       }
//   },
//   Account:{
//     screen: Account,
//     navigationOptions: {
//       tabBarIcon: ({ focused }) => {
//         return <FontAwesome5 name="user" size={20} color={focused ? '#1d9122' : '#a9a9a9'} /> 
//       },
//       tabBarOptions: {
//         activeTintColor: '#1d9122',
//         paddingVertical: 15
//       }
//     }
// },


// }
// )

// export default createAppContainer(TabNavigator);

// const styles = StyleSheet.create({

//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   drawerHeader: {
//     backgroundColor:'#0071c1',
//     height: 150,
//     alignItems: 'center',
//     justifyContent: 'flex-start',
//     flexDirection: 'row',
//   },
//   drawerImage: {
//     height: 100,
//     width: 100,
//     alignItems:'center',
//     borderRadius: 50
//   }

// })

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


