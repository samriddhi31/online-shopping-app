import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import Header from '../Components/Header';
import Search from '../Components/Search';
import Title from '../Components/Title';
import PopularTitle from '../Components/PopularTitle';
import DiscountBanner from '../Components/DiscountBanner';
import Category from '../Components/Category';
import ProductList from '../Components/ProductList';

const HomeScreen = () => {
  return (
    <SafeAreaView style={{paddingVertical:24, gap: 24}}>
    <Header />
      <ScrollView>
              <Search />
              <Title />
              <DiscountBanner/>
              <Category />
              <PopularTitle />
              {/* product listings */}
              <View style={{
                flexDirection: 'row',
              }}>
                <ProductList />
                <ProductList />
              </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen;