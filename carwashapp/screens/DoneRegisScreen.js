import React from 'react';
import {View, Image, Text, Dimensions, StyleSheet, TouchableOpacity,} from 'react-native';

const { width: WIDTH } = Dimensions.get('window')

export default class DoneRegisScreen extends React.Component{
    render() {
        return (
            <View style={styles.default}>
                <Image style={{width : 150 , height: 150, marginBottom: 20,}} source={require('../images/Vector.png')}/>
                <Text style={styles.tebal}>Selamat!</Text>
                <Text style={styles.tulisan1}>Anda Telah Terdaftar di Aplikasi kami</Text>

                <TouchableOpacity style={styles.btn} onPress={() => {this.props.navigation.navigate('Home')}}>
                    <Text style={styles.text}>Home</Text>
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
      fontSize: 40,
      marginTop: 20,
    },
    tulisan1: {
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: 18,
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