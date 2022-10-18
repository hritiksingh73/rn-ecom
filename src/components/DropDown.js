import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const places = [
    {	id: '1',	place: 'Assam' },
    {	id: '2',	place: 'Bihar' },
    {	id: '3',	place: 'Gujarat' },
    {	id: '4',	place: 'Haryana' },
    {	id: '5',	place: 'Karnatak' },
    {	id: '6',	place: 'Madhya Pradesh' },
    {	id: '7',	place: 'Maharashtra' },
    {	id: '8',	place: 'Punjab' },
  ];

const DropDown = () => {
  
  const [num, setNum] = useState(0);
  const [isTrue, setIsTrue] = useState(true);
  var val = true;

  return (
        <View style={{alignItems: 'center'}}>
          <View style={styles.container}>
			<Feather name={'map-pin'} size={22} />
				<TouchableOpacity
					onPress={() => {
						{(val) ? val = false : val = true}
						setIsTrue(val)
					}}>
					<Text style={{padding: 10}}>Choose Area</Text>
				</TouchableOpacity>
		  </View>
          

            {(isTrue) ? <Text></Text> : places.map((value, index) => {
                return(
                    <View style={styles.DropDownStyle}>
                        <Text key={String(index)}>{value.place}</Text>
                    </View>
                )})} 


            {/* {places.map((value, index) => {
                return(
                    <View style={styles.DropDownStyle}>
                        <Text key={String(index)}>{value.place}</Text>
                    </View>
                )})} */}
        </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  DropDownStyle:{
      width: '50%',
      alignItems: 'center',
      padding: 10,
      borderWidth: 1,
      borderColor: 'lightgray',
      borderRadius: 3,
      margin: 2
  }
});

export default DropDown;
