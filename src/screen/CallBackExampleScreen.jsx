import React, {useState} from 'react';
import {StyleSheet, Text, SafeAreaView} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {useDispatch} from 'react-redux';
import Card from '../components/Card';

const CallBackExampleScreen = () => {
  const [items, setItems] = useState([
    {
      title: 'Hello',
      id: '2',
    },
    {
      title: 'Hello',
      id: '23',
    },
    {
      title: 'Hello',
      id: '232',
    },
    {
      title: 'Hello',
      id: '2542',
    },
    {
      title: 'Hello',
      id: '5452',
    },
    {
      title: 'Hello',
      id: '5452asdadasd',
    },
  ]);

  const dispatch = useDispatch();

  const onPressHandler = id => {
    dispatch(removeItem());
    console.log(id);
  };

  console.log(items);

  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello</Text>
      <FlatList
        data={items}
        renderItem={({item, index}) => {
          return <Card item={item} onPressHandler={onPressHandler} />;
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
  },
});
export default CallBackExampleScreen;
