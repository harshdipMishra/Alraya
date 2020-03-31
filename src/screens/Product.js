import React, { Component } from 'react';
import {View,Text,StatusBar} from 'react-native'
import { Container, Header, Tab, Tabs, TabHeading, Icon } from 'native-base';


export default class Product extends Component {
  render() {
    return (
        <>
        <StatusBar backgroundColor="green" barStyle="light-content" />
     <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
         <Text>No Product Found</Text>
     </View>
     </>
    );
  }
}