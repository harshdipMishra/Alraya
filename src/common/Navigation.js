
const navOptionHandler = (navigation) =>({
    header:null
  })
  
  const HomeStack = createStackNavigator({
    Intro:{
      screen:Intro,
      navigationOptions:navOptionHandler
    },
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
  
  export default createAppContainer(TabNavigator);