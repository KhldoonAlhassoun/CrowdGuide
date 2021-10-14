import React from "react";
import { StyleSheet, Text, SafeAreaView, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import More from "./app/components/More";
import Favorits from "./app/components/Favourites";
import Explore from "./app/components/Explore";
const Tab = createBottomTabNavigator();
export default function App() {
	return (
		<NavigationContainer>
			<Tab.Navigator
				screenOptions={({ route }) => ({
					tabBarIcon: ({ focused, color, size }) => {
						let iconName;

						if (route.name === "Explore") {
							iconName = focused ? "ios-compass" : "ios-compass";
						} else if (route.name === "Favourites") {
							iconName = focused ? "ios-heart" : "ios-heart";
						} else if (route.name === "More") {
							iconName = focused ? "ios-list" : "ios-list";
						}

						// You can return any component that you like here!
						return (
							<Ionicons
								name={iconName}
								size={size}
								color={color}
							/>
						);
					},
					tabBarActiveTintColor: "tomato",
					tabBarInactiveTintColor: "gray",
				})}
			>
				<Tab.Screen name="Explore" component={Explore} />
				<Tab.Screen name="Favourites" component={Favorits} />
				<Tab.Screen name="More" component={More} />
			</Tab.Navigator>
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
