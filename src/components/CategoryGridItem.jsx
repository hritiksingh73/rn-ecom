import React from 'react';
import {TouchableOpacity, StyleSheet, View, Image} from 'react-native';

const CategoryGridItem = props => {
  return (
    <TouchableOpacity>
      <View style={styles.imageContainer}>
        <Image style={styles.imgStyle} source={props.imgSource} />
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  imageContainer: {
    paddingVertical: 5,
    alignItems: 'center',
  },
  imgStyle: {
    width: 190,
    height: 200,
    resizeMode:'stretch'
  },
});

export default CategoryGridItem;
