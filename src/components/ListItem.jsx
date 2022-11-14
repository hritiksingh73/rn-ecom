import React from 'react';
import {FlatList} from 'react-native';

const ListItem = props => {
  return (
    <FlatList
      {...props}
      showsHorizontalScrollIndicator={false}
      keyExtractor={item => '#' + item.id}
    />
  );
};
export default ListItem;
