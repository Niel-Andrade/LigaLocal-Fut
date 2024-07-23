import React from 'react';
import { View, Text } from 'react-native';
import Header from '../components/Header';

const BroadcastChannels = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <Header navigation={navigation} />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'#FFF' }}>
        <Text>BroadcastChannels Page</Text>
      </View>
    </View>
  );
};

export default BroadcastChannels;
