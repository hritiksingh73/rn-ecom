import React from 'react';
import {Modal, View, Button, Text} from 'react-native';
import styles from './styles';

const ModalComponent = props => {
  const {visible, removeBtn, btn} = props;

  return (
    <Modal animationType="slide" visible={visible} transparent={true}>
      <View style={styles.container}>
        <View style={styles.modalStyle}>
          <Text style={styles.textStyle}>
            Are you sure, You want to remove this item?
          </Text>
          <View style={styles.btnstyle}>
            <Button title="yes" onPress={btn} color="green" />
            <Button title="cancel" onPress={removeBtn} color="red" />
          </View>
        </View>
      </View>
    </Modal>
  );
};
export default ModalComponent;
