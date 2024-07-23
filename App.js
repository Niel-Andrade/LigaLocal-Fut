// appCampeonato/App.js
import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StackRoutes from './src/routes/stack.routes';

const Header = () => (
  <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10, paddingTop:35, backgroundColor: '#007400' }}>
    {/* Ícone de hambúrguer, logo e ícone de pesquisa */}
  </View>
);

export default function App() {
  return (
    <NavigationContainer>
      <View style={{ flex: 1 }}>
        <Header />
        <StackRoutes />
      </View>
    </NavigationContainer>
  );
}
