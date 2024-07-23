import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import Header from '../components/Header';

const Home = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <Header navigation={navigation} />
      <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor:'#FFF'}}>
        <Text style={Styles.TextTitulo}>Jogos do Campeonato Municipal de Santo Ínacio do Píaui.</Text>
      </View>
    </View>
  );
};

Styles = StyleSheet.create({
  TextTitulo: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  }
})

export default Home;
