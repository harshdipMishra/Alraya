import React, { Component } from 'react'
import { View, ScrollView, Image, Dimensions, StyleSheet } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Container, Header, Content, Button, Text } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';


const { width, height } = Dimensions.get('window')

class Items extends Component {
    render() {
        return (
            <>

                <View style={{ backgroundColor: '#fff', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10, borderBottomWidth: 2, borderBottomColor: '#EAECEF' }}>
                    <View style={{ flexDirection:'row',alignItems: 'center',justifyContent:'center', padding: 5, }}>
                   <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                   <FontAwesome5 name="arrow-left" size={18} color={'#000'} />
                   </TouchableOpacity>
                        <Text style={{ fontSize: 18, fontWeight: "bold", fontFamily: 'AvenirNextLTPro-Bold', color: "green",marginLeft:15 }}>Spices & Salt</Text>
                    </View>
                    <View style={{ justifyContent: "flex-end", flexDirection: 'row' }}>
                        <Text style={{ fontSize: 10, marginRight: 20, fontFamily: 'AvenirNextLTPro-Bold', color: "#000" }}>
                            <FontAwesome5 name="search" size={18} />
                        </Text>

                        <Text style={{ fontSize: 10, fontFamily: 'AvenirNextLTPro-Bold', color: "#000" }}>
                            <FontAwesome5 name="shopping-cart" size={18} />
                        </Text>
                    </View>
                </View>
                <ScrollView
                    scrollEventThrottle={16}
                >
                    <View style={{ padding: 5 }}>
                        <View style={styles.itemSection}>
                           <TouchableOpacity  onPress={() => this.props.navigation.navigate('Checkout')}>
                           <View style={styles.item}>
                                <Image source={require('../../assets/images/i1.jpg')}
                                    style={{ height: width / 2.3, width: width / 2.1, borderRadius: 0, borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}
                                />
                                <View style={styles.itemDetails}>
                                    <Text style={styles.title}>Family Farm Sugar</Text>
                                    <Text style={styles.weight}>5 Kg</Text>
                                </View>
                                <View style={styles.pricingSection}>
                                    <Text style={styles.price}>₹46</Text>
                                    <Button bordered small success>
                                        <Text style={{ fontSize: 10 }}>Add to Cart</Text>
                                    </Button>
                                </View>
                            </View>
                           </TouchableOpacity>

                            <View style={styles.item}>
                                <Image source={require('../../assets/images/i2.jpg')}
                                    style={{ height: width / 2.3, width: width / 2.1, borderRadius: 0, borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}
                                />
                                <View style={styles.itemDetails}>
                                    <Text style={styles.title}>Family Farm Sugar</Text>
                                    <Text style={styles.weight}>5 Kg</Text>
                                </View>
                                <View style={styles.pricingSection}>
                                    <Text style={styles.price}>₹46</Text>
                                    <Button bordered small success>
                                        <Text style={{ fontSize: 10 }}>Add to Cart</Text>
                                    </Button>
                                </View>
                            </View>

                            <View style={styles.item}>
                                <Image source={require('../../assets/images/i3.jpg')}
                                    style={{ height: width / 2.3, width: width / 2.1, borderRadius: 0, borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}
                                />
                                <View style={styles.itemDetails}>
                                    <Text style={styles.title}>Family Farm Sugar</Text>
                                    <Text style={styles.weight}>5 Kg</Text>
                                </View>
                                <View style={styles.pricingSection}>
                                    <Text style={styles.price}>₹46</Text>
                                    <Button bordered small success>
                                        <Text style={{ fontSize: 10 }}>Add to Cart</Text>
                                    </Button>
                                </View>
                            </View>

                            <View style={styles.item}>
                                <Image source={require('../../assets/images/i4.jpg')}
                                    style={{ height: width / 2.3, width: width / 2.1, borderRadius: 0, borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}
                                />
                                <View style={styles.itemDetails}>
                                    <Text style={styles.title}>Family Farm Sugar</Text>
                                    <Text style={styles.weight}>5 Kg</Text>
                                </View>
                                <View style={styles.pricingSection}>
                                    <Text style={styles.price}>₹46</Text>
                                    <Button bordered small success>
                                        <Text style={{ fontSize: 10 }}>Add to Cart</Text>
                                    </Button>
                                </View>
                            </View>

                            <View style={styles.item}>
                                <Image source={require('../../assets/images/i5.jpg')}
                                    style={{ height: width / 2.3, width: width / 2.1, borderRadius: 0, borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}
                                />
                                <View style={styles.itemDetails}>
                                    <Text style={styles.title}>Family Farm Sugar</Text>
                                    <Text style={styles.weight}>5 Kg</Text>
                                </View>
                                <View style={styles.pricingSection}>
                                    <Text style={styles.price}>₹46</Text>
                                    <Button bordered small success>
                                        <Text style={{ fontSize: 10 }}>Add to Cart</Text>
                                    </Button>
                                </View>
                            </View>

                            <View style={styles.item}>
                                <Image source={require('../../assets/images/i6.jpg')}
                                    style={{ height: width / 2.3, width: width / 2.1, borderRadius: 0, borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}
                                />
                                <View style={styles.itemDetails}>
                                    <Text style={styles.title}>Family Farm Sugar</Text>
                                    <Text style={styles.weight}>5 Kg</Text>
                                </View>
                                <View style={styles.pricingSection}>
                                    <Text style={styles.price}>₹46</Text>
                                    <Button bordered small success>
                                        <Text style={{ fontSize: 10 }}>Add to Cart</Text>
                                    </Button>
                                </View>
                            </View>

                            <View style={styles.item}>
                                <Image source={require('../../assets/images/i7.jpg')}
                                    style={{ height: width / 2.3, width: width / 2.1, borderRadius: 0, borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}
                                />
                                <View style={styles.itemDetails}>
                                    <Text style={styles.title}>Family Farm Sugar</Text>
                                    <Text style={styles.weight}>5 Kg</Text>
                                </View>
                                <View style={styles.pricingSection}>
                                    <Text style={styles.price}>₹46</Text>
                                    <Button bordered small success>
                                        <Text style={{ fontSize: 10 }}>Add to Cart</Text>
                                    </Button>
                                </View>
                            </View>

                            <View style={styles.item}>
                                <Image source={require('../../assets/images/i8.jpg')}
                                    style={{ height: width / 2.3, width: width / 2.1, borderRadius: 0, borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}
                                />
                                <View style={styles.itemDetails}>
                                    <Text style={styles.title}>Family Farm Sugar</Text>
                                    <Text style={styles.weight}>5 Kg</Text>
                                </View>
                                <View style={styles.pricingSection}>
                                    <Text style={styles.price}>₹46</Text>
                                    <Button bordered small success>
                                        <Text style={{ fontSize: 10 }}>Add to Cart</Text>
                                    </Button>
                                </View>
                            </View>

                            <View style={styles.item}>
                                <Image source={require('../../assets/images/i9.jpg')}
                                    style={{ height: width / 2.3, width: width / 2.1, borderRadius: 0, borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}
                                />
                                <View style={styles.itemDetails}>
                                    <Text style={styles.title}>Family Farm Sugar</Text>
                                    <Text style={styles.weight}>5 Kg</Text>
                                </View>
                                <View style={styles.pricingSection}>
                                    <Text style={styles.price}>₹46</Text>
                                    <Button bordered small success>
                                        <Text style={{ fontSize: 10 }}>Add to Cart</Text>
                                    </Button>
                                </View>
                            </View>

                            <View style={styles.item}>
                                <Image source={require('../../assets/images/i10.jpg')}
                                    style={{ height: width / 2.3, width: width / 2.1, borderRadius: 0, borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}
                                />
                                <View style={styles.itemDetails}>
                                    <Text style={styles.title}>Family Farm Sugar</Text>
                                    <Text style={styles.weight}>5 Kg</Text>
                                </View>
                                <View style={styles.pricingSection}>
                                    <Text style={styles.price}>₹46</Text>
                                    <Button bordered small success>
                                        <Text style={{ fontSize: 10 }}>Add to Cart</Text>
                                    </Button>
                                </View>
                            </View>

                            <View style={styles.item}>
                                <Image source={require('../../assets/images/i11.jpg')}
                                    style={{ height: width / 2.3, width: width / 2.1, borderRadius: 0, borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}
                                />
                                <View style={styles.itemDetails}>
                                    <Text style={styles.title}>Family Farm Sugar</Text>
                                    <Text style={styles.weight}>5 Kg</Text>
                                </View>
                                <View style={styles.pricingSection}>
                                    <Text style={styles.price}>₹46</Text>
                                    <Button bordered small success>
                                        <Text style={{ fontSize: 10 }}>Add to Cart</Text>
                                    </Button>
                                </View>
                            </View>

                            <View style={styles.item}>
                                <Image source={require('../../assets/images/i12.jpg')}
                                    style={{ height: width / 2.3, width: width / 2.1, borderRadius: 0, borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}
                                />
                                <View style={styles.itemDetails}>
                                    <Text style={styles.title}>Family Farm Sugar</Text>
                                    <Text style={styles.weight}>5 Kg</Text>
                                </View>
                                <View style={styles.pricingSection}>
                                    <Text style={styles.price}>₹46</Text>
                                    <Button bordered small success>
                                        <Text style={{ fontSize: 10 }}>Add to Cart</Text>
                                    </Button>
                                </View>
                            </View>

                        </View>

                    </View>
                </ScrollView>
            </>
        )
    }
}

const styles = StyleSheet.create({
    title: {
        fontSize: 15, fontFamily: 'AvenirNextLTPro-Bold', color: '#666', fontWeight: '600'
    },
    price: {
        fontSize: 18, fontFamily: 'AvenirNextLTPro-Bold', color: '#222', fontWeight: '700'
    },
    weight: {
        fontSize: 14, fontFamily: 'AvenirNextLTPro-Bold', color: '#666', fontWeight: '400'
    },
    pricingSection: {
        flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 10, backgroundColor: '#fff', paddingBottom: 10
    },
    itemDetails: {
        alignItems: 'flex-start', flexWrap: 'nowrap', padding: 10, backgroundColor: 'white', borderBottomLeftRadius: 0, borderBottomRightRadius: 0
    },
    itemSection: {
        flexDirection: 'row',
        justifyContent: 'space-between', 
        paddingBottom: 20, 
        flexWrap: 'wrap',
    },
    item: {
        borderColor: '#dfdfdf', borderWidth: 1, marginBottom: 8
    }

});

export default Items;