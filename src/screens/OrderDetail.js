import React, { Component } from 'react';
import { View, ScrollView, Image, Dimensions, StyleSheet, StatusBar } from 'react-native'
import { Container, Header, Title, Content, Footer, FooterTab, Button, Tabs, Tab, TabHeading, Left, Right, Body, Icon, Text, Card, CardItem } from 'native-base';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Summary from '../screens/Summary';
import OrderedItem from '../screens/OrderedItem';

const { width, height } = Dimensions.get('window')
export default class OrderDetail extends Component {
    render() {
        return (
            <>

                <Container>


                    <Header hasTabs style={{ backgroundColor: '#fff' }}>
                        <StatusBar backgroundColor="green" barStyle="light-content" />
                        <Left>
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                                <FontAwesome5 name="arrow-left" size={18} color={'#000'} />
                            </TouchableOpacity>
                        </Left>
                        <Body>
                        <Text style={{ fontSize: 18, fontWeight: "bold", fontFamily: 'AvenirNextLTPro-Bold', color: "green", marginLeft: 35 }}>Order Details</Text>

                        </Body>

                        {/* <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                           <View>
                           <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                                <FontAwesome5 name="arrow-left" size={18} color={'#000'} />
                            </TouchableOpacity>
                           </View>
                           <View>
                           <Text style={{ fontSize: 18, fontWeight: "bold", fontFamily: 'AvenirNextLTPro-Bold', color: "green", marginLeft: 15 }}>Order Details</Text>

                           </View>
                           <View>
                               <Text>dskhkfs</Text>
                           </View>
                        </View> */}
                    </Header>

                    <Tabs >
                        <Tab heading={<TabHeading style={{ backgroundColor: 'green' }}><Text style={{fontWeight:'700',fontSize:14}}>Summary</Text></TabHeading>}>
                            <Summary />
                        </Tab>
                        <Tab heading={<TabHeading style={{ backgroundColor: 'green' }}><Text style={{fontWeight:'700',fontSize:14}}>Items</Text></TabHeading>}>
                            <OrderedItem />
                        </Tab>

                    </Tabs>
                </Container>
            </>
        );
    }
}