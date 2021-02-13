import React, { Component } from 'react';
import { View, Text, Image, TextInput, KeyboardAvoidingView, StyleSheet, TouchableWithoutFeedback, Keyboard, Button, SafeAreaView } from 'react-native';
import { fontSize, images, ratioX } from '../Assets/gloableconstants';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
}
    from 'react-native-responsive-screen';

export default class Responcive extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <SafeAreaView
                // style={{ flex: 1 }}
            >

                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : 'position'}
                    style={styles.container}
                >
                    <Image source={images.sampleimage} style={{
                        height: hp(10),
                        width: wp(20),
                        alignSelf: 'center'
                    }} />
                    <View style={{ height: 20 , width: 20 , borderRadius: 10 , borderWidth: 1 }} />
                    <Text style={{ }}> App </Text>
                    {/* This is a React Native snapshot test. */}
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
        fontSize:hp(2)

    },

})