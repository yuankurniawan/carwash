import React from 'react';
import {View, Image, Text, Dimensions, StyleSheet, TouchableOpacity,} from 'react-native';

const { width: WIDTH } = Dimensions.get('window')

export default class OnBoarding2 extends React.Component{
    render() {
        return (
            <View style={styles.default}>
                <Image style={{width : 130, height: 130, marginBottom: 20,}} source={require('../images/phone.png')}/>
                <Text style={styles.tebal}>Easy Order</Text>
                <Text style={styles.tulisan1}>Hanya dengan satu kali sentuhan, mitra kami</Text>
                <Text style={styles.tulisan2}>akan langsung menuju tempat anda untuk</Text>
                <Text style={styles.tulisan2}>membersihkan mobil anda dimanapun berada</Text>

                <TouchableOpacity style={styles.btn} onPress={() => {this.props.navigation.navigate('Boarding3')}}>
                    <Text style={styles.text}>NEXT</Text>
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