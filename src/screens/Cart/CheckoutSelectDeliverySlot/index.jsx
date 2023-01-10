import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Timings} from '../../../data/cartScreen';
import {timeZone} from '../../../utils';
import {useDispatch} from 'react-redux';
import {DeliveryDate, DeliveryTime} from '../../../redux/action/action';
import PrimaryButton from '../../../components/PrimaryButton';
import globaStyle from '../../../constants/globalStyle';
import colors from '../../../constants/colors';

const DeliverySlot = () => {
  const dispatch = useDispatch();
  
  const timeSelectedHandler = item => {
    dispatch(DeliveryTime(item))
  };
  
  const TimingHandler = item => {
    dispatch(DeliveryDate(item))
  };
  
  const DeliveryTiming = ({item}) => {
    return (
      <View style={styles.listContainer}>
        <Text style={styles.listFontStyle}>{item.time}</Text>
        <Text style={styles.listFontStyle}> $ 4.00 </Text>
        <View style={styles.buttonContainer}>
          <PrimaryButton
            name={'Choose'}
            onPress={() => timeSelectedHandler(item.time)}
            btnAlign="flex-start"
            padHorizontal={17}
            bgColor={colors.white}
            borderColor={colors.gray_70}
            fontColor={colors.gray}
            fontSize={14}
          />
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.pageLayout}>
          <View style={styles.headingContainer}>
            <Text style={globaStyle.heading}>Reserve your delivery slot</Text>
          </View>

          <FlatList
            data={timeZone}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => {
              return (
                <TouchableOpacity onPress={() => TimingHandler(item)}>
                  <View style={styles.dateTimeContainer}>
                    <Text style={styles.dayStyle}>{item.day}</Text>
                    <Text style={styles.dateStyle}>
                      {item.date} {item.month}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            }}
          />

          <FlatList
            data={Timings}
            showsHorizontalScrollIndicator={false}
            renderItem={DeliveryTiming}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  pageLayout: {
    marginHorizontal: '4%',
  },
  headingContainer: {
    marginVertical: 20,
  },
  listContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.gray_70,
    borderRadius: 3,
    marginVertical: 8,
    paddingLeft: 15,
  },
  listFontStyle: {
    fontWeight: '600',
  },
  buttonContainer: {
    margin: 10,
  },
  dateTimeContainer: {
    margin: 10,
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: colors.lightgray,
  },
  ifSelectedDateTimeContainer: {
    margin: 10,
    paddingHorizontal: 18,
    paddingVertical: 10,
    backgroundColor: colors.green,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: colors.green,
  },
  dayStyle: {
    fontSize: 16,
    fontWeight: '500',
  },
  dateStyle: {
    color: colors.gray,
    marginVertical: 2,
  },
  ifSelectedDayTime: {
    color: colors.white,
  }
});

export default DeliverySlot;
