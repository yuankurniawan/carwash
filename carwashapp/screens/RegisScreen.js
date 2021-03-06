import React from 'react';
import firestore from '@react-native-firebase/firestore';
import {SafeAreaView, View, Image, Text, Dimensions, StyleSheet, TouchableOpacity, ImageBackground, TextInput, ScrollView} from 'react-native';

import auth from '@react-native-firebase/auth';

const { width: WIDTH } = Dimensions.get('window')

export default class RegisScreen extends React.Component{
    constructor (props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            username: '',
        }
    }

    cobaRegis = async(email, password) => {
        const result = await auth().createUserWithEmailAndPassword(email, password)
        firestore().collection('users').doc(result.user.uid).set({
            name: this.state.username,
            email: result.user.email,
            uid: result.user.uid,
        })
    }
    render() {
        return(
            <SafeAreaView style={[styles.container]}>
                <View style={styles.container1}>
                    <ImageBackground source={require('../images/LoginScreen.png')} style={styles.image}>
                        <Text style={styles.text}>Daftar</Text>

                        <Text style={styles.tulisan}>Nama</Text>
                        <TextInput
                        style={styles.input1}
                        placeholder= "Car Wash"
                        underlineColorAndroid='transparent'
                        value={this.state.username}
                        onChangeText={(text) => {this.setState({username:text})}}
                        />

                        <Text style={styles.tulisan}>Email</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="ex: carwash@mail.com"
                            underlineColorAndroid='transparent'
                            value={this.state.email}
                            onChangeText={(text) => { this.setState({ email: text }) }}
                        />

                        <Text style={styles.tulisan3}>Password</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="******"
                            secureTextEntry={true}
                            value={this.state.password}
                            onChangeText={(text) => { this.setState({ password: text }) }}
                            underlineColorAndroid='transparent'
                        />

                        <TouchableOpacity style={styles.btn} onPress={() => this.cobaRegis(this.state.email, this.state.password)}>
                            <Text style={styles.text1}>Selanjutnya</Text>
                        </TouchableOpacity>
                        <Text style={styles.tulisan1}>Sudah memiliki akun? </Text>
                        <Text style={styles.tulisan2} onPress={() => { this.props.navigation.navigate('Login') }}>Login</Text>
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
        marginTop: -70,
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
    input1: {
        width: WIDTH-80,
        height: 50,
        borderRadius : 5,
        padding: 16,
        top: 240,
        borderColor : '#ccc',
        marginHorizontal: 10,
        backgroundColor: '#C6C2C6',
        opacity: 0.5,
        marginBottom: 30,
    },
    input2: {
        width: WIDTH-80,
        height: 50,
        borderRadius : 5,
        padding: 16,
        top: 240,
        borderColor : '#ccc',
        marginHorizontal: 10,
        backgroundColor: '#C6C2C6',
        opacity: 0.5,
        marginBottom: 30,
        marginTop: 10,
        marginBottom: -20
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
        top: 280,
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
        top: 290,
    },
    tulisan2: {
        fontFamily: 'Roboto',
        fontSize: 14,
        top: 290,
        fontWeight: "bold",
        color: '#00A7E1',
    },
    tulisan3: {
        marginVertical: 10,
        fontWeight: "bold",
        textAlign: "left",
        fontSize: 20,
        top: 240,
        right: 120,
    },
})