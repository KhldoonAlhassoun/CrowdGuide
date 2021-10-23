import * as React from "react";
import {
	Text,
	View,
	StyleSheet,
	TouchableOpacity,
	Button,
	Pressable,
} from "react-native";
import { Ionicons } from "react-native-vector-icons/Ionicons";

export default function MoreScreen({ navigation }) {
	return (
		<View style={styles.separator}>
			<View style={styles.separator}>
				<Pressable
					style={styles.button}
					onPress={() => navigation.navigate("AboutUs")}
				>
					<Text style={styles.text}> About Us</Text>
				</Pressable>
			</View>
			<View style={styles.separator}>
				<Pressable
					style={styles.button}
					onPress={() => navigation.navigate("ContactUs")}
				>
					<Text style={styles.text}> Contact Us</Text>
				</Pressable>
			</View>
			<View style={styles.separator}>
				<Pressable
					style={styles.button}
					onPress={() => navigation.navigate("SupportUs")}
				>
					<Text style={styles.text}> support Us</Text>
				</Pressable>
			</View>
			<View style={styles.separator}>
				<Pressable
					style={styles.button}
					onPress={() => navigation.navigate("RateUs")}
				>
					<Text style={styles.text}> Rate Us</Text>
				</Pressable>
			</View>
			<View style={styles.separator}>
				<Pressable
					style={styles.button}
					onPress={() => navigation.navigate("Settings")}
				>
					<Text style={styles.text}> Settings</Text>
				</Pressable>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	page: {
		flex: 1,
		backgroundColor: "white",
	},
	container: {
		flex: 1,
	},
	pageTitle: {
		backgroundColor: "white",
		color: "black",
		fontSize: 28,
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
		padding: 15,
		borderRadius: 5,
		marginBottom: 0,
		alignItems: "center",
		borderWidth: 1,
		width: 380,
		marginLeft: 8,
	},
	text: {
		fontSize: 20,
		color: "black",
	},
	separator: {
		marginVertical: 4,
		borderBottomColor: "#737373",
	},
});
