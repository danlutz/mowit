import React, { useContext } from "react"
import { Button, TextInput, StyleSheet, Alert } from "react-native"
import { ScreenContainer } from "react-native-screens"
import { View, Text } from "../Themed"
import { AuthContext } from "../../constants/context"
import { useNavigation } from "@react-navigation/native"
import AppContext from "../../context/AppContext"

import firebase from "firebase"

export const CreateAccount2 = () => {
	const navigation = useNavigation()
	const [email, oncChangeEmailText] = React.useState("")
	const [password, onChangePasswordText] = React.useState("")
	const [passwordRepeat, onchangePasswordRepeatText] = React.useState("")
	const { dispatch } = useContext(AppContext)

	const onLoginSuccess = () => {
		dispatch({ type: "LOGIN" })
	}
	const onLoginFailure = (errorMessage) => {
		Alert.alert(errorMessage)
	}

	const signUpWithEmailAndPassword = async () => {
		await firebase
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.then(onLoginSuccess.bind(this))
			.catch((error) => {
				let errorCode = error.code
				let errorMessage = error.message
				if (errorCode == "auth/weak-password") {
					onLoginFailure.bind(this)("Weak Password!")
				} else {
					onLoginFailure.bind(this)(errorMessage)
				}
			})
	}

	return (
		<ScreenContainer style={styles.container}>
			<Text style={styles.rentIT}>RENT.IT</Text>
			<TextInput
				style={styles.textfield}
				onChangeText={(text) => oncChangeEmailText(text)}
				value={email}
				keyboardType={"email-address"}
				placeholder={"E-Mail"}
			/>
			<TextInput
				secureTextEntry={true}
				style={styles.textfield}
				onChangeText={(text) => onChangePasswordText(text)}
				value={password}
				placeholder={"Passwort"}
			/>
			<TextInput
				secureTextEntry={true}
				style={styles.textfield}
				onChangeText={(text) => onchangePasswordRepeatText(text)}
				value={passwordRepeat}
				placeholder={"Passwort bestätigen"}
			/>
			<View style={styles.button}>
				<Button color="#FFF" title="FERTIG" onPress={() => signUpWithEmailAndPassword()} />
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
