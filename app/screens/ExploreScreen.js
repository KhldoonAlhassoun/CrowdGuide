import React from "react";
import { StyleSheet, View, Dimensions, Text } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import MapView, { Callout, Circle, Marker } from "react-native-maps";
import { GOOGLE_MAPS_APIKEY } from "@env";
import InfoScreen from "./InfoScreen";

export default function ExploreScreen() {
	const [pin, setPin] = React.useState({
		latitude: 63.81326,
		longitude: 20.31651,
	});

	const [region, setRegion] = React.useState(null);

	return (
		<View style={{}}>
			<GooglePlacesAutocomplete
				placeholder="Search Places"
				fetchDetails={true}
				GooglePlacesSearchQuery={{
					rankby: "distance",
				}}
				onPress={(data, details = null) => {
					// 'details' is provided when fetchDetails = true
					console.log(data, details);
					setRegion({
						latitude: details.geometry.location.lat,
						longitude: details.geometry.location.lng,
						latitudeDelta: 0.0922,
						longitudeDelta: 0.0421,
					});
				}}
				query={{
					key: GOOGLE_MAPS_APIKEY,
					language: "en",
				}}
				styles={{
					container: {
						flex: 0,
						position: "absolute",
						width: "95%",
						zIndex: 1,
						marginTop: 35,
						alignSelf: "center",
					},
					listView: { backgroundColor: "white" },
				}}
				nearbyPlacesAPI="GooglePlacesSearch"
			/>
			
			<MapView
				style={styles.map}
				initialRegion={{
					latitude: 63.81326,
					longitude: 20.31651,
					latitudeDelta: 0.0922,
					longitudeDelta: 0.0421,
				}}
				provider="google"
			>
				{pin ? (
					<Circle
						center={{
							longitude: pin.longitude,
							latitude: pin.latitude,
						}}
						strokeColor="transparent"
						fillColor="rgba(0,131,255,0.5)"
					></Circle>
				) : null}
				{pin ? (
					<Marker
						coordinate={{
							longitude: pin.longitude,
							latitude: pin.latitude,
						}}
						title="Me"
						description="Myself"
						draggable={true}
						onDragStart={(e) => {
							console.log(
								"Drag start",
								e.nativeEvent.coordinates
							);
						}}
						onDragEnd={(e) => {
							setPin({
								latitude: e.nativeEvent.coordinate.latitude,
								longitude: e.nativeEvent.coordinate.longitude,
							});
						}}
					>
						<View style={styles.circle}>
							<View style={styles.core} />
							<View style={styles.stroke} />
						</View>
					</Marker>
				) : null}

				{region ? (
					<Marker
						coordinate={{
							latitude: region.latitude,
							longitude: region.longitude,
						}}
					/>
				) : null}
			</MapView>
			
		</View>
	);
}

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

	circle: {
		width: 26,
		height: 26,
		borderRadius: 50,
	},
	stroke: {
		backgroundColor: "#ffffff",
		borderRadius: 50,
		width: "100%",
		height: "100%",
		zIndex: 1,
	},
	core: {
		backgroundColor: "rgba(0,120,253,0.5)",
		width: 24,
		position: "absolute",
		top: 1,
		left: 1,
		right: 1,
		bottom: 1,
		height: 24,
		borderRadius: 50,
		zIndex: 2,
	},
});
