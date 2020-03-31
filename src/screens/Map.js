import React, { Component } from 'react'
import { Text, View, Image, TextInput, StyleSheet, Dimensions, ScrollView, SafeAreaView, StatusBar } from 'react-native'
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { sliderWidth, itemWidth } from '../styles/SliderEntry.style';


import CheckoutEntry from '../components/CheckoutEntry';
import styles, { colors } from '../styles/index.style';
import { ENTRIES1, ENTRIES2 } from '../static/entries';
import { scrollInterpolators, animatedStyles } from '../utils/animations';

const IS_ANDROID = Platform.OS === 'android';
const SLIDER_1_FIRST_ITEM = 1;
const { width, height } = Dimensions.get('window')

export default class Map extends Component {

  constructor(props) {
    super(props);
    this.state = {
      slider1ActiveSlide: SLIDER_1_FIRST_ITEM
    };
  }

  _renderItem({ item, index }) {
    return <CheckoutEntry data={item} even={(index + 1) % 2 === 0} />;
  }

  _renderItemWithParallax({ item, index }, parallaxProps) {
    return (
      <CheckoutEntry
        data={item}
        even={(index + 1) % 2 === 0}
        parallax={true}
        parallaxProps={parallaxProps}
      />
    );
  }

  _renderLightItem({ item, index }) {
    return <CheckoutEntry data={item} even={false} />;
  }

 

  main(number, title) {
    const { slider1ActiveSlide } = this.state;

    return (
      <View style={styles.exampleContainer}>
        {/* <Text style={styles.title}>{`Example ${number}`}</Text>
        <Text style={styles.subtitle}>{title}</Text> */}
        <Carousel
          ref={c => this._slider1Ref = c}
          data={ENTRIES2}
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
          loopClonesPerSide={2}
          autoplay={false}
          autoplayDelay={1000}
          autoplayInterval={3000}
          onSnapToItem={(index) => this.setState({ slider1ActiveSlide: index })}
        />
        <Pagination
          dotsLength={ENTRIES2.length}
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
    const checkout = this.main(1, 'Default layout | Loop | Autoplay | Parallax | Scale | Opacity | Pagination with tappable dots');
   
    return (
      <>
        {/* <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 20, borderBottomWidth: 2, borderBottomColor: '#EAECEF' }}>
          <Text style={{ fontSize: 10, fontFamily: 'AvenirNextLTPro-Bold', color: "#000" }}>Menu</Text>
          <Text style={{ fontSize: 20, fontFamily: 'AvenirNextLTPro-Bold', color: "#000" }}>Print Vihar</Text>
          <Text style={{ fontSize: 10, fontFamily: 'AvenirNextLTPro-Bold', color: "#000" }}>Notification</Text>
        </View> */}
        <ScrollView
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
        >
          <StatusBar backgroundColor="green" barStyle="light-content" />
          <View style={{ flex: 1 }}>
           <View>
           {checkout}
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
                <Text style={{ fontSize: 20, fontFamily: 'AvenirNextLTPro-Bold' }}>Cadbury Dairy Milk Silk Oreo Chocolate - Pack of 2</Text>
                <Text>10% OFF</Text>
                <Text>More by Cadbury Dairy Milk Silk</Text>
                <View style={{ justifyContent: 'flex-start'}}>
                            <Text style={{fontSize:16,fontFamily:'AvenirNextLTPro-Bold',color:'#000',marginTop:15,fontSize:25}}>Rs. 399 </Text>
                           
                        </View>

                        <View style={{ justifyContent: 'flex-start'}}>
                            <Text style={{fontSize:16,fontFamily:'AvenirNextLTPro-Bold',color:'#000',marginTop:15,fontSize:15}}>UNIT</Text>
                           
                        </View>
                        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',padding:20}}>
                         <View style={{justifyContent:'center',alignItems:'center',borderWidth:1,borderColor:'green',minHeight:35,minWidth:35}}>
                             <Text>1kg</Text>
                         </View>

                         <View style={{justifyContent:'center',alignItems:'center',borderWidth:1,borderColor:'green',minHeight:35,minWidth:35}}>
                             <Text>2Kg</Text>
                         </View>

                         <View style={{justifyContent:'center',alignItems:'center',borderWidth:1,borderColor:'green',minHeight:35,minWidth:35}}>
                             <Text>3kg</Text>
                         </View>

                         <View style={{justifyContent:'center',alignItems:'center',borderWidth:1,borderColor:'green',minHeight:35,minWidth:35}}>
                             <Text>4kg</Text>
                         </View>

                         <View style={{justifyContent:'center',alignItems:'center',borderWidth:1,borderColor:'green',minHeight:35,minWidth:35}}>
                             <Text>5kg</Text>
                         </View>
                        
                         </View>

                         <View style={{marginTop:30}}>
                         <Text style={{ fontSize: 20, fontFamily: 'AvenirNextLTPro-Bold' }}>Product Description</Text>
                <Text>A blissful bar with a heavenly combination of extra fine milk chocolate enrobed in the finest vanilla flavour filling and biscuit pieces
Lusciously tempting and crunchy taste
An exquisite treat for the taste buds
A perfect indulgence with melting smoothness to caress all your senses</Text>
                <Text>For Manufacturer, FSSAI, Nutritional & Shelf Life details, please refer to the individual products.</Text>
                      
                         </View>
               
               
              </View>
              <View style={{justifyContent:'center',alignItems:'center',backgroundColor:'green',bottom:0,left:0,right:0,minHeight:60}}>
                <Text style={{color:'white'}}>Checkout</Text>
              </View>
             
              
            </View>
          </View>
        </ScrollView>
      </>
    )
  }
}

