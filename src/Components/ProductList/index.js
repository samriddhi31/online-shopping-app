import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import AntDesign from 'react-native-vector-icons/AntDesign';

const ProductList = () => {
    const [isLiked, setIsLiked] = useState(false);
  return (
    <View style={styles.container}>
      <Image source={require('/Users/samriddhisharma/online-shopping/assets/productImage2.jpeg')}
      style={styles.coverImage}/>
      <TouchableOpacity onPress={()=> setIsLiked(!isLiked)} style={styles.likeContainer}>
        {
            isLiked ? (
                <AntDesign name={'heart'} size={20} color={"#E55B5B"}/>
            ) : (
                <AntDesign name={'hearto'} size={20} color={"#E55B5B"}/>
            )} 
      </TouchableOpacity>
    </View>
  )
}

export default ProductList