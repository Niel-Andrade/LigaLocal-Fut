import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DrawerRoutes from "./drawer.routes";
import Search from "./../pages/Search";
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
        name="Search"
        component={Search}
        options={{
          header: ({ navigation }) => (
            <SearchHeader
              onSearch={(query) => {
                console.log("Search query:", query); //Testando se o input está recebendo o valor
              }}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default StackRoutes;
