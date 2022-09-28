import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TextInput,
  Button,
  StatusBar,
} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

import {useSelector, useDispatch} from 'react-redux';
import {addTodoToStore} from '../redux/action';

const TodoCard = ({item}) => {
  return (
    <View style={styles.card}>
      <BouncyCheckbox isChecked={item.finished} onPress={() => {}} />
      <Text style={{fontSize: 17}}>{item.title}</Text>
    </View>
  );
};

const HomeScreen = () => {
  const {todos} = useSelector(state => state);
  const dispatch = useDispatch();

  const [todo, setTodo] = useState();

  const addTodo = () => {
    dispatch(addTodoToStore(todo));
  };

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
          data={todos}
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
    // backgroundColor: 'red',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#E7F6F2',
    borderRadius: 10,
    margin: 10,
    padding: 10,
    alignItems: 'center',
    height: 100,
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
