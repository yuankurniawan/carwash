import React, { Component, useState } from 'react';
import { SafeAreaView, Text, View, StyleSheet, Button, ScrollView } from 'react-native';
import auth from '@react-native-firebase/auth';
import Icon3 from 'react-native-vector-icons/FontAwesome'
import Icon2 from 'react-native-vector-icons/Ionicons';
import { CheckBox } from 'react-native-elements';

const profile = <Icon2 name='ios-person-circle-outline' size={70} color='#00A7E1'></Icon2>



export default class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        }
    }

    cobaSignout = () => {
        auth()
            .signOut()
            .then(() => console.log('User signed out!'));
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1, margin: 20, justifyContent:'space-between'}}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                        <View style={{flexDirection: 'row' }}>
                            {profile}
                            <View style={{ margin: 5 }}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                                Ahmad
                            </Text>
                            <Text>
                                082272717271
                            </Text>
                            <Text>
                                ahmad.ahmad@gmail.com
                            </Text>
                        </View>
                        </View>
                        <View style={{justifyContent: 'center'}}>
                            <Icon3 name='pencil-square-o' size={40} color='#00A7E1'></Icon3>
                        </View>
                    </View>
                    <View>
                    <Button
                        onPress={() => this.cobaSignout()} 
                        title="Log Out"
                        color="#FF0000"
                    />
                    </View>        
                </View>
            </SafeAreaView>

        )
    }
}