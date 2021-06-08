import React from 'react';
import { SafeAreaView, Text, View, StyleSheet, FlatList, Pressable, Button } from 'react-native';
import MapView from 'react-native-maps';

const List = [
    {
        id: 1,
        name: 'Paket A',
        description: 'Description',
        price: '40000'
    },
    {
        id: 2,
        name: 'Paket B',
        description: 'Description',
        price: '60000'
    },
    {
        id: 3,
        name: 'Paket C',
        description: 'Description',
        price: '50000'
    }
]

export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            renderList: List,
            itemSelected: null
        };
    }

    render() {
        return(
            <SafeAreaView style={styles.container}>
                <View style={{ alignItems: 'center', justifyContent: 'center', width: '100%', height: '10%', backgroundColor: 'white'}}>
                    <Text>Atas</Text>
                </View>
                <MapView style={styles.container}
                    initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                    }}
                />
                <View style={{ width: '100%', height: '30%', backgroundColor: 'white', padding: 10 }}>
                    <FlatList
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        data={this.state.renderList}
                        style={styles.listView}
                        keyExtractor={item => item.id.toString()}
                        renderItem={({ item }) => (
                        <Pressable style={[styles.itemContainer, {backgroundColor: this.state.itemSelected === item.id ? '#00A7E1':'white'}]} onPress={() => {this.setState({ itemSelected: item.id })}}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: this.state.itemSelected === item.id ? 'white':'black' }}>{item.name}</Text>
                                    <Text style={{ fontSize: 14, fontWeight: 'bold', color: this.state.itemSelected === item.id ? 'white':'black' }}>{item.description}</Text>
                                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#25CF92' }}>Rp. {item.price},00</Text>
                                </View> 
                            </View>
                        </Pressable>
                        )}
                    />
                    <Button 
                        title='Pesan'
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
        borderWidth: 1, 
        padding: 10
    }
})