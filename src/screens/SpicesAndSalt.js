import React, { Component } from 'react'
import { Text, View, ScrollView, Image, Dimensions } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { TouchableOpacity } from 'react-native-gesture-handler';

const { width, height } = Dimensions.get('window')

class SpicesAndSalt extends Component {
  render() {
    return (
        <>
          
            <View style={{ backgroundColor:'#fff',flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10, }}>
            <View style={{flexDirection:'row',alignItems:'center',padding:10,}}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                   <FontAwesome5 name="arrow-left" size={20} color={'#000'} />
                   </TouchableOpacity>
                <Text style={{marginLeft:20,fontSize:20,fontWeight:"bold",fontFamily:'AvenirNextLTPro-Bold',color:"green"}}>Groceries</Text>
            </View>
         {/* <View style={{justifyContent:"flex-end",flexDirection:'row'}}>
         <Text style={{ fontSize: 10,marginRight:20, fontFamily: 'AvenirNextLTPro-Bold', color: "#000" }}>
          <FontAwesome5 name="search" size={20}  /> 
          </Text>
        
          <Text style={{ fontSize: 10, fontFamily: 'AvenirNextLTPro-Bold', color: "#000" }}>
          <FontAwesome5 name="shopping-cart" size={20}  /> 
          </Text>
         </View> */}
        </View>
            <ScrollView
            scrollEventThrottle={16}
            >
            <View style={{padding:5,margin:0}}>
                <View style={{flexDirection:'row',justifyContent:'space-between',paddingBottom:20,flexWrap:'wrap',flex:1}}>
               <TouchableOpacity onPress={() => this.props.navigation.navigate('Items')}>
               <View style={{borderColor:'#dfdfdf',borderWidth:1,marginBottom:8}}>
                     <Image source={require('../../assets/images/spice.jpg')}
                    style={{ height:width/2.3,width:width/2.1, borderRadius:0,borderBottomLeftRadius:0,borderBottomRightRadius:0}}
                    />
                    <View style={{alignItems:'center',width:width/2.1,flexWrap:'nowrap',padding:10,backgroundColor:'white'}}>
                      <Text style={{fontSize:15,fontFamily:'AvenirNextLTPro-Bold',color:'#666',fontWeight:'700'}}>Spices And Salt</Text>
                      
                    </View>
                  </View>
               </TouchableOpacity>
                 <TouchableOpacity>
                 <View style={{borderColor:'#dfdfdf',borderWidth:1,marginBottom:8}}>
                     <Image source={require('../../assets/images/mac.jpg')}
                    style={{ height:width/2.3,width:width/2.1, borderRadius:0,borderBottomLeftRadius:0,borderBottomRightRadius:0}}
                    />
                    <View style={{alignItems:'center',width:width/2.1,flexWrap:'nowrap',padding:10,backgroundColor:'white',borderBottomLeftRadius:8,borderBottomRightRadius:8}}>
                      <Text style={{fontSize:15,fontFamily:'AvenirNextLTPro-Bold',color:'#666',fontWeight:'700'}}>Macrona Spaghetti</Text>
                     
                    </View>
                  </View>
                 </TouchableOpacity>
                  <View style={{borderColor:'#dfdfdf',borderWidth:1,marginBottom:8}}>
                     <Image source={require('../../assets/images/oil.jpg')}
                    style={{ height:width/2.3,width:width/2.1, borderRadius:0,borderBottomLeftRadius:0,borderBottomRightRadius:0}}
                    />
                    <View style={{alignItems:'center',width:width/2.1,flexWrap:'nowrap',padding:10,backgroundColor:'white',borderBottomLeftRadius:8,borderBottomRightRadius:8}}>
                      <Text style={{fontSize:15,fontFamily:'AvenirNextLTPro-Bold',color:'#666',fontWeight:'700'}}>Oil </Text>
                     
                    </View>
                  </View>
                  <View style={{borderColor:'#dfdfdf',borderWidth:1,marginBottom:8}}>
                     <Image source={require('../../assets/images/sna.jpg')}
                    style={{ height:width/2.3,width:width/2.1, borderRadius:0,borderBottomLeftRadius:0,borderBottomRightRadius:0}}
                    />
                    <View style={{alignItems:'center',width:width/2.1,flexWrap:'nowrap',padding:10,backgroundColor:'white',borderBottomLeftRadius:8,borderBottomRightRadius:8}}>
                      <Text style={{fontSize:15,fontFamily:'AvenirNextLTPro-Bold',color:'#666',fontWeight:'700'}}>Snacks & Chocolates</Text>
                     
                    </View>
                  </View>
                  <View style={{borderColor:'#dfdfdf',borderWidth:1,marginBottom:8}}>
                     <Image source={require('../../assets/images/bre.jpg')}
                    style={{ height:width/2.3,width:width/2.1, borderRadius:0,borderBottomLeftRadius:0,borderBottomRightRadius:0}}
                    />
                    <View style={{alignItems:'center',width:width/2.1,flexWrap:'nowrap',padding:10,backgroundColor:'white',borderBottomLeftRadius:8,borderBottomRightRadius:8}}>
                      <Text style={{fontSize:15,fontFamily:'AvenirNextLTPro-Bold',color:'#666',fontWeight:'700'}}>BreakFast & Dairy</Text>
                     
                    </View>
                  </View>
                 
                 
                  <View style={{borderColor:'#dfdfdf',borderWidth:1,marginBottom:8}}>
                     <Image source={require('../../assets/images/c8.jpg')}
                    style={{ height:width/2.3,width:width/2.1, borderRadius:0,borderBottomLeftRadius:0,borderBottomRightRadius:0}}
                    />
                    <View style={{alignItems:'center',width:width/2.1,flexWrap:'nowrap',padding:10,backgroundColor:'white',borderBottomLeftRadius:8,borderBottomRightRadius:8}}>
                      <Text style={{fontSize:15,fontFamily:'AvenirNextLTPro-Bold',color:'#666',fontWeight:'700'}}>Fresh & Frozen Food</Text>
                     
                    </View>
                  </View>
                </View>
               
               
               
            </View>
            </ScrollView>
        </>
    )
  }
}

export default SpicesAndSalt;