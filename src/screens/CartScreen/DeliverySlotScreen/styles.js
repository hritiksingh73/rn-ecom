import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Color} from '../../../constant/Color';

const styles = StyleSheet.create({
  headerBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '5%',
  },
  header: {
    fontSize: 20,
    color: Color.black,
    fontWeight: '500',
    textAlign: 'center',
    flex: 1,
  },
  containerBody: {
    paddingLeft: '3%',
  },
  headerTitle: {
    fontSize: 20,
    color: Color.black,
    paddingVertical:15
  },
  day:{
    color: Color.black,
    fontWeight: '700',
    fontSize: 18,
  },
  text: {
    color: Color.black,
    fontWeight: '700',
    fontSize: 15,
  },
  deliverySlotContainer: {
    borderWidth: 1,
    width: 110,
    height: 50,
    alignItems: 'center',
    borderColor: Color.greyish,
  },
  deliveryTimeSlotContainer: {
    borderWidth: 1,
    borderColor: Color.greyish,
    height: 50,
    marginHorizontal: 10,
    justifyContent: 'center',
    marginTop: 20,
  },
  deliveryTimeSlot: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  timeSlotButtonContainer: {
    width: 100,
    height: 35,
  },
  timeSlotButtonText: {
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop:5,
    width: 100,
    height: 35,
    backgroundColor:Color.green
  },
});

export default styles;
