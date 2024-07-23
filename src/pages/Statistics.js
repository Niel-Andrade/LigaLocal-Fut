import React from 'react';
import { View, Text } from 'react-native';
import Header from '../components/Header';

const Statistics = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <Header navigation={navigation} />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor:'#FFF' }}>
        <Text>Statistics Page</Text>
      </View>
    </View>
  );
};

export default Statistics;
