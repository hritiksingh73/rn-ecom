import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import {Button, Snackbar} from 'react-native-paper';

const SnackbarComponent = () => {
  //   const onToggleSnackBar = () => setVisible(!visible);

  //   const onDismissSnackBar = () => setVisible(false);

  return (
    <View style={styles.container}>
      <Snackbar
        visible={true}
        duration={5000}
        // onDismiss={onDismissSnackBar}
        // action={{
        //   label: 'Undo',
        //   onPress: () => {
        //     // Do something
        //   },
        // }}
      >
        Successfully moved item to cart
      </Snackbar>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
});

export default SnackbarComponent;
