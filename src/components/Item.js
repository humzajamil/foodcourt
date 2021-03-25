/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  ScrollView,
  View,
  ActivityIndicator,
} from 'react-native';
import ItemCard from './ItemCard';

const baseUrl =
  'https://mywyzer.com:8443/Menu/get?businessId=8983&userId=12238&dateTime=2021-03-18%2016:27:26&offset=0&locationId=11072';

const Item = () => {
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    itemResponse();
  }, []);

  const itemResponse = async () => {
    const response = await axios.get(baseUrl);
    setItem(response.data.payLoad);
    setLoading(false);
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      {loading ? (
        <View style={styles.container}>
          <ActivityIndicator size="large" color="#FF4500" />
        </View>
      ) : (
        <ScrollView showsVerticalScrollIndicator={false}>
          {item.map(pay => {
            return (
              <SafeAreaView style={{marginVertical: 10}}>
                <View style={styles.text}>
                  <Text style={{fontWeight: 'bold'}}>{pay.name}</Text>
                </View>
                <ItemCard data={pay.item} />
              </SafeAreaView>
            );
          })}
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    marginHorizontal: 8,
  },
  screen: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default Item;
