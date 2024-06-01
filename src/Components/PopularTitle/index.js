import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'

const CATEGORIES = [
    "All",
    "Clothing",
    "Shoes",
    "Bags",
    "Accessrories",
]
const PopularTitle = () => {
    const [categoryIndex, setCategoryIndex] = useState(0)
  return (
    <View style={styles.mainContainer}>
        <View style={styles.titleContainer}>
            <Text style={styles.text1}>Most Popular</Text>
        <TouchableOpacity>
            <Text style={styles.text2}>See All</Text>
        </TouchableOpacity>
        </View>

        {/* categories section */}

        <View style={styles.scrollView}>
            <FlatList 
                data={CATEGORIES}
                horizontal 
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    paddingHorizontal: 6,
                    gap: 10
                }}
                renderItem={({item, index}) => {
                    const isSelected = categoryIndex === index;
                    return (
                        <TouchableOpacity
                        onPress={()=> setCategoryIndex(index)}
                        style={{
                            backgroundColor: isSelected ? '#fc6c85' : '#ffffff',
                            paddingHorizontal: 26,
                            paddingVertical: 16,
                            borderRadius: 40,
                            borderWidth: isSelected ? 0 : 1,
                            borderColor: '#a3a3a3',

                        }}>
                            <Text style={{
                                color: isSelected ? '#ffffff' : 'black',
                                fontWeight: '600',
                                fontSize: 16,
                                opacity: isSelected ? 1 : 0.5,
                            }}>
                                {item}
                            </Text>
                        </TouchableOpacity>
                    )}}
                    />
        </View>
    </View>
  )
}

export default PopularTitle