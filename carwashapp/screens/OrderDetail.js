import React, { Component, useState } from 'react';
import {SafeAreaView,Text,View, StyleSheet,Button, ScrollView} from 'react-native';
import Icon2 from 'react-native-vector-icons/Ionicons';
import {CheckBox} from 'react-native-elements';

const profile = <Icon2 name= 'ios-person-circle-outline'size={70} color='#00A7E1'></Icon2>

export default class OrderDetail extends React.Component {
    constructor(props){
        super(props);
        this.state={
          count:0,
        }
      }
      
  render() {
    return (
        <ScrollView>
      <View style={{flex:1, margin:20}}>
        <View>
          <Text style ={{fontSize: 30, fontWeight:'bold'}}>
            Order Detail
          </Text>
        </View>
        <View style={{flexDirection:'row'}}>
          <View>
            {profile}
          </View>
          <View style ={{margin :5}}>
            <Text style={{fontSize: 20, fontWeight:'bold'}}>
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
        <View>
          <Text style={{fontSize: 20, fontWeight:'bold'}}>
            Tipe layanan
          </Text>
          <View style={{flexDirection:'row'}}>
        <CheckBox
          center
          title='Express  Rp10.000'
          checked={this.state.checked}/>
        <CheckBox
          center
          title='Regular  Free'
          checked={this.state.checked}/>
        </View>
        </View>
        <View>
          <Text style={{fontSize: 20, fontWeight:'bold'}}>
            Set Waktu
          </Text>
            <View style={{flexDirection:'row'}}>
              <View style ={{margin:10}}>
              <Button
                title="Kirim"
                color="#00A7E1"/>
              </View>
              <View style ={{margin:10, width:200, height:33, backgroundColor:'gray', borderRadius:10}}>
              </View>
          </View>
        </View>
        <View>
          <Text style={{fontSize: 20, fontWeight:'bold'}}>
            Tambahan
          </Text>
          <View style={{flexDirection:'column',borderBottomColor: '#cc', borderBottomWidth:0.5}}>
            <CheckBox
              title='Cuci Mesin   Rp30.000'
              checked={this.state.checked}/>
            <CheckBox
              title='Semir Ban     Rp25.000'
              checked={this.state.checked}/>
            <CheckBox
              title='Poles             Rp30.000'
              checked={this.state.checked}/>
          </View>
        </View>
        <View style={{borderBottomColor: '#cc', borderBottomWidth:0.5}}>
          <Text style={{fontSize: 20, fontWeight:'bold', marginTop: 10}}>
            {this.props.route.params.name}
          </Text>
          <Text style={{fontSize: 10, color:'grey'}}>
            {this.props.route.params.description}
          </Text>
          <Text style={{fontSize: 20, fontWeight:'bold', color:'green'}}>
            Rp {this.props.route.params.price},00
          </Text>
          <Text>
            {this.props.route.params.location}
          </Text>
        </View>
        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
          <Text style={{fontSize: 20, fontWeight:'bold', marginTop: 10}}>
            Total
          </Text>
          <Text style={{fontSize: 20, fontWeight:'bold', color:'green'}}>
            Rp40.000
          </Text>
        </View>
        <View style={{marginTop:10}}>
        <Button 
            title="Kirim"
            color="#00A7E1"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
      </View>
      </ScrollView>
    )
  }
}