import React, {useState} from 'react';
import {Text, View, TouchableOpacity, Image, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {AddFruitsToCart} from '../../redux/action/action';
import styles from './styles';

const ItemList = props => {
  const data = props.data;
  var isItemAvailable = false;

  const [itemId, setItemId] = useState(0);
  const dispatch = useDispatch();
  const cartData = useSelector(state => state.user.fruitCart);

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
              <TouchableOpacity style={styles.addToCartContainer} 
                onPress={()=>{
                  // item only added to cart when it is not available there.
                  for(let i = 0; i<cartData.length; i++){
                    if(cartData[i].id === item.id){
                      var isItemAvailable = true;
                    }
                  }
                    if(!isItemAvailable){
                      // console.log('----->>>>>: item Not Available')
                      dispatch(AddFruitsToCart(item));
                      
                    }else{
                      // console.log('----->>>>>: item Available')
                    }
                  }}>
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
