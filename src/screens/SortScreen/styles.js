import React from 'react';
import {Text, View, StyleSheet, SafeAreaView} from 'react-native';


const Sort = () => {
  return (
      <SafeAreaView style={styles.constainer}>
          <View style={{height: '70%'}}>
            <Text style={styles.heading}>Sort</Text>
            <Text style={styles.text}>Price - Low to High</Text>
            <Text style={styles.text}>Price - High to Low</Text>
            <Text style={styles.text}>Newest First</Text>
            <Text style={styles.text}>Discount</Text>
          </View>
          <View style={styles.btn}>
            <LoginBtn name={'Cancel'} />
            <Text>{'    '}</Text>
            <LoginBtn name={'Apply'} />
          </View>
      </SafeAreaView>
   
  );
};

const styles = StyleSheet.create({
    constainer: {
        marginHorizontal: 20,
    },
    heading: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '500',
        margin: 10,
        marginBottom: '15%',
    },
    text: {
        marginVertical: 7,
    },
    btn: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Sort;