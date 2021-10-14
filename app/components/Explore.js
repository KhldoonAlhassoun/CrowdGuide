import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import Markers from "./Markers";
import UseTracking from "./UseTracking";

const Explore = () => {
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
export default Explore;
