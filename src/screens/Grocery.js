import React, { Component } from 'react'
import { Text, View, ScrollView, Image, Dimensions } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { TouchableOpacity } from 'react-native-gesture-handler';

const { width, height } = Dimensions.get('window')

class Grocery extends Component {
  render() {
    return (
        <>
          
            <View style={{ backgroundColor:'#fff',flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10, }}>
            <View style={{flexDirection:'row', alignItems:'center',padding:10,}}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                   <FontAwesome5 name="arrow-left" size={20} color={'#000'} />
                   </TouchableOpacity>
                <Text style={{marginLeft:20,fontSize:20,fontWeight:"bold",fontFamily:'AvenirNextLTPro-Bold',color:"green"}}>Grocery</Text>
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
               <TouchableOpacity onPress={() => this.props.navigation.navigate('SpicesAndSalt')}>
               <View style={{borderColor:'#dfdfdf',borderWidth:1,marginBottom:8}}>
                     <Image source={require('../../assets/images/gro.jpg')}
                    style={{ height:width/2.3,width:width/2.1, borderRadius:0,borderBottomLeftRadius:0,borderBottomRightRadius:0}}
                    />
                    <View style={{alignItems:'center',width:width/2.1,flexWrap:'nowrap',padding:10,backgroundColor:'white'}}>
                      <Text style={{fontSize:15,fontFamily:'AvenirNextLTPro-Bold',color:'#666',fontWeight:'700'}}>Grocery</Text>
                      
                    </View>
                  </View>
               </TouchableOpacity>
                 <TouchableOpacity>
                 <View style={{borderColor:'#dfdfdf',borderWidth:1,marginBottom:8}}>
                     <Image source={require('../../assets/images/non.jpg')}
                    style={{ height:width/2.3,width:width/2.1, borderRadius:0,borderBottomLeftRadius:0,borderBottomRightRadius:0}}
                    />
                    <View style={{alignItems:'center',width:width/2.1,flexWrap:'nowrap',padding:10,backgroundColor:'white',borderBottomLeftRadius:8,borderBottomRightRadius:8}}>
                      <Text style={{fontSize:15,fontFamily:'AvenirNextLTPro-Bold',color:'#666',fontWeight:'700'}}>Non Food</Text>
                     
                    </View>
                  </View>
                 </TouchableOpacity>
                  <View style={{borderColor:'#dfdfdf',borderWidth:1,marginBottom:8}}>
                     <Image source={require('../../assets/images/fro.jpg')}
                    style={{ height:width/2.3,width:width/2.1, borderRadius:0,borderBottomLeftRadius:0,borderBottomRightRadius:0}}
                    />
                    <View style={{alignItems:'center',width:width/2.1,flexWrap:'nowrap',padding:10,backgroundColor:'white',borderBottomLeftRadius:8,borderBottomRightRadius:8}}>
                      <Text style={{fontSize:15,fontFamily:'AvenirNextLTPro-Bold',color:'#666',fontWeight:'700'}}>Frozen </Text>
                     
                    </View>
                  </View>
                  <View style={{borderColor:'#dfdfdf',borderWidth:1,marginBottom:8}}>
                     <Image source={require('../../assets/images/dai.jpg')}
                    style={{ height:width/2.3,width:width/2.1, borderRadius:0,borderBottomLeftRadius:0,borderBottomRightRadius:0}}
                    />
                    <View style={{alignItems:'center',width:width/2.1,flexWrap:'nowrap',padding:10,backgroundColor:'white',borderBottomLeftRadius:8,borderBottomRightRadius:8}}>
                      <Text style={{fontSize:15,fontFamily:'AvenirNextLTPro-Bold',color:'#666',fontWeight:'700'}}>Dairy</Text>
                     
                    </View>
                  </View>
                  <View style={{borderColor:'#dfdfdf',borderWidth:1,marginBottom:8}}>
                     <Image source={require('../../assets/images/hba.jpg')}
                    style={{ height:width/2.3,width:width/2.1, borderRadius:0,borderBottomLeftRadius:0,borderBottomRightRadius:0}}
                    />
                    <View style={{alignItems:'center',width:width/2.1,flexWrap:'nowrap',padding:10,backgroundColor:'white',borderBottomLeftRadius:8,borderBottomRightRadius:8}}>
                      <Text style={{fontSize:15,fontFamily:'AvenirNextLTPro-Bold',color:'#666',fontWeight:'700'}}>HBA</Text>
                     
                    </View>
                  </View>
                  <View style={{borderColor:'#dfdfdf',borderWidth:1,marginBottom:8}}>
                     <Image source={require('../../assets/images/hou.jpg')}
                    style={{ height:width/2.3,width:width/2.1, borderRadius:0,borderBottomLeftRadius:0,borderBottomRightRadius:0}}
                    />
                    <View style={{alignItems:'center',width:width/2.1,flexWrap:'nowrap',padding:10,backgroundColor:'white',borderBottomLeftRadius:8,borderBottomRightRadius:8}}>
                      <Text style={{fontSize:15,fontFamily:'AvenirNextLTPro-Bold',color:'#666',fontWeight:'700'}}>Household </Text>
                     
                    </View>
                  </View>
                  <View style={{borderColor:'#dfdfdf',borderWidth:1,marginBottom:8}}>
                     <Image source={require('../../assets/images/sta.jpg')}
                    style={{ height:width/2.3,width:width/2.1, borderRadius:0,borderBottomLeftRadius:0,borderBottomRightRadius:0}}
                    />
                    <View style={{alignItems:'center',width:width/2.1,flexWrap:'nowrap',padding:10,backgroundColor:'white',borderBottomLeftRadius:8,borderBottomRightRadius:8}}>
                      <Text style={{fontSize:15,fontFamily:'AvenirNextLTPro-Bold',color:'#666',fontWeight:'700'}}>Stationery</Text>
                     
                    </View>
                  </View>
                  <View style={{borderColor:'#dfdfdf',borderWidth:1,marginBottom:8}}>
                     <Image source={require('../../assets/images/tools.jpg')}
                    style={{ height:width/2.3,width:width/2.1, borderRadius:0,borderBottomLeftRadius:0,borderBottomRightRadius:0}}
                    />
                    <View style={{alignItems:'center',width:width/2.1,flexWrap:'nowrap',padding:10,backgroundColor:'white',borderBottomLeftRadius:8,borderBottomRightRadius:8}}>
                      <Text style={{fontSize:15,fontFamily:'AvenirNextLTPro-Bold',color:'#666',fontWeight:'700'}}>Tools & Decof</Text>
                     
                    </View>
                  </View>
                  <View style={{borderColor:'#dfdfdf',borderWidth:1,marginBottom:8}}>
                     <Image source={require('../../assets/images/toy.jpg')}
                    style={{ height:width/2.3,width:width/2.1, borderRadius:0,borderBottomLeftRadius:0,borderBottomRightRadius:0}}
                    />
                    <View style={{alignItems:'center',width:width/2.1,flexWrap:'nowrap',padding:10,backgroundColor:'white',borderBottomLeftRadius:8,borderBottomRightRadius:8}}>
                      <Text style={{fontSize:15,fontFamily:'AvenirNextLTPro-Bold',color:'#666',fontWeight:'700'}}>Toys & Games</Text>
                     
                    </View>
                  </View>

                  <View style={{borderColor:'#dfdfdf',borderWidth:1,marginBottom:8}}>
                     <Image source={require('../../assets/images/tex.jpg')}
                    style={{ height:width/2.3,width:width/2.1, borderRadius:0,borderBottomLeftRadius:0,borderBottomRightRadius:0}}
                    />
                    <View style={{alignItems:'center',width:width/2.1,flexWrap:'nowrap',padding:10,backgroundColor:'white',borderBottomLeftRadius:8,borderBottomRightRadius:8}}>
                      <Text style={{fontSize:15,fontFamily:'AvenirNextLTPro-Bold',color:'#666',fontWeight:'700'}}>Textile</Text>
                     
                    </View>
                  </View>
                </View>
               
               
               
            </View>
            </ScrollView>
        </>
    )
  }
}

export default Grocery;