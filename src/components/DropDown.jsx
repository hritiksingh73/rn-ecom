import React, {useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import Location from '../data/location';
import {StyleSheet} from 'react-native';
import remoteConfig from '@react-native-firebase/remote-config';
import {Picker} from '@react-native-picker/picker';
import {useEffect} from 'react';

export default function DropDown() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [selectedCity, setSelectedCity] = useState();
  const [cities, setCities] = useState();

  const onCityChange = (itemValue, itemIndex) => {
    setSelectedCity(itemValue);
  };

  const fetchRemoteData = async () => {
    try {
      await remoteConfig().setDefaults({cities: Location});
      await remoteConfig().fetch(10);
      const activated = await remoteConfig().activate();
      // console.log(activated);
      if (activated) {
        const value = remoteConfig().getValue('cities');
        console.log('Cities........>', JSON.parse(value.asString()));
        let remoteCities = JSON.parse(value.asString()).cities;
        setCities(remoteCities);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchRemoteData();
  }, []);

  return (
    // <DropDownPicker
    //   style={styles.dropdownStyle}
    //   open={open}
    //   //value={selectedCity}
    //   //items={cities}
    //   setOpen={setOpen}
    //   //setValue={setSelectedCity}
    //   //setItems={setCities}
    //   placeholder="Select any place"
    //   placeholderStyle={{marginLeft: '10%'}}
    //   showBadgeDot={true}
    // />
    <Picker
      mode="dialog"
      style={styles.dropdownStyle}
      selectedValue={selectedCity}
      onValueChange={(itemValue, itemIndex) =>
        onCityChange(itemValue, itemIndex)
      }
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
