import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  Image,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import DropDownPicker from 'react-native-dropdown-picker';
import Feather from 'react-native-vector-icons/Feather';
import styles from './styles.js'

const DropDown = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Indore', value: 'Indore'},
    {label: 'Mumbai', value: 'Mumbai'},
    {label: 'Pune', value: 'Pune'},
    {label: 'Delhi', value: 'Delhi'},
    {label: 'Punjab', value: 'Punjab'},
    {label: 'Jabalpur', value: 'Jabalpur'},
  ]);
  return (
    
      <View style={styles.container}>
        <Feather name={'map-pin'} size={22} />
        
    <DropDownPicker
      style={styles.dropdown}
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      placeholder="AI Hamra"
      setItems={setItems}
    />
 
        </View>
   
  );
};

export default DropDown;