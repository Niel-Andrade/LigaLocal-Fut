import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TabRoutes from "./tab.routes";
import Profile from "../pages/Profile";
import StadiumLocation from "../pages/StadiumLocation";

const Drawer = createDrawerNavigator();

const DrawerRoutes = () => {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="Inicio" component={TabRoutes} />
      <Drawer.Screen name="Perfil" component={Profile} />
      <Drawer.Screen
        name="Localização do Estádio"
        component={StadiumLocation}
      />
    </Drawer.Navigator>
  );
};

export default DrawerRoutes;
