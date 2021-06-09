import React from 'react';
import {View, Image, Text, Dimensions, StyleSheet, TouchableOpacity,} from 'react-native';

const { width: WIDTH } = Dimensions.get('window')

export default class OnBoarding3 extends React.Component{
    render() {
        return (
            <View style={styles.default}>
                <Image style={{width : 130, height: 130, marginBottom: 20,}} source={require('../images/water.png')}/>
                <Text style={styles.tebal}>Wash Now!</Text>
                <Text style={styles.tulisan1}>Tunggu apa lagi? Jika mobil anda kotor</Text>
                <Text style={styles.tulisan2}>langsung saja pesan layanan kami dengan login</Text>
                <Text style={styles.tulisan2}>di aplikasi ini terlebih dahulu</Text>

                <TouchableOpacity style={styles.btn} onPress={() => {this.props.navigation.navigate('Login')}}>
                    <Text style={styles.text}>Login</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    default: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
    },
    tebal: {
      fontWeight: 'bold',
      fontFamily: 'Roboto',
      fontSize: 24,
      marginTop: 20,
    },
    tulisan1: {
        fontFamily: 'Roboto',
        fontSize: 14,
        marginTop: 10,
    },
    tulisan2: {
        fontFamily: 'Roboto',
        fontSize: 14,
    },
    btn:{
        width: WIDTH-60,
        height: 50,
        borderRadius : 5,
        justifyContent: 'center',
        backgroundColor: '#00A7E1',
        alignItems: 'center',
        top: 100,
    },
    text:{
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 18,
    }
})