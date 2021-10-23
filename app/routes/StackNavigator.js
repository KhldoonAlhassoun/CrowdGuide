import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import MoreScreen from "../screens/MoreScreen";
import AboutUs from "../screens/AboutUs";
import ContactUs from "../screens/ContactUs";
import SupportUs from "../screens/SupportUs";
import Settings from "../screens/Settings";
import RateUs from "../screens/RateUs";
import ExploreScreen from "../screens/ExploreScreen";
import Favourites from "../screens/Favourites";

const Stack = createStackNavigator();

const MoreStackNavigator = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name="More" component={MoreScreen} />
			<Stack.Screen name="AboutUs" component={AboutUs} />
			<Stack.Screen name="SupportUs" component={SupportUs} />
			<Stack.Screen name="Settings" component={Settings} />
			<Stack.Screen name="ContactUs" component={ContactUs} />
			<Stack.Screen name="RateUs" component={RateUs} />
		</Stack.Navigator>
	);
};
const FavouritesStackNavigator = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="Favourites" component={Favourites} />
		</Stack.Navigator>
	);
};

const ExploreStackNavigator = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="Explore" component={ExploreScreen} />
		</Stack.Navigator>
	);
};
export { MoreStackNavigator, FavouritesStackNavigator, ExploreStackNavigator };
