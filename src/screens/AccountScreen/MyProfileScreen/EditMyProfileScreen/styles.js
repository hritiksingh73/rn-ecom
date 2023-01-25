import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Color} from '../../../../constant/Color';

const styles = StyleSheet.create({
  headerBar: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: '5%',
  },
  header: {
    fontSize: 22,
    color: Color.black,
    fontWeight: '500',
    textAlign: 'center',
    flex: 1,
  },
  avator: {
    alignItems: 'center',
    marginTop: '5%',
    paddingBottom: 20,
  },
  uploadPhoto: {
    fontSize: 15,
    color: Color.green,
    fontWeight: '500',
    textAlign: 'center',
  },
  textInputheaderContainer: {
    flexDirection: 'row',
    paddingTop: 20,
  },
  firstNameheaderContainer: {
    width: '50%',
    left: 20,
  },
  halfInputContainer: {
    width: '58%',
  },
  firstName: {
    width: '80%',
  },
  lastName: {
    fontSize: 15,
    width: '80%',
  },
  firstNameContainer: {
    width: '50%',
    left: 20,
  },
  registeremail: {
    width: '90%',
  },
  registeremailContainer: {
    left: 20,
    paddingVertical: 30,
  },
  phoneNumberContainer: {
    left: 20,
  },
  phoneNumber: {
    width: '90%',
  },
  saveButtonContainer: {
    alignItems: 'center',
    paddingTop: 50,
  },
  saveButton: {
    width: 140,
    height: 40,
    alignItems: 'center',
    textAlign: 'center',
    paddingTop: 10,
    backgroundColor: Color.green,
    color: Color.white,
  },
});

export default styles;
