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
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginLeft: 50,
  },
  dropdown: {
    borderColor: 'white',
    marginLeft: 20,
    height: 20,
    width: 250,
  },
});

export default DropDown;
