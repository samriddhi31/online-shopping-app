import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import styles from './styles'
import { PageInfo, SearchIcon } from '../../../assets'

const Search = () => {
  return (
    <View style={{flexDirection: 'row', paddingHorizontal: 24}}>
        <TouchableOpacity style={styles.mainContainer}>
            <Image
            style={styles.SearchIcon}
            source={(SearchIcon)}
            />
            <Text style={styles.searchText}>
                Search
            </Text>
            <Image 
            style={styles.searchFilter}
            source={PageInfo}
            />
        </TouchableOpacity>
      
    </View>
  )
}

export default Search