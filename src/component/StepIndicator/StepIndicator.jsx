import {useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import StepIndicator from 'react-native-step-indicator';
import {Color} from '../../constant/Color';
import Feather from 'react-native-vector-icons/Feather';
import CheckOutScreen from '../../screens/CartScreen/CheckOutScreen/CheckOutScreen';
import DeliverySlotScreen from '../../screens/CartScreen/DeliverySlotScreen/DeliverySlotScreen';
import SuperFreshScreen from '../../screens/HomeScreen/HomeScreen/SuperFresh';
import styles from './Styles';
import PaymentScreen from '../../screens/CartScreen/PaymentScreen/PaymentScreen';

export const StepIndicatorProgressBar = () => {
  const [currentPosition, setCurrentPosition] = useState(0);
  const labels = ['Select Address', 'Select Delivery Slot', 'Payment'];
  const icons = ['map', 'truck', 'credit-card'];
  // const pagehandler = position => {
  //   setCurrentPosition(position);
  // };
  const customStyles = {
    currentStepStrokeWidth: 6,
    separatorUnFinishedColor: Color.greyish,
    stepStrokeCurrentColor: Color.green,
    stepStrokeWidth: 3,
    stepStrokeUnFinishedColor: '#aaaaaa',
    stepIndicatorCurrentColor: Color.green,
    stepIndicatorLabelFontSize: 13,
    currentStepIndicatorLabelFontSize: 13,
    labelColor: '#999999',
    currentStepLabelColor: Color.black,
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <StepIndicator
          customStyles={customStyles}
          stepCount={3}
          direction="horizontal"
          currentPosition={currentPosition}
          labels={labels}
          //onPress={() => pagehandler()}
          renderStepIndicator={({position, stepStatus}) => (
            <Feather name={icons[position]} size={16} color="#fff" />
          )}
        />

        {/* if(currentPosition == 0){
            <CheckOutScreen />
          }else if(currentPosition == 1 ){
            <DeliverySlotScreen />
          }  */}

        {/* if (currentPosition == 0) {<CheckOutScreen />} else if
          (currentPosition == 1) {<DeliverySlotScreen />} */}
        
          {currentPosition == 0 ? (
            <CheckOutScreen />
          ) : currentPosition == 1 ? (
            <DeliverySlotScreen />
          ) :  (
            <PaymentScreen />
          )}
        
      </View>
    </SafeAreaView>
  );
};
