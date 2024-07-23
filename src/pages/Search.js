// pages/Search.js
import React from 'react';
import { View, Text } from 'react-native';
import Header from '../components/Header';

const Search = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <Header navigation={navigation} showHeader={false} />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'#FFF' }}>
        <Text>Search Page </Text>
      </View>
    </View>
  );
};

export default Search;
