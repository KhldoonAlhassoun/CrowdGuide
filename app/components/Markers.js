import React from "react";
import {
	StyleSheet,
	View,
	Text,
	Dimensions,
	TouchableOpacity,
} from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import MapView, { Callout, Circle, Marker } from "react-native-maps";
import { GOOGLE_MAPS_APIKEY } from "@env";

import MapView, { Marker, ProviderPropType } from "react-native-maps";
import Search from "./Search";

const { width, height } = Dimensions.get("window");

const ASPECT_RATIO = width / height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
let id = 0;

function randomColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}

class Markers extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			region: {
				latitude: LATITUDE,
				longitude: LONGITUDE,
				latitudeDelta: LATITUDE_DELTA,
				longitudeDelta: LONGITUDE_DELTA,
			},
			markers: [],
		};
	}

	onMapPress(e) {
		this.setState({
			markers: [
				...this.state.markers,
				{
					coordinate: e.nativeEvent.coordinate,
					key: id++,
					color: randomColor(),
				},
			],
		});
	}

	render() {
		return (
			<View style={styles.container}>
				<GooglePlacesAutocomplete
					placeholder="Search"
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
							width: "100%",
							zIndex: 1,
						},
						listView: { backgroundColor: "white" },
					}}
					nearbyPlacesAPI="GooglePlacesSearch"
				/>
				<MapView
					provider={this.props.provider}
					style={styles.map}
					initialRegion={this.state.region}
					onPress={(e) => this.onMapPress(e)}
					provider="google"
				>
					{this.state.markers.map((marker) => (
						<Marker
							key={marker.key}
							coordinate={marker.coordinate}
							pinColor={marker.color}
						>
							<Callout>
								<Text>I'm here</Text>
							</Callout>
						</Marker>
					))}
				</MapView>

				{/* <Search /> */}
				<View style={styles.buttonContainer}>
					<TouchableOpacity
						onPress={() => this.setState({ markers: [] })}
						style={styles.bubble}
					>
						<Text>Tap map to create a marker of random color</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}

Markers.propTypes = {
	provider: ProviderPropType,
};

const styles = StyleSheet.create({
	container: {
		...StyleSheet.absoluteFillObject,
		justifyContent: "flex-end",
		alignItems: "center",
	},
	map: {
		...StyleSheet.absoluteFillObject,
	},
	bubble: {
		backgroundColor: "rgba(255,255,255,0.7)",
		paddingHorizontal: 18,
		paddingVertical: 12,
		borderRadius: 20,
	},
	latlng: {
		width: 200,
		alignItems: "stretch",
	},
	button: {
		width: 80,
		paddingHorizontal: 12,
		alignItems: "center",
		marginHorizontal: 10,
	},
	buttonContainer: {
		flexDirection: "row",
		marginVertical: 20,
		backgroundColor: "transparent",
	},
});

export default Markers;
