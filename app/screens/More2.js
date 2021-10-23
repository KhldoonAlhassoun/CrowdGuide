/* import * as React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Ionicons from "react-native-vector-icons/Ionicons";
// https://ionic.io/ionicons/v4/cheatsheet.html
const Stack = createStackNavigator();

function PageMore({ navigation }) {
	return (
		<View style={styles.page}>
			<Text style={styles.pageTitle}>More</Text>
			<View style={styles.container}>
				<InfoButton
					title="Rate us"
					icon="star"
					onPress={() => navigation.navigate("Rate us")}
				/>
				<InfoButton
					title="About us"
					icon="information-circle"
					onPress={() => navigation.navigate("About us")}
				/>
				<InfoButton
					title="Contact us"
					icon="mail-open"
					onPress={() => navigation.navigate("Contact us")}
				/>
				<InfoButton
					title="Support us"
					icon="heart"
					onPress={() => navigation.navigate("Support us")}
				/>
				<InfoButton
					title="Settings"
					icon="settings"
					onPress={() => navigation.navigate("Settings")}
				/>
			</View>
		</View>
	);
}

function InfoButton(props) {
	return (
		<View>
			<TouchableOpacity onPress={props.onPress} style={styles.button}>
				<span>
					<Ionicons name={props.icon} color="black" size="large" />
					<Text style={styles.buttonText}>{props.title}</Text>
				</span>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	page: {
		flex: 1,
		backgroundColor: "white",
		alignItems: "center",
	},
	container: {
		flex: 1,
		justifyContent: "center",
	},
	pageTitle: {
		backgroundColor: "white",
		color: "black",
		fontSize: 28,
		margin: 10,
		alignContent: "center",
	},
	pageBody: {
		backgroundColor: "white",
		color: "#333",
		fontSize: 20,
		margin: 10,
		alignContent: "center",
	},
	button: {
		backgroundColor: "white",
		padding: 20,
		borderRadius: 5,
		marginBottom: 0,
		alignItems: "center",
		borderWidth: 1,
		width: 500,
		margin: 0,
	},
	buttonText: {
		fontSize: 20,
		color: "black",
	},
});
export default More1;
 */
