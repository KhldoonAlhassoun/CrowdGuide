//import { StatusBar } from "expo-status-bar";
// import React in our code
import React, { useState, useEffect } from 'react';
import { SearchBar } from 'react-native-elements';
import { Text, View, StyleSheet, Button, SafeAreaView, FlatList } from 'react-native';
 
export default function Search() {
 
  const [search, setSearch] = useState('');
  //Get locations near the user to be added to search tips
  const [nearbyLocationsList, setNearbyLocationsList] = useState();
 
  return (
    <SafeAreaView style={{flex:1}} >
      <View style={styles.container}>
        <SearchBar        
            searchIcon={{ size: 24 }}
            onChangeText={(text) => setSearch(text)}
            onClear={(text) => setSearch('')}
            placeholder={"Search location..."}
            value={search}
            platform={"ios"}
            />
      </View>
    </SafeAreaView>
 
  );
}
 
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 4,
    backgroundColor: 'white',
    
  },
});
 
 

