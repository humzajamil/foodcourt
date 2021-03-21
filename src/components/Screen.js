/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

import Item from './Item';

const ScreenContainer = ({children}) => (
  <View style={styles.container}>{children}</View>
);

export const MenuScreen = () => (
  <ScreenContainer>
    <Item />
  </ScreenContainer>
);

export const CartScreen = () => (
  <ScreenContainer>
    <Text>Hello from Cart</Text>
  </ScreenContainer>
);

export const OrderScreen = () => (
  <ScreenContainer>
    <Text>Hello from Order</Text>
  </ScreenContainer>
);

export const GroupScreen = () => (
  <ScreenContainer>
    <Text>Hello from Group</Text>
  </ScreenContainer>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
