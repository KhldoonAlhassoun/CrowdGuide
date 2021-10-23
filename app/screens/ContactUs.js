import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
function ContactUs({ navigation }) {
	return (
		<View style={styles.page}>
			<Text style={styles.pageTitle}>Contact us</Text>
			<Text style={styles.pageBody}>
				Contact Info: Stockholmsvagen 15 Telefonnr: 123-456-789-01{" "}
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
export default ContactUs;
