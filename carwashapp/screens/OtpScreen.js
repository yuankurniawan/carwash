import React from 'react';
import {View, Image, Text, Dimensions, StyleSheet, TouchableOpacity, ImageBackground, TextInput} from 'react-native';

const { width: WIDTH } = Dimensions.get('window')
const { height: HEIGHT } = Dimensions.get('window')

export default class OtpScreen extends React.Component{
    render() {
        return(
            <View style={styles.container}>
                <ImageBackground source={require('../images/LoginScreen.png')} style={[styles.image, {width: WIDTH, height: HEIGHT}]}>
                    <Text style={styles.text}>Verifikasi OTP</Text>
                    <Text style={styles.tulisan}>Masukkan Kode OTP</Text>

                    <TextInput
                    style={styles.input}
                    placeholder= "****"
                    underlineColorAndroid='transparent'
                    />

                    <Text style={styles.tulisan1}>Belum menerima kode OTP? </Text>
                    <Text style={styles.tulisan2}onPress={() => {this.props.navigation.navigate('')}}>Kirim Ulang</Text>

                    <TouchableOpacity style={styles.btn} onPress={() => {this.props.navigation.navigate('DataDiri')}}>
                        <Text style={styles.text1}>Verifikasi</Text>
                    </TouchableOpacity>

                

                </ImageBackground>
            </View>
        )
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',
    },
    image: {
        flex: 1,
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
    tulisan: {
        fontWeight: "bold",
        textAlign: "left",
        fontSize: 20,
        top: 220,
        right: WIDTH-340,
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