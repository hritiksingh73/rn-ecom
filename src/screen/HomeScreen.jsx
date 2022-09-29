import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TextInput,
  Button,
  StatusBar,
  Image,
  ActivityIndicator,
} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';
import {addTodoToStore, getInitialData} from '../redux/action';

const TodoCard = ({item}) => {
  return (
    <View style={styles.card}>
      <Image source={{uri: item.image}} style={styles.img} />
      <Text style={{fontSize: 15}}>{item.title}</Text>
    </View>
  );
};

const HomeScreen = () => {
  const {productData, loading} = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const [todo, setTodo] = useState();

  const addTodo = () => {
    dispatch(addTodoToStore(todo));
  };
  useEffect(() => {
    dispatch(getInitialData());
  }, []);

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#1B2430',
        }}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <Text style={styles.heading}>Todos</Text>
        <View style={styles.inputContainer}>
          <TextInput
            value={todo}
            onChangeText={e => setTodo(e)}
            placeholder="Add a todo"
            placeholderTextColor="gray"
            style={styles.input}
          />
          <Button title="Add" onPress={() => addTodo()} />
        </View>
        <FlatList
          data={productData}
          style={styles.list}
          renderItem={({item}) => {
            return <TodoCard item={item} />;
          }}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#1B2430',
  },
  heading: {
    marginTop: 50,
    fontSize: 30,
    fontWeight: '400',
    color: 'white',
  },
  list: {
    flex: 1,
    width: '100%',
    padding: 20,
  },
  img: {
    height: 200,
    width: '100%',
    borderRadius: 20,
    resizeMode: 'cover',
  },
  card: {
    backgroundColor: '#E7F6F2',
    borderRadius: 10,
    margin: 10,
    padding: 10,
    alignItems: 'center',
  },

  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '70%',
    height: 60,
    fontSize: 18,
    paddingHorizontal: 20,
    marginVertical: 20,
    marginHorizontal: 10,
    borderWidth: 1,
    color: 'white',
    borderColor: 'white',
    borderRadius: 10,
  },
});
export default HomeScreen;
