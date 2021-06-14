import React from 'react';
import {SafeAreaView, View, Image, Text, Dimensions, StyleSheet, TouchableOpacity, ImageBackground, TextInput} from 'react-native';

const { width: WIDTH } = Dimensions.get('window')

export default class RegisScreen extends React.Component{
    render() {
        return(
            <SafeAreaView style={[styles.container]}>
                <View style={styles.container1}>
                    <ImageBackground source={require('../images/LoginScreen.png')} style={styles.image}>
                        <Text style={styles.text}>Daftar</Text>
                        <Text style={styles.tulisan}>Email</Text>

                        <TextInput
                        style={styles.input}
                        placeholder= "ex: carwash@gmail.com"
                        underlineColorAndroid='transparent'
                        />

                    <TouchableOpacity style={styles.btn} onPress={() => {this.props.navigation.navigate('Otp')}}>
                        <Text style={styles.text1}>Selanjutnya</Text>
                    </TouchableOpacity>
                    <Text style={styles.tulisan1}>Sudah memiliki akun? </Text>
                    <Text style={styles.tulisan2}onPress={() => {this.props.navigation.navigate('Login')}}>Login</Text>
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
        borderColor : '#ccc',
        marginHorizontal: 10,
        backgroundColor: '#C6C2C6',
        opacity: 0.5,
    },
    tulisan: {
        fontWeight: "bold",
        textAlign: "left",
        fontSize: 20,
        top: 220,
        right: 140,
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
        top: 360,
    },
    tulisan2: {
        fontFamily: 'Roboto',
        fontSize: 14,
        top: 360,
        fontWeight: "bold",
        color: '#00A7E1',
    },
})