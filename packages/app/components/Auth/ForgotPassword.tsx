import React from "react"
import { Alert, Button, TextInput, StyleSheet } from "react-native"
import { ScreenContainer } from "react-native-screens"
import { View, Text } from "../Themed"

export const ForgotPassword = () => {
	const [eMailText, oncChangeEmailText] = React.useState("")

	return (
		<ScreenContainer style={styles.container}>
			<Text style={styles.rentIT}>RENT.IT</Text>
			<TextInput
				style={styles.textfield}
				onChangeText={(text) => oncChangeEmailText(text)}
				value={eMailText}
				keyboardType={"email-address"}
				placeholder={"E-Mail Adresse"}
			/>
			<View style={styles.button}>
				<Button
					color="#fff"
					title="ZURÜCKSETZEN"
					onPress={() =>
						Alert.alert(
							"Du solltest in Kürze eine Email erhalten um dein Kennwort zurückzusetzen",
						)
					}
				/>
			</View>
		</ScreenContainer>
	)
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#FFF",
		alignItems: "center",
		paddingTop: 200,
		fontFamily: "Helvetica Neue",
	},
	rentIT: {
		paddingTop: 10,
		bottom: 80,
		fontSize: 32,
		paddingBottom: 20,
		fontWeight: "bold",
		textAlign: "center",
	},

	textfield: {
		height: 40,
		width: 340,
		marginBottom: 10,
		borderColor: "#F7F9FC",
		borderWidth: 1,
		color: "#F7F9FC",
		backgroundColor: "#F7F9FC",
	},
	links: {
		marginTop: 30,
	},
	linkszwei: {
		marginBottom: 30,
	},
	button: {
		marginTop: 30,
		backgroundColor: "#E67E22",
		borderRadius: 4,
		color: "#FFFFFF",
		shadowColor: "#111111",
		shadowOpacity: 0.2,
		width: 220,
		shadowOffset: {
			width: 0,
			height: 2,
		},
	},
})
