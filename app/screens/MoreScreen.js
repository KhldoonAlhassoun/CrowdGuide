import * as React from "react";
import {
	Text,
	View,
	StyleSheet,
	TouchableOpacity,
	Button,
	Pressable,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function MoreScreen({ navigation }) {
	return (
		<View style={styles.container}>
			<View style={styles.separator}>
				<Pressable
					style={styles.button}
					onPress={() => navigation.navigate("AboutUs")}
				>
					<Ionicons
						size={23}
						style={styles.icon}
						name="information-circle-outline"
					/>
					<Text style={styles.text}> About Us</Text>
				</Pressable>
			</View>
			<View style={styles.separator}>
				<Pressable
					style={styles.button}
					onPress={() => navigation.navigate("ContactUs")}
				>
					<Ionicons
						size={23}
						style={styles.icon}
						name="call-outline"
					/>
					<Text style={styles.text}> Contact Us</Text>
				</Pressable>
			</View>
			<View style={styles.separator}>
				<Pressable
					style={styles.button}
					onPress={() => navigation.navigate("SupportUs")}
				>
					<Ionicons
						size={23}
						style={styles.icon}
						name="gift-outline"
					/>
					<Text style={styles.text}> Support Us</Text>
				</Pressable>
			</View>
			<View style={styles.separator}>
				<Pressable
					style={styles.button}
					onPress={() => navigation.navigate("RateUs")}
				>
					<Ionicons
						size={23}
						style={styles.icon}
						name="star-outline"
					/>
					<Text style={styles.text}> Rate Us</Text>
				</Pressable>
			</View>
			<View style={styles.separator}>
				<Pressable
					style={styles.button}
					onPress={() => navigation.navigate("Settings")}
				>
					<Ionicons
						size={23}
						style={styles.icon}
						name="cog-outline"
					/>
					<Text style={styles.text}> Settings</Text>
				</Pressable>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white",
	},
	page: {
		flex: 1,
		backgroundColor: "white",
	},

	pageTitle: {
		backgroundColor: "white",
		color: "black",
		fontSize: 28,
	},
	pageBody: {
		backgroundColor: "white",
		color: "#333",
		fontSize: 20,
		margin: 10,
	},

	button: {
		backgroundColor: "white",
		padding: 15,
		borderRadius: 5,
		marginBottom: 0,
		borderWidth: 1,
		width: 30,
		marginLeft: 8,
		flex: 1,
		flexDirection: "row",
		justifyContent: "flex-start",
		alignContent: "flex-start",
	},
	text: {
		marginLeft: 25,
		fontSize: 20,
		color: "black",
	},
	separator: {
		marginVertical: 4,
		borderBottomColor: "#737373",
		alignContent: "flex-start",
		flexDirection: "row-reverse",
	},
	icon: {
		marginLeft: 17,
	},
});
