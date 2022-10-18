import React, {useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import Location from '../data/location';
import {StyleSheet} from 'react-native';

export default function DropDown() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState(Location);

  return (
    <DropDownPicker
      style={styles.dropdownStyle}
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      placeholder="Select any place"
      placeholderStyle={{marginLeft: '10%'}}
      showBadgeDot={true}
    />
  );
}
const styles = StyleSheet.create({
  dropdownStyle: {
    borderColor: 'white',
    paddingRight: '55%',
    marginLeft: '30%',
  },
});
