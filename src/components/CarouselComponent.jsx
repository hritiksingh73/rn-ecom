import * as React from 'react';
import {Dimensions, View} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

const CarouselComponent = ({data, renderItem}) => {
  const width = Dimensions.get('window').width;

  return (
    <View style={{flex: 1}}>
      <Carousel
        loop
        width={width}
        height={420}
        autoPlay={true}
        data={data}
        scrollAnimationDuration={1000}
        // onSnapToItem={index => console.log('current index:', index)}
        renderItem={renderItem}
      />
    </View>
  );
};

export default CarouselComponent;
