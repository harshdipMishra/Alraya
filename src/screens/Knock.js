import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Image, TextInput, StyleSheet, Dimensions, ScrollView, SafeAreaView, StatusBar } from 'react-native'
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { sliderWidth, itemWidth } from '../styles/SliderEntry.style';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Button,Thumbnail } from 'native-base';
import SliderEntry from '../components/SliderEntry';
import styles, { colors } from '../styles/index.style';
import { ENTRIES1, ENTRIES2 } from '../static/entries';
import { scrollInterpolators, animatedStyles } from '../utils/animations';
import { red } from 'ansi-colors';

const IS_ANDROID = Platform.OS === 'android';
const SLIDER_1_FIRST_ITEM = 1;
const { width, height } = Dimensions.get('window')

export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      slider1ActiveSlide: SLIDER_1_FIRST_ITEM
    };
  }

  _renderItem({ item, index }) {
    return <SliderEntry data={item} even={(index + 1) % 2 === 0} />;
  }

  _renderItemWithParallax({ item, index }, parallaxProps) {
    return (
      <SliderEntry
        data={item}
        even={(index + 1) % 2 === 0}
        parallax={true}
        parallaxProps={parallaxProps}
      />
    );
  }

  _renderLightItem({ item, index }) {
    return <SliderEntry data={item} even={false} />;
  }



  mainCrousal(number, title) {
    const { slider1ActiveSlide } = this.state;

    return (
      <View style={styles.exampleContainer}>
        {/* <Text style={styles.title}>{`Example ${number}`}</Text>
        <Text style={styles.subtitle}>{title}</Text> */}
        <Carousel
          ref={c => this._slider1Ref = c}
          data={ENTRIES1}
          renderItem={this._renderItemWithParallax}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
          hasParallaxImages={true}
          firstItem={SLIDER_1_FIRST_ITEM}
          inactiveSlideScale={0.94}
          inactiveSlideOpacity={0.7}
          inactiveSlideShift={20}
          containerCustomStyle={styles.slider}
          contentContainerCustomStyle={styles.sliderContentContainer}
          loop={true}
          loopClonesPerSide={10}
          autoplay={true}
          autoplayDelay={1000}
          autoplayInterval={3000}
          onSnapToItem={(index) => this.setState({ slider1ActiveSlide: index })}
        />
        <Pagination
          dotsLength={ENTRIES1.length}
          activeDotIndex={slider1ActiveSlide}
          containerStyle={styles.paginationContainer}
          dotColor={'rgba(255, 0, 0, 0.82)'}
          dotStyle={styles.paginationDot}
          inactiveDotColor={colors.black}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
          carouselRef={this._slider1Ref}
          tappableDots={!!this._slider1Ref}
        />
      </View>
    );
  }


  render() {
    const banner = this.mainCrousal(1, 'Default layout | Loop | Autoplay | Parallax | Scale | Opacity | Pagination with tappable dots');

    return (
      <>
        <View style={{ backgroundColor: '#f3f6f9', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10,paddingHorizontal:20, borderBottomWidth: 2, borderBottomColor: '#EAECEF' }}>
          <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', }}>


            <Image resizeMode='contain' source={require('../../assets/images/logo.png')}
              style={{ width: 100, height: 45 }}
            />
             <TouchableOpacity onPress={() => this.props.navigation.navigate('ChangeAddress')} style={{position:'relative',marginRight:20}}>
            {/* <FontAwesome5 name="map" size={20} /> */}
            <Text style={{fontWeight:'700',}}>Your Location  <FontAwesome5 name="edit" size={12} color={'green'}/></Text>
            <Text style={{ fontSize: 11,fontFamily: 'AvenirNextLTPro-Bold', color: "#333",}}>
               1004,Parsvnath Planet,Gomti Nagar
              </Text>
             
            </TouchableOpacity>
          </View>
          <View style={{ justifyContent: "flex-end", flexDirection: 'row' }}>
         
            <Text style={{ fontSize: 10, marginRight: 20, fontFamily: 'AvenirNextLTPro-Bold', color: "#000" }}>
              <FontAwesome5 name="search" size={20} />
            </Text>

            <TouchableOpacity onPress={() => this.props.navigation.navigate('Cart')} style={{position:'relative'}}>
            <FontAwesome5 name="shopping-cart" size={20} />
            <View style={{backgroundColor:'green',padding:5,justifyContent:'center',alignItems:'center',position:'absolute',top:-12,right:-7,borderRadius:100,borderColor:'#fff',borderWidth:1,width:20,height:20}}>
            <Text style={{ fontSize: 10,fontFamily: 'AvenirNextLTPro-Bold', color: "#fff",}}>
               3
              </Text>
            </View>
             
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
        >
          <StatusBar backgroundColor="green" barStyle="light-content" />
          <View style={{ flex: 1, padding: 0, }}>
          
           
            <View>
              {banner}
            </View>

            {/* <View style={{ justifyContent: 'center', paddingLeft: 40, paddingRight: 40, paddingBottom: 10, marginTop: 50 }}>
             
              <View style={styles.SectionStyle}>
               
                <TextInput
                  style={{ flex: 1 }}
                  placeholder="Cerca qui"
                  underlineColorAndroid="transparent"
                  placeholderTextColor="#BEC2CE"
                />
              </View>
            </View> */}
            <View style={{ flex: 4, backgroundColor: '#fff' }}>
              <View style={{ padding: 20 }}>
                <Text style={{ fontSize: 17, fontFamily: 'AvenirNextLTPro-Bold', fontWeight: '700' }}>Shop By Categories</Text>
                <View style={{ marginTop: 15, flexDirection: 'row', justifyContent: 'space-between' }}>

                 <TouchableOpacity onPress={() => this.props.navigation.navigate('Shop')}>
                 <View>
                    <Image source={require('../../assets/images/c1.jpg')}
                      style={{ width: width / 3.35, height: width / 3.35, }}
                    />
                    <View style={{ backgroundColor: 'rgba(0,128,0,0.5)',borderRadius:10, height: width / 3.35, paddingVertical: 8, position: 'absolute', left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center' }}>
                      <Text style={{ fontSize: 13, fontFamily: 'AvenirNextLTPro-Bold', color: '#fff',fontWeight:'700' }}>Grocery</Text>

                    </View>
                  </View>
                 </TouchableOpacity>
                  <View>
                    <Image source={require('../../assets/images/c2.jpg')}
                      style={{ width: width / 3.35, height: width / 3.35, }}
                    />
                    <View style={{ backgroundColor: 'rgba(0,128,0,0.5)',borderRadius:10, height: width / 3.35, paddingVertical: 8, position: 'absolute', left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center' }}>
                      <Text style={{ fontSize: 13, fontFamily: 'AvenirNextLTPro-Bold', color: '#fff',fontWeight:'700' }}>Perishable </Text>

                    </View>

                  </View>


                  <View>
                    <Image source={require('../../assets/images/c3.jpg')}
                      style={{ width: width / 3.35, height: width / 3.35, }}
                    />
                    <View style={{  backgroundColor: 'rgba(0,128,0,0.5)',borderRadius:10, height: width / 3.35, paddingVertical: 8, position: 'absolute', left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center' }}>
                      <Text style={{ fontSize: 13, fontFamily: 'AvenirNextLTPro-Bold', color: '#fff',fontWeight:'700' }}>Household Items </Text>

                    </View>
                   
                  </View>
                </View>

                <View style={{ marginTop: 5, flexDirection: 'row', justifyContent: 'space-between' }}>

                  <View>
                    <Image source={require('../../assets/images/c4.jpg')}
                      style={{ width: width / 3.35, height: width / 3.35, }}
                    />
                    <View style={{ backgroundColor: 'rgba(0,128,0,0.5)',borderRadius:10, height: width / 3.35, paddingVertical: 8, position: 'absolute', left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center' }}>
                      <Text style={{ fontSize: 13, fontFamily: 'AvenirNextLTPro-Bold', color: '#fff',fontWeight:'700' }}>Snacks & Chocolates </Text>

                    </View>
                  </View>
                  <View>
                    <Image source={require('../../assets/images/c5.jpg')}
                      style={{ width: width / 3.35, height: width / 3.35, }}
                    />
                    <View style={{backgroundColor: 'rgba(0,128,0,0.5)',borderRadius:10, height: width / 3.35, paddingVertical: 8, position: 'absolute', left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center' }}>
                      <Text style={{ fontSize: 13, fontFamily: 'AvenirNextLTPro-Bold', color: '#fff',fontWeight:'700' }}>BreakFast & Dairy </Text>

                    </View>

                  </View>


                  <View>
                    <Image source={require('../../assets/images/c6.jpg')}
                      style={{ width: width / 3.35, height: width / 3.35, }}
                    />
                    <View style={{backgroundColor: 'rgba(0,128,0,0.5)',borderRadius:10, height: width / 3.35, paddingVertical: 8, position: 'absolute', left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center' }}>
                      <Text style={{ fontSize: 13, fontFamily: 'AvenirNextLTPro-Bold', color: '#fff',fontWeight:'700' }}>Exclusive Offers </Text>

                    </View>
                   
                  </View>
                </View>


                <View style={{ marginTop: 5, flexDirection: 'row', justifyContent: 'space-between' }}>
                  <View>
                    <Image source={require('../../assets/images/c7.jpg')}
                      style={{ width: width / 3.35, height: width / 3.35 }}
                    />
                    <View style={{ backgroundColor: 'rgba(0,128,0,0.5)',borderRadius:10, height: width / 3.35, paddingVertical: 8, position: 'absolute', left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center' }}>
                      <Text style={{ fontSize: 13, fontFamily: 'AvenirNextLTPro-Bold', color: '#fff',fontWeight:'700' }}>Noodles, Sauces </Text>

                    </View>

                  </View>
                  <View>
                    <Image source={require('../../assets/images/c8.jpg')}
                      style={{ width: width / 3.35, height: width / 3.35 }}
                    />
                    <View style={{backgroundColor: 'rgba(0,128,0,0.5)',borderRadius:10, height: width / 3.35, paddingVertical: 8, position: 'absolute', left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center' }}>
                      <Text style={{ fontSize: 13, fontFamily: 'AvenirNextLTPro-Bold', color: '#fff',fontWeight:'700' }}>Fresh & Frozen Food </Text>

                    </View>

                  </View>


                  <View>
                    <Image source={require('../../assets/images/c9.jpg')}
                      style={{ width: width / 3.35, height: width / 3.35, }}
                    />
                    <View style={{backgroundColor: 'rgba(0,128,0,0.5)',borderRadius:10, height: width / 3.35,paddingVertical: 8, position: 'absolute', left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center' }}>
                      <Text style={{ fontSize: 13, fontFamily: 'AvenirNextLTPro-Bold', color: '#fff',fontWeight:'700' }}>Baby Care </Text>

                    </View>
                   
                  </View>

                </View>

              </View>
              <View style={{ paddingLeft: 10 }}>
                <Text style={{ fontSize: 17, fontFamily: 'AvenirNextLTPro-Bold', marginBottom: 20, fontWeight: '700' }}>Top Sever's Today</Text>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                  <View style={{ borderRadius:10,marginRight: 10, width: width / 2.2, height: width / 1.50, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', borderColor: '#f4f4f4', borderWidth: 1 }}>
                    <Image source={require('../../assets/images/i2.jpg')}
                      style={{ width: width / 3.9, height: width / 3.40, borderRadius: 0 }}
                    />
                    <View style={{ padding: 10 }}>
                    <View style={{flexDirection:'row',alignItems:"center"}}>
                    <Text style={{ fontFamily: 'AvenirNextLTPro-Regular', fontSize: 16, fontWeight: '700' }}>₹522</Text>
                    <Text style={{ fontFamily: 'AvenirNextLTPro-Regular', fontSize: 14,color:'grey',marginLeft:10 }}>₹522</Text>
                    </View>
                      
                      <Text style={{ fontSize: 13, fontFamily: 'AvenirNextLTPro-Bold', fontWeight: '700', color: '#666' }}>Ariel Complete Detergent Powder</Text>
                      <Text style={{ fontFamily: 'AvenirNextLTPro-Regular', color: '#666',fontSize:12 }}>4 Kg</Text>
                      
                    </View>
                    <View style={{ borderWidth:0,backgroundColor: 'green', paddingVertical: 10, position: 'absolute', left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center',borderBottomRightRadius: 10,borderBottomLeftRadius: 10, }}>
                      <Text style={{ fontSize: 14, fontFamily: 'AvenirNextLTPro-Bold', color: '#fff', fontWeight: '700' }}>Add to cart </Text>

                    </View>

                  </View>
                  <View style={{ borderRadius:10,marginRight: 10, width: width / 2.2, height: width / 1.50, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', borderColor: '#f4f4f4', borderWidth: 1 }}>
                    <Image source={require('../../assets/images/i1.jpg')}
                      style={{ width: width / 3.9, height: width / 3.40, borderRadius: 0 }}
                    />
                    <View style={{ padding: 10 }}>
                    <View style={{flexDirection:'row',alignItems:"center"}}>
                    <Text style={{ fontFamily: 'AvenirNextLTPro-Regular', fontSize: 16, fontWeight: '700' }}>₹522</Text>
                    <Text style={{ fontFamily: 'AvenirNextLTPro-Regular', fontSize: 14,color:'grey',marginLeft:10 }}>₹522</Text>
                    </View>
                      
                      <Text style={{ fontSize: 13, fontFamily: 'AvenirNextLTPro-Bold', fontWeight: '700', color: '#666' }}>Ariel Complete Detergent Powder</Text>
                      <Text style={{ fontFamily: 'AvenirNextLTPro-Regular', color: '#666',fontSize:12 }}>4 Kg</Text>
                      
                    </View>
                    <View style={{ borderWidth:0,backgroundColor: 'green', paddingVertical: 10, position: 'absolute', left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center',borderBottomRightRadius: 10,borderBottomLeftRadius: 10, }}>
                      <Text style={{ fontSize: 14, fontFamily: 'AvenirNextLTPro-Bold', color: '#fff', fontWeight: '700' }}>Add to cart </Text>

                    </View>

                  </View>

                  <View style={{ borderRadius:10,marginRight: 10, width: width / 2.2, height: width / 1.50, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', borderColor: '#f4f4f4', borderWidth: 1 }}>
                    <Image source={require('../../assets/images/i3.jpg')}
                      style={{ width: width / 3.9, height: width / 3.40, borderRadius: 0 }}
                    />
                    <View style={{ padding: 10 }}>
                    <View style={{flexDirection:'row',alignItems:"center"}}>
                    <Text style={{ fontFamily: 'AvenirNextLTPro-Regular', fontSize: 16, fontWeight: '700' }}>₹522</Text>
                    <Text style={{ fontFamily: 'AvenirNextLTPro-Regular', fontSize: 14,color:'grey',marginLeft:10 }}>₹522</Text>
                    </View>
                      
                      <Text style={{ fontSize: 13, fontFamily: 'AvenirNextLTPro-Bold', fontWeight: '700', color: '#666' }}>Ariel Complete Detergent Powder</Text>
                      <Text style={{ fontFamily: 'AvenirNextLTPro-Regular', color: '#666',fontSize:12 }}>4 Kg</Text>
                      
                    </View>
                    <View style={{ borderWidth:0,backgroundColor: 'green', paddingVertical: 10, position: 'absolute', left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center',borderBottomRightRadius: 10,borderBottomLeftRadius: 10, }}>
                      <Text style={{ fontSize: 14, fontFamily: 'AvenirNextLTPro-Bold', color: '#fff', fontWeight: '700' }}>Add to cart </Text>

                    </View>

                  </View>

                  <View style={{ borderRadius:10,marginRight: 10, width: width / 2.2, height: width / 1.50, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', borderColor: '#f4f4f4', borderWidth: 1 }}>
                    <Image source={require('../../assets/images/i5.jpg')}
                      style={{ width: width / 3.9, height: width / 3.40, borderRadius: 0 }}
                    />
                    <View style={{ padding: 10 }}>
                    <View style={{flexDirection:'row',alignItems:"center"}}>
                    <Text style={{ fontFamily: 'AvenirNextLTPro-Regular', fontSize: 16, fontWeight: '700' }}>₹522</Text>
                    <Text style={{ fontFamily: 'AvenirNextLTPro-Regular', fontSize: 14,color:'grey',marginLeft:10 }}>₹522</Text>
                    </View>
                      
                      <Text style={{ fontSize: 13, fontFamily: 'AvenirNextLTPro-Bold', fontWeight: '700', color: '#666' }}>Ariel Complete Detergent Powder</Text>
                      <Text style={{ fontFamily: 'AvenirNextLTPro-Regular', color: '#666',fontSize:12 }}>4 Kg</Text>
                      
                    </View>
                    <View style={{ borderWidth:0,backgroundColor: 'green', paddingVertical: 10, position: 'absolute', left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center',borderBottomRightRadius: 10,borderBottomLeftRadius: 10, }}>
                      <Text style={{ fontSize: 14, fontFamily: 'AvenirNextLTPro-Bold', color: '#fff', fontWeight: '700' }}>Add to cart </Text>

                    </View>

                  </View>

                  
                 
                </ScrollView>
              </View>
              <View style={{ margin: 11 }}>
                <Text style={{ fontSize: 17, fontFamily: 'AvenirNextLTPro-Bold',marginTop:10,fontWeight:'700' }}>Top Offers</Text>
                <View style={{ flex:1,marginTop: 10,paddingVertical:15,paddingHorizontal:10, width: width/1.05, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderWidth: 1, borderColor: '#f3f6f9', borderRadius: 10, flexWrap: 'wrap' }}>
                 <View style={{flex:1}}>
                 <Thumbnail square large source={require('../../assets/images/gro.jpg')} />
                
                 </View>
                  <View style={{flex:3}}>
                    <Text style={{ fontFamily: 'AvenirNextLTPro-Bold', color: 'green', fontSize: 12 }}>Up to 65% OFF</Text>
                    <Text style={{ fontSize: 17, fontWeight: '700' }}>Grocery & Staples</Text>
                    <Text style={{ fontFamily: 'AvenirNextLTPro-Regular', fontSize: 12, color: '#777' }}>Pulses, Atta & Other Flours, Rice & Other Grains, Dry Fruits & Nuts, Edible Oils, Ghee & Vanaspati, Spices, Salt & Sugar, Organic Staples</Text>
                  </View>
                </View>
                <View style={{ flex:1,marginTop: 10,paddingVertical:15,paddingHorizontal:10, width: width/1.05, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderWidth: 1, borderColor: '#f3f6f9', borderRadius: 10, flexWrap: 'wrap' }}>
                 <View style={{flex:1}}>
                 <Thumbnail square large source={require('../../assets/images/dai.jpg')} />
                
                 </View>
                  <View style={{flex:3}}>
                    <Text style={{ fontFamily: 'AvenirNextLTPro-Bold', color: 'green', fontSize: 12 }}>Up to 65% OFF</Text>
                    <Text style={{ fontSize: 17, fontWeight: '700' }}>Grocery & Staples</Text>
                    <Text style={{ fontFamily: 'AvenirNextLTPro-Regular', fontSize: 12, color: '#777' }}>Pulses, Atta & Other Flours, Rice & Other Grains, Dry Fruits & Nuts, Edible Oils, Ghee & Vanaspati, Spices, Salt & Sugar, Organic Staples</Text>
                  </View>
                </View>
                <View style={{ flex:1,marginTop: 10,paddingVertical:15,paddingHorizontal:10, width: width/1.05, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderWidth: 1, borderColor: '#f3f6f9', borderRadius: 10, flexWrap: 'wrap' }}>
                 <View style={{flex:1}}>
                 <Thumbnail square large source={require('../../assets/images/fro.jpg')} />
                
                 </View>
                  <View style={{flex:3}}>
                    <Text style={{ fontFamily: 'AvenirNextLTPro-Bold', color: 'green', fontSize: 12 }}>Up to 65% OFF</Text>
                    <Text style={{ fontSize: 17, fontWeight: '700' }}>Grocery & Staples</Text>
                    <Text style={{ fontFamily: 'AvenirNextLTPro-Regular', fontSize: 12, color: '#777' }}>Pulses, Atta & Other Flours, Rice & Other Grains, Dry Fruits & Nuts, Edible Oils, Ghee & Vanaspati, Spices, Salt & Sugar, Organic Staples</Text>
                  </View>
                </View>
                <View style={{ flex:1,marginTop: 10,paddingVertical:15,paddingHorizontal:10, width: width/1.05, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderWidth: 1, borderColor: '#f3f6f9', borderRadius: 10, flexWrap: 'wrap' }}>
                 <View style={{flex:1}}>
                 <Thumbnail square large source={require('../../assets/images/non.jpg')} />
                
                 </View>
                  <View style={{flex:3}}>
                    <Text style={{ fontFamily: 'AvenirNextLTPro-Bold', color: 'green', fontSize: 12 }}>Up to 65% OFF</Text>
                    <Text style={{ fontSize: 17, fontWeight: '700' }}>Grocery & Staples</Text>
                    <Text style={{ fontFamily: 'AvenirNextLTPro-Regular', fontSize: 12, color: '#777' }}>Pulses, Atta & Other Flours, Rice & Other Grains, Dry Fruits & Nuts, Edible Oils, Ghee & Vanaspati, Spices, Salt & Sugar, Organic Staples</Text>
                  </View>
                </View>



              </View>


              <View style={{ paddingLeft: 15, marginBottom: 20 }}>
                <Text style={{ fontSize: 18, fontFamily: 'AvenirNextLTPro-Bold', marginBottom: 20, fontWeight: '700' }}>Top Selling</Text>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                  <View style={{ borderRadius:10,marginRight: 10, width: width / 2.2, height: width / 1.50, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', borderColor: '#f4f4f4', borderWidth: 1 }}>
                    <Image source={require('../../assets/images/i2.jpg')}
                      style={{ width: width / 3.9, height: width / 3.40, borderRadius: 0 }}
                    />
                    <View style={{ padding: 10 }}>
                    <View style={{flexDirection:'row',alignItems:"center"}}>
                    <Text style={{ fontFamily: 'AvenirNextLTPro-Regular', fontSize: 16, fontWeight: '700' }}>₹522</Text>
                    <Text style={{ fontFamily: 'AvenirNextLTPro-Regular', fontSize: 14,color:'grey',marginLeft:10 }}>₹522</Text>
                    </View>
                      
                      <Text style={{ fontSize: 13, fontFamily: 'AvenirNextLTPro-Bold', fontWeight: '700', color: '#666' }}>Ariel Complete Detergent Powder</Text>
                      <Text style={{ fontFamily: 'AvenirNextLTPro-Regular', color: '#666',fontSize:12 }}>4 Kg</Text>
                      
                    </View>
                    <View style={{ borderWidth:0,backgroundColor: 'green', paddingVertical: 10, position: 'absolute', left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center',borderBottomRightRadius: 10,borderBottomLeftRadius: 10, }}>
                      <Text style={{ fontSize: 14, fontFamily: 'AvenirNextLTPro-Bold', color: '#fff', fontWeight: '700' }}>Add to cart </Text>

                    </View>

                  </View>
                  <View style={{ borderRadius:10,marginRight: 10, width: width / 2.2, height: width / 1.50, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', borderColor: '#f4f4f4', borderWidth: 1 }}>
                    <Image source={require('../../assets/images/i1.jpg')}
                      style={{ width: width / 3.9, height: width / 3.40, borderRadius: 0 }}
                    />
                    <View style={{ padding: 10 }}>
                    <View style={{flexDirection:'row',alignItems:"center"}}>
                    <Text style={{ fontFamily: 'AvenirNextLTPro-Regular', fontSize: 16, fontWeight: '700' }}>₹522</Text>
                    <Text style={{ fontFamily: 'AvenirNextLTPro-Regular', fontSize: 14,color:'grey',marginLeft:10 }}>₹522</Text>
                    </View>
                      
                      <Text style={{ fontSize: 13, fontFamily: 'AvenirNextLTPro-Bold', fontWeight: '700', color: '#666' }}>Ariel Complete Detergent Powder</Text>
                      <Text style={{ fontFamily: 'AvenirNextLTPro-Regular', color: '#666',fontSize:12 }}>4 Kg</Text>
                      
                    </View>
                    <View style={{ borderWidth:0,backgroundColor: 'green', paddingVertical: 10, position: 'absolute', left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center',borderBottomRightRadius: 10,borderBottomLeftRadius: 10, }}>
                      <Text style={{ fontSize: 14, fontFamily: 'AvenirNextLTPro-Bold', color: '#fff', fontWeight: '700' }}>Add to cart </Text>

                    </View>

                  </View>

                  <View style={{ borderRadius:10,marginRight: 10, width: width / 2.2, height: width / 1.50, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', borderColor: '#f4f4f4', borderWidth: 1 }}>
                    <Image source={require('../../assets/images/i3.jpg')}
                      style={{ width: width / 3.9, height: width / 3.40, borderRadius: 0 }}
                    />
                    <View style={{ padding: 10 }}>
                    <View style={{flexDirection:'row',alignItems:"center"}}>
                    <Text style={{ fontFamily: 'AvenirNextLTPro-Regular', fontSize: 16, fontWeight: '700' }}>₹522</Text>
                    <Text style={{ fontFamily: 'AvenirNextLTPro-Regular', fontSize: 14,color:'grey',marginLeft:10 }}>₹522</Text>
                    </View>
                      
                      <Text style={{ fontSize: 13, fontFamily: 'AvenirNextLTPro-Bold', fontWeight: '700', color: '#666' }}>Ariel Complete Detergent Powder</Text>
                      <Text style={{ fontFamily: 'AvenirNextLTPro-Regular', color: '#666',fontSize:12 }}>4 Kg</Text>
                      
                    </View>
                    <View style={{ borderWidth:0,backgroundColor: 'green', paddingVertical: 10, position: 'absolute', left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center',borderBottomRightRadius: 10,borderBottomLeftRadius: 10, }}>
                      <Text style={{ fontSize: 14, fontFamily: 'AvenirNextLTPro-Bold', color: '#fff', fontWeight: '700' }}>Add to cart </Text>

                    </View>

                  </View>

                  <View style={{ borderRadius:10,marginRight: 10, width: width / 2.2, height: width / 1.50, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', borderColor: '#f4f4f4', borderWidth: 1 }}>
                    <Image source={require('../../assets/images/i5.jpg')}
                      style={{ width: width / 3.9, height: width / 3.40, borderRadius: 0 }}
                    />
                    <View style={{ padding: 10 }}>
                    <View style={{flexDirection:'row',alignItems:"center"}}>
                    <Text style={{ fontFamily: 'AvenirNextLTPro-Regular', fontSize: 16, fontWeight: '700' }}>₹522</Text>
                    <Text style={{ fontFamily: 'AvenirNextLTPro-Regular', fontSize: 14,color:'grey',marginLeft:10 }}>₹522</Text>
                    </View>
                      
                      <Text style={{ fontSize: 13, fontFamily: 'AvenirNextLTPro-Bold', fontWeight: '700', color: '#666' }}>Ariel Complete Detergent Powder</Text>
                      <Text style={{ fontFamily: 'AvenirNextLTPro-Regular', color: '#666',fontSize:12 }}>4 Kg</Text>
                      
                    </View>
                    <View style={{ borderWidth:0,backgroundColor: 'green', paddingVertical: 10, position: 'absolute', left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center',borderBottomRightRadius: 10,borderBottomLeftRadius: 10, }}>
                      <Text style={{ fontSize: 14, fontFamily: 'AvenirNextLTPro-Bold', color: '#fff', fontWeight: '700' }}>Add to cart </Text>

                    </View>

                  </View>

                  
                 
                </ScrollView>
              </View>


            </View>
          </View>
        </ScrollView>
      </>
    )
  }
}

