import React, { Component } from 'react';
import {View,Text,StatusBar} from 'react-native'
import { Container, Header, Tab, Tabs, TabHeading, Icon, Card } from 'native-base';


export default class Summary extends Component {
  render() {
    return (
        <>
        <StatusBar backgroundColor="green" barStyle="light-content" />

     <View style={{flex:1,backgroundColor:'lightgrey'}}>
       <View>
       <View style={{justifyContent:'flex-start',alignItems:'flex-start',padding:5,paddingHorizontal:10 }}>
            <Text style={{fontWeight:'700',flexGrow:1,alignSelf:'stretch'}}>Delivary Date & Time</Text>
        </View>
        <View>
            <Card style={{paddingHorizontal: 15,paddingVertical: 10}}>
                <View>
                    <Text style={{color:'#afafaf'}}>Tue 24 Mar 20202</Text>
                    <Text style={{color:'#afafaf'}}>04:00 PM - 07:00 PM</Text>
                    <Text style={{color:'#afafaf'}}>Order Status : On The Way</Text>
                </View>
            </Card>
        </View>
       </View>
       <View>
       <View style={{justifyContent:'flex-start',alignItems:'flex-start',padding:5,paddingHorizontal:10}}>
            <Text style={{fontWeight:'700',flexGrow:1,alignSelf:'stretch'}}>Address</Text>
        </View>
        <View>
            <Card style={{paddingHorizontal: 15,paddingVertical: 10}}>
                <View>
                    <Text style={{color:'#000',fontWeight:'700',fontSize:15}}>
                        Shubhang Verma
                    </Text>
                    <Text style={{color:'#afafaf'}}>
                        1004 ,parsvnath Palnet,Vibhuti Khand, Gomti Nagar, Lucknow,226010
                    </Text>
                    <Text style={{color:'#afafaf'}}>8423446000</Text>
                </View>
            </Card>
        </View>
       </View>

       <View>
       <View style={{justifyContent:'flex-start',alignItems:'flex-start',padding:5,paddingHorizontal:10}}>
            <Text style={{fontWeight:'700',flexGrow:1,alignSelf:'stretch'}}>Payment Details</Text>
        </View>
        <View>
            <Card style={{paddingHorizontal: 15,paddingVertical: 10}}>
                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginVertical:5}}>
                    <Text style={{color:'#666'}}>Order No.</Text>
                    <Text style={{color:'#afafaf'}}>DSHKFSK5273FHK87</Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginVertical:5}}>
                    <Text style={{color:'#666'}}>Invoice No.</Text>
                    <Text style={{color:'#afafaf'}}>DSHKFSK5273FHK87</Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginVertical:5}}>
                    <Text style={{color:'#666'}}>Payment Options</Text>
                    <Text style={{color:'#afafaf'}}>Cash On Delivary</Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginVertical:5}}>
                    <Text style={{color:'#666'}}>Order Items.</Text>
                    <Text style={{color:'#afafaf'}}>7</Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginVertical:5}}>
                    <Text style={{color:'#666'}}>Delivary Charges.</Text>
                    <Text style={{color:'#afafaf'}}>Rs 87</Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginVertical:5}}>
                    <Text style={{fontWeight:'700',fontSize:15,color:'green',alignSelf:'stretch',flexGrow:1,}}>Total</Text>
                    <Text style={{color:'green'}}>1232</Text>
                </View>
            </Card>
        </View>
       </View>
     </View>
     </>
    );
  }
}