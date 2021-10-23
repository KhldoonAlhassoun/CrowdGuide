/* //import { StatusBar } from "expo-status-bar";
// import React in our code
import React, { useState, useEffect } from "react";
import { SearchBar } from "react-native-elements";
import {
	Text,
	View,
	StyleSheet,
	Button,
	SafeAreaView,
	FlatList,
} from "react-native";
import react from "react";

function SearchBar() {
	const [search, setSearch] = useState("");

	const updateSearch = (text) => {
		this.setSearch({ text });
	};

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<View style={styles.container}>
				<SearchBar
					round
					searchIcon={{ size: 24 }}
					onChangeText={(text) => updateSearch(text)}
					onClear={(text) => updateSearch("")}
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
		//alignItems: 'center',
		justifyContent: "center",
		padding: 24,
		backgroundColor: "white",
	},
	paragraph: {
		margin: 24,
		marginTop: 0,
		fontSize: 14,
		fontWeight: "bold",
		textAlign: "center",
	},
	logo: {
		height: 128,
		width: 128,
	},
});
export default SearchBar;
 */
