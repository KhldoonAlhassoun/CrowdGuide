import React from "react";
import { View, Button, Text, Modal, StyleSheet } from "react-native";
class Disclaimer extends React.Component {
	constructor() {
		super();
		this.state = {
			show: true,
		};
	}

	render() {
		return (
			<View style={styles.container}>
				<Modal
					style={styles.modal}
					transparent={true}
					visible={this.state.show}
				>
					<View style={{ backgroundColor: "#000000aa", flex: 1 }}>
						<View
							style={{
								backgroundColor: "#ffffff",
								textAlignVertical: "center",
								textAlign: "center",
								marginTop: 200,
								margin: 50,
								padding: 40,
								borderRadius: 10,
								alignSelf: "center",

								minHeight: 60,
							}}
						>
							<Text style={{ fontSize: 25 }}>Disclaimer!</Text>
							<Text style={{ fontSize: 16, marginBottom: 8 }}>
								To accurately measure crowdedness we will use
								your positional data. This data will only be
								used to mark your position on the map, and will
								not be used for any other purpose. No other data
								will be collected!
							</Text>
							<Button
								style={{
									marginTop: 5,
								}}
								title="OK"
								onPress={() => {
									this.setState({ show: false });
								}}
							/>
						</View>
					</View>
				</Modal>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {},
	button: {},
});
export default Disclaimer;
