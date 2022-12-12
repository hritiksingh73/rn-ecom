import React from 'react';
import {TouchableOpacity, StyleSheet, Image} from 'react-native';

const CategoryGridItem = props => {
  const {imgSource} = props;

  return (
    <TouchableOpacity style={styles.imageContainer}>
      <Image style={styles.imgStyle} source={imgSource} />
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
    resizeMode: 'stretch',
  },
});

export default CategoryGridItem;
