import React, {useEffect, useState, useRef} from 'react';
import {View, StyleSheet, Text, TextInput, Button} from 'react-native';
import CountCard from '../components/CountCard';
import Footer from '../components/Footer';
import Header from '../components/Header';

const AboutScreen = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState('');
  const inputRef = useRef(null);

  const getDataFromAPI = () => {
    console.log('Mounted 1');
  };

  useEffect(() => {
    getDataFromAPI();
    return () => {
      console.log('unmounted');
    };
  }, []);

  console.log('Input Reference -->', inputRef.current);

  const onFucusHandler = () => {
    inputRef.current.focus();
  };

  const incrementHandler = () => {
    setCount(count + 1);
  };

  return (
    <View style={styles.container}>
      <Text>About Screen</Text>
      <TextInput
        ref={inputRef}
        value={input}
        onChangeText={e => setInput(e)}
        placeholder="input"
      />
      <Button title="Focus" onPress={onFucusHandler} />
      <CountCard count={count} onPress={incrementHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AboutScreen;
