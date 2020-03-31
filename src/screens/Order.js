import React, { Component } from 'react';
import {View,Text,StatusBar} from 'react-native'
import { Container, Header, Tab, Tabs, TabHeading, Icon } from 'native-base';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


export default class Order extends Component {
  render() {
    return (
        <>
        <StatusBar backgroundColor="green" barStyle="light-content" />
        <View style={{ backgroundColor:'#f3f6f9',flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10, borderBottomWidth: 2, borderBottomColor: '#EAECEF' }}>
            <View style={{alignItems:'flex-start',padding:10,borderBottomWidth:2,borderBottomColor:'#EAECEF'}}>
                <Text style={{fontSize:20,fontWeight:"bold",fontFamily:'AvenirNextLTPro-Bold',color:"green"}}>Yours Order</Text>
            </View>
         <View style={{justifyContent:"flex-end",flexDirection:'row'}}>
         <Text style={{ fontSize: 10,marginRight:20, fontFamily: 'AvenirNextLTPro-Bold', color: "#000" }}>
          <FontAwesome5 name="search" size={20}  /> 
          </Text>
        
          <Text style={{ fontSize: 10, fontFamily: 'AvenirNextLTPro-Bold', color: "#000" }}>
          <FontAwesome5 name="shopping-cart" size={20}  /> 
          </Text>
         </View>
        </View>
     <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
         <Text>No Order Found</Text>
     </View>
     </>
    );
  }
}