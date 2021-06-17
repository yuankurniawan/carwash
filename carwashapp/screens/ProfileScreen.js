import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, View, StyleSheet, Button, ScrollView } from 'react-native';
import auth from '@react-native-firebase/auth';
import Icon3 from 'react-native-vector-icons/FontAwesome'
import Icon2 from 'react-native-vector-icons/Ionicons';
import firestore from '@react-native-firebase/firestore';


export default function Profile({user}) {
    const [profile, setProfile] = useState('')

    const cobaSignout = () => {
        auth()
            .signOut()
            .then(() => console.log('User signed out!'));
    }

    useEffect(() => {
        firestore().collection('users').doc(user.uid).get().then(Snapshot => {
            setProfile(Snapshot.data())          
        })
    }) 

    
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, margin: 20, justifyContent:'space-between'}}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                    <View style={{flexDirection: 'row' }}>
                        <Icon2 name='ios-person-circle-outline' size={70} color='#00A7E1'></Icon2>

                        <View style={{ margin: 5, justifyContent: 'center' }}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                                {profile.name}
                            </Text>
                            <Text>
                                {profile.email}
                            </Text>
                        </View>
                    </View>
                    <View style={{justifyContent: 'center'}}>
                        <Icon3 name='pencil-square-o' size={40} color='#00A7E1'></Icon3>
                    </View>
                </View>
                <View>
                <Button
                    onPress={() => cobaSignout()} 
                    title="Log Out"
                    color="#FF0000"
                />
                </View>        
            </View>
        </SafeAreaView>

    )
    
}