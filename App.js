import React, { Component } from 'react';
import { View, Text, Image, TextInput, KeyboardAvoidingView, StyleSheet, TouchableWithoutFeedback, Keyboard, Button, SafeAreaView } from 'react-native';
import { fontSize, images, ratioX } from './src/Assets/gloableconstants';
import Responcive from './src/Views/Responcive';
import database from '@react-native-firebase/database'
import db from './src/config';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }



  async componentDidMount() {
    let a = db.database()

    a.ref().push({
      name: "ajith",
      number: 27
    });
  }
  render() {
    return (

      // <Responcive/>

      <SafeAreaView
        style={{ flex: 1 }}
      >

        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : 'position'}
          style={styles.container}
        >
          <Image source={images.sampleimage} style={{
            height: 100 * ratioX,
            width: 100 * ratioX,
            alignSelf: 'center'
          }} />
          <View style={{ height: 20 * ratioX, width: 20 * ratioX, borderRadius: 10 * ratioX, borderWidth: 1 }} />
          <Text style={{ fontSize: fontSize.small }}> App </Text>
          <TextInput placeholder="Username" style={styles.textInput} />
          <TextInput placeholder="Username" style={styles.textInput} />
          <TextInput placeholder="Username" style={styles.textInput} />
          <TextInput placeholder="Username" style={styles.textInput} />
          <TextInput placeholder="Username" style={styles.textInput} />
          <TextInput placeholder="Username" style={styles.textInput} />
          <TextInput placeholder="Username" style={styles.textInput} />



        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({

  container: {
    // flex: 1
  },


  textInput: {
    borderColor: "#000000",
    borderBottomWidth: 1,
    height: 45,
    fontSize: fontSize.normal

  },

})