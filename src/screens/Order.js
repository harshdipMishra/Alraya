import React, { Component } from 'react'
import { View, ScrollView, Image, Dimensions, StyleSheet, StatusBar } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Card, CardItem } from 'native-base';

const { width, height } = Dimensions.get('window')

class Order extends Component {
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
                {/* <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                  <FontAwesome5 name="arrow-left" size={20} color={'#000'} />
                </TouchableOpacity> */}
                <Text style={{ fontSize: 18, fontWeight: "bold", fontFamily: 'AvenirNextLTPro-Bold', color: "green", marginLeft: 15 }}>My Order</Text>
              </View>
            </Left>
            {/* <Body>
                                <Title>Header</Title>
                            </Body> */}
            <Right >
              <Text style={{ fontSize: 10, marginRight: 20, fontFamily: 'AvenirNextLTPro-Bold', color: "#000" }}>
                <FontAwesome5 name="search" size={16} />
              </Text>

              <Text style={{ fontSize: 10, fontFamily: 'AvenirNextLTPro-Bold', color: "#000" }}>
                <FontAwesome5 name="shopping-cart" size={16} />
              </Text>
            </Right>
          </Header>
          <ScrollView
            scrollEventThrottle={16}
          >
           
            <Content>
            <View style={{ backgroundColor: 'lightgrey', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingVertical: 10 }}>
                <Text style={{ fontSize: 12 }}>Placed On Sat ,22 Mar 8:38 PM</Text>
                {/* <Button transparent>
                  <Text style={{ fontSize: 13, fontWeight: '700', color: 'green' }}>Order Details</Text>
                </Button> */}
              </View>
             <TouchableOpacity onPress={() => this.props.navigation.navigate('OrderDetail')}>
             <Card style={styles.Card}>
                <CardItem style={{ marginLeft: 0, paddingLeft: 10 }}>
                  <Image resizeMode={'contain'} source={require('../../assets/images/images/tracking.png')}
                    style={{ width: width / 6.65, height: width / 6.65, borderRadius: 0 }}
                  />
                  <View style={{ alignItems: 'flex-start', justifyContent: 'center', flex: 1.9,paddingLeft:15 }}>
                  
                    <Text style={{ fontSize: 16, fontWeight: '700' }}>Family Farm Sugar</Text>
                    <Text style={{ fontFamily: 'AvenirNextLTPro-Regular', fontSize: 12, color: '#666' }}>1 Kg</Text>

                    <Text style={styles.price}>₹46</Text>
                    <Text style={{ fontSize: 12,color:'green' }}>Delivered ( Mar 05,2020 )</Text>
                  </View>
                  <Right>
                    <Button transparent small>
                      <FontAwesome5 name="chevron-right" size={15} color={'lightgrey'} />
                    </Button>
                  </Right>
                </CardItem>
              </Card>
             </TouchableOpacity>
             <TouchableOpacity>
             <Card style={styles.Card}>
                <CardItem style={{ marginLeft: 0, paddingLeft: 10 }}>
                  <Image resizeMode={'contain'} source={require('../../assets/images/images/tracking2.png')}
                    style={{ width: width / 6.65, height: width / 6.65, borderRadius: 0 }}
                  />
                  <View style={{ alignItems: 'flex-start', justifyContent: 'center', flex: 1.9,paddingLeft:15 }}>
                   
                    <Text style={{ fontSize: 16, fontWeight: '700' }}>Family Farm Sugar</Text>
                    <Text style={{ fontFamily: 'AvenirNextLTPro-Regular', fontSize: 12, color: '#666' }}>1 Kg</Text>

                    <Text style={styles.price}>₹46</Text>
                    <Text style={{ fontSize: 12,color:'red' }}>Order Canceled</Text>
                  </View>
                  <Right>
                    <Button transparent small>
                      <FontAwesome5 name="chevron-right" size={15} color={'lightgrey'} />
                    </Button>
                  </Right>
                </CardItem>
              </Card>
             </TouchableOpacity>

             <TouchableOpacity>
             <Card style={styles.Card}>
                <CardItem style={{ marginLeft: 0, paddingLeft: 10 }}>
                  <Image resizeMode={'contain'} source={require('../../assets/images/images/tracking2.png')}
                    style={{ width: width / 6.65, height: width / 6.65, borderRadius: 0 }}
                  />
                  <View style={{ alignItems: 'flex-start', justifyContent: 'center', flex: 1.9,paddingLeft:15 }}>
                   
                    <Text style={{ fontSize: 16, fontWeight: '700' }}>Family Farm Sugar</Text>
                    <Text style={{ fontFamily: 'AvenirNextLTPro-Regular', fontSize: 12, color: '#666' }}>1 Kg</Text>

                    <Text style={styles.price}>₹46</Text>
                    <Text style={{ fontSize: 12,color:'orange' }}>Your Order is on the way</Text>
                    <Text style={{ fontSize: 12,color:'#666' }}>Expected Delivary : 20 Mar 2020</Text>
                  </View>
                  <Right>
                    <Button transparent small>
                      <FontAwesome5 name="chevron-right" size={15} color={'lightgrey'} />
                    </Button>
                  </Right>
                </CardItem>
              </Card>
             </TouchableOpacity>
             
             
             
             
            
            </Content>
          </ScrollView>
          {/* <Footer>
            <FooterTab success style={{ backgroundColor: '#8bc34a' }}>
              <View style={{ flex: 0.5, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 14, fontWeight: '700', color: '#fdfdfd' }}>Rs 989</Text>
                <Text style={{ fontSize: 10, fontWeight: '700', color: 'yellow' }}>Total Save 209</Text>
              </View>
              <Button style={{ backgroundColor: 'green' }} onPress={() => this.props.navigation.navigate('Delivery')}>
                <Text style={{ color: "#fff", fontWeight: '700', fontSize: 15 }}>Checkout</Text>
              </Button>
            </FooterTab>
          </Footer> */}
        </Container>









      </>
    )
  }
}

const styles = StyleSheet.create({
  card: {
    width: width / 1.01,


  },
  Card: {
    marginBottom: 0
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

export default Order;