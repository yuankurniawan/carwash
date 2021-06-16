import React, { Component, useState, useEffect } from 'react';
import { SafeAreaView, Text, View, StyleSheet, Button } from 'react-native';
import MapView from 'react-native-maps';

export default class WasherSearch extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            isLoading: true
        };
    }
    

    componentDidMount(){
        this.RandomNumber = Math.floor(Math.random() * 3) + 0 ;
        fetch('http://18.118.154.146:8000/washer/')

            .then((response) => response.json())
            .then((json) => {
                this.setState({ data: json });
                
            })
            .catch((error) => console.error(error))
            .finally(() => {
                this.setState({ isLoading: false });
            });

        

        setTimeout(() => {
            this.props.navigation.replace('WasherOnGoing', {
                latitude: this.props.route.params.latitude,
                longitude: this.props.route.params.longitude,
                P1: this.nyobaindah()
              });
        }, 3000)
    }

    

    nyobaindah(){
        const { data, isLoading } = this.state;

        let tes = data;
        let nama_akhir = ""

        if (tes.length == 0){
        }else{
            nama_akhir = tes[this.RandomNumber].name
        }

        return nama_akhir
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
            />
            <View style={styles.base}>
                <Text style={[styles.text,{fontSize: 10, marginTop: 20}]}>Searching for</Text>
                <Text style={[styles.text,{fontSize: 20}]}>WASHER...</Text>
                <View style={styles.line}></View>
                <Text style={[styles.text,{fontSize: 20, marginTop: 20}]}>PAKET A</Text>
                <Text style={[styles.text,{fontSize: 10}]}>Cuci Luar</Text>
                <Text style={[styles.text,{fontSize: 20, marginTop: 6, color:'#2DD881'}]}>Rp. 40.000,00</Text>
                <Text style={[styles.caption,{fontSize: 10, marginTop: 6}]}>BSD City Kavling Edutown I.1, Jl. BSD Raya Utama, BSD City, Kec. Pagedangan, Tangerang, Banten 15339</Text>
            </View>
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
        paddingHorizontal: 50,
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
    }
})