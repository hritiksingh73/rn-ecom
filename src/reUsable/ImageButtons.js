import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const ImageButton = props => {
  return (
    <View>
      <Image source={props.source} style={props.styles} />
    </View>
  );
};
const styles = StyleSheet.create({
    
});

export default ImageButton;
