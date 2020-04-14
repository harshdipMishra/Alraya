import React, { Component } from 'react'
import { View, ScrollView, Image, Dimensions, StyleSheet, StatusBar } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Card, CardItem } from 'native-base';

const { width, height } = Dimensions.get('window')

class Delivery extends Component {
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
                                    <FontAwesome5 name="arrow-left" size={18} color={'#333'} />
                                </TouchableOpacity>

                            </View>
                        </Left>
                        <Body>
                            <Title style={{ fontWeight: '700',fontSize:18,marginLeft:-30,color:'#333' }}>Delivery Options</Title>
                        </Body>
                        <Right >
                            {/* <Text style={{ fontSize: 10, marginRight: 20, fontFamily: 'AvenirNextLTPro-Bold', color: "#000" }}>
                                <FontAwesome5 name="search" size={20} />
                            </Text>

                            <Text style={{ fontSize: 10, fontFamily: 'AvenirNextLTPro-Bold', color: "#000" }}>
                                <FontAwesome5 name="shopping-cart" size={20} />
                            </Text> */}
                        </Right>
                    </Header>
                    <ScrollView
                        scrollEventThrottle={16}
                    >
                        <Content>
                            <Card style={styles.card}>
                                <View style={{ padding: 15,paddingVertical:20 }}>
                                    <View style={{ flexDirectiom: 'row',marginBottom:20 }}>
                                        <View style={{flex:3}}>
                                            <Text style={{fontSize:18,fontWeight:'700'}}>Home</Text>
                                        </View>
                                        <View style={{flex:1,width:100,position:'absolute',right:0}}>
                                            <Button bordered success small onPress={() => this.props.navigation.navigate('ChangeAddress')}>
                                                <Text>Change</Text>
                                            </Button>
                                        </View>
                                    </View>
                                    <View>
                                        <Text style={{fontSize:16}}>
                                            Shubhang Verma
                                        </Text>
                                        <Text style={{color:'#666'}}>
                                            1004,parsvnath planet ,tower no 8, vibhut khand ,gomti nagar, lucknow
                                        </Text>
                                    </View>
                                </View>
                            </Card>
                           {/* <View style={{marginTop:10,backgroundColor:'#f3f6f9'}}>
                           <View style={{ padding: 15,paddingVertical:20 }}>
                                    <View style={{ flexDirectiom: 'row',marginBottom:20 }}>
                                        <View style={{flex:3}}>
                                            <Text style={{fontSize:18,fontWeight:'700'}}>Home</Text>
                                        </View>
                                        <View style={{flex:1,width:100,position:'absolute',right:0}}>
                                            <Button bordered success small>
                                                <Text>Change</Text>
                                            </Button>
                                        </View>
                                    </View>
                                    <View>
                                        <Text style={{fontSize:16}}>
                                            Shubhang Verma
                                        </Text>
                                        <Text style={{color:'#666'}}>
                                            1004,parsvnath planet ,tower no 8, vibhut khand ,gomti nagar, lucknow
                                        </Text>
                                    </View>
                                </View>
                           </View> */}





                        </Content>
                    </ScrollView>
                    <Footer>
                        <FooterTab success style={{ backgroundColor: '#8bc34a' }}>
                            {/* <View style={{flex:0.5,flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                                <Text style={{fontSize:14,fontWeight:'700',color:'#fdfdfd'}}>Rs 989</Text>
                                <Text style={{fontSize:10,fontWeight:'700',color:'yellow'}}>Total Save 209</Text>
                            </View> */}
                            <Button style={{ backgroundColor: 'green' }}>
                                <Text style={{ color: "#fff", fontWeight: '700', fontSize: 12 }}>Proceed to Payment</Text>
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

export default Delivery;