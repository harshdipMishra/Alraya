import React, { Component } from 'react'
import { Text, View, Image, TextInput, StyleSheet, Dimensions, ScrollView, SafeAreaView, StatusBar } from 'react-native'

const { width, height } = Dimensions.get('window')

export default class Home extends Component {
    render() {
        return (
            <ScrollView
                showsVerticalScrollIndicator={false}
                scrollEventThrottle={16}
            >
                <StatusBar backgroundColor="#F7F8FA" barStyle="light-content" />
                <View style={{ flex: 1 }}>
                    <View style={{ justifyContent: 'center', paddingLeft: 40, paddingRight: 40, paddingBottom: 10, marginTop: 50 }}>
                        <View style={styles.SectionStyle}>
                            <Image
                                source={require('../../assets/images/icon/searc.png')} //Change your icon image here
                                style={styles.ImageStyle}
                            />
                            <TextInput
                                style={{ flex: 1 }}
                                placeholder="Cerca qui"
                                underlineColorAndroid="transparent"
                                placeholderTextColor="#BEC2CE"
                            />
                        </View>

                    </View>
                    <View style={{ flex: 4 }}>
                        <View style={{ paddingLeft: 20, marginTop: 30 }}>
                            <Text style={{ fontSize: 30, fontFamily: 'AvenirNextLTPro-Regular', marginBottom: 20 }}>Prossimi eventi</Text>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                                <View style={{
                                    paddingRight: 10,

                                }}>
                                    <Image source={require('../../assets/images/images/e114aaa55b80995cc811dccb24db1a4e72926786.png')}
                                        style={{ width: width / 1.15, height: width / 0.85, borderRadius: 8 }}
                                    />

                                    <View style={{ position: 'absolute', left: 15, bottom: 40, justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                                        <Text style={{ fontSize: 38, fontFamily: 'AvenirNextLTPro-Bold', color: '#fff' }}>Grand Tour Of Europiam </Text>
                                        <Text style={{ fontSize: 15, fontFamily: 'AvenirNextLTPro-Regular', color: '#EAECEF' }}> $ 250.00  </Text>
                                    </View>
                                </View>
                                <View style={{ paddingRight: 10 }}>
                                    <Image source={require('../../assets/images/images/644e161dcd45d4696db9929b8bc5a4552bbdc0a1.png')}
                                        style={{ width: width / 1.2, height: width / 0.85, borderRadius: 8 }}
                                    />

                                    <View style={{ position: 'absolute', left: 15, bottom: 40, justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                                        <Text style={{ fontSize: 35, fontFamily: 'AvenirNextLTPro-Regular', color: '#fff' }}>Grand Tour Of Europiam </Text>
                                        <Text style={{ fontSize: 15, fontFamily: 'AvenirNextLTPro-Regular', color: '#EAECEF' }}> $ 250.00  </Text>
                                    </View>
                                </View>
                                <View style={{ paddingRight: 10 }}>
                                    <Image source={require('../../assets/images/images/e114aaa55b80995cc811dccb24db1a4e72926786.png')}
                                        style={{ width: width / 1.2, height: width / 0.85, borderRadius: 8 }}
                                    />

                                    <View style={{ position: 'absolute', left: 15, bottom: 40, justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                                        <Text style={{ fontSize: 35, fontFamily: 'AvenirNextLTPro-Regular', color: '#fff' }}>Grand Tour Of Europiam </Text>
                                        <Text style={{ fontSize: 15, fontFamily: 'AvenirNextLTPro-Regular', color: '#EAECEF' }}> $ 250.00  </Text>
                                    </View>
                                </View>
                            </ScrollView>
                        </View>
                    </View>
                </View>
            </ScrollView>
        )
    }
}


const styles = StyleSheet.create({
    SectionStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 0.5,
        borderColor: '#EAECEF',
        height: 50,
        borderRadius: 8,
        marginTop: 25
    },
    shadow: {  
        borderColor:'black', // if you need 
        borderWidth:1,
        overflow: 'hidden',
        shadowColor: 'black',
        shadowRadius: 10,
        shadowOpacity: 1,
    },
   
    ImageStyle: {
        padding: 8,
        margin: 8,
        height: 10,
        width: 10,
        resizeMode: 'stretch',
        alignItems: 'center',
    }
})