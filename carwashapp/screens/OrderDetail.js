import React, { Component, useState } from 'react';
import { SafeAreaView, Text, View, StyleSheet, Button, ScrollView } from 'react-native';
import Icon2 from 'react-native-vector-icons/Ionicons';
import CheckBox from '@react-native-community/checkbox';
import firestore from '@react-native-firebase/firestore';
import DateTimePicker from '@react-native-community/datetimepicker';

const profile = <Icon2 name='ios-person-circle-outline' size={70} color='#00A7E1'></Icon2>

export default class OrderDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      date: new Date(),
      time: new Date(), 
      mode: 'date',
      show: false,
      toggleExpress: false,
      toggleReguler: false,
      toggleCuci: false,
      toggleSemir: false,
      togglePoles: false,
      totalPrice: this.props.route.params.price,
      profile: ''
    }
  }


  componentDidMount() {
    firestore().collection('users').doc(this.props.user.uid).get().then(Snapshot => {
      this.setState({ profile: Snapshot.data() })        
    })
  }

  onChange = (event, selectedValue) => {
    const selectedTime = selectedValue || time;
    this.setState({ time: selectedTime })
    this.setState({ show: Platform.OS === 'ios' }) 
  };

  showMode = (currentMode) => {
    this.setState({ show: true})
    this.setState({ mode: currentMode })
  };

  showTimepicker = () => {
    this.showMode('time');
  };

  sum($add,$val){
    if($add == true){
      this.setState({totalPrice:this.state.totalPrice + $val})
    }
    else{
      this.setState({totalPrice:this.state.totalPrice - $val})
    }
  }

  render() {
    return (
      <ScrollView>
        <View style={{ flex: 1, margin: 20 }}>
          <View>
            <Text style={{ fontSize: 30, fontWeight: 'bold' }}>
              Order Detail
            </Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <View>
              {profile}
            </View>
            <View style={{ margin: 5, justifyContent: 'center' }}>
              <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                {this.state.profile.name}
              </Text>
              <Text>
                {this.state.profile.email}
              </Text>
            </View>
          </View>
          <View>
            <Text style={{ fontSize: 20, fontWeight: 'bold',  marginTop: 10}}>
              Tipe layanan
            </Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderBottomColor: '#cc', borderBottomWidth: 0.5 }}>
              <View style={{ flexDirection: 'row', width: '45%', justifyContent: 'space-between', alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <CheckBox
                    disabled={false}
                    value={this.state.toggleExpress}
                    onValueChange={() => {this.sum(!this.state.toggleExpress,10000);this.setState({ toggleExpress:!this.state.toggleExpress})}}
                  />
                  <Text>Express</Text>
                </View>
                <Text>Rp 10000</Text>
              </View>
              <View style={{ flexDirection: 'row', width: '45%', justifyContent: 'space-between', alignItems: 'center', marginBottom:5 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <CheckBox
                    disabled={false}
                    value={this.state.toggleReguler}
                    onValueChange={() => {this.sum(!this.state.toggleReguler,0);this.setState({toggleReguler:!this.state.toggleReguler})}}
                  />
                  <Text>Regular</Text>
                </View>
                <Text>Free</Text>
              </View>
            </View>
          </View>
          <View>
            <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 10 }}>
              Set Waktu
            </Text>
            <View style={{ flexDirection: 'row', borderBottomColor: '#cc', borderBottomWidth: 0.5 }}>
              <View style={{ margin: 10, height:33 }}>
                <Button
                  title="PILIH"
                  color="#00A7E1"
                  onPress={this.showTimepicker}
                />
              </View>

              <View style={{ margin: 10, width: 100, height: 33, backgroundColor: '#CDD0CB', borderRadius: 10 }}>
                <Text style={{fontSize: 18, color: 'black',fontWeight: 'bold',  marginTop: 3, marginLeft:25}}>{this.state.time.getHours()<10?'0':''}{this.state.time.getHours()}:{this.state.time.getMinutes()<10?'0':''}{this.state.time.getMinutes()}</Text>
              </View>

              {this.state.show && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={this.state.date}
                  mode={this.state.mode}
                  is24Hour={true}
                  display="default"
                  onChange={this.onChange}
                />
              )}
            </View>
          </View>
          <View>
            <Text style={{ fontSize: 20, fontWeight: 'bold',  marginTop: 10 }}>
              Tambahan
          </Text>
            <View style={{ borderBottomColor: '#cc', borderBottomWidth: 0.5 }}>
              <View style={{ flexDirection: 'row', width: '45%', justifyContent: 'space-between', alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <CheckBox
                    disabled={false}
                    value={this.state.toggleCuci}
                    onValueChange={() => {this.sum(!this.state.toggleCuci,30000);this.setState({toggleCuci:!this.state.toggleCuci})}}
                  />
                  <Text>Cuci Mesin</Text>
                </View>
                <Text>Rp 30000</Text>
              </View>

              <View style={{ flexDirection: 'row', width: '45%', justifyContent: 'space-between', alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <CheckBox
                    disabled={false}
                    value={this.state.toggleSemir}
                    onValueChange={() => {this.sum(!this.state.toggleSemir,25000);this.setState({toggleSemir:!this.state.toggleSemir})}}
                  />
                  <Text>Semir Ban</Text>
                </View>
                <Text>Rp 25000</Text>
              </View>

              <View style={{ flexDirection: 'row', width: '45%', justifyContent: 'space-between', alignItems: 'center', marginBottom:5 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <CheckBox
                    disabled={false}
                    value={this.state.togglePoles}
                    onValueChange={() => {this.sum(!this.state.togglePoles,30000);this.setState({togglePoles:!this.state.togglePoles})}}
                  />
                  <Text>Poles</Text>
                </View>
                <Text>Rp 30000</Text>
              </View>
            </View>
          </View>
          <View style={{ borderBottomColor: '#cc', borderBottomWidth: 0.5 }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 10 }}>
              {this.props.route.params.name}
            </Text>
            <Text style={{ fontSize: 13, color: 'grey' }}>
              {this.props.route.params.description}
            </Text>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'green' }}>
              Rp {this.props.route.params.price}
          </Text>
            <Text style={{marginBottom: 10}}>
              {this.props.route.params.location}
            </Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 10 }}>
              Total
          </Text>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'green' }}>
              Rp {this.state.totalPrice}
          </Text>
          </View>
          <View style={{ marginTop: 10 }}>
            <Button
              title="Kirim"
              color="#00A7E1"
              onPress={() => this.props.navigation.navigate('WasherSearch', {
                latitude: this.props.route.params.latitude,
                longitude: this.props.route.params.longitude,
                paket_nama: this.props.route.params.name,
                paket_deskripsi: this.props.route.params.description,
                total_harga: this.state.totalPrice,
                lokasi: this.props.route.params.location
              })}
            />
          </View>
        </View>
      </ScrollView>
    )
  }
}