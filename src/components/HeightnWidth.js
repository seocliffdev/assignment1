import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';

export default class FixedDimensionsBasics extends Component {
  render() {
    return (
      <View>
        <View style={{flex:1,width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{flex:13,width: 100, height: 100, backgroundColor: 'skyblue'}} />
        <View style={{flex:1,width: 150, height: 150, backgroundColor: 'steelblue'}} />
      </View>


    );
  }
}
