import React, { Component } from 'react';
import { View, Text, ScrollView, StatusBar, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native'
import { Button, Thumbnail, Container, Item, Input, Label, Picker, Textarea, Right, Title, Form, Header, Content, Card, CardItem, Body, Left, Icon } from 'native-base';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Actions } from 'react-native-router-flux'


export default class Settings extends Component {
    render() {
        return (
            <>
                <StatusBar backgroundColor="green" barStyle="light-content" />
                <ScrollView style={{ flex: 1 }}>
                    <View style={{ backgroundColor: '#f3f6f9', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10, borderBottomWidth: 2, borderBottomColor: '#EAECEF' }}>
                        <View style={{ alignItems: 'flex-start', padding: 10, borderBottomWidth: 2, borderBottomColor: '#EAECEF' }}>
                            <Text style={{ fontSize: 20, fontWeight: "bold", fontFamily: 'AvenirNextLTPro-Bold', color: "green" }}>Settings</Text>
                        </View>
                        <View style={{ justifyContent: "flex-end", flexDirection: 'row' }}>
                            <Text style={{ fontSize: 10, marginRight: 20, fontFamily: 'AvenirNextLTPro-Bold', color: "#000" }}>
                                <FontAwesome5 name="search" size={20} />
                            </Text>

                            <Text style={{ fontSize: 10, fontFamily: 'AvenirNextLTPro-Bold', color: "#000" }}>
                                <FontAwesome5 name="shopping-cart" size={20} />
                            </Text>
                        </View>
                    </View>
                    <Container>

                        <Content>


                            <View>

                                <View>
                                    <Card style={{ borderRadius: 10, }} onPress={() => Actions.jump('login')}>

                                        <CardItem style={{ borderRadius: 0, }}>
                                            <Left>
                                                <View style={{ flexDirection: 'column' }}>
                                                    <TouchableOpacity
                                                        onPress={() => this.props.navigation.navigate('Login', { screen: "Login" })}>
                                                        <Text style={styles.androidButtonText}>Go to FeedItem</Text>
                                                    </TouchableOpacity>

                                                </View>
                                            </Left>

                                            {/* <Right>
                                        <Icon name="right" style={{color:'#000'}}/>
                                        </Right> */}
                                        </CardItem>



                                    </Card>
                                    <Card style={{ borderRadius: 10, }}>

                                        <CardItem style={{ borderRadius: 0, }}>
                                            <Left>
                                                <View style={{ flexDirection: 'column' }}>
                                                    <Text>Personal Details</Text>

                                                </View>
                                            </Left>

                                            {/* <Right>
                                        <Icon name="right" style={{color:'#000'}}/>
                                        </Right> */}
                                        </CardItem>



                                    </Card>
                                    <Card style={{ borderRadius: 10, }}>

                                        <CardItem style={{ borderRadius: 0, }}>
                                            <Left>
                                                <View style={{ flexDirection: 'column' }}>
                                                    <Text>Change Password</Text>

                                                </View>
                                            </Left>

                                            {/* <Right>
                                        <Icon name="right" style={{color:'#000'}}/>
                                        </Right> */}
                                        </CardItem>



                                    </Card>
                                    <Card style={{ borderRadius: 10, }}>

                                        <CardItem style={{ borderRadius: 0, }}>
                                            <Left>
                                                <View style={{ flexDirection: 'column' }}>
                                                    <Text>Address Book</Text>

                                                </View>
                                            </Left>

                                            {/* <Right>
                                        <Icon name="right" style={{color:'#000'}}/>
                                        </Right> */}
                                        </CardItem>



                                    </Card>
                                    <Card style={{ borderRadius: 10, }}>

                                        <CardItem style={{ borderRadius: 0, }}>
                                            <Left>
                                                <View style={{ flexDirection: 'column' }}>
                                                    <Text>Phone Book</Text>

                                                </View>
                                            </Left>

                                            {/* <Right>
                                        <Icon name="right" style={{color:'#000'}}/>
                                        </Right> */}
                                        </CardItem>



                                    </Card>
                                    <Card style={{ borderRadius: 10, }}>

                                        <CardItem style={{ borderRadius: 0, }}>
                                            <Left>
                                                <View style={{ flexDirection: 'column' }}>
                                                    <Text>Payment Card</Text>

                                                </View>
                                            </Left>

                                            {/* <Right>
                                        <Icon name="right" style={{color:'#000'}}/>
                                        </Right> */}
                                        </CardItem>



                                    </Card>
                                    <Card style={{ borderRadius: 10, }}>

                                        <CardItem style={{ borderRadius: 0, }}>
                                            <Left>
                                                <View style={{ flexDirection: 'column' }}>
                                                    <Text>Settings</Text>

                                                </View>
                                            </Left>

                                            {/* <Right>
                                        <Icon name="right" style={{color:'#000'}}/>
                                        </Right> */}
                                        </CardItem>



                                    </Card>




                                </View>
                            </View>


                        </Content>
                    </Container>
                </ScrollView>
            </>
        );
    }
}
const COLORS = {
    WHITE: '#FFF',
    BLACK: '#000',
    BLUE: '#69B1D6',
    ORANGE: '#FE8E4E',
    RED: '#FD696E',
    GREY: '#AFAFAF',
    DARK_GREY: '#90919E',
    GOOGLE: '#DC4E41',
    FACEBOOK: '#3A5896',
};

const SIZES = {
    BASE: 6,
    FONT: 12,
    TITLE: 24,
    SUBTITLE: 15,
    LABEL: 12,
    PADDING: 12,
};
const styles = StyleSheet.create({
    wrapper: {},

    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    },
    headline: {
        textAlign: 'center', // <-- the magic

        marginTop: 0,
        // width: 400,
        justifyContent: 'center',
        alignItems: 'center',



    },
    button: {
        alignItems: 'center',
        borderRadius: SIZES.BASE,
        justifyContent: 'center',
        padding: SIZES.PADDING / 0.83,
    },
    container: {
        flex: 1,
        paddingHorizontal: SIZES.PADDING * 2,
        paddingVertical: SIZES.PADDING * 2,
    },
    divider: {
        alignItems: 'center',
        backgroundColor: COLORS.GREY,
        height: StyleSheet.hairlineWidth,
        justifyContent: 'center',
        marginVertical: SIZES.PADDING * 2,
        width: '50%',
    },
    dividerLabel: {
        backgroundColor: COLORS.WHITE,
        color: COLORS.GREY,
        fontSize: SIZES.SUBTITLE,
        paddingHorizontal: SIZES.BASE,
        position: 'absolute',
    },

    input: {
        borderColor: COLORS.GREY,
        borderRadius: SIZES.BASE,
        borderWidth: StyleSheet.hairlineWidth,
        fontSize: SIZES.FONT,
        padding: SIZES.PADDING * 1.5,
    },
    inputContainer: {
        marginBottom: SIZES.PADDING,
    },
    label: {
        color: COLORS.DARK_GREY,
        fontSize: SIZES.FONT,
        marginBottom: SIZES.BASE,
    },
    signin: {
        paddingVertical: SIZES.PADDING * 1.33,
    },

    subtitle: {
        color: COLORS.GREY,
        fontSize: SIZES.SUBTITLE,
    },
    title: {
        fontSize: SIZES.TITLE,
        fontWeight: '600',
        letterSpacing: 1,
        marginBottom: SIZES.BASE,
    },
    formControl: {
        paddingLeft: 20,
        fontSize: 14

    }

})
