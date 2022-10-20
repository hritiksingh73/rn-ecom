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
import Icon from 'react-native-vector-icons/AntDesign';
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
    <SafeAreaView style={styles.container}>
      <View style={styles.picker}>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'white'
  },
  picker: {
    width: 200,
    marginTop: 20,
    //padding: 10,
  },
});

export default DropDown;
