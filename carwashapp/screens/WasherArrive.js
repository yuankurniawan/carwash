import React from 'react';
import { SafeAreaView, Text, View, StyleSheet, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import MapView, { Marker } from 'react-native-maps';

export default class WasherArrive extends React.Component {e
    componentDidMount(){
        setTimeout(() => {
            this.props.navigation.replace('OrderFinish', {
                latitude: this.props.route.params.latitude,
                longitude: this.props.route.params.longitude,
                P3: this.props.route.params.P2,
                paket_nama: this.props.route.params.paket_nama,
                paket_deskripsi: this.props.route.params.paket_deskripsi,
                total_harga: this.props.route.params.total_harga,
                lokasi: this.props.route.params.lokasi
            });
        }, 3000)
    }
    
    render() {
        return(
            <View style={styles.root}>
            <MapView style={styles.container}
                initialRegion={{
                latitude: this.props.route.params.latitude,
                longitude: this.props.route.params.longitude,
                latitudeDelta: 0.007,
                longitudeDelta: 0.007,
                }}
            >
                <Marker coordinate={{ latitude : this.props.route.params.latitude , longitude : this.props.route.params.longitude }} />
            </MapView>
            <ScrollView style={styles.base}>
                <Text style={[styles.text,{fontSize: 10, marginTop: 20}]}>Washer Telah Tiba!</Text>
                <Text style={[styles.text,{fontSize: 20}]}>{this.props.route.params.P2}</Text>
                <View style={styles.line}></View>
                <View style={styles.chatButton}>
                <Button 
                    title="Chat Washer"
                    onPress={() => {this.props.navigation.navigate('Chat')}}
                />
                </View>
                <Text style={[styles.text,{fontSize: 20, marginTop: 20}]}>{this.props.route.params.paket_nama}</Text>
                <Text style={[styles.text,{fontSize: 10}]}>{this.props.route.params.paket_deskripsi}</Text>
                <Text style={[styles.text,{fontSize: 20, marginTop: 6, color:'#2DD881'}]}>Rp. {this.props.route.params.total_harga}</Text>
                <Text style={[styles.caption,{fontSize: 10, marginTop: 6}]}>{this.props.route.params.lokasi}</Text>
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
        marginRight: 50,
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