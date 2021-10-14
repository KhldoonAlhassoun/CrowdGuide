import * as React from "react";
import { Avatar, Card } from "react-native-paper";
import { StyleSheet, View } from "react-native";

class More extends React.Component {
	render() {
		return (
			<View>
				<Card style={styles.cardContainer}>
					<Card.Title
						title="RATE US"
						left={(props) => (
							<Avatar.Icon
								style={styles.avatarIcon}
								{...props}
								icon="star-outline"
								color="black"
							/>
						)}
					></Card.Title>
				</Card>

				<Card style={styles.cardContainer}>
					<Card.Title
						title="ABOUT US"
						left={(props) => (
							<Avatar.Icon
								style={styles.avatarIcon}
								{...props}
								icon="information-outline"
								color="black"
							/>
						)}
					></Card.Title>
				</Card>

				<Card style={styles.cardContainer}>
					<Card.Title
						title="CONTACT US"
						left={(props) => (
							<Avatar.Icon
								style={styles.avatarIcon}
								{...props}
								icon="account-box-outline"
								color="black"
							/>
						)}
					></Card.Title>
				</Card>

				<Card style={styles.cardContainer}>
					<Card.Title
						title="SUPPORT US"
						left={(props) => (
							<Avatar.Icon
								style={styles.avatarIcon}
								{...props}
								icon="gift-outline"
								color="black"
							/>
						)}
					></Card.Title>
				</Card>

				<Card style={styles.cardContainer}>
					<Card.Title
						title="SETTINGS"
						left={(props) => (
							<Avatar.Icon
								style={styles.avatarIcon}
								{...props}
								icon="cog-outline"
								color="black"
							/>
						)}
					></Card.Title>
				</Card>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	avatarIcon: {
		backgroundColor: "#ffff",
	},

	cardParagraph: {
		marginLeft: 55,
	},
	cardContainer: {
		shadowOpacity: 5,
	},
});
export default More;
