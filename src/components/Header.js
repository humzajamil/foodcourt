/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {View, Text, StyleSheet} from 'react-native';

export default () => (
  <View style={{backgroundColor: '#FF4500'}}>
    <View style={styles.header}>
      <Icon name="menu" size={32} color="white" />
      <Text style={{fontSize: 18, color: 'white'}}>Order</Text>
      <Icon name="ios-qr-code-outline" size={32} color="white" />
    </View>
  </View>
);

const styles = StyleSheet.create({
  header: {
    color: 'white',
    marginHorizontal: '1%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FF4500',
  },
});
