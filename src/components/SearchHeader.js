import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SearchHeader = ({ onSearch }) => {
  const [query, setQuery] = React.useState('');
  const navigation = useNavigation();

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.button}>
        <Image
          source={require("../../assets/back-icon.png")}
          style={styles.icon}
        />
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        placeholder="Times..."
        value={query}
        onChangeText={setQuery}
        placeholderTextColor={"#FFF"}
      />
      <TouchableOpacity onPress={handleSearch} style={styles.searchButton}>
        <Text style={styles.searchButtonText}>Search</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#007400',
    borderBottomRightRadius:50,
    borderBottomLeftRadius:50,
  },
  button: {
    padding: 10,
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: "#FFF",
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#FFF',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    color: "#FFF",
  },
  searchButton: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  searchButtonText: {
    color: '#FFF',
    fontSize: 16,
    backgroundColor: '#1ebe23',
    padding:5,
    borderRadius: 6,
  },
});

export default SearchHeader;
