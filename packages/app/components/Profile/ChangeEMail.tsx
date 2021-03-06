import { useNavigation } from "@react-navigation/native"
import React, { useState } from "react"
import { Alert, Button, Image, StyleSheet } from "react-native"
import { TextInput } from "react-native-gesture-handler"
import { ScreenContainer } from "react-native-screens"
import { View, Text } from "../Themed"

export const ChangeEMail = () => {
	const navigation = useNavigation()
	const [email, oncChangeEmailText] = useState("")

	return (
		<ScreenContainer>
			<Text>Change E-Mail Screen</Text>
			<Image source={require("../../assets/images/profilImage.png")} />
			<TextInput
				style={styles.textfield}
				onChangeText={(text) => oncChangeEmailText(text)}
				keyboardType={"email-address"}
				placeholder={"Neue E-Mail Adresse"}
			/>
			<Button title="Ändern" onPress={() => navigation.push("EMailVerify")} />
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
		color: "#000",
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
		textTransform: "uppercase",
		width: 220,
		shadowOffset: {
			width: 0,
			height: 2,
		},
	},
})
