import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {ScrollView} from 'react-native-virtualized-view';
import moment from 'moment';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';
import {DeliverySlotData, DeliveryTimeSlot} from '../../../dummyData/Cards';
import {Color} from '../../../constant/Color';

const DeliverySlotScreen = () => {
  const navigation = useNavigation();

  
  const DeliverySlot = ({item}) => {
    return (
      <View style={styles.deliverySlotContainer}>
        <TouchableOpacity >
          <Text style={styles.day}>{item.day}</Text>
          <Text>{item.date}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  // let a = moment().format('dddd');
  // console.log(a)
  const TimeSlot = ({item}) => {
    return (
      <View style={styles.deliveryTimeSlotContainer}>
        <View style={styles.deliveryTimeSlot}>
          <Text style={styles.text}>{item.time}</Text>
          <Text style={styles.text}>{item.deliveryChanrge}</Text>
          <TouchableOpacity style={styles.timeSlotButtonContainer}>
            <Text style={styles.timeSlotButtonText}>Choose</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.headerBar}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="chevron-left" size={30} />
          </TouchableOpacity>
          <Text style={styles.header}>DeliverySlotScreen</Text>
        </View>
        <View style={styles.containerBody}>
          <Text style={styles.headerTitle}>Reserve your delivery slot</Text>
        </View>

        <FlatList
          data={DeliverySlotData}
          renderItem={DeliverySlot}
          keyExtractor={item => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
        <FlatList
          data={DeliveryTimeSlot}
          renderItem={TimeSlot}
          keyExtractor={item => item.id}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default DeliverySlotScreen;
