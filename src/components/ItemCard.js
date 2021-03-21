import React from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  View,
  Image,
} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    price: '$3.0',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    price: '$3.0',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    price: '$3.0',
  },
];

const Item = ({item}) => (
  <View style={styles.item}>
    <Image style={styles.image} source={{uri: item.imageURL}} />
    <View style={styles.text}>
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.price}>$ {item.itemSize[0].price}</Text>
    </View>
  </View>
);

const ItemCard = ({data}) => {
  return (
    <SafeAreaView>
      <FlatList
        data={data}
        renderItem={Item}
        keyExtractor={item => item.shopItemId}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default ItemCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    flex: 1,
    justifyContent: 'space-between',
    padding: '2%',
  },
  item: {
    borderRadius: 10,
    width: width * 0.46,
    height: height * 0.25,
    backgroundColor: 'white',
    marginVertical: 8,
    marginHorizontal: 8,
    elevation: 5,
  },
  title: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  price: {
    color: 'gray',
  },
  image: {
    width: width * 0.46,
    height: height * 0.15,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
});
