import React, {useState} from 'react';
import {TextInput, View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import Feather from 'react-native-vector-icons/Feather';

const LoginTextField = props => {
  const [isEyeOn, setIsEyeOn] = useState(true);

  return (
    <>
      <View style={styles.container}>
        <Feather name={props.icon} size={20} style={styles.icons} />
        <TextInput
          style={styles.txtField}
          {...props}
          secureTextEntry={props.secureTextEntry ? isEyeOn : false}
        />

        {props.secureTextEntry ? (
          <TouchableOpacity
            style={styles.rightIconsArea}
            onPress={() => {
              isEyeOn ? setIsEyeOn(false) : setIsEyeOn(true);
            }}>
            {isEyeOn ? (
              <Feather name="eye-off" size={20} style={styles.rightIcons} />
            ) : (
              <Feather
                name={props.rightIcon}
                size={20}
                style={styles.rightIcons}
              />
            )}
          </TouchableOpacity>
        ) : (
          <Text></Text>
        )}
      </View>
      <Text style={styles.warningTxt}>{props.warrning}</Text>
    </>
  );
};

export default LoginTextField;
