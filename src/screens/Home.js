import React, { Component } from 'react'
import { Text, View, Image, TextInput, StyleSheet, Dimensions, ScrollView, SafeAreaView, StatusBar } from 'react-native'
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { sliderWidth, itemWidth } from '../styles/SliderEntry.style';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Button} from 'native-base';



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
        <View style={{ backgroundColor:'#f3f6f9',flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 20, borderBottomWidth: 2, borderBottomColor: '#EAECEF' }}>
         <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center',}}>
         
        
          <Image resizeMode='contain' source={require('../../assets/images/logo.png')}
                        style={{width:100,height:45}}
                        />
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
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
        >
          <StatusBar backgroundColor="green" barStyle="light-content" />
          <View style={{ flex: 1,padding:0, }}>
            <View style={{padding:16,marginHorizontal:10}}>
              <Text style={{fontSize:20}}>
                Welcome to
              </Text>
              <Text style={{fontSize:30,color:'green',fontWeight:"bold"}}>
                Alraya Grocery 
              </Text>
            </View>
            <View style={{padding:16,justifyContent:'center',alignItems:'center',width:width/1}}>
              <Text style={{fontSize:18,fontWeight:"bold",alignSelf: 'stretch',textAlign:'center'}}>
                  Save Money , Live Better
              </Text>
             <View style={{flexDirection:'row',justifyContent:'space-around'}}>
             <Button uppercase={false}
              //  onPress={() => this.props.navigation.navigate('Details')}
                //onPress={() => this.login()}
                style={{marginHorizontal:10,marginTop:15,paddingHorizontal:30,backgroundColor:'green'}}
              >
                <Text style={{ color: '#fdfdfd' }}>Start Shopping</Text>
              </Button>
              <Button bordered primary
                mode=""
                uppercase={false}
                // onPress={()=>Actions.jump('profile')}
                //onPress={() => this.login()}
                style={{marginHorizontal:10,paddingHorizontal:45,marginTop:15,}}
              >
                <Text style={{ color: '#222' }}>Register</Text>
              </Button>
             </View>
            </View>
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
                <Text style={{ fontSize: 18, fontFamily: 'AvenirNextLTPro-Bold' }}>Shop By Categories</Text>
                <View style={{ marginTop: 15, flexDirection: 'row', justifyContent: 'space-between' }}>
                 
                  <View>
                        <Image source={require('../../assets/images/c1.jpg')}
                        style={{width:width/3.35, height:width/3.35,}}
                        />
                        <View style={{backgroundColor:'rgba(0,0,0,0.5)',paddingVertical:8, position: 'absolute', left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{fontSize:13,fontFamily:'AvenirNextLTPro-Bold',color:'#fff'}}>Grocery & Staples </Text>
                           
                        </View>
                    </View>
                  <View>
                    <Image source={require('../../assets/images/c2.jpg')}
                      style={{ width: width / 3.35, height: width / 3.35, }}
                    />
                      <View style={{backgroundColor:'rgba(0,0,0,0.5)',paddingVertical:8, position: 'absolute', left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{fontSize:13,fontFamily:'AvenirNextLTPro-Bold',color:'#fff'}}>Personal Care </Text>
                           
                        </View>
                   
                  </View>
                  
                  
                  <View>
                    <Image source={require('../../assets/images/c3.jpg')}
                      style={{ width: width / 3.35, height: width / 3.35,}}
                    />
                     <View style={{backgroundColor:'rgba(0,0,0,0.5)',paddingVertical:8, position: 'absolute', left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{fontSize:13,fontFamily:'AvenirNextLTPro-Bold',color:'#fff'}}>Household Items </Text>
                           
                        </View>
                    {/* <View style={{ padding: 10 }}>
                      <Text style={{ fontSize: 15, fontFamily: 'AvenirNextLTPro-Bold' }}>Turkey (Value Tour)</Text>
                      <Text style={{ fontFamily: 'AvenirNextLTPro-Regular' }}>Turkey</Text>
                    </View> */}
                  </View>
                </View>

                <View style={{ marginTop: 5, flexDirection: 'row', justifyContent: 'space-between' }}>
                 
                  <View>
                        <Image source={require('../../assets/images/c4.jpg')}
                        style={{width:width/3.35, height:width/3.35,}}
                        />
                        <View style={{backgroundColor:'rgba(0,0,0,0.5)',paddingVertical:8, position: 'absolute', left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{fontSize:13,fontFamily:'AvenirNextLTPro-Bold',color:'#fff'}}>Snacks & Chocolates </Text>
                           
                        </View>
                    </View>
                  <View>
                    <Image source={require('../../assets/images/c5.jpg')}
                      style={{ width: width / 3.35, height: width / 3.35, }}
                    />
                      <View style={{backgroundColor:'rgba(0,0,0,0.5)',paddingVertical:8, position: 'absolute', left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{fontSize:13,fontFamily:'AvenirNextLTPro-Bold',color:'#fff'}}>BreakFast & Dairy </Text>
                           
                        </View>
                   
                  </View>
                  
                  
                  <View>
                    <Image source={require('../../assets/images/c6.jpg')}
                      style={{ width: width / 3.35, height: width / 3.35,}}
                    />
                     <View style={{backgroundColor:'rgba(0,0,0,0.5)',paddingVertical:8, position: 'absolute', left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{fontSize:13,fontFamily:'AvenirNextLTPro-Bold',color:'#fff'}}>Exclusive Offers </Text>
                           
                        </View>
                    {/* <View style={{ padding: 10 }}>
                      <Text style={{ fontSize: 15, fontFamily: 'AvenirNextLTPro-Bold' }}>Turkey (Value Tour)</Text>
                      <Text style={{ fontFamily: 'AvenirNextLTPro-Regular' }}>Turkey</Text>
                    </View> */}
                  </View>
                </View>


                <View style={{ marginTop: 5, flexDirection: 'row', justifyContent: 'space-between' }}>
                  <View>
                    <Image source={require('../../assets/images/c7.jpg')}
                      style={{ width: width / 3.35, height: width / 3.35 }}
                    />
                     <View style={{backgroundColor:'rgba(0,0,0,0.5)',paddingVertical:8, position: 'absolute', left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{fontSize:13,fontFamily:'AvenirNextLTPro-Bold',color:'#fff'}}>Noodles, Sauces </Text>
                           
                        </View>
                   
                  </View>
                  <View>
                    <Image source={require('../../assets/images/c8.jpg')}
                      style={{ width: width / 3.35, height: width / 3.35 }}
                    />
                     <View style={{backgroundColor:'rgba(0,0,0,0.5)',paddingVertical:8, position: 'absolute', left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{fontSize:13,fontFamily:'AvenirNextLTPro-Bold',color:'#fff'}}>Fresh & Frozen Food </Text>
                           
                        </View>
                   
                  </View>
                  
                  
                  <View>
                    <Image source={require('../../assets/images/c9.jpg')}
                      style={{ width: width / 3.35, height: width / 3.35,  }}
                    />
                      <View style={{backgroundColor:'rgba(0,0,0,0.5)',paddingVertical:8, position: 'absolute', left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{fontSize:13,fontFamily:'AvenirNextLTPro-Bold',color:'#fff'}}>Baby Care </Text>
                           
                        </View>
                    {/* <View style={{ padding: 10 }}>
                      <Text style={{ fontSize: 15, fontFamily: 'AvenirNextLTPro-Bold' }}>Turkey (Value Tour)</Text>
                      <Text style={{ fontFamily: 'AvenirNextLTPro-Regular' }}>Turkey</Text>
                    </View> */}
                  </View>
                  
                </View>
               
              </View>
              <View style={{ paddingLeft: 20 }}>
                <Text style={{ fontSize: 18, fontFamily: 'AvenirNextLTPro-Bold', marginBottom: 20 }}>Top Sever's Today</Text>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                  <View style={{ marginRight: 10,width: width /2.2, height: width / 1.50, backgroundColor:'white',justifyContent:'center',alignItems:'center',borderColor:'#f4f4f4',borderWidth:1  }}>
                    <Image source={require('../../assets/images/p1.jpg')}
                      style={{ width: width / 3.9, height: width / 3.40, borderRadius: 0 }}
                    />
                    <View style={{ padding: 10 }}>
                      <Text style={{ fontSize: 15, fontFamily: 'AvenirNextLTPro-Bold' }}>Ariel Complete Detergent Powder</Text>
                      <Text style={{ fontFamily: 'AvenirNextLTPro-Regular' }}>₹522</Text>
                      <Text style={{ fontFamily: 'AvenirNextLTPro-Regular' }}>4 Kg</Text>
                    </View>
                     <View style={{backgroundColor:'rgba(0,182,0,1)',paddingVertical:10, position: 'absolute', left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{fontSize:16,fontFamily:'AvenirNextLTPro-Bold',color:'#fff'}}>Add </Text>
                           
                        </View>
                   
                  </View>
                  <View style={{ marginRight: 10,width: width /2.2, height: width / 1.50, backgroundColor:'white',justifyContent:'center',alignItems:'center',borderColor:'#f4f4f4',borderWidth:1  }}>
                    <Image source={require('../../assets/images/p1.jpg')}
                      style={{ width: width / 3.9, height: width / 3.40, borderRadius: 0 }}
                    />
                    <View style={{ padding: 10 }}>
                      <Text style={{ fontSize: 15, fontFamily: 'AvenirNextLTPro-Bold' }}>Ariel Complete Detergent Powder</Text>
                      <Text style={{ fontFamily: 'AvenirNextLTPro-Regular' }}>₹522</Text>
                      <Text style={{ fontFamily: 'AvenirNextLTPro-Regular' }}>4 Kg</Text>
                    </View>
                     <View style={{backgroundColor:'rgba(0,182,0,1)',paddingVertical:10, position: 'absolute', left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{fontSize:16,fontFamily:'AvenirNextLTPro-Bold',color:'#fff'}}>Add </Text>
                           
                        </View>
                   
                  </View>
                  <View style={{ marginRight: 10,width: width /2.2, height: width / 1.50, backgroundColor:'white',justifyContent:'center',alignItems:'center',borderColor:'#f4f4f4',borderWidth:1  }}>
                    <Image source={require('../../assets/images/p1.jpg')}
                      style={{ width: width / 3.9, height: width / 3.40, borderRadius: 0 }}
                    />
                    <View style={{ padding: 10 }}>
                      <Text style={{ fontSize: 15, fontFamily: 'AvenirNextLTPro-Bold' }}>Ariel Complete Detergent Powder</Text>
                      <Text style={{ fontFamily: 'AvenirNextLTPro-Regular' }}>₹522</Text>
                      <Text style={{ fontFamily: 'AvenirNextLTPro-Regular' }}>4 Kg</Text>
                    </View>
                     <View style={{backgroundColor:'rgba(0,182,0,1)',paddingVertical:10, position: 'absolute', left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{fontSize:16,fontFamily:'AvenirNextLTPro-Bold',color:'#fff'}}>Add </Text>
                           
                        </View>
                   
                  </View>
                  <View style={{ marginRight: 10,width: width /2.2, height: width / 1.50, backgroundColor:'white',justifyContent:'center',alignItems:'center',borderColor:'#f4f4f4',borderWidth:1  }}>
                    <Image source={require('../../assets/images/p1.jpg')}
                      style={{ width: width / 3.9, height: width / 3.40, borderRadius: 0 }}
                    />
                    <View style={{ padding: 10 }}>
                      <Text style={{ fontSize: 15, fontFamily: 'AvenirNextLTPro-Bold' }}>Ariel Complete Detergent Powder</Text>
                      <Text style={{ fontFamily: 'AvenirNextLTPro-Regular' }}>₹522</Text>
                      <Text style={{ fontFamily: 'AvenirNextLTPro-Regular' }}>4 Kg</Text>
                    </View>
                     <View style={{backgroundColor:'rgba(0,182,0,1)',paddingVertical:10, position: 'absolute', left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{fontSize:16,fontFamily:'AvenirNextLTPro-Bold',color:'#fff'}}>Add </Text>
                           
                        </View>
                   
                  </View>
                  <View style={{ marginRight: 10,width: width /2.2, height: width / 1.50, backgroundColor:'white',justifyContent:'center',alignItems:'center',borderColor:'#f4f4f4',borderWidth:1  }}>
                    <Image source={require('../../assets/images/p1.jpg')}
                      style={{ width: width / 3.9, height: width / 3.40, borderRadius: 0 }}
                    />
                    <View style={{ padding: 10 }}>
                      <Text style={{ fontSize: 15, fontFamily: 'AvenirNextLTPro-Bold' }}>Ariel Complete Detergent Powder</Text>
                      <Text style={{ fontFamily: 'AvenirNextLTPro-Regular' }}>₹522</Text>
                      <Text style={{ fontFamily: 'AvenirNextLTPro-Regular' }}>4 Kg</Text>
                    </View>
                     <View style={{backgroundColor:'rgba(0,182,0,1)',paddingVertical:10, position: 'absolute', left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{fontSize:16,fontFamily:'AvenirNextLTPro-Bold',color:'#fff'}}>Add </Text>
                           
                        </View>
                   
                  </View>
                  <View style={{ marginRight: 10,width: width /2.2, height: width / 1.50, backgroundColor:'white',justifyContent:'center',alignItems:'center',borderColor:'#f4f4f4',borderWidth:1  }}>
                    <Image source={require('../../assets/images/p1.jpg')}
                      style={{ width: width / 3.9, height: width / 3.40, borderRadius: 0 }}
                    />
                    <View style={{ padding: 10 }}>
                      <Text style={{ fontSize: 15, fontFamily: 'AvenirNextLTPro-Bold' }}>Ariel Complete Detergent Powder</Text>
                      <Text style={{ fontFamily: 'AvenirNextLTPro-Regular' }}>₹522</Text>
                      <Text style={{ fontFamily: 'AvenirNextLTPro-Regular' }}>4 Kg</Text>
                    </View>
                     <View style={{backgroundColor:'rgba(0,182,0,1)',paddingVertical:10, position: 'absolute', left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{fontSize:16,fontFamily:'AvenirNextLTPro-Bold',color:'#fff'}}>Add </Text>
                           
                        </View>
                   
                  </View>
                </ScrollView>
              </View>
              <View style={{ margin:11 }}>
                {/* <Text style={{ fontSize: 18, fontFamily: 'AvenirNextLTPro-Bold' }}>Mobile Covers</Text> */}
                <View style={{marginTop:10,width:width / 1.05,height:width/3.6,flexDirection:'row',justifyContent:'space-between',alignItems:'center',borderWidth:1,borderColor:'#f3f6f9',borderRadius:10,flexWrap:'wrap'}}>
                    <Image source={require('../../assets/images/c1.jpg')}
                      style={{ width: width / 3.65, height: width / 4.35, borderRadius: 8 }}
                    />
                   <View style={{ paddingTop: 20,width:width/1.5, }}>
                   <Text style={{ fontFamily: 'AvenirNextLTPro-Bold',color:'green',fontSize:14 }}>Up to 65% OFF</Text>
                      <Text style={{ fontSize: 17,fontWeight:'800' }}>Grocery & Staples</Text>
                      <Text style={{ fontFamily: 'AvenirNextLTPro-Regular',fontSize:12,color:'#1f1f1f' }}>Pulses, Atta & Other Flours, Rice & Other Grains, Dry Fruits & Nuts, Edible Oils, Ghee & Vanaspati, Spices, Salt & Sugar, Organic Staples</Text>
                    </View>
                  </View>
                  <View style={{marginTop:10,width:width / 1.05,height:width/3.6,flexDirection:'row',justifyContent:'space-between',alignItems:'center',borderWidth:1,borderColor:'#f3f6f9',borderRadius:10,flexWrap:'wrap'}}>
                    <Image source={require('../../assets/images/c1.jpg')}
                      style={{ width: width / 3.65, height: width / 4.35, borderRadius: 8 }}
                    />
                   <View style={{ paddingTop: 20,width:width/1.5, }}>
                   <Text style={{ fontFamily: 'AvenirNextLTPro-Bold',color:'green',fontSize:14 }}>Up to 65% OFF</Text>
                      <Text style={{ fontSize: 17,fontWeight:'800' }}>Grocery & Staples</Text>
                      <Text style={{ fontFamily: 'AvenirNextLTPro-Regular',fontSize:12,color:'#1f1f1f' }}>Pulses, Atta & Other Flours, Rice & Other Grains, Dry Fruits & Nuts, Edible Oils, Ghee & Vanaspati, Spices, Salt & Sugar, Organic Staples</Text>
                    </View>
                  </View>
                  <View style={{marginTop:10,width:width / 1.05,height:width/3.6,flexDirection:'row',justifyContent:'space-between',alignItems:'center',borderWidth:1,borderColor:'#f3f6f9',borderRadius:10,flexWrap:'wrap'}}>
                    <Image source={require('../../assets/images/c1.jpg')}
                      style={{ width: width / 3.65, height: width / 4.35, borderRadius: 8 }}
                    />
                   <View style={{ paddingTop: 20,width:width/1.5, }}>
                   <Text style={{ fontFamily: 'AvenirNextLTPro-Bold',color:'green',fontSize:14 }}>Up to 65% OFF</Text>
                      <Text style={{ fontSize: 17,fontWeight:'800' }}>Grocery & Staples</Text>
                      <Text style={{ fontFamily: 'AvenirNextLTPro-Regular',fontSize:12,color:'#1f1f1f' }}>Pulses, Atta & Other Flours, Rice & Other Grains, Dry Fruits & Nuts, Edible Oils, Ghee & Vanaspati, Spices, Salt & Sugar, Organic Staples</Text>
                    </View>
                  </View>
                  <View style={{marginTop:10,width:width / 1.05,height:width/3.6,flexDirection:'row',justifyContent:'space-between',alignItems:'center',borderWidth:1,borderColor:'#f3f6f9',borderRadius:10,flexWrap:'wrap'}}>
                    <Image source={require('../../assets/images/c1.jpg')}
                      style={{ width: width / 3.65, height: width / 4.35, borderRadius: 8 }}
                    />
                   <View style={{ paddingTop: 20,width:width/1.5, }}>
                   <Text style={{ fontFamily: 'AvenirNextLTPro-Bold',color:'green',fontSize:14 }}>Up to 65% OFF</Text>
                      <Text style={{ fontSize: 17,fontWeight:'800' }}>Grocery & Staples</Text>
                      <Text style={{ fontFamily: 'AvenirNextLTPro-Regular',fontSize:12,color:'#1f1f1f' }}>Pulses, Atta & Other Flours, Rice & Other Grains, Dry Fruits & Nuts, Edible Oils, Ghee & Vanaspati, Spices, Salt & Sugar, Organic Staples</Text>
                    </View>
                  </View>

                  <View style={{marginTop:10,width:width / 1.05,height:width/3.6,flexDirection:'row',justifyContent:'space-between',alignItems:'center',borderWidth:1,borderColor:'#f3f6f9',borderRadius:10,flexWrap:'wrap'}}>
                    <Image source={require('../../assets/images/c1.jpg')}
                      style={{ width: width / 3.65, height: width / 4.35, borderRadius: 8 }}
                    />
                   <View style={{ paddingTop: 20,width:width/1.5, }}>
                   <Text style={{ fontFamily: 'AvenirNextLTPro-Bold',color:'green',fontSize:14 }}>Up to 65% OFF</Text>
                      <Text style={{ fontSize: 17,fontWeight:'800' }}>Grocery & Staples</Text>
                      <Text style={{ fontFamily: 'AvenirNextLTPro-Regular',fontSize:12,color:'#1f1f1f' }}>Pulses, Atta & Other Flours, Rice & Other Grains, Dry Fruits & Nuts, Edible Oils, Ghee & Vanaspati, Spices, Salt & Sugar, Organic Staples</Text>
                    </View>
                  </View>
                
              </View>


              <View style={{ paddingLeft: 15,marginBottom:20 }}>
                <Text style={{ fontSize: 18, fontFamily: 'AvenirNextLTPro-Bold', marginBottom: 20 }}>Top Selling</Text>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                <View style={{ marginRight: 10,width: width /2.2, height: width / 1.50, backgroundColor:'white',justifyContent:'center',alignItems:'center',borderColor:'#f4f4f4',borderWidth:1  }}>
                    <Image source={require('../../assets/images/p1.jpg')}
                      style={{ width: width / 3.9, height: width / 3.40, borderRadius: 0 }}
                    />
                    <View style={{ padding: 10 }}>
                      <Text style={{ fontSize: 15, fontFamily: 'AvenirNextLTPro-Bold' }}>Ariel Complete Detergent Powder</Text>
                      <Text style={{ fontFamily: 'AvenirNextLTPro-Regular' }}>₹522</Text>
                      <Text style={{ fontFamily: 'AvenirNextLTPro-Regular' }}>4 Kg</Text>
                    </View>
                     <View style={{backgroundColor:'rgba(0,182,0,1)',paddingVertical:10, position: 'absolute', left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{fontSize:16,fontFamily:'AvenirNextLTPro-Bold',color:'#fff'}}>Add </Text>
                           
                        </View>
                   
                  </View>
                  <View style={{ marginRight: 10,width: width /2.2, height: width / 1.50, backgroundColor:'white',justifyContent:'center',alignItems:'center',borderColor:'#f4f4f4',borderWidth:1  }}>
                    <Image source={require('../../assets/images/p1.jpg')}
                      style={{ width: width / 3.9, height: width / 3.40, borderRadius: 0 }}
                    />
                    <View style={{ padding: 10 }}>
                      <Text style={{ fontSize: 15, fontFamily: 'AvenirNextLTPro-Bold' }}>Ariel Complete Detergent Powder</Text>
                      <Text style={{ fontFamily: 'AvenirNextLTPro-Regular' }}>₹522</Text>
                      <Text style={{ fontFamily: 'AvenirNextLTPro-Regular' }}>4 Kg</Text>
                    </View>
                     <View style={{backgroundColor:'rgba(0,182,0,1)',paddingVertical:10, position: 'absolute', left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{fontSize:16,fontFamily:'AvenirNextLTPro-Bold',color:'#fff'}}>Add </Text>
                           
                        </View>
                   
                  </View>
                  <View style={{ marginRight: 10,width: width /2.2, height: width / 1.50, backgroundColor:'white',justifyContent:'center',alignItems:'center',borderColor:'#f4f4f4',borderWidth:1  }}>
                    <Image source={require('../../assets/images/p1.jpg')}
                      style={{ width: width / 3.9, height: width / 3.40, borderRadius: 0 }}
                    />
                    <View style={{ padding: 10 }}>
                      <Text style={{ fontSize: 15, fontFamily: 'AvenirNextLTPro-Bold' }}>Ariel Complete Detergent Powder</Text>
                      <Text style={{ fontFamily: 'AvenirNextLTPro-Regular' }}>₹522</Text>
                      <Text style={{ fontFamily: 'AvenirNextLTPro-Regular' }}>4 Kg</Text>
                    </View>
                     <View style={{backgroundColor:'rgba(0,182,0,1)',paddingVertical:10, position: 'absolute', left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{fontSize:16,fontFamily:'AvenirNextLTPro-Bold',color:'#fff'}}>Add </Text>
                           
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

