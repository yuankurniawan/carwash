import React from 'react';
import auth from '@react-native-firebase/auth';
import {SafeAreaView, View, Image, Text, Dimensions, StyleSheet, TouchableOpacity, ImageBackground, TextInput} from 'react-native';
import { ThemeConsumer } from 'react-native-elements';

const { width: WIDTH } = Dimensions.get('window')
const { height: HEIGHT } = Dimensions.get('window')

export default class LoginScreen extends React.Component{

    constructor (props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    cobaLogin = (email, password) => {
        try {
             auth()
             .signInWithEmailAndPassword(email, password)
             .then(res => {
                this.props.navigation.navigate('Home')
          });
    } catch (error) {
          console.log(error.toString(error));
        }
      };

    render() {
        return(
            <SafeAreaView style={styles.container1}>
                <ImageBackground source={require('../images/LoginScreen.png')} style={styles.image}>
                    <Text style={styles.text}>Login</Text>
                    <Text style={styles.tulisan}>Email</Text>

                    <TextInput
                    style={styles.input}
                    placeholder= "ex: example@mail.com"
                    underlineColorAndroid='transparent'
                    value= {this.state.email}
                    onChangeText= {(text) => {this.setState({email:text})}}
                    />

                    <Text style={styles.tulisan3}>Password</Text>

                    <TextInput
                    style={styles.input1}
                    placeholder= "****"
                    secureTextEntry={true}
                    value= {this.state.password}
                    onChangeText= {(text) => {this.setState({password:text})}}
                    underlineColorAndroid='transparent'
                    />

                <TouchableOpacity style={styles.btn} onPress={() => this.cobaLogin(this.state.email, this.state.password)}>
                    <Text style={styles.text1}>Login</Text>
                </TouchableOpacity>

                <Text style={styles.tulisan1}>Belum memiliki akun? </Text>
                <Text style={styles.tulisan2}onPress={() => {this.props.navigation.navigate('Regis')}}>Daftar sekarang</Text>

                </ImageBackground>
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
        top: 230,
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
    tulisan: {
        fontWeight: "bold",
        textAlign: "left",
        fontSize: 20,
        top: 220,
        right: 140,
    },
    tulisan3: {
        fontWeight: "bold",
        textAlign: "left",
        fontSize: 20,
        top: 240,
        right: 120,
    },
    btn:{
        width: WIDTH-80,
        height: 50,
        borderRadius : 5,
        justifyContent: 'center',
        backgroundColor: '#00A7E1',
        alignItems: 'center',
        top: 320,
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
        top: 320,
    },
    tulisan2: {
        fontFamily: 'Roboto',
        fontSize: 14,
        top: 320,
        fontWeight: "bold",
        color: '#00A7E1',
    },
})