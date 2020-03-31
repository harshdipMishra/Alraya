import React, { Component } from 'react'
import { Text, View, Image, TextInput, StyleSheet, Dimensions, ScrollView, SafeAreaView, StatusBar } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const { width, height } = Dimensions.get('window')

export default class Home extends Component {
    render() {
        return (
            <ScrollView
                showsVerticalScrollIndicator={false}
                scrollEventThrottle={16}
            >
                <StatusBar backgroundColor="red" barStyle="light-content" />
                <View style={{ flex: 1 }}>

                    <View style={{ flex: 4, backgroundColor: '#fff' }}>
                        <View style={{ padding: 0 }}>

                            <View style={{ marginTop: 0 }}>
                                <View>
                                   
                                    <Image source={require('../../assets/images/images/b9994ae6eeb8d50dc564ad6d1fdb8ca99301cb7e.png')}
                                        style={{ width: width, height: width / 1.1, borderRadius: 0 }}
                                    />
                                     <View style={{position:'absolute',top:15,left:15}}>
                                         <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                         <FontAwesome5 name="arrow-left" size={20} color={'white'} /> 
                                        
                                         </View>
                                       
                                    </View>

                                </View>

                            </View>

                        </View>
                        <View style={{ backgroundColor: 'white', zIndex: 9, marginTop: -30, borderRadius: 20, paddingHorizontal: 20 }}>


                            <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View>

                                    <View style={{ padding: 0 }}>
                                        <Text style={{ fontSize: 14, fontFamily: 'AvenirNextLTPro-Regular', marginBottom: 10 }}>
                                        <FontAwesome5 name="map-marker-alt" size={12} color={'black'} /> Location</Text>
                                        <Text style={{ fontSize: 28, fontFamily: 'AvenirNextLTPro-Regular', marginBottom: 10 }}>Siem Riep-Phnom Pench</Text>
                                        <Text style={{ fontSize: 17, fontFamily: 'AvenirNextLTPro-Regular', opacity: 0.6 }}>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                    </Text>
                                    </View>
                                </View>
                            </View>


                            <View style={styles.Section}>
                                <Text style={{ fontSize: 20, fontFamily: 'AvenirNextLTPro-Regular', marginBottom: 0, marginTop: 20 }}>Photos</Text>

                                <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap' }}>

                                    <View>
                                        <Image source={require('../../assets/images/images/united-kingdom.png')}
                                            style={{ width: width / 3.35, height: width / 3.35, borderRadius: 8, marginBottom: 5 }}
                                        />
                                    </View>

                                    <View>
                                        <Image source={require('../../assets/images/images/united-kingdom.png')}
                                            style={{ width: width / 3.35, height: width / 3.35, borderRadius: 8, marginBottom: 5 }}
                                        />
                                    </View>

                                    <View>
                                        <Image source={require('../../assets/images/images/france-238.png')}
                                            style={{ width: width / 3.35, height: width / 3.35, borderRadius: 8, marginBottom: 5 }}
                                        />
                                    </View>

                                    <View>
                                        <Image source={require('../../assets/images/images/united-kingdom.png')}
                                            style={{ width: width / 3.35, height: width / 3.35, borderRadius: 8, marginBottom: 5 }}
                                        />
                                    </View>

                                    <View>
                                        <Image source={require('../../assets/images/images/united-kingdom.png')}
                                            style={{ width: width / 3.35, height: width / 3.35, borderRadius: 8, marginBottom: 5 }}
                                        />
                                    </View>
                                    <View>
                                        <Image source={require('../../assets/images/images/united-kingdom.png')}
                                            style={{ width: width / 3.35, height: width / 3.35, borderRadius: 8, marginBottom: 5 }}
                                        />
                                    </View>
                                </View>
                            </View>




                            <View style={styles.Section}>
                                <Text style={{ fontSize: 20, fontFamily: 'AvenirNextLTPro-Regualr', marginBottom: 0, marginTop: 20 }}>Videos</Text>
                                <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                                    <View>
                                        <Image source={require('../../assets/images/images/united-kingdom.png')}
                                            style={{ width: width / 1.099, height: width / 1.6, borderRadius: 8, marginBottom: 5 }}
                                        />
                                    </View>
                                </View>
                            </View>

                            <View style={styles.Section}>
                                <Text style={{ fontSize: 20, fontFamily: 'AvenirNextLTPro-Regualr', marginBottom: 0, marginTop: 20 }}>PDF</Text>
                                <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                                    <View>
                                        <Image source={require('../../assets/images/images/united-kingdom.png')}
                                            style={{ width: width / 3.35, height: width / 3.35, borderRadius: 8, marginBottom: 5 }}
                                        />
                                    </View>

                                    <View>
                                        <Image source={require('../../assets/images/images/united-kingdom.png')}
                                            style={{ width: width / 3.35, height: width / 3.35, borderRadius: 8, marginBottom: 5 }}
                                        />
                                    </View>

                                    <View>
                                        <Image source={require('../../assets/images/images/united-kingdom.png')}
                                            style={{ width: width / 3.35, height: width / 3.35, borderRadius: 8, marginBottom: 5 }}
                                        />
                                    </View>
                                </View>
                            </View>

                            <View style={styles.Section}>
                                <Text style={{ fontSize: 20, fontFamily: 'AvenirNextLTPro-Regular', marginBottom: 10,marginTop:20 }}>MAPPA</Text>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                                    <View>
                                        <Image source={require('../../assets/images/images/united-kingdom.png')}
                                            style={{ width: width / 1.099, height: width / 1.6, borderRadius: 8, marginBottom: 5 }}
                                        />
                                    </View>
                                </View>
                            </View>

                            <View style={styles.Section}>
                                <Text style={{ fontSize: 20, fontFamily: 'AvenirNextLTPro-Regular', marginBottom: 10,marginTop:20 }}>Prossimi eventi</Text>
                                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                                    <View style={{ paddingRight: 20 }}>
                                        <Image source={require('../../assets/images/images/america.png')}
                                            style={{ width: width / 1.4, height: width / 2.35, borderRadius: 8 }}
                                        />
                                        <View style={{ padding: 10 }}>
                                            <Text style={{ fontSize: 15, fontFamily: 'AvenirNextLTPro-Bold' }}>Abu Dhabi</Text>
                                            <Text style={{ fontFamily: 'AvenirNextLTPro-Regular' }}>Dubai</Text>
                                        </View>
                                    </View>
                                    <View style={{ paddingRight: 20 }}>
                                        <Image source={require('../../assets/images/images/kayak.png')}
                                            style={{ width: width / 1.4, height: width / 2.35, borderRadius: 8 }}
                                        />
                                        <View style={{ padding: 10 }}>
                                            <Text style={{ fontSize: 15, fontFamily: 'AvenirNextLTPro-Bold' }}>Abu Dhabi</Text>
                                            <Text style={{ fontFamily: 'AvenirNextLTPro-Regular' }}>Dubai</Text>
                                        </View>
                                    </View>
                                    <View style={{ paddingRight: 20 }}>
                                        <Image source={require('../../assets/images/images/dubai.png')}
                                            style={{ width: width / 1.4, height: width / 2.35, borderRadius: 8 }}
                                        />
                                        <View style={{ padding: 10 }}>
                                            <Text style={{ fontSize: 15, fontFamily: 'AvenirNextLTPro-Bold' }}>Abu Dhabi</Text>
                                            <Text style={{ fontFamily: 'AvenirNextLTPro-Regular' }}>Dubai</Text>
                                        </View>
                                    </View>
                                </ScrollView>
                            </View>

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
    Section: {
        marginVertical: 5
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