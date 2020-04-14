import React, { Component } from 'react'
import { View, ScrollView, Image, Dimensions, StyleSheet,StatusBar } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Card, CardItem } from 'native-base';

const { width, height } = Dimensions.get('window')

class Cart extends Component {
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
                    <Header style={{ backgroundColor: '#fff' }}>
                    <StatusBar backgroundColor="green" barStyle="light-content" />
                        <Left>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: 5, }}>
                                <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                                    <FontAwesome5 name="arrow-left" size={18} color={'#000'} />
                                </TouchableOpacity>
                                <Text style={{ fontSize: 18, fontWeight: "bold", fontFamily: 'AvenirNextLTPro-Bold', color: "green", marginLeft: 15 }}>Cart</Text>
                            </View>
                        </Left>
                        {/* <Body>
                                <Title>Header</Title>
                            </Body> */}
                        <Right >
                            <Text style={{ fontSize: 10, marginRight: 20, fontFamily: 'AvenirNextLTPro-Bold', color: "#000" }}>
                                <FontAwesome5 name="search" size={18} />
                            </Text>

                            <Text style={{ fontSize: 10, fontFamily: 'AvenirNextLTPro-Bold', color: "#000" }}>
                                <FontAwesome5 name="shopping-cart" size={18} />
                            </Text>
                        </Right>
                    </Header>
                    <ScrollView
                        scrollEventThrottle={16}
                    >
                        <Content>
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
                                    </View>
                                    <Right>
                                        <Button bordered success small>
                                            <Text style={{fontSize:12}}>Add</Text>
                                        </Button>
                                    </Right>
                                </CardItem>
                            </Card>
                            <Card style={styles.card}>
                                <CardItem style={{ marginLeft: 0, paddingLeft: 0 }}>
                                    <Image resizeMode={'contain'} source={require('../../assets/images/i2.jpg')}
                                        style={{ width: width / 3.65, height: width / 3.65, borderRadius: 0 }}
                                    />
                                    <View style={{ alignItems: 'flex-start', justifyContent: 'center', flex: 1.9 }}>
                                        <Text style={{ fontFamily: 'AvenirNextLTPro-Bold', color: 'green', fontSize: 12 }}>Up to 65% OFF</Text>
                                        <Text style={{ fontSize: 16, fontWeight: '700' }}>Family Farm Sugar</Text>
                                        <Text style={{ fontFamily: 'AvenirNextLTPro-Regular', fontSize: 12, color: '#666' }}>1 Kg</Text>

                                        <Text style={styles.price}>₹46</Text>

                                    </View>
                                    <Right>
                                        <Button bordered success small>
                                            <Text style={{fontSize:12}}>Add</Text>
                                        </Button>
                                    </Right>
                                </CardItem>
                            </Card>
                            <Card style={styles.card}>
                                <CardItem style={{ marginLeft: 0, paddingLeft: 0 }}>
                                    <Image resizeMode={'contain'} source={require('../../assets/images/i3.jpg')}
                                        style={{ width: width / 3.65, height: width / 3.65, borderRadius: 0 }}
                                    />
                                    <View style={{ alignItems: 'flex-start', justifyContent: 'center', flex: 1.9 }}>
                                        <Text style={{ fontFamily: 'AvenirNextLTPro-Bold', color: 'green', fontSize: 12 }}>Up to 65% OFF</Text>
                                        <Text style={{ fontSize: 16, fontWeight: '700' }}>Family Farm Sugar</Text>
                                        <Text style={{ fontFamily: 'AvenirNextLTPro-Regular', fontSize: 12, color: '#666' }}>1 Kg</Text>

                                        <Text style={styles.price}>₹46</Text>
                                    </View>
                                    <Right>
                                        <Button bordered success small>
                                            <Text style={{fontSize:12}}>Add</Text>
                                        </Button>
                                    </Right>
                                </CardItem>
                            </Card>
                            <Card style={styles.card}>
                                <CardItem style={{ marginLeft: 0, paddingLeft: 0 }}>
                                    <Image resizeMode={'contain'} source={require('../../assets/images/i4.jpg')}
                                        style={{ width: width / 3.65, height: width / 3.65, borderRadius: 0 }}
                                    />
                                    <View style={{ alignItems: 'flex-start', justifyContent: 'center', flex: 1.9 }}>
                                        <Text style={{ fontFamily: 'AvenirNextLTPro-Bold', color: 'green', fontSize: 12 }}>Up to 65% OFF</Text>
                                        <Text style={{ fontSize: 16, fontWeight: '700' }}>Family Farm Sugar</Text>
                                        <Text style={{ fontFamily: 'AvenirNextLTPro-Regular', fontSize: 12, color: '#666' }}>1 Kg</Text>

                                        <Text style={styles.price}>₹46</Text>

                                    </View>
                                    <Right>
                                        <Button bordered success small>
                                            <Text style={{fontSize:12}}>Add</Text>
                                        </Button>
                                    </Right>
                                </CardItem>
                            </Card>
                            <Card style={styles.card}>
                                <CardItem style={{ marginLeft: 0, paddingLeft: 0 }}>
                                    <Image resizeMode={'contain'} source={require('../../assets/images/i5.jpg')}
                                        style={{ width: width / 3.65, height: width / 3.65, borderRadius: 0 }}
                                    />
                                    <View style={{ alignItems: 'flex-start', justifyContent: 'center', flex: 1.9 }}>
                                        <Text style={{ fontFamily: 'AvenirNextLTPro-Bold', color: 'green', fontSize: 12 }}>Up to 65% OFF</Text>
                                        <Text style={{ fontSize: 16, fontWeight: '700' }}>Family Farm Sugar</Text>
                                        <Text style={{ fontFamily: 'AvenirNextLTPro-Regular', fontSize: 12, color: '#666' }}>1 Kg</Text>

                                        <Text style={styles.price}>₹46</Text>

                                    </View>
                                    <Right>
                                        <Button bordered success small>
                                            <Text style={{fontSize:12}}>Add</Text>
                                        </Button>
                                    </Right>
                                </CardItem>
                            </Card>
                            <Card style={styles.card}>
                                <CardItem style={{ marginLeft: 0, paddingLeft: 0 }}>
                                    <Image resizeMode={'contain'} source={require('../../assets/images/i4.jpg')}
                                        style={{ width: width / 3.65, height: width / 3.65, borderRadius: 0 }}
                                    />
                                    <View style={{ alignItems: 'flex-start', justifyContent: 'center', flex: 1.9 }}>
                                        <Text style={{ fontFamily: 'AvenirNextLTPro-Bold', color: 'green', fontSize: 12 }}>Up to 65% OFF</Text>
                                        <Text style={{ fontSize: 16, fontWeight: '700' }}>Family Farm Sugar</Text>
                                        <Text style={{ fontFamily: 'AvenirNextLTPro-Regular', fontSize: 12, color: '#666' }}>1 Kg</Text>

                                        <Text style={styles.price}>₹46</Text>

                                    </View>
                                    <Right>
                                        <Button bordered success small>
                                            <Text style={{fontSize:12}}>Add</Text>
                                        </Button>
                                    </Right>
                                </CardItem>
                            </Card>
                        </Content>
                    </ScrollView>
                    <Footer>
                        <FooterTab style={{ backgroundColor: '#8bc34a' }}>
                            <View style={{flex:0.5,flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                                <Text style={{fontSize:12,fontWeight:'700',color:'#fdfdfd'}}>Rs 989</Text>
                                <Text style={{fontSize:10,fontWeight:'700',color:'yellow'}}>Total Save 209</Text>
                            </View>
                            <Button style={{backgroundColor:'green'}} onPress={() => this.props.navigation.navigate('Delivery')}>
                                <Text style={{color:"#fff",fontWeight:'700',fontSize:12}}>Checkout</Text>
                            </Button>
                        </FooterTab>
                    </Footer>
                </Container>









            </>
        )
    }
}

const styles = StyleSheet.create({
    card: {
        width: width / 1.01,
        marginBottom:0


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
        paddingBottom: 20,
        flexWrap: 'wrap',
    },
    item: {
        borderColor: '#dfdfdf', borderWidth: 1, marginBottom: 8
    }

});

export default Cart;