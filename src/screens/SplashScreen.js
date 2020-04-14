import React, { Component } from 'react'
import { View, Text, SafeAreaView, TouchableOpacity,TouchableHighlight, KeyboardAvoidingView, Image, ScrollView, StyleSheet, ImageBackground } from 'react-native';
import { Button, Container, Item, Input, Label, Picker, Textarea, Right, Title, Form } from 'native-base';

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
    backgroundColor: '#fff'
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

export default class SplashScreen extends Component {



  render() {
    return (
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
           <Image resizeMode='contain' source={require('../../assets/images/logo.png')}
              style={{ width: 250, height: 150 }}
            />
      </View>
    )
  }
}