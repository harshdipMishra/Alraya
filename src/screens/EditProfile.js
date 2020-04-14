import React, { Component } from 'react';
import { View, Text, ScrollView, StatusBar, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native'
import { Button, Thumbnail, Container, Item, Input, Label,Footer,FooterTab, Picker, Textarea, Right, Title, Form, Header, Content, Card, CardItem, Body, Left, Icon,ListItem,CheckBox } from 'native-base';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Actions } from 'react-native-router-flux'


export default class EditProfile extends Component {
    render() {
        return (
            <>
                <StatusBar backgroundColor="green" barStyle="light-content" />
                <ScrollView style={{ flex: 1 }}>
                    <View style={{ backgroundColor: '#fff', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10 }}>
                        <View style={{ flex: 0.4 }}>
                            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                                <FontAwesome5 name="arrow-left" size={16}></FontAwesome5>

                            </TouchableOpacity>
                        </View>

                        <View style={{ flex: 5, alignItems: 'flex-start', padding: 10, }}>
                            <Text style={{ fontSize: 18, fontWeight: "bold", fontFamily: 'AvenirNextLTPro-Bold', color: "green" }}>Edit Profile</Text>
                        </View>
                        {/* <View style={{ justifyContent: "flex-end", flexDirection: 'row' }}>
                            <Text style={{ fontSize: 10, marginRight: 20, fontFamily: 'AvenirNextLTPro-Bold', color: "#000" }}>
                                <FontAwesome5 name="search" size={20} />
                            </Text>

                            <Text style={{ fontSize: 10, fontFamily: 'AvenirNextLTPro-Bold', color: "#000" }}>
                                <FontAwesome5 name="shopping-cart" size={20} />
                            </Text>
                        </View> */}
                    </View>
                    <Content>
                        <Form>
                           
                           

                         
                            <Item floatingLabel last>
                                <Label style={styles.Label}>First Name</Label>
                                <Input />
                            </Item>
                            <Item floatingLabel last>
                                <Label style={styles.Label}>Last Name</Label>
                                <Input />
                            </Item>
                            <Item floatingLabel last>
                                <Label style={styles.Label}>Email</Label>
                                <Input />
                            </Item>
                            <Item floatingLabel last>
                                <Label style={styles.Label}>Mobile Number</Label>
                                <Input />
                            </Item>
                            <Item floatingLabel last>
                                <Label style={styles.Label}>Address</Label>
                                <Input />
                            </Item>

                           
                        </Form>

                    </Content>
                   
                </ScrollView>
                <Footer>
                        <FooterTab success style={{ backgroundColor: '#8bc34a' }}>
                            {/* <View style={{flex:0.5,flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                                <Text style={{fontSize:14,fontWeight:'700',color:'#fdfdfd'}}>Rs 989</Text>
                                <Text style={{fontSize:10,fontWeight:'700',color:'yellow'}}>Total Save 209</Text>
                            </View> */}
                            <Button style={{ backgroundColor: 'green' }}>
                                <Text style={{ color: "#fff", fontWeight: '700', fontSize: 14,alignSelf:'stretch',textAlign:'center' }}>Save Profile</Text>
                            </Button>
                        </FooterTab>
                    </Footer>
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
    Label: {
        fontSize: 12
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
