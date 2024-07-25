import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import Header from '../components/Header';
import { Picker } from '@react-native-picker/picker';

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('pt-BR');
};

const Home = ({ navigation }) => {
  const [selectedSeason, setSelectedSeason] = useState("Temporada 2023");

  const matchesData = {
    "Temporada 2023": [
      {
        id: 1,
        teamA: { name: "Brejo Das Pedras", image: "https://instagram.fpcs1-1.fna.fbcdn.net/v/t51.2885-19/418035845_732975902105706_1234768749521461801_n.jpg?_nc_ht=instagram.fpcs1-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=0zcPy1YxFgQQ7kNvgF4bmuW&edm=AEhyXUkBAAAA&ccb=7-5&oh=00_AYCHrCC0caGlzH3aLhkDeWsY0s4-MvrUV72kzJzZWEzQhw&oe=66A628C8&_nc_sid=8f1549" },
        teamB: { name: "Vila Nova", image: "https://instagram.fpcs1-1.fna.fbcdn.net/v/t51.2885-19/399423799_299260709645110_1894824303615874438_n.jpg?_nc_ht=instagram.fpcs1-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=HvsFGoPHqMcQ7kNvgFNuE7C&edm=AEhyXUkBAAAA&ccb=7-5&oh=00_AYCaVpV3HcR0s7AMZ1jIQXOUOCEJUF0sa9AYyRda-FAg4w&oe=66A5FBF0&_nc_sid=8f1549" },
        date: "2023-08-15",
        time: "16:30",
        score: "2 X 1"
      },
      {
        id: 2,
        teamA: { name: "Melancias", image: "https://instagram.fpcs1-1.fna.fbcdn.net/v/t51.2885-19/432420771_302037779564284_860280974652940585_n.jpg?_nc_ht=instagram.fpcs1-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=zA0d2jecBpkQ7kNvgGDMLQc&edm=AEhyXUkBAAAA&ccb=7-5&oh=00_AYBAovl8nwLYi_-GqPfOtuWocxYBdsRKVN-cGmN4rimPpg&oe=66A62C34&_nc_sid=8f1549" },
        teamB: { name: "100% Piaui", image: "https://instagram.fpcs1-1.fna.fbcdn.net/v/t51.2885-19/412428037_872955677893449_2578317075381908579_n.jpg?_nc_ht=instagram.fpcs1-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=gPPGZ7EgZHYQ7kNvgEmRhp1&edm=AEhyXUkBAAAA&ccb=7-5&oh=00_AYCVAX56BeVHtcLLHWo2vAxNhMGrco1tbIea383U12PiPw&oe=66A63347&_nc_sid=8f1549" },
        date: "2023-08-16",
        time: "18:30",
        score: null
      },
      {
        id: 3,
        teamA: { name: "Brejo Das Pedras", image: "https://instagram.fpcs1-1.fna.fbcdn.net/v/t51.2885-19/418035845_732975902105706_1234768749521461801_n.jpg?_nc_ht=instagram.fpcs1-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=0zcPy1YxFgQQ7kNvgF4bmuW&edm=AEhyXUkBAAAA&ccb=7-5&oh=00_AYCHrCC0caGlzH3aLhkDeWsY0s4-MvrUV72kzJzZWEzQhw&oe=66A628C8&_nc_sid=8f1549" },
        teamB: { name: "Vila Nova", image: "https://instagram.fpcs1-1.fna.fbcdn.net/v/t51.2885-19/399423799_299260709645110_1894824303615874438_n.jpg?_nc_ht=instagram.fpcs1-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=HvsFGoPHqMcQ7kNvgFNuE7C&edm=AEhyXUkBAAAA&ccb=7-5&oh=00_AYCaVpV3HcR0s7AMZ1jIQXOUOCEJUF0sa9AYyRda-FAg4w&oe=66A5FBF0&_nc_sid=8f1549" },
        date: "2023-08-15",
        time: "16:30",
        score: "2 X 1"
      },
      {
        id: 4,
        teamA: { name: "Melancias", image: "https://instagram.fpcs1-1.fna.fbcdn.net/v/t51.2885-19/432420771_302037779564284_860280974652940585_n.jpg?_nc_ht=instagram.fpcs1-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=zA0d2jecBpkQ7kNvgGDMLQc&edm=AEhyXUkBAAAA&ccb=7-5&oh=00_AYBAovl8nwLYi_-GqPfOtuWocxYBdsRKVN-cGmN4rimPpg&oe=66A62C34&_nc_sid=8f1549" },
        teamB: { name: "100% Piaui", image: "https://instagram.fpcs1-1.fna.fbcdn.net/v/t51.2885-19/412428037_872955677893449_2578317075381908579_n.jpg?_nc_ht=instagram.fpcs1-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=gPPGZ7EgZHYQ7kNvgEmRhp1&edm=AEhyXUkBAAAA&ccb=7-5&oh=00_AYCVAX56BeVHtcLLHWo2vAxNhMGrco1tbIea383U12PiPw&oe=66A63347&_nc_sid=8f1549" },
        date: "2023-08-16",
        time: "18:30",
        score: null
      },
      {
        id: 5,
        teamA: { name: "Brejo Das Pedras", image: "https://instagram.fpcs1-1.fna.fbcdn.net/v/t51.2885-19/418035845_732975902105706_1234768749521461801_n.jpg?_nc_ht=instagram.fpcs1-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=0zcPy1YxFgQQ7kNvgF4bmuW&edm=AEhyXUkBAAAA&ccb=7-5&oh=00_AYCHrCC0caGlzH3aLhkDeWsY0s4-MvrUV72kzJzZWEzQhw&oe=66A628C8&_nc_sid=8f1549" },
        teamB: { name: "Vila Nova", image: "https://instagram.fpcs1-1.fna.fbcdn.net/v/t51.2885-19/399423799_299260709645110_1894824303615874438_n.jpg?_nc_ht=instagram.fpcs1-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=HvsFGoPHqMcQ7kNvgFNuE7C&edm=AEhyXUkBAAAA&ccb=7-5&oh=00_AYCaVpV3HcR0s7AMZ1jIQXOUOCEJUF0sa9AYyRda-FAg4w&oe=66A5FBF0&_nc_sid=8f1549" },
        date: "2023-08-15",
        time: "16:30",
        score: "2 X 1"
      },
      {
        id: 6,
        teamA: { name: "Melancias", image: "https://instagram.fpcs1-1.fna.fbcdn.net/v/t51.2885-19/432420771_302037779564284_860280974652940585_n.jpg?_nc_ht=instagram.fpcs1-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=zA0d2jecBpkQ7kNvgGDMLQc&edm=AEhyXUkBAAAA&ccb=7-5&oh=00_AYBAovl8nwLYi_-GqPfOtuWocxYBdsRKVN-cGmN4rimPpg&oe=66A62C34&_nc_sid=8f1549" },
        teamB: { name: "100% Piaui", image: "https://instagram.fpcs1-1.fna.fbcdn.net/v/t51.2885-19/412428037_872955677893449_2578317075381908579_n.jpg?_nc_ht=instagram.fpcs1-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=gPPGZ7EgZHYQ7kNvgEmRhp1&edm=AEhyXUkBAAAA&ccb=7-5&oh=00_AYCVAX56BeVHtcLLHWo2vAxNhMGrco1tbIea383U12PiPw&oe=66A63347&_nc_sid=8f1549" },
        date: "2023-08-16",
        time: "18:30",
        score: null
      }
      
      
    ],
    "Temporada 2024": [
      {
        id: 1,
        teamA: { name: "Araras FC", image: "https://upload.wikimedia.org/wikipedia/pt/8/83/Uni%C3%A3o_S%C3%A3o_Jo%C3%A3o.png" },
        teamB: { name: "Dragões do Sul", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa6YZKaZFaEM1lNLuH6goRJ4LsUEJQBvmfeg&s" },
        date: "2024-08-15",
        time: "18:00",
        score: null
      },
      {
        id: 2,
        teamA: { name: "Guardiões", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNKxn4ftSPD9CiylHcXvojwZ65148kimG-8g&s" },
        teamB: { name: "Lobos da Serra", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMCrL5GsFwilHdKQgucicpPZ-byJ8cEqQ0oA&s" },
        date: "2024-08-16",
        time: "20:00",
        score: null
      },
    ],
  };

  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <View style={styles.content}>
        <Text style={styles.title}>Partidas</Text>
        <Picker
          selectedValue={selectedSeason}
          style={styles.picker}
          onValueChange={setSelectedSeason}
        >
          <Picker.Item label="Temporada 2023" value="Temporada 2023" />
          <Picker.Item label="Temporada 2024" value="Temporada 2024" />
        </Picker>
        <ScrollView style={styles.matchesList}>
          {matchesData[selectedSeason].map((match) => (
            <View key={match.id} style={styles.matchContainer}>
              <View style={styles.teamContainer}>
                <Image source={{ uri: match.teamA.image }} style={styles.teamImage} />
                <Text style={styles.teamName}>{match.teamA.name}</Text>
              </View>
              <View style={styles.matchDetails}>
                <Text style={styles.versus}>{match.score || 'X'}</Text>
                <Text style={styles.dateTime}>{formatDate(match.date)}</Text>
                <Text style={styles.dateTime}>{match.time}</Text>
              </View>
              <View style={styles.teamContainer}>
                <Image source={{ uri: match.teamB.image }} style={styles.teamImage} />
                <Text style={styles.teamName}>{match.teamB.name}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F2F5',
  },
  content: {
    flex: 1,
    padding: 20,

    backgroundColor: '#FFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  picker: {
    height: 50,
    width: '100%',
    backgroundColor: '#F7F7F8',
    borderRadius: 10,
    marginBottom: 20,
  },
  matchesList: {
    flex: 1,
  },
  matchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  teamContainer: {
    alignItems: 'center',
    width: '30%',
  },
  teamImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 5,
  },
  teamName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    textAlign: "center",
  },
  matchDetails: {
    alignItems: 'center',
    width: '40%',
  },
  versus: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  dateTime: {
    fontSize: 16,
    color: '#555',
  },
});

export default Home;
