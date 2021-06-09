import React from 'react';
import { SafeAreaView, Text, View, StyleSheet, Button } from 'react-native';
import { Rating, AirbnbRating } from 'react-native-ratings';
import Icon2 from 'react-native-vector-icons/Ionicons';

const profile = <Icon2 name="ios-person-circle-outline" size={120} color='#00A7E1' />;

export default class OrderFinish extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{alignItems: 'center', marginTop: 50}}>
          {profile}
          <Text style={{fontSize: 30}}>Herman</Text>
          <AirbnbRating />
        </View>
        <View style={{paddingHorizontal: 70}}>
          <Text style={{marginTop: 20, fontWeight: 'bold', fontSize: 20}}>
            Paket A
          </Text>
          <Text style={{fontSize: 12, color: 'grey'}}>Cuci Luar</Text>
          <Text
            style={{
              fontSize: 20,
              color: '#2DD881',
              marginTop: 8,
              fontWeight: 'bold',
            }}>
            Rp. 40.000,00
          </Text>
          <Text style={{fontSize: 12, color: 'black', marginTop: 8, marginBottom: 80}}>
            BSD City Kavling Edutown I.1, Jl. BSD Raya Utama, BSD City, Kec.
            Pagedangan, Tangerang, Banten 15339
          </Text>
          <Button 
            title="Kirim"
            color="#00A7E1"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
})