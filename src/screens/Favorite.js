import React, { Component } from 'react';
import { View, ScrollView, Image, Dimensions, StyleSheet, StatusBar } from 'react-native'
import { Container, Header, Title, Content, Footer, FooterTab, Button, Tabs, Tab, TabHeading, Left, Right, Body, Icon, Text, Card, CardItem } from 'native-base';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Product from '../screens/Product';
import Recipe from '../screens/Recipe';

const { width, height } = Dimensions.get('window')
export default class Fevorite extends Component {
    render() {
        return (
            <>

                <Container>


                    <Header hasTabs style={{ backgroundColor: '#fff' }}>
                        <StatusBar backgroundColor="green" barStyle="light-content" />
                        {/* <Left>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: 5, }}>
                                <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                                    <FontAwesome5 name="arrow-left" size={20} color={'#000'} />
                                </TouchableOpacity>
                            </View>
                        </Left> */}
                        <Body>
                        <Text style={{ fontSize: 18, fontWeight: "bold", fontFamily: 'AvenirNextLTPro-Bold', color: "green", marginLeft: 15 }}>Fevorites</Text>
                            
                        </Body>
                        <Right >
              <Text style={{ fontSize: 10, marginRight: 20, fontFamily: 'AvenirNextLTPro-Bold', color: "#000" }}>
                <FontAwesome5 name="search" size={16} />
              </Text>

              <Text style={{ fontSize: 10, fontFamily: 'AvenirNextLTPro-Bold', color: "#000" }}>
                <FontAwesome5 name="shopping-cart" size={16} />
              </Text>
            </Right>
                    </Header>

                    <Tabs >
                        <Tab heading={<TabHeading style={{ backgroundColor: 'green' }}><Text style={{fontWeight:'700'}}>Product</Text></TabHeading>}>
                            <Product />
                        </Tab>
                        <Tab heading={<TabHeading style={{ backgroundColor: 'green' }}><Text style={{fontWeight:'700',}}>Recipe</Text></TabHeading>}>
                            <Recipe />
                        </Tab>

                    </Tabs>
                </Container>
            </>
        );
    }
}