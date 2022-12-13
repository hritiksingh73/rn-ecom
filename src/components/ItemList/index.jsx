import React, {useState} from 'react';
import {Text, View, TouchableOpacity, Image, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {AddFruitsToCart} from '../../redux/action/action';
import styles from './styles';
import firestore from '@react-native-firebase/firestore';

const ItemList = props => {
  const data = props.data;
  var isItemAvailable = false;
  var resp = [];

  const dispatch = useDispatch();
  const [addToCartData, setAddToCartData] = useState([]);
  const cartData = useSelector(state => state.user.fruitCart);
  const userID = useSelector(state => state.user.userID);

  const FireSotreDataHandler  = async (item) => {
    await firestore()
    .collection('Cart')
    .doc('ABC')
    .get()
    .then(documentSnapshot => {
      if (documentSnapshot.exists) {
        // setAddToCartData(documentSnapshot.data().resp.push(item))
        // let res = documentSnapshot.data().cartItem;
        let res = documentSnapshot.data().resp
        res.push(item)
        resp = res
        // setAddToCartData(res)
        // documentSnapshot.data().resp.push(item)
        console.log('User data: ', documentSnapshot.data().resp);
        // console.log('User data2: ', res);

      //   a.push(item)
      // setAddToCartData(a)
      // console.log('data: ', addToCartData)
      }
    })
    firestore()
      .collection('Cart')
      // .doc(userID)
      .doc('ABC')
      .set({resp})
      .then(() => {
        // console.log('Cart data added!');
    });
  };

  const SetDataToCartScreen = item => {
    for (let i = 0; i < cartData.length; i++) {
      if (cartData[i].id === item.id) {
        var isItemAvailable = true;
      }
    }
    if (!isItemAvailable) {
      // console.log('----->>>>>: item Not Available')
      dispatch(AddFruitsToCart(item));
      FireSotreDataHandler(item);
    } else {
      // console.log('----->>>>>: item Available')
    }
  };

  return (
    <FlatList
      data={data}
      numColumns="2"
      renderItem={({item}) => {
        return (
          <View style={styles.itemOuterContainer}>
            <View style={styles.imgContainer}>
              <Image
                style={styles.itemImage}
                resizeMode="contain"
                source={item.url}
              />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.itemTitle}>{item.title}</Text>

              <Text style={styles.mrpBlock}>
                <Text style={styles.itemMrp}>₹{item.price} </Text>
                <Text style={styles.itemMaxMrp}> ₹{item.maxPrice} </Text>
                <Text style={styles.itemQnty}>/{item.quantity}</Text>
              </Text>

              <TouchableOpacity
                style={styles.addToCartContainer}
                onPress={() => SetDataToCartScreen(item)}>
                <Text style={styles.addToCartBtn}>Add to Cart</Text>
              </TouchableOpacity>
            </View>
          </View>
        );
      }}
    />
  );
};

export default ItemList;