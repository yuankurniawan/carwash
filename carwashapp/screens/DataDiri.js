import React from 'react';
import {SafeAreaView, View, Image, Text, Dimensions, StyleSheet, TouchableOpacity, ImageBackground, TextInput} from 'react-native';

const { width: WIDTH } = Dimensions.get('window')
const { height: HEIGHT } = Dimensions.get('window')

export default class DataDiri extends React.Component{
    render() {
        return(
            <SafeAreaView style={[styles.container]}>
                <View style={styles.container1}>
                    <Text style={styles.text}>Data Diri</Text>
                    <Text style={styles.tulisan}>Nama Depan</Text>

                    <TextInput
                    style={styles.input1}
                    placeholder= "Nama Depan"
                    underlineColorAndroid='transparent'
                    />

                    <Text style={styles.tulisan1}>Nama Belakang</Text>

                    <TextInput
                    style={styles.input2}
                    placeholder= "Nama Belakang"
                    underlineColorAndroid='transparent'
                    />

                    <TouchableOpacity style={styles.btn} onPress={() => {this.props.navigation.navigate('DoneRegis')}}>
                        <Text style={styles.text1}>Selesai</Text>
                    </TouchableOpacity>
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
        alignItems: 'center',
    },
    text: {
        color: "black",
        fontSize: 35,
        fontWeight: "bold",
        textAlign: "left",
        top: HEIGHT-600,
        right: WIDTH-315
        
    },
    input1: {
        width: WIDTH-80,
        height: 50,
        borderRadius : 5,
        padding: 16,
        top: HEIGHT-550,
        marginHorizontal: 10,
        backgroundColor: '#C6C2C6',
        opacity: 0.5,
    },
    input2: {
        width: WIDTH-80,
        height: 50,
        borderRadius : 5,
        padding: 16,
        top: HEIGHT-530,
        marginHorizontal: 10,
        backgroundColor: '#C6C2C6',
        opacity: 0.5,
    },
    tulisan: {
        fontWeight: "bold",
        textAlign: "left",
        fontSize: 20,
        top: HEIGHT-560,
        right: WIDTH-310,
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
        fontWeight: "bold",
        textAlign: "left",
        fontSize: 20,
        top: HEIGHT-540,
        right: WIDTH-320,
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