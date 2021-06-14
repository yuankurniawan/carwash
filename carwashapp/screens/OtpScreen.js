import React from 'react';
import {SafeAreaView, View, Image, Text, Dimensions, StyleSheet, TouchableOpacity, ImageBackground, TextInput} from 'react-native';

const { width: WIDTH } = Dimensions.get('window')
const { height: HEIGHT } = Dimensions.get('window')

export default class OtpScreen extends React.Component{
    render() {
        return(
            <SafeAreaView style={[styles.container]}>
                <View style={styles.container1}>
                    <ImageBackground source={require('../images/LoginScreen.png')} style={styles.image}>
                        <Text style={styles.text}>Daftar</Text>
                        <Text style={styles.tulisan}>New Password</Text>

                        <TextInput
                        style={styles.input}
                        placeholder= "******"
                        underlineColorAndroid='transparent'
                        />

                        <Text style={styles.tulisan3}>Confirm New Password</Text>

                        <TextInput
                        style={styles.input1}
                        placeholder= "******"
                        underlineColorAndroid='transparent'
                        />
                        

                        <TouchableOpacity style={styles.btn} onPress={() => {this.props.navigation.navigate('DataDiri')}}>
                            <Text style={styles.text1}>Verifikasi</Text>
                        </TouchableOpacity>

                    

                    </ImageBackground>
                </View>
            </SafeAreaView>
        )
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    container1: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',
    },
    image: {
        flex: 1,
        width : 410, height: 650,
        alignItems: 'center',
    },
    text: {
        color: "white",
        fontSize: 40,
        fontWeight: "bold",
        textAlign: "center",
        top: 120,
        
    },
    input: {
        width: WIDTH-80,
        height: 50,
        borderRadius : 5,
        padding: 16,
        top: 240,
        marginHorizontal: 10,
        backgroundColor: '#C6C2C6',
        opacity: 0.5,
    },
    input1: {
        width: WIDTH-80,
        height: 50,
        borderRadius : 5,
        padding: 16,
        top: 250,
        marginHorizontal: 10,
        backgroundColor: '#C6C2C6',
        opacity: 0.5,
    },
    tulisan3: {
        fontWeight: "bold",
        textAlign: "left",
        fontSize: 20,
        top: HEIGHT-440,
        right: WIDTH-350,
    },
    tulisan: {
        fontWeight: "bold",
        textAlign: "left",
        fontSize: 20,
        top: HEIGHT-450,
        right: WIDTH-315,
    },
    btn:{
        width: WIDTH-80,
        height: 50,
        borderRadius : 5,
        justifyContent: 'center',
        backgroundColor: '#00A7E1',
        alignItems: 'center',
        top: 350,
    },
    text1:{
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 18,
    },
    tulisan1: {
        fontFamily: 'Roboto',
        fontSize: 14,
        marginTop: 10,
        top: HEIGHT-438,
        right: WIDTH-340,
    },
    tulisan2: {
        fontFamily: 'Roboto',
        fontSize: 14,
        top: HEIGHT-457,
        right: WIDTH-470,
        fontWeight: "bold",
        color: '#00A7E1',
    },
})