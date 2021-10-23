import * as React from "react";
import {
	Avatar,
	Card,
	IconButton,
	Paragraph,
	Subtitle,
	Icon,
} from "react-native-paper";
import { StyleSheet, View } from "react-native";

class Favourites extends React.Component {
	render() {
		return (
			<View>
				<Card>
					<Card.Title
						style={styles.cardContainer}
						title="Umeå University"
						subtitle="Universitetstorget 4, 907 36 Umeå"
						left={(props) => (
							<Avatar.Icon
								style={styles.avatarIcon}
								{...props}
								icon="heart"
								color="red"
							/>
						)}
					></Card.Title>
					<Card.Content>
						<Paragraph style={styles.cardParagraph}>
							Estimated crowdedness: 85%{" "}
						</Paragraph>
					</Card.Content>
				</Card>
				<Card>
					<Card.Title
						style={styles.cardContainer}
						title="ICA"
						subtitle="Ålidhem 4, 907 35 Umeå"
						left={(props) => (
							<Avatar.Icon
								style={styles.avatarIcon}
								{...props}
								icon="heart"
								color="tomato"
							/>
						)}
					></Card.Title>
					<Card.Content>
						<Paragraph style={styles.cardParagraph}>
							Estimated crowdedness: 85%{" "}
						</Paragraph>
					</Card.Content>
				</Card>
				<Card>
					<Card.Title
						style={styles.cardContainer}
						title="Åhlens"
						subtitle="Universitetstorget 4, 907 36 Umeå"
						left={(props) => (
							<Avatar.Icon
								style={styles.avatarIcon}
								{...props}
								icon="heart"
								color="tomato"
							/>
						)}
					></Card.Title>
					<Card.Content>
						<Paragraph style={styles.cardParagraph}>
							Estimated crowdedness: 85%{" "}
						</Paragraph>
					</Card.Content>
				</Card>
				<Card>
					<Card.Title
						style={styles.cardContainer}
						title="Lidl"
						subtitle="Universitetstorget 4, 907 36 Umeå"
						left={(props) => (
							<Avatar.Icon
								style={styles.avatarIcon}
								{...props}
								icon="heart"
								color="tomato"
							/>
						)}
					></Card.Title>
					<Card.Content>
						<Paragraph style={styles.cardParagraph}>
							Estimated crowdedness: 85%{" "}
						</Paragraph>
					</Card.Content>
				</Card>

				<Card>
					<Card.Title
						style={styles.cardContainer}
						title="Coop nära"
						subtitle="Universitetstorget 4, 907 36 Umeå"
						left={(props) => (
							<Avatar.Icon
								style={styles.avatarIcon}
								{...props}
								icon="heart"
								color="tomato"
							/>
						)}
					></Card.Title>
					<Card.Content>
						<Paragraph style={styles.cardParagraph}>
							Estimated crowdedness: 85%{" "}
						</Paragraph>
					</Card.Content>
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
});
export default Favourites;
