import React from 'react';
import {TouchableOpacity, StyleSheet, Image} from 'react-native';

const CategoryGridItem = props => {
  const {imgSource, onPress} = props;

  return (
    <TouchableOpacity onPress={onPress}>
      <Image style={styles.imgStyle} source={imgSource} />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  imgStyle: {
    width: 150,
    height: 150,
    resizeMode: 'stretch',
    margin: 10,
  },
});

export default CategoryGridItem;
