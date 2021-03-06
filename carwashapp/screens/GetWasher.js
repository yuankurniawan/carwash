import React from 'react';
import { SafeAreaView, Text, View, StyleSheet, Button } from 'react-native';
import MapView from 'react-native-maps';
import { ScrollView } from 'react-native-gesture-handler';

export default class GetWasher extends React.Component {
    render() {
        return(
            <View style={styles.root}>
            <MapView style={styles.container}
                initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
                }}
            />
            <ScrollView style={styles.base}>
                <Text style={[styles.text,{fontSize: 10, marginTop: 20}]}>Get Washer</Text>
                <Text style={[styles.text,{fontSize: 20}]}>HERMAN</Text>
                <View style={styles.line}></View>
                <View style={styles.chatButton}>
                <Button 
                    title="Chat Washer"
                    onPress={() => Alert.alert('Simple Button pressed')}
                />
                </View>
                <Text style={[styles.text,{fontSize: 20, marginTop: 20}]}>PAKET A</Text>
                <Text style={[styles.text,{fontSize: 10}]}>Cuci Luar</Text>
                <Text style={[styles.text,{fontSize: 20, marginTop: 6, color:'#2DD881'}]}>Rp. 40.000,00</Text>
                <Text style={[styles.caption,{fontSize: 10, marginTop: 6}]}>BSD City Kavling Edutown I.1, Jl. BSD Raya Utama, BSD City, Kec. Pagedangan, Tangerang, Banten 15339</Text>
            </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      zIndex: 1,
    },
    root: {
        flex: 1,
        zIndex: 0,
    },
    text: {
        marginLeft: 50,
        fontWeight: 'bold',
    },
    caption: {
        marginLeft: 50,
        fontWeight: 'normal',
    },
    base: {
        flex: 1/2,
        zIndex: 2,
        backgroundColor: 'white',
        width: '100%',
        height: 50,
        
    },
    line: {
        zIndex: 3,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginLeft: 50,
        marginRight: 50,
        marginTop: 10,
    },
    chatButton: {
        zIndex: 3,
        marginLeft: 50,
        marginRight: 50,
        marginTop: 10,
    }
})