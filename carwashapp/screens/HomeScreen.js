import React from 'react';
import { SafeAreaView, Text, View, StyleSheet, Button } from 'react-native';
import MapView from 'react-native-maps';

export default class HomeScreen extends React.Component {
    render() {
        return(
            <MapView style={styles.container}
                initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
                }}
            />
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
})