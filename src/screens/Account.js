import React, { Component } from 'react';
import { View, Text, ScrollView, StatusBar, StyleSheet, SafeAreaView, TouchableOpacity, TouchableHighlight } from 'react-native'
import { Button, Thumbnail, Container, Item, Input, Label, Picker, Textarea, Right, Title, Form, Header, Content, Card, CardItem, Body, Left, Icon, ListItem, List } from 'native-base';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Actions } from 'react-native-router-flux'


export default class Account extends Component {
    render() {
        return (
            <>
                <StatusBar backgroundColor="green" barStyle="light-content" />
                <View style={{ backgroundColor: '#f3f6f9', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10, }}>
                    <View style={{ alignItems: 'flex-start', padding: 10, }}>
                        <Text style={{ fontSize: 18, fontWeight: "bold", fontFamily: 'AvenirNextLTPro-Bold', color: "green" }}>Your Account</Text>
                    </View>
                    {/* <View style={{ justifyContent: "flex-end", flexDirection: 'row' }}>
                            <Text style={{ fontSize: 10, marginRight: 20, fontFamily: 'AvenirNextLTPro-Bold', color: "#000" }}>
                                <FontAwesome5 name="search" size={18} />
                            </Text>

                            <Text style={{ fontSize: 10, fontFamily: 'AvenirNextLTPro-Bold', color: "#000" }}>
                                <FontAwesome5 name="shopping-cart" size={18} />
                            </Text>
                        </View> */}
                </View>
                <ScrollView>
                   <TouchableOpacity>
                   <View style={styles.container}>
                      <Text style={styles.bold}>Settings</Text>
                    </View>
                   </TouchableOpacity>
                   <TouchableOpacity>
                   <View style={styles.container}>
                      <Text style={styles.bold}>Settings</Text>
                    </View>
                   </TouchableOpacity>
                   <TouchableOpacity>
                   <View style={styles.container}>
                      <Text style={styles.bold}>Settings</Text>
                    </View>
                   </TouchableOpacity>
                   <TouchableOpacity>
                   <View style={styles.container}>
                      <Text style={styles.bold}>Settings</Text>
                    </View>
                   </TouchableOpacity>
                   <TouchableOpacity onPress={() => this.props.navigation.navigate('Settings')}>
                   <View style={styles.container}>
                      <Text style={styles.bold}>Settings</Text>
                    </View>
                   </TouchableOpacity>
                   

                 
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
    // container: {
    //     flex: 1,
    //     paddingHorizontal: SIZES.PADDING * 2,
    //     paddingVertical: SIZES.PADDING * 2,
    // },
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

    },
    container: {
        flex: 1,
        justifyContent: "space-between",
        backgroundColor: "#fff",
        paddingHorizontal: 15,
        paddingVertical:15,
        margin: 2,
      },
      top: {
        flex: 1,
        backgroundColor: "grey",
        borderWidth: 5,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
      },
      middle: {
        flex: 2,
        backgroundColor: "beige",
        borderWidth: 5,
      },
      bottom: {
        flex: 3,
        backgroundColor: "pink",
        borderWidth: 5,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
      },
      bold:{
          fontWeight:'700'
      },

})
