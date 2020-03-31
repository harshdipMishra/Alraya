import React, { Component } from 'react'
import { Text, View, ScrollView, Image, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

class Category extends Component {
  render() {
    return (
        <>
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',padding:20,borderBottomWidth:2,borderBottomColor:'#EAECEF'}}>
                <Text style={{fontSize:10,fontFamily:'AvenirNextLTPro-Bold',color:"#000"}}>Proloco</Text>
                <Text style={{fontSize:17,fontFamily:'AvenirNextLTPro-Bold',color:"#000"}}>Proloco</Text>
                <Text style={{fontSize:10,fontFamily:'AvenirNextLTPro-Bold',color:"#000"}}>Proloco</Text>
            </View>
            <ScrollView
            scrollEventThrottle={16}
            >
            <View style={{paddingHorizontal:12}}>
                <View style={{flexDirection:'column',justifyContent:'center',paddingVertical:10,}}>
                    <View style={{marginBottom:10}}>
                        <Image source={require('../../assets/images/images/da40af21ce0d34a260f91374be522aeb84623945.png')}
                        style={{width:width/1.06, height:width/1.5, borderRadius:8}}
                        />
                         <View style={{position: 'absolute', left: 15, top: 15, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{fontSize:17,fontFamily:'AvenirNextLTPro-Bold',color:'#fff'}}>Cost Rica </Text>
                            
                        </View>
                        <View style={{position: 'absolute', left: 15, bottom: 15, justifyContent: 'flex-start', alignItems: 'flex-start'}}>
                            <Text style={{fontSize:20,fontFamily:'AvenirNextLTPro-Bold',color:'#fff'}}>Grand Tour Of Europiam </Text>
                            <Text style={{fontSize:15,fontFamily:'AvenirNextLTPro-Regular',color:'#EAECEF'}}>11 days </Text>
                        </View>
                    </View>

                    <View style={{marginBottom:10}}>
                        <Image source={require('../../assets/images/images/646bae7b620df4b14bb332b0d8f19ad0ee83f973.png')}
                        style={{width:width/1.06, height:width/1.5, borderRadius:8}}
                        />
                         <View style={{position: 'absolute', left: 15, top: 15, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{fontSize:17,fontFamily:'AvenirNextLTPro-Bold',color:'#fff'}}>Cost Rica </Text>
                            
                        </View>
                        <View style={{position: 'absolute', left: 15, bottom: 15, justifyContent: 'flex-start', alignItems: 'flex-start'}}>
                            <Text style={{fontSize:20,fontFamily:'AvenirNextLTPro-Bold',color:'#fff'}}>Grand Tour Of Europiam </Text>
                            <Text style={{fontSize:15,fontFamily:'AvenirNextLTPro-Regular',color:'#EAECEF'}}>11 days </Text>
                        </View>
                    </View>

                    <View style={{marginBottom:10}}>
                        <Image source={require('../../assets/images/images/fountain.png')}
                        style={{width:width/1.06, height:width/1.5, borderRadius:8}}
                        />
                         <View style={{position: 'absolute', left: 15, top: 15, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{fontSize:17,fontFamily:'AvenirNextLTPro-Bold',color:'#fff'}}>Cost Rica </Text>
                            
                        </View>
                        <View style={{position: 'absolute', left: 15, bottom: 15, justifyContent: 'flex-start', alignItems: 'flex-start'}}>
                            <Text style={{fontSize:20,fontFamily:'AvenirNextLTPro-Bold',color:'#fff'}}>Grand Tour Of Europiam </Text>
                            <Text style={{fontSize:15,fontFamily:'AvenirNextLTPro-Regular',color:'#EAECEF'}}>11 days </Text>
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