import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'
import Title from '../Title';

const Category = () => {
    const carouselData = [
        {
            id: '01',
            image: require('/Users/samriddhisharma/online-shopping/assets/Frame 20.png'),
            title: 'Clothes',
        },
        {
            id: '02',
            image: require('/Users/samriddhisharma/online-shopping/assets/Frame 21.png'),
            title: 'Shoes',
        },
        {
            id: '03',
            image: require('/Users/samriddhisharma/online-shopping/assets/Frame 28.png'),
            title: 'Bags',
        },
    ];
    const renderItem = ({item, index}) => {
        return(
            <TouchableOpacity >
                <Image source={item.image} style={{height: 85, width: 85, justifyContent: 'space-between'}}/>
                <Text style={styles.textContainer}>{item.title}</Text>
            </TouchableOpacity>
        )
    }
  return (
    <View style={styles.mainContainer}>
        <FlatList
            data={carouselData} 
            renderItem={renderItem} 
            keyExtractor={(item) => item.id}
            horizontal={true}
            onScroll={false}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
                // paddingHorizontal: 20,
                gap: 30
            }}
        />
    </View>
  )
}

export default Category