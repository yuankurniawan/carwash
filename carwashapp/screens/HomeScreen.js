import React from 'react';
import { SafeAreaView, Text, View, StyleSheet, FlatList, Pressable, Button, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Geolocation from '@react-native-community/geolocation';

const List = [
    {
        id: 1,
        name: 'Paket A',
        description: 'Cuci Luar',
        price: 40000
    },
    {
        id: 2,
        name: 'Paket B',
        description: 'Luar + Interior',
        price: 60000
    },
    {
        id: 3,
        name: 'Paket C',
        description: 'Paket Complete',
        price: 50000
    }
]

export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Data: null,
            Name: [],
            Description: [],
            Price: [],
            renderList: List,
            itemSelected: null,
            latitude: -6.2987256,
            longitude: 106.6385269,
            latitudeDelta: 0.007,
            longitudeDelta: 0.007
        };
    }

    componentDidMount() {
        Geolocation.getCurrentPosition(
            info => {
                const { coords } = info
                this.setState({latitude:coords.latitude, longitude:coords.longitude})
            },
            error => console.log(error),
            {
                enableHighAccuracy: false,
                timeout: 2000,
                maximumAge: 3600000
            }
        )
    }

    render() {
        return(
            <SafeAreaView style={[styles.container]}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                    <Pressable style={{ height: 55, backgroundColor: 'white', width: '15%', alignItems: 'center', justifyContent: 'center' }} onPress={() => this.props.navigation.navigate('Profile')}>
                        <Ionicons name='md-person-circle-outline' size={50} color='#00A7E1'/>
                    </Pressable>

                    <GooglePlacesAutocomplete
                        placeholder='Mau Cuci Mobil Dimana Hari Ini?'
                        fetchDetails={true}
                        GooglePlacesSearchQuery={{
                            rankby: 'distance'
                        }}
                        onPress={(data, details = null) => {
                            this.setState({ latitude: details.geometry.location.lat, longitude: details.geometry.location.lng, Data: data.description })
                            console.log(this.state.Data);
                        }}
                        query={{
                            key: 'AIzaSyDQCRME4hDGSxdkyXM_cHD8bSdAVWym5ws',
                            language: 'en',
                            components: 'country:id',
                            types: 'establishment',
                            radius: 1000
                        }}
                        styles={{ 
                            container: {
                                position: 'absolute',
                                flex: 0,
                                width: '85%',
                                zIndex: 1,
                                right: 0,
                                backgroundColor: 'white',
                                paddingTop: 8,
                                paddingBottom: 2,
                                paddingRight: 5
                            },
                            textInputContainer: {
                                backgroundColor: 'white',
                            },
                            textInput: {
                                height: 40,
                                color: '#5d5d5d',
                                fontSize: 16,
                                backgroundColor: '#C6C2C6'
                            },
                            listView: {
                                backgroundColor: 'white'
                            }
                        }}
                    />
                </View>
                

                <MapView style={styles.container}
                    region={{
                    latitude: this.state.latitude,
                    longitude: this.state.longitude,
                    latitudeDelta: this.state.latitudeDelta,
                    longitudeDelta: this.state.longitudeDelta,
                    }}
                >
                    <Marker coordinate={{ latitude : this.state.latitude , longitude : this.state.longitude }} />
                </MapView>
                
                <View style={{ width: '100%', height: '30%', backgroundColor: 'white', padding: 10 }}>
                    <FlatList
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        data={this.state.renderList}
                        style={styles.listView}
                        keyExtractor={item => item.id.toString()}
                        renderItem={({ item }) => (
                        <Pressable style={[styles.itemContainer, {backgroundColor: this.state.itemSelected === item.id ? '#00A7E1':'white'}]} onPress={() => {this.setState({ itemSelected: item.id, Name: item.name, Description: item.description, Price: item.price })}}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: this.state.itemSelected === item.id ? 'white':'black' }}>{item.name}</Text>
                                    <Text style={{ fontSize: 14, fontWeight: 'bold', color: this.state.itemSelected === item.id ? 'white':'#C6C2C6' }}>{item.description}</Text>
                                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#25CF92' }}>Rp. {item.price},00</Text>
                                </View>
                                <View style={{ height: '100%', justifyContent: 'center' }}>
                                    <Image source={this.state.itemSelected === item.id ? require('../images/money-white.png'):require('../images/money-blue.png')} style={{ height: 45, width: 45 }}/>
                                </View>
                                
                            </View>
                        </Pressable>
                        )}
                    />

                    <Button 
                        title='Pesan'
                        onPress={() => this.props.navigation.navigate('OrderDetail', {
                            location: this.state.Data,
                            name: this.state.Name,
                            description: this.state.Description,
                            price: this.state.Price,
                            latitude: this.state.latitude,
                            longitude: this.state.longitude
                        })}
                        disabled={!this.state.Data || !this.state.itemSelected ? true:false}
                    />
                </View>
            </SafeAreaView>
            
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    listView: {
        flex: 1,
        height: 150,
    },
    itemContainer: {
        width: 220, 
        height: 100, 
        marginHorizontal: 5, 
        marginTop: 20, 
        borderRadius: 10, 
        elevation: 5,
        padding: 10
    },
})