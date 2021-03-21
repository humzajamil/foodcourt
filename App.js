/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import {createStackNavigator} from '@react-navigation/stack';

import Header from './src/components/Header';

import Footer from './src/components/Footer';

import {
  MenuScreen,
  CartScreen,
  OrderScreen,
  GroupScreen,
} from './src/components/Screen';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

const Tab = createMaterialTopTabNavigator();
const MenuStack = createStackNavigator();
const OrderStack = createStackNavigator();
const CartStack = createStackNavigator();
const GroupStack = createStackNavigator();

// const MenuStackScreen = () => (
//   <MenuStack.Navigator>
//     <MenuStack.Screen name="Order" component={MenuScreen} />
//   </MenuStack.Navigator>
// );

// const CartStackScreen = () => (
//   <CartStack.Navigator>
//     <CartStack.Screen name="Order" component={CartScreen} />
//   </CartStack.Navigator>
// );

// const OrderStackScreen = () => (
//   <OrderStack.Navigator>
//     <OrderStack.Screen name="Order" component={OrderScreen} />
//   </OrderStack.Navigator>
// );

// const GroupStackScreen = () => (
//   <GroupStack.Navigator>
//     <GroupStack.Screen name="Order" component={GroupScreen} />
//   </GroupStack.Navigator>
// );

export default () => (
  <>
    <StatusBar backgroundColor="#FF4500" barStyle="light-content" />
    <Header />
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: 'white',
          labelStyle: {fontSize: 12},
          style: {backgroundColor: '#FF4500'},
        }}>
        <Tab.Screen name="MENU" component={MenuScreen} />
        <Tab.Screen name="CARTS" component={CartScreen} />
        <Tab.Screen name="ORDERS" component={OrderScreen} />
        <Tab.Screen name="GROUPS" component={GroupScreen} />
      </Tab.Navigator>
    </NavigationContainer>
    <Footer />
  </>
);

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
