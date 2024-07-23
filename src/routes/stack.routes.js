import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DrawerRoutes from './drawer.routes';
import StadiumLocation from '../pages/StadiumLocation';
import Search from './../pages/Search';
import SearchHeader from "./../components/SearchHeader";

const Stack = createNativeStackNavigator();

const StackRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Home" 
        component={DrawerRoutes} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="Localization" 
        component={StadiumLocation} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen
        name="Search"
        component={Search}
        options={{
          header: ({ navigation }) => (
            <SearchHeader
              onSearch={(query) => {
                // Adicione a lógica para lidar com a pesquisa
                console.log("Search query:", query);
              }}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default StackRoutes;
