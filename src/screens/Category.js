import React, { Component } from 'react'
import { Text, View, ScrollView, Image, Dimensions } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const { width, height } = Dimensions.get('window')

class Category extends Component {
  render() {
    return (
        <>
          
            <View style={{ backgroundColor:'#f3f6f9',flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10, borderBottomWidth: 2, borderBottomColor: '#EAECEF' }}>
            <View style={{alignItems:'flex-start',padding:10,borderBottomWidth:2,borderBottomColor:'#EAECEF'}}>
                <Text style={{fontSize:20,fontWeight:"bold",fontFamily:'AvenirNextLTPro-Bold',color:"green"}}>Shop</Text>
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
            <ScrollView
            scrollEventThrottle={16}
            >
            <View style={{padding:5}}>
                <View style={{flexDirection:'row',justifyContent:'space-between',paddingBottom:20,flexWrap:'wrap'}}>
                <View style={{borderColor:'#dfdfdf',borderWidth:1,}}>
                     <Image source={require('../../assets/images/c1.jpg')}
                    style={{ height:width/2.3,width:width/2.1, borderRadius:0,borderBottomLeftRadius:0,borderBottomRightRadius:0}}
                    />
                    <View style={{alignItems:'center',width:width/2.1,flexWrap:'nowrap',padding:10,backgroundColor:'white',borderBottomLeftRadius:8,borderBottomRightRadius:8}}>
                      <Text style={{fontSize:15,fontFamily:'AvenirNextLTPro-Bold',color:'#666'}}>Grocery & Staples</Text>
                      
                    </View>
                  </View>
                  <View style={{borderColor:'#dfdfdf',borderWidth:1,}}>
                     <Image source={require('../../assets/images/c2.jpg')}
                    style={{ height:width/2.3,width:width/2.1, borderRadius:0,borderBottomLeftRadius:0,borderBottomRightRadius:0}}
                    />
                    <View style={{alignItems:'center',width:width/2.1,flexWrap:'nowrap',padding:10,backgroundColor:'white',borderBottomLeftRadius:8,borderBottomRightRadius:8}}>
                      <Text style={{fontSize:15,fontFamily:'AvenirNextLTPro-Bold',color:'#666'}}>Personal Care</Text>
                     
                    </View>
                  </View>
                  <View style={{borderColor:'#dfdfdf',borderWidth:1,}}>
                     <Image source={require('../../assets/images/c3.jpg')}
                    style={{ height:width/2.3,width:width/2.1, borderRadius:0,borderBottomLeftRadius:0,borderBottomRightRadius:0}}
                    />
                    <View style={{alignItems:'center',width:width/2.1,flexWrap:'nowrap',padding:10,backgroundColor:'white',borderBottomLeftRadius:8,borderBottomRightRadius:8}}>
                      <Text style={{fontSize:15,fontFamily:'AvenirNextLTPro-Bold',color:'#666'}}>Household Items </Text>
                     
                    </View>
                  </View>
                  <View style={{borderColor:'#dfdfdf',borderWidth:1,}}>
                     <Image source={require('../../assets/images/c4.jpg')}
                    style={{ height:width/2.3,width:width/2.1, borderRadius:0,borderBottomLeftRadius:0,borderBottomRightRadius:0}}
                    />
                    <View style={{alignItems:'center',width:width/2.1,flexWrap:'nowrap',padding:10,backgroundColor:'white',borderBottomLeftRadius:8,borderBottomRightRadius:8}}>
                      <Text style={{fontSize:15,fontFamily:'AvenirNextLTPro-Bold',color:'#666'}}>Snacks & Chocolates</Text>
                     
                    </View>
                  </View>
                  <View style={{borderColor:'#dfdfdf',borderWidth:1,}}>
                     <Image source={require('../../assets/images/c5.jpg')}
                    style={{ height:width/2.3,width:width/2.1, borderRadius:0,borderBottomLeftRadius:0,borderBottomRightRadius:0}}
                    />
                    <View style={{alignItems:'center',width:width/2.1,flexWrap:'nowrap',padding:10,backgroundColor:'white',borderBottomLeftRadius:8,borderBottomRightRadius:8}}>
                      <Text style={{fontSize:15,fontFamily:'AvenirNextLTPro-Bold',color:'#666'}}>BreakFast & Dairy</Text>
                     
                    </View>
                  </View>
                  <View style={{borderColor:'#dfdfdf',borderWidth:1,}}>
                     <Image source={require('../../assets/images/c6.jpg')}
                    style={{ height:width/2.3,width:width/2.1, borderRadius:0,borderBottomLeftRadius:0,borderBottomRightRadius:0}}
                    />
                    <View style={{alignItems:'center',width:width/2.1,flexWrap:'nowrap',padding:10,backgroundColor:'white',borderBottomLeftRadius:8,borderBottomRightRadius:8}}>
                      <Text style={{fontSize:15,fontFamily:'AvenirNextLTPro-Bold',color:'#666'}}>Exclusive Offers </Text>
                     
                    </View>
                  </View>
                  <View style={{borderColor:'#dfdfdf',borderWidth:1,}}>
                     <Image source={require('../../assets/images/c7.jpg')}
                    style={{ height:width/2.3,width:width/2.1, borderRadius:0,borderBottomLeftRadius:0,borderBottomRightRadius:0}}
                    />
                    <View style={{alignItems:'center',width:width/2.1,flexWrap:'nowrap',padding:10,backgroundColor:'white',borderBottomLeftRadius:8,borderBottomRightRadius:8}}>
                      <Text style={{fontSize:15,fontFamily:'AvenirNextLTPro-Bold',color:'#666'}}>Noodles, Sauces</Text>
                     
                    </View>
                  </View>
                  <View style={{borderColor:'#dfdfdf',borderWidth:1,}}>
                     <Image source={require('../../assets/images/c8.jpg')}
                    style={{ height:width/2.3,width:width/2.1, borderRadius:0,borderBottomLeftRadius:0,borderBottomRightRadius:0}}
                    />
                    <View style={{alignItems:'center',width:width/2.1,flexWrap:'nowrap',padding:10,backgroundColor:'white',borderBottomLeftRadius:8,borderBottomRightRadius:8}}>
                      <Text style={{fontSize:15,fontFamily:'AvenirNextLTPro-Bold',color:'#666'}}>Fresh & Frozen Food</Text>
                     
                    </View>
                  </View>
                </View>
               
               
               
            </View>
            </ScrollView>
        </>
    )
  }
}

export default Category;