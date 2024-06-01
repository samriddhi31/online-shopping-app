import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'

const DiscountBanner = () => {

    const [activeIndex, setActiveIndex] = useState(0);
    const carouselData = [
        {
            id: '01',
            image: require('/Users/samriddhisharma/online-shopping/assets/Banner.png'),
        },
        {
            id: '02',
            image: require('/Users/samriddhisharma/online-shopping/assets/Banner.png'),
        },
    ];

    

    const  handleScroll = (event) => {
        //get the scroll position
        const scrollPosition = event.nativeEvent.contentOffset.x;
        console.log({scrollPosition});

        //get the index of current active item
        const index = scrollPosition / 378;
        console.log({index});

        //update the index
        setActiveIndex(index);
    }

    //Dot indicators
    const renderDotIndicators = () => {
        return carouselData.map((dot, index) => {
            if (activeIndex === index) {
                return(
                    <View style={styles.dotIndicatorStyle2}>     
                    </View>
                );
            } else {
                return(
                    <View 
                        key={index}
                        style={styles.dotIndicatorStyle}>
                    </View>
                );
            }  
            });
    };

    //Display images
    const renderItem = ({item, index}) => {
        return(
            <View>
                <Image source={item.image} style={{height: 137, width: 352, 
        position: 'relative',}}/>
            </View>
        )
    }
  return (
    <View style={styles.mainContainer}>
      <View style={styles.mainContainer1}>
        <FlatList 
            data={carouselData} 
            renderItem={renderItem} 
            keyExtractor={(item) => item.id}
            horizontal={true} 
            pagingEnabled={true} 
            onScroll={handleScroll}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
                paddingHorizontal: 20,
                gap: 18
            }}
        />
        <View style={styles.dotIndicatorView}>
            {renderDotIndicators()}
        </View>
      </View>
    </View>
  )
}

export default DiscountBanner