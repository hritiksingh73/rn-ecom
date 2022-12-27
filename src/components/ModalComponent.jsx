import React from 'react';
import {Modal, View, Button, StyleSheet, Text} from 'react-native';

const ModalComponent = props => {
  const {visible, cancelBtn, yesBtn} = props;

  return (
    <Modal animationType="slide" visible={visible} transparent={true}>
      <View style={styles.container}>
        <View style={styles.modal}>
          <Text style={styles.message}>
            Are you sure, You want to remove this item?
          </Text>
          <View style={styles.btnstyle}>
            <Button title="yes" onPress={yesBtn} color="green" />
            <Button title="cancel" onPress={cancelBtn} color="red" />
          </View>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modal: {
    justifyContent: 'center',
    width: '100%',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'lightgrey',
    height: '20%',
  },
  message: {
    textAlign: 'center',
    marginBottom: 25,
    fontSize: 16,
  },
  btnstyle: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
export default ModalComponent;
