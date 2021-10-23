import * as React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
function RateUs({ navigation }) {
	return (
		<View style={styles.page}>
			<Text style={styles.pageTitle}>Rate us</Text>
			<Text style={styles.pageBody}>Good app?</Text>
			<Button
				title="Go to Profile"
				onPress={() => navigation.navigate("MoreScreen")}
			/>
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
export default RateUs;
