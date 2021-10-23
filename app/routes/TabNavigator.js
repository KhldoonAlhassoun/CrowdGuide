import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import {
	MoreStackNavigator,
	ExploreStackNavigator,
	FavouritesStackNavigator,
} from "./StackNavigator";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused, color, size }) => {
					let iconName;

					if (route.name === "Explore") {
						iconName = focused ? "ios-compass" : "ios-compass";
					} else if (route.name === "Favourites") {
						iconName = focused ? "ios-heart" : "ios-heart";
					} else if (route.name === "MoreScreen") {
						iconName = focused ? "ios-list" : "ios-list";
					}

					// You can return any component that you like here!
					return (
						<Ionicons name={iconName} size={size} color={color} />
					);
				},
				tabBarActiveTintColor: "tomato",
				tabBarInactiveTintColor: "gray",
			})}
		>
			<Tab.Screen name="Explore" component={ExploreStackNavigator} />
			<Tab.Screen
				name="Favourites"
				component={FavouritesStackNavigator}
			/>
			<Tab.Screen
				options={{
					headerShown: false,
				}}
				name="MoreScreen"
				component={MoreStackNavigator}
			/>
		</Tab.Navigator>
	);
};

export default BottomTabNavigator;
