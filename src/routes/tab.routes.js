import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Classification from "../pages/Classification";
import Teams from "../pages/Teams";
import Statistics from "../pages/Statistics";
import BroadcastChannels from "../pages/BroadcastChannels";
import Home from "../pages/Home";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { MaterialIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const TabRoutes = () => {
  return (
    <Tab.Navigator
      initialRouteName="Início"
      screenOptions={({ route }) => ({
        tabBarStyle: {
          backgroundColor: "#007400",
          height: 65,
        },
        tabBarIcon: ({ focused, color, size }) => {
          let IconComponent;
          let iconName;

          if (route.name === "Início") {
            IconComponent = FontAwesome6;
            iconName = "house";
          } else if (route.name === "Equipes") {
            IconComponent = FontAwesome6;
            iconName = "people-group";
          } else if (route.name === "Estatísticas") {
            IconComponent = FontAwesome6;
            iconName = "chart-column";
          } else if (route.name === "Classificação") {
            IconComponent = FontAwesome6;
            iconName = "ranking-star";
          } else if (route.name === "Canais") {
            IconComponent = MaterialIcons;
            iconName = "live-tv";
          }

          return (
            <View style={focused ? styles.activeTab : styles.inactiveTab}>
              <IconComponent name={iconName} size={size} color={color} />
            </View>
          );
        },
        tabBarLabel: ({ focused }) => {
          return (
            <Text
              style={[
                styles.tabLabel,
                { fontWeight: "bold", color: focused ? "#000" : "#FFFFFF" },
              ]}
            >
              {route.name}
            </Text>
          );
        },
        tabBarActiveTintColor: "#000",
        tabBarInactiveTintColor: "#FFFFFF",
        tabBarShowLabel: true,
        headerShown: false,
      })}
    >
      <Tab.Screen name="Classificação" component={Classification} />
      <Tab.Screen name="Equipes" component={Teams} />
      <Tab.Screen name="Início" component={Home} />
      <Tab.Screen name="Estatísticas" component={Statistics} />
      <Tab.Screen name="Canais" component={BroadcastChannels} />
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
    width: 70,
    height: 65,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 25,
  },
  inactiveTab: {
    justifyContent: "center",
    alignItems: "center",
  },
  tabLabel: {
    fontSize: 10,
    margin: 5,
    marginTop: 0,
    textAlign: "center",
  },
});

export default TabRoutes;