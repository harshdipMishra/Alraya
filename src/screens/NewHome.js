import React, { Component } from 'react'
import { Text,Button, View, Image, TextInput, StyleSheet, Dimensions, ScrollView, SafeAreaView, StatusBar } from 'react-native'
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { sliderWidth, itemWidth } from '../styles/SliderEntry.style';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import SliderEntry from '../components/SliderEntry';
import styles, { colors } from '../styles/index.style';
import { ENTRIES1, ENTRIES2 } from '../static/entries';
import { scrollInterpolators, animatedStyles } from '../utils/animations';
import { TouchableOpacity } from 'react-native-gesture-handler';

const IS_ANDROID = Platform.OS === 'android';
const SLIDER_1_FIRST_ITEM = 1;
const { width, height } = Dimensions.get('window')

export default class NewHome extends Component {

 

  
 
  render() {
  
    return (
      <>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 20, borderBottomWidth: 2, borderBottomColor: '#EAECEF' }}>
         <TouchableOpacity>
         <Text style={{ fontSize: 10, fontFamily: 'AvenirNextLTPro-Bold', color: "#000" }}>
          <FontAwesome5 name="bars" size={80} onPress={() => this.props.navigation.openDrawer()} />
          </Text>
         </TouchableOpacity>
        
       
      
          <Text style={{ fontSize: 20, fontFamily: 'AvenirNextLTPro-Bold', color: "red" }}>Print Vihar</Text>
          <Text style={{ fontSize: 10, fontFamily: 'AvenirNextLTPro-Bold', color: "#000" }}>
          <FontAwesome5 name="bell" size={20}  /> 
          </Text>
        </View>
      </>
    )
  }
}

