import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, View, Image, Dimensions } from 'react-native'

import Swiper from 'react-native-swiper'
import { Button } from 'native-base'
const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fdfdfd',
    alignItems: 'center'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fdfdfd'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fdfdfd'
  },
  text: {
    color: '#000',
    fontSize: 13,
    fontWeight: '400',
    textAlign: 'center',
    color:'#afafaf',
    marginTop:10
    
  }
})

export default class Intro extends Component {
  render() {
    return (
      <>
        <Swiper style={styles.wrapper}
          showsButtons={false}
          loop={true}
          autoplay={true}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          showsPagination={true}
          bounces={false}
        >
          <View style={styles.slide1}>
            <Image source={require('../../assets/images/slide1.png')}
              style={{ width: width / 1.05, height: width / 1.35, }}
            />
           <View style={{paddingHorizontal:20,alignItems:'center',marginTop:20}}>
           <Text style={{fontWeight:'700',fontSize:18,alignSelf:'stretch',textAlign:'center',color:'green'}}>
              Create an Account
                     </Text>
            <Text style={styles.text}>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</Text>

           </View>
          </View>
          <View style={styles.slide2}>
            <Image source={require('../../assets/images/slide2.png')}
              style={{ width: width / 1.05, height: width / 1.35, }}
            />
           <View style={{paddingHorizontal:20,alignItems:'center',marginTop:20}}>
           <Text style={{fontWeight:'700',fontSize:18,alignSelf:'stretch',textAlign:'center',color:'green'}}>
            Purchase Whatever you Want
                     </Text>
            <Text style={styles.text}>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</Text>

           </View>
          </View>
          <View style={styles.slide2}>
            <Image source={require('../../assets/images/slide3.png')}
              style={{ width: width / 1.05, height: width / 1.35, }}
            />
           <View style={{paddingHorizontal:20,alignItems:'center',marginTop:20}}>
           <Text style={{fontWeight:'700',fontSize:18,alignSelf:'stretch',textAlign:'center',color:'green'}}>
            Happy Shopping
                     </Text>
            <Text style={styles.text}>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</Text>

           </View>
          </View>
          {/* <View style={styles.slide3}>
          <Text style={styles.text}>And simple</Text>
        </View> */}
        </Swiper>
        <View style={{ flex: 0.1,paddingHorizontal:20 }}>
          <Button success block rounded onPress={() => this.props.navigation.navigate('Home')}>
            <Text style={{fontWeight:'700',color:'#fdfdfd',alignSelf:'stretch',flexGrow:1,lineHeight:32,textAlign:'center'}}>Go To Home</Text>
          </Button>
        </View>
      </>
    )
  }
}

