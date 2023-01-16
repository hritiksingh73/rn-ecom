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
import StepIndicator from 'react-native-step-indicator';
import styles from './styles.js';
import Feather from 'react-native-vector-icons/Feather';
import SelectAddressScreen from '../../../src/screens/tabScreen/CartScreen/SelectAddressScreen';
import SelectDeliverySlotScreen from '../../../src/screens/tabScreen/CartScreen/SelectDeliverySlotScreen/index';
import PaymentScreen from '../../../src/screens/tabScreen/CartScreen/PaymentScreen/index';
import color from '../../constant/color.js';

const Indicator = () => {
  const [currentPosition, setCurrentPosition] = useState(0);
  const icons = ['map', 'truck', 'credit-card'];
  const labels = ['Select Address', 'Select Delivery Slot', 'Payment'];
  const customStyles = {
    currentStepStrokeWidth: 6,
    stepStrokeCurrentColor: color.primary,
    stepStrokeWidth: 3,
    // stepStrokeFinishedColor: color.primary,
    stepStrokeUnFinishedColor: '#aaaaaa',
    // separatorFinishedColor: color.primary,
    separatorUnFinishedColor: color.grey,
    // stepIndicatorFinishedColor: color.primary,
    // //stepIndicatorUnFinishedColor: '#ffffff',
    stepIndicatorCurrentColor: color.primary,
    stepIndicatorLabelFontSize: 13,
    currentStepIndicatorLabelFontSize: 13,
    // stepIndicatorLabelCurrentColor: color.primary,
    // stepIndicatorLabelFinishedColor: color.primary,
    // stepIndicatorLabelUnFinishedColor: '#aaaaaa',
    labelColor: '#999999',
    // //labelSize: 13,
    currentStepLabelColor: color.black,
  };

  const onPageChange = position => {
    setCurrentPosition(position);
  };

  return (
    <View style={styles.indicatorStyle}>
      <StepIndicator
        customStyles={customStyles}
        stepCount={3}
        direction="horizontal"
        onPress={onPageChange}
        currentPosition={currentPosition}
        labels={labels}
        renderStepIndicator={({position, stepStatus}) => (
          <Feather
            name={icons[position]}
            size={16}
            color='#fff'
            // color={stepStatus === 'finished' ? 'green' : 'white'}
          />
        )}
      />

      {/* {currentPosition == 0 ? (
          <SelectAddressScreen />
        ) : currentPosition == 1 ? (
          <SelectDeliverySlotScreen />
        ) :  (
          <PaymentScreen />
          )
}      */}
    </View>
  );
};

export default Indicator;
