import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'

const Title = () => {
  return (
    <View style={styles.mainContainer}>
        <View style={styles.titleContainer}>
            <Text style={styles.text1}>Special Offers</Text>
        <TouchableOpacity>
            <Text style={styles.text2}>See All</Text>
        </TouchableOpacity>
        </View>
    </View>
  )
}

export default Title