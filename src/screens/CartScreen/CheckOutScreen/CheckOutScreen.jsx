import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Plus from 'react-native-vector-icons/AntDesign';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {FlatList} from 'react-native-gesture-handler';
// import StepIndicator from 'react-native-step-indicator';
// import {
//   StepIndicatorProgressBar,
// } from '../../../component/StepIndicator/StepIndicator';
import {Color} from '../../../constant/Color';
import {selectDeliveryaddress} from '../../../redux/action/Action';
import {uidGenerator} from '../../../utils/uidGenerator';

const CheckOutScreen = () => {
  const navigation = useNavigation();
  const address = useSelector(state => state.userInfo.userAddressList);
  // console.log(address.id)
  const [selected, setSelected] = useState(false);
  const dispatch = useDispatch();



  const selectAddressHandler = item => {
    
    dispatch(selectDeliveryaddress(item));
  };

  const customerData = ({item}) => {
    //  console.log(item)
    return (
      <View
        style={[
          styles.addressContainer,
          selected ? {borderColor: Color.green} : {borderColor: Color.black},
        ]}>
        <View style={styles.recipientName}>
          <View style={styles.customerName}>
            <Text style={styles.userName}>
              {item.firstName} {item.lastName}
            </Text>
          </View>
        </View>
        <Text>
          {item.area}
          {item.block}
        </Text>
        <Text>
          {item.address} {item.street} {item.appartment}
        </Text>
        <TouchableOpacity
          style={styles.deliverButtonContainer}
          onPress={() => selectAddressHandler(item)}>
          <Text style={styles.deliverHere}>Deliver here</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.containerBody}>
        <FlatList
          data={address}
          renderItem={customerData}
          keyExtractor={item => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
        <TouchableOpacity
          style={styles.addNewAddressButtonContainer}
          onPress={() => navigation.navigate('AddAddressScreen')}>
          <Plus name="pluscircleo" size={18} />
          <Text style={styles.addNewAdddressButton}>Add New Address</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.saveAndNextButtonContainer}
          // onPress={() => navigation.navigate('DeliverySlotScreen')}
        >
          <Text style={styles.saveAndNextButton}>Save & Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CheckOutScreen;
