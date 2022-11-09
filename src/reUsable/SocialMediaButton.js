import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const SocialMedia= (props) => {
  return (
    <View>
      <Image source={props.source} style={props.style} />
    </View>
  );
};
const styles = StyleSheet.create({});

export default SocialMedia;
