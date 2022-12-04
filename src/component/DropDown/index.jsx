import React, {useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import styles from './styles.js'
import Feather from 'react-native-vector-icons/Feather';
import { SafeAreaView} from 'react-native';

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
     </SafeAreaView>
  );
};

export default DropDown;