/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {View, Text, StyleSheet} from 'react-native';

export default () => (
  <View style={styles.footer}>
    <View style={{flexDirection: 'row'}}>
      <Icon name="caretup" size={14} style={{paddingTop: 10, marginRight: 5}} />
      <Icon name="shoppingcart" size={32} />
    </View>
    <Text style={{fontWeight: 'bold'}}>Bundu Khan BBQ Dallas</Text>
  </View>
);

const styles = StyleSheet.create({
  footer: {
    color: 'white',
    marginHorizontal: '1%',
    justifyContent: 'space-between',
    paddingTop: 7,
    flexDirection: 'row-reverse',
    alignItems: 'center',
    marginBottom: '3%',
  },
});
