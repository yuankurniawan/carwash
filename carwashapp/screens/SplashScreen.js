import React from 'react';
import {View, Image, Text, Dimensions, StyleSheet} from 'react-native';


const SplashScreen = ({navigation, user}) => {
    setTimeout(() => {
        if(user == null) {
            navigation.replace('Boarding1');
        }
        else {
            navigation.replace('Home');
        }   
    }, 3000)
    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#FFFFFF',
        }}>
            <Image style={{width : 140, height: 140}} source={require('../images/Logo.png')}/>
            <Text style={styles.tulisan1}>Waterless</Text>
            <Text style={styles.tulisan2}>CarWash</Text>
        </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    tulisan1:{
        marginTop: 10,
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        color: '#00A7E1',
        fontSize: 24,
    },
    tulisan2:{
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        color: '#00A7E1',
        fontSize: 24,
    },
})