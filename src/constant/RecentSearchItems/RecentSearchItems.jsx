import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'

const RecentSearchItems = ({textLeft,textCenter,textRight}) => {
  return (
    <View style={styles.main}>
        <Text style={styles.text}>{textLeft}</Text>
        <Text style={styles.text}>{textCenter}</Text>
        <Text style={styles.text}>{textRight}</Text>
      </View>
  )
}

export default RecentSearchItems