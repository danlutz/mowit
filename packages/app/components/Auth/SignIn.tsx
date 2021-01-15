import React, { useContext } from "react"
import { Button, TextInput, StyleSheet, Alert, View } from "react-native"
import { ScreenContainer } from "react-native-screens"
import { Text } from "../Themed"
import { StackNavigationProp } from "@react-navigation/stack"
import { OnboardingAuthStackParameters } from "../../constants/types"
import { useNavigation } from "@react-navigation/native"
import AppContext from "../../context/AppContext"

import firebase from "firebase"

export const SignIn = ({ props }: Props) => {
	const { dispatch } = useContext(AppContext)
	const navigation = useNavigation()
	const [eMailText, oncChangeEmailText] = React.useState("")
	const [passwordText, onChangePasswordText] = React.useState("")

	const onLoginSuccess = () => {
		dispatch({ type: "LOGIN" })
	}
	const onLoginFailure = (errorMessage) => {
		Alert.alert(errorMessage)
	}
	//MARK: FAKE USER VALIDATION
	const onlogin = () => {
		if (eMailText == "" || passwordText == "") {
			dispatch({ type: "LOGIN" })
			//Alert.alert("E-Mail Adresse und Passwort darf nicht leer sein")
		} else {
			if (eMailText.toLowerCase() == "michi@rentit.com" && passwordText == "123456") {
			} else {
				Alert.alert("E-Mail Adresse oder Passwort falsch")
			}
		}

	const loginUserWithEMailAndPassword = async () => {
		await firebase
			.auth()
			.signInWithEmailAndPassword(eMailText, passwordText)
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
				value={eMailText}
				keyboardType={"email-address"}
				placeholder={"E-Mail Adresse"}
			/>
			<TextInput
				style={styles.textfield}
				secureTextEntry={true}
				onChangeText={(text) => onChangePasswordText(text)}
				value={passwordText}
				placeholder={"Passwort"}
			/>
			<View style={styles.button}>
				<Button
					color="#ffffff"
					title="Anmelden"
					onPress={() => loginUserWithEMailAndPassword()}
				/>
			</View>
			<View style={styles.links}>
				<Button
					color="#E67E22"
					title="Du hast noch kein Account? Jetzt registrieren"
					onPress={() => navigation.push("CreateAccount")}
				/>
			</View>
			<View style={styles.linkszwei}>
				<Button
					color="#E67E22"
					title="Passwort vergessen ?"
					onPress={() => navigation.push("ForgotPassword")}
				/>
			</View>
		</ScreenContainer>
	)
}

interface Props {
	props: StackNavigationProp<OnboardingAuthStackParameters>
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
