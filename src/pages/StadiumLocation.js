import React, { useEffect, useState } from "react";
import { View, StyleSheet, ActivityIndicator, Text, TouchableOpacity, Linking } from "react-native";
import MapView, { Marker, Polyline } from "react-native-maps";
import * as Location from "expo-location";
import Header from "../components/Header";
import Icon from "react-native-vector-icons/MaterialIcons";

const StadiumLocation = ({ navigation }) => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(true);

  const stadiumLocation = {
    latitude: -7.420364773376511,
    longitude: -41.918316576435835,
  };

  useEffect(() => {
    const getLocation = async () => {
      try {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          setErrorMsg("A permissão para acessar o local foi negada");
          setLoading(false);
          return;
        }

        let { coords } = await Location.getCurrentPositionAsync();
        setLocation(coords);
      } catch (error) {
        setErrorMsg(error.message);
      } finally {
        setLoading(false);
      }
    };

    getLocation();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#007400" />;
  }

  const getMapRegion = (loc1, loc2) => ({
    latitude: (loc1.latitude + loc2.latitude) / 2,
    longitude: (loc1.longitude + loc2.longitude) / 2,
    latitudeDelta: Math.abs(loc1.latitude - loc2.latitude) * 1.5,
    longitudeDelta: Math.abs(loc1.longitude - loc2.longitude) * 1.5,
  });

  const mapRegion = location
    ? getMapRegion(location, stadiumLocation)
    : {
        latitude: stadiumLocation.latitude,
        longitude: stadiumLocation.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      };

  const openInGoogleMaps = () => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${stadiumLocation.latitude},${stadiumLocation.longitude}`;
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>Localização do Estádio</Text>
        <Text style={styles.description}>
          O estádio está localizado na cidade de Santo Ínacio do Píaui. Você pode visualizar o estádio e o seu caminho até lá.
        </Text>
      </View>
      <View style={styles.viewMap}>
        <MapView style={styles.map} initialRegion={mapRegion}>
          {location && (
            <Marker coordinate={location} title="Sua Localização">
              <View style={styles.customMarker} />
            </Marker>
          )}
          <Marker coordinate={stadiumLocation} title="Estádio">
            <View>
              <Icon name="stadium" size={28} color="#007400" />
            </View>
          </Marker>
          {location && (
            <Polyline
              coordinates={[location, stadiumLocation]}
              strokeColor="#1E90FF"
              strokeWidth={2}
            />
          )}
        </MapView>
      </View>
      <View style={styles.infoContainerBottom}>
        <Text style={styles.description}>
          Você pode obter mais detalhes sobre o local, clicando no botão abaixo.
        </Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={openInGoogleMaps}>
        <Text style={styles.buttonText}>Abrir no Google Maps</Text>
      </TouchableOpacity>
      {errorMsg && <Text style={styles.TextBaseStyle}>{errorMsg}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  infoContainer: {
    padding: 15,
    backgroundColor: "#f5f5f5",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  infoContainerBottom: {
    paddingHorizontal: 30,
    paddingTop: 10,
    backgroundColor: "#f5f5f5",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: "#555",
  },
  viewMap: {
    margin: 20,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#ddd",
    height: "30%",
  },
  map: {
    flex: 1,
    borderRadius: 10,
  },
  button: {
    margin: 20,
    padding: 15,
    backgroundColor: "green",
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  customMarker: {
    backgroundColor: "#000080",
    width: 20,  
    height: 20, 
    borderRadius: 10, 
  },
  TextBaseStyle:{
    color: "red",
    textAlign: "center",
    fontSize: 16,
  }
});

export default StadiumLocation;
