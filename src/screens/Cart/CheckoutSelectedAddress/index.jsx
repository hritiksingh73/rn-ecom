import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {SelectedAddress} from '../../../redux/action/action';
import {StyleSheet} from 'react-native';
import PrimaryButton from '../../../components/PrimaryButton';
import colors from '../../../constants/colors';

const Addresses = ({navigation}) => {
  const {width} = useWindowDimensions();

  const dispatch = useDispatch();
  const userAddresses = useSelector(state => state.user.userAddresses);

  const addressHandler = item => {
    dispatch(SelectedAddress(item));
  };

  return (
    <View>
      <FlatList
        data={userAddresses}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => {
          return (
            <View style={[styles.addressContainer, {width: width - 60}]}>
              <Text style={styles.title}>
                {item.firstName} {item.lastName}
              </Text>
              <Text style={styles.description}>
                {item.apartment}, {item.block}-block {item.street} {item.area}{' '}
                {item.addressType}
              </Text>
              <PrimaryButton
                name={'Deliver here'}
                btnAlign="flex-start"
                onPress={() => addressHandler(item)}
              />
            </View>
          );
        }}
      />

      <View style={styles.btnAlign}>
        <TouchableOpacity style={styles.loginTxtArea}>
          <Text style={styles.loginBtn}>Add New Address</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  addressContainer: {
    margin: 16,
    marginRight: 0,
    padding: 20,
    borderWidth: 1,
    borderColor: colors.gray_70,
    borderRadius: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
  },
  description: {
    textAlign: 'justify',
    marginVertical: 20,
  },
  primaryButtomStyle: {},

  loginBtn: {
    textAlign: 'center',
    fontWeight: '500',
    paddingVertical: 14,
    fontSize: 16,
    paddingHorizontal: 35,
    color: colors.gray,
  },
  loginTxtArea: {
    margin: 10,
    borderRadius: 3,
    borderWidth: 1,
    backgroundColor: colors.white,
    borderColor: colors.gray,
  },
  btnAlign: {
    alignItems: 'center',
  },
});

export default Addresses;
