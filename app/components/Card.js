import React from "react";
import { StyleSheet, View } from "react-native";
import { Ionicons } from "react-native-vector-icons/Ionicons";

export default function Card(props) {
	return (
		<View style={styles.card}>
			<View style={styles.cardContent}></View>
			{props.children}
		</View>
	);
}

const styles = StyleSheet.create({
	card: {
		borderRadius: 6,
		elevation: 3,
		backgroundColor: "#fff",
		shadowColor: "#333",
		shadowOffset: { width: 1, height: 1 },
		shadowOpacity: 0.3,
		shadowRadius: 2,
		marginHorizontal: 4,
	},
	cardContent: {
		marginHorizontal: 18,
		marginVertical: 10,
	},
});
