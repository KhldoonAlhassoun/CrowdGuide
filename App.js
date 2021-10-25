import React from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigator from "./app/routes/TabNavigator";
import UseTracking from "./app/components/UseTracking";

export default function App() {
	return (
		<NavigationContainer>
			<UseTracking />
			<BottomTabNavigator />
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white",
		justifyContent: "center",
		alignItems: "center",
	},
});
