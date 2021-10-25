import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import Markers from "../components/Markers";

const ExploreScreen = () => {
	return (
		<View style={styles.container}>
			<Markers />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	map: {
		width: Dimensions.get("window").width,
		height: Dimensions.get("window").height,
	},
});
export default ExploreScreen;
