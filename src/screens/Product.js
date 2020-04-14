import React, { Component } from 'react'
import { View, ScrollView, Image, Dimensions, StyleSheet,StatusBar } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Card, CardItem } from 'native-base';

const { width, height } = Dimensions.get('window')

class Product extends Component {
    render() {
        return (
            <>
 
                {/* <View style={{ backgroundColor: '#f3f6f9', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10, borderBottomWidth: 2, borderBottomColor: '#EAECEF' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: 5, }}>
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                            <FontAwesome5 name="arrow-left" size={20} color={'#000'} />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 20, fontWeight: "bold", fontFamily: 'AvenirNextLTPro-Bold', color: "green", marginLeft: 15 }}>Cart</Text>
                    </View>
                    <View style={{ justifyContent: "flex-end", flexDirection: 'row' }}>
                        <Text style={{ fontSize: 10, marginRight: 20, fontFamily: 'AvenirNextLTPro-Bold', color: "#000" }}>
                            <FontAwesome5 name="search" size={20} />
                        </Text>

                        <Text style={{ fontSize: 10, fontFamily: 'AvenirNextLTPro-Bold', color: "#000" }}>
                            <FontAwesome5 name="shopping-cart" size={20} />
                        </Text>
                    </View>
                </View> */}


                <Container>
                  
                    <ScrollView
                        scrollEventThrottle={16}
                    >
                        <Content>
                        <TouchableOpacity  onPress={() => this.props.navigation.navigate('Checkout')}>
                        <Card style={styles.card}>
                                <CardItem style={{ marginLeft: 0, paddingLeft: 0 }}>
                                    <Image resizeMode={'contain'} source={require('../../assets/images/i1.jpg')}
                                        style={{ width: width / 3.65, height: width / 3.65, borderRadius: 0 }}
                                    />
                                    <View style={{ alignItems: 'flex-start', justifyContent: 'center', flex: 1.9 }}>
                                        <Text style={{ fontFamily: 'AvenirNextLTPro-Bold', color: 'green', fontSize: 12 }}>Up to 65% OFF</Text>
                                        <Text style={{ fontSize: 16, fontWeight: '700' }}>Family Farm Sugar</Text>
                                        <Text style={{ fontFamily: 'AvenirNextLTPro-Regular', fontSize: 12, color: '#666' }}>1 Kg</Text>

                                        <Text style={styles.price}>₹46</Text>
                                        <Text style={{color:'#666',fontSize:12}}>Quantity : 4</Text>
                                    </View>
                                    <Right>
                                      <View style={{flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                                      <Button bordered small success style={{justifyContent:'center',alignSelf:'center'}}>
                                       <Text style={{fontSize:10}}>Add</Text>
                                        </Button>
                                        <Button small bordered danger style={{marginTop:5,paddingHorizontal: 20,}}>
                                           <FontAwesome5 name="trash-alt" fontSize={25}></FontAwesome5>
                                        </Button>
                                      </View>
                                    </Right>
                                </CardItem>
                            </Card>
                        </TouchableOpacity>
                            <Card style={styles.card}>
                                <CardItem style={{ marginLeft: 0, paddingLeft: 0 }}>
                                    <Image resizeMode={'contain'} source={require('../../assets/images/i2.jpg')}
                                        style={{ width: width / 3.65, height: width / 3.65, borderRadius: 0 }}
                                    />
                                    <View style={{ alignItems: 'flex-start', justifyContent: 'center',flex:1 }}>
                                        
                                        <Text style={{ fontSize: 16, fontWeight: '700' }}>Family Farm Sugar</Text>
                                        <Text style={{ fontFamily: 'AvenirNextLTPro-Regular', fontSize: 12, color: '#666' }}>1 Kg</Text>

                                        <Text style={styles.price}>₹46</Text>
                                        <Text style={{color:'#666',fontSize:12}}>Quantity : 4</Text>

                                    </View>
                                    <Right>
                                      <View style={{flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                                      <Button bordered small success style={{justifyContent:'center',alignSelf:'center'}}>
                                       <Text style={{fontSize:10}}>Add</Text>
                                        </Button>
                                        <Button small bordered danger style={{marginTop:5,paddingHorizontal: 20,}}>
                                           <FontAwesome5 name="trash-alt" fontSize={25}></FontAwesome5>
                                        </Button>
                                      </View>
                                    </Right>
                                   
                                </CardItem>
                            </Card>
                            <Card style={styles.card}>
                                <CardItem style={{ marginLeft: 0, paddingLeft: 0 }}>
                                    <Image resizeMode={'contain'} source={require('../../assets/images/i3.jpg')}
                                        style={{ width: width / 3.65, height: width / 3.65, borderRadius: 0 }}
                                    />
                                    <View style={{ alignItems: 'flex-start', justifyContent: 'center', flex: 1.9 }}>
                                       
                                        <Text style={{ fontSize: 16, fontWeight: '700' }}>Family Farm Sugar</Text>
                                        <Text style={{ fontFamily: 'AvenirNextLTPro-Regular', fontSize: 12, color: '#666' }}>1 Kg</Text>

                                        <Text style={styles.price}>₹46</Text>
                                        <Text style={{color:'#666',fontSize:12}}>Quantity : 4</Text>
                                    </View>
                                    <Right>
                                      <View style={{flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                                      <Button bordered small success style={{justifyContent:'center',alignSelf:'center'}}>
                                       <Text style={{fontSize:10}}>Add</Text>
                                        </Button>
                                        <Button small bordered danger style={{marginTop:5,paddingHorizontal: 20,}}>
                                           <FontAwesome5 name="trash-alt" fontSize={25}></FontAwesome5>
                                        </Button>
                                      </View>
                                    </Right>
                                   
                                </CardItem>
                            </Card>
                            <Card style={styles.card}>
                                <CardItem style={{ marginLeft: 0, paddingLeft: 0 }}>
                                    <Image resizeMode={'contain'} source={require('../../assets/images/i4.jpg')}
                                        style={{ width: width / 3.65, height: width / 3.65, borderRadius: 0 }}
                                    />
                                    <View style={{ alignItems: 'flex-start', justifyContent: 'center', flex: 1.9 }}>
                                      
                                        <Text style={{ fontSize: 16, fontWeight: '700' }}>Family Farm Sugar</Text>
                                        <Text style={{ fontFamily: 'AvenirNextLTPro-Regular', fontSize: 12, color: '#666' }}>1 Kg</Text>

                                        <Text style={styles.price}>₹46</Text>
                                        <Text style={{color:'#666',fontSize:12}}>Quantity : 4</Text>

                                    </View>
                                    <Right>
                                      <View style={{flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                                      <Button bordered small success style={{justifyContent:'center',alignSelf:'center'}}>
                                       <Text style={{fontSize:10}}>Add</Text>
                                        </Button>
                                        <Button small bordered danger style={{marginTop:5,paddingHorizontal: 20,}}>
                                           <FontAwesome5 name="trash-alt" fontSize={25}></FontAwesome5>
                                        </Button>
                                      </View>
                                    </Right>
                                   
                                </CardItem>
                            </Card>
                            <Card style={styles.card}>
                                <CardItem style={{ marginLeft: 0, paddingLeft: 0 }}>
                                    <Image resizeMode={'contain'} source={require('../../assets/images/i5.jpg')}
                                        style={{ width: width / 3.65, height: width / 3.65, borderRadius: 0 }}
                                    />
                                    <View style={{ alignItems: 'flex-start', justifyContent: 'center', flex: 1.9 }}>
                                        
                                        <Text style={{ fontSize: 16, fontWeight: '700' }}>Family Farm Sugar</Text>
                                        <Text style={{ fontFamily: 'AvenirNextLTPro-Regular', fontSize: 12, color: '#666' }}>1 Kg</Text>

                                        <Text style={styles.price}>₹46</Text>
                                        <Text style={{color:'#666',fontSize:12}}>Quantity : 4</Text>

                                    </View>
                                    <Right>
                                      <View style={{flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                                      <Button bordered small success style={{justifyContent:'center',alignSelf:'center'}}>
                                       <Text style={{fontSize:10}}>Add</Text>
                                        </Button>
                                        <Button small bordered danger style={{marginTop:5,paddingHorizontal: 20,}}>
                                           <FontAwesome5 name="trash-alt" fontSize={25}></FontAwesome5>
                                        </Button>
                                      </View>
                                    </Right>
                                   
                                </CardItem>
                            </Card>
                            <Card style={styles.card}>
                                <CardItem style={{ marginLeft: 0, paddingLeft: 0 }}>
                                    <Image resizeMode={'contain'} source={require('../../assets/images/i4.jpg')}
                                        style={{ width: width / 3.65, height: width / 3.65, borderRadius: 0 }}
                                    />
                                    <View style={{ alignItems: 'flex-start', justifyContent: 'center', flex: 1.9 }}>
                                     
                                        <Text style={{ fontSize: 16, fontWeight: '700' }}>Family Farm Sugar</Text>
                                        <Text style={{ fontFamily: 'AvenirNextLTPro-Regular', fontSize: 12, color: '#666' }}>1 Kg</Text>

                                        <Text style={styles.price}>₹46</Text>
                                        <Text style={{color:'#666',fontSize:12}}>Quantity : 4</Text>

                                    </View>
                                    <Right>
                                      <View style={{flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                                      <Button bordered small success style={{justifyContent:'center',alignSelf:'center'}}>
                                       <Text style={{fontSize:10}}>Add</Text>
                                        </Button>
                                        <Button small bordered danger style={{marginTop:5,paddingHorizontal: 20,}}>
                                           <FontAwesome5 name="trash-alt" fontSize={25}></FontAwesome5>
                                        </Button>
                                      </View>
                                    </Right>
                                   
                                </CardItem>
                            </Card>
                        </Content>
                    </ScrollView>
                   
                </Container>









            </>
        )
    }
}

const styles = StyleSheet.create({
    card: {
        width: width / 1.01,
        marginBottom: 0,
        marginTop:0,
        borderRadius:0


    },


    title: {
        fontSize: 15,
        fontFamily: 'AvenirNextLTPro-Bold',
        color: '#666', fontWeight: '600'
    },
    price: {
        fontSize: 18,
        fontFamily: 'AvenirNextLTPro-Bold',
        color: '#222',
        fontWeight: '700',
        marginTop: 5
    },
    weight: {
        fontSize: 14,
        fontFamily: 'AvenirNextLTPro-Bold',
        color: '#666',
        fontWeight: '400'
    },
    pricingSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        backgroundColor: '#fff',
        paddingBottom: 10
    },
    itemDetails: {
        alignItems: 'flex-start',
        flexWrap: 'nowrap',
        padding: 10,
        backgroundColor: 'white',
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0
    },
    cartSection: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        paddingBottom: 0,
        flexWrap: 'wrap',
    },
    item: {
        borderColor: '#dfdfdf', borderWidth: 1, marginBottom: 8
    }

});

export default Product;