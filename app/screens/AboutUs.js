import * as React from "react";
import { Text, View, StyleSheet, Button } from "react-native";

function AboutUs({ navigation }) {
	return (
		<View>
			<Text>About us</Text>
			<Text>
				Vi ar en projekt grupp som jobbar med en HI-FI prototyp.
			</Text>
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
});
export default AboutUs;
