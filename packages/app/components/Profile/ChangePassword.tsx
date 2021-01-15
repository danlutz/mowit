import React, { useState } from "react"
import { Alert, Button, Image, StyleSheet, TouchableOpacity } from "react-native"
import { TextInput } from "react-native-gesture-handler"
import { ScreenContainer } from "react-native-screens"
import { View, Text } from "../Themed"

export const ChangePassword = () => {
	const [password, actualPassword] = useState("")
	const [newPassword, setNewPassword] = useState("")
	const [confirmPassword, setConfirmPassword] = useState("")

	return (
		<ScreenContainer style={styles.container}>
			<View>
				<TouchableOpacity style={styles.buttonProfileStyle} activeOpacity={0.5}>
					<Image
						source={require("../../assets/images/profilImage.png")}
						style={styles.buttonImageIconStyleProfile}
					/>
					<Text style={styles.buttonTextStyleHead}>Max Mustermann</Text>
					<View style={styles.buttonTextStyleHead}></View>
					<View style={styles.buttonIconSeparatorStyle} />
				</TouchableOpacity>
			</View>
			<TextInput
				style={styles.textfield}
				onChangeText={(text) => oncChangeEmailText(text)}
				placeholder={"aktuelles Passwort"}
			/>
			<TextInput
				style={styles.textfield}
				onChangeText={(text) => oncChangeEmailText(text)}
				placeholder={"neues Passwort"}
			/>
			<TextInput
				style={styles.textfield}
				onChangeText={(text) => oncChangeEmailText(text)}
				placeholder={"neues Passwort bestätigen"}
			/>
			<View style={styles.button}>
				<Button color="#FFF" title="Speichern" onPress={() => Alert.alert("gespeichert")} />
			</View>
		</ScreenContainer>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		paddingTop: 70,
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

	buttonProfileStyle: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#fff",
		borderWidth: 0.5,
		borderTopColor: "#F9F9F9",
		borderBottomColor: "#F9F9F9",
		borderColor: "#FFF",
		height: 50,
		margin: 5,
		marginBottom: 20,
	},
	buttonImageIconStyleProfile: {
		padding: 10,
		margin: 5,
		height: 80,
		width: 80,
		resizeMode: "stretch",
	},
	buttonImageIconStyleNormal: {
		padding: 10,
		margin: 5,
		marginBottom: 10,
		height: 25,
		width: 25,
		resizeMode: "stretch",
	},
	buttonIconSeparatorStyle: {
		backgroundColor: "#fff",
		width: 1,
		height: 40,
	},
	buttonTextStyleHead: {
		color: "#222B45",
		fontWeight: "bold",
		fontSize: 22,
		marginBottom: 4,
		marginLeft: 10,
	},
	buttonTextStyleBody: {
		color: "#fff",
		marginBottom: 4,
		marginLeft: 10,
	},
	links: {
		color: "#E67E22",
		marginBottom: 4,
		marginLeft: 10,
	},

	textfield: {
		height: 40,
		width: 340,

		marginTop: 10,
		borderColor: "#F7F9FC",
		borderWidth: 1,
		color: "#000",
		backgroundColor: "#F7F9FC",
	},
	button: {
		marginTop: 30,
		marginBottom: 30,
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
