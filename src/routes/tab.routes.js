import React from "react";
import { View, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Classification from "../pages/Classification";
import Teams from "../pages/Teams";
import Statistics from "../pages/Statistics";
import BroadcastChannels from "../pages/BroadcastChannels";
import Home from "../pages/Home";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { MaterialIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const TabRoutes = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: {
          backgroundColor: "#007400", // Fundo da barra de navegação
          borderTopWidth: 0,
          height: 65, // Altura da barra de navegação
        },
        tabBarIcon: ({ focused, color, size }) => {
          let IconComponent;
          let iconName;

          if (route.name === "Classification") {
            IconComponent = FontAwesome6;
            iconName = "ranking-star";
          } else if (route.name === "Teams") {
            IconComponent = FontAwesome6;
            iconName = "people-group";
          } else if (route.name === "Statistics") {
            IconComponent = FontAwesome6;
            iconName = "chart-column";
          } else if (route.name === "Home") {
            IconComponent = FontAwesome6;
            iconName = "house";
          } else if (route.name === "BroadcastChannels") {
            IconComponent = MaterialIcons;
            iconName = "live-tv";
          }

          return (
            <View style={focused ? styles.activeTab : styles.inactiveTab}>
              <IconComponent name={iconName} size={size} color={color} />
            </View>
          );
        },
        tabBarActiveTintColor: "green", // Cor do ícone ativo
        tabBarInactiveTintColor: "white", // Cor do ícone inativo
        tabBarShowLabel: false, // Esconde os rótulos
      })}
    >
      <Tab.Screen
        name="Classification"
        component={Classification}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen name="Teams" component={Teams} options={{ headerShown: false }} />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Statistics"
        component={Statistics}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="BroadcastChannels"
        component={BroadcastChannels}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  activeTab: {
    backgroundColor: "white",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,

    width: 70, // Largura do fundo do ícone ativo
    height: 65, // Altura do fundo do ícone ativo
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 25,
  },
  inactiveTab: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default TabRoutes;
