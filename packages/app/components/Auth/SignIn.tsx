import React from "react"
import { Button, TextInput, StyleSheet, Alert } from "react-native"
import { ScreenContainer } from "react-native-screens"
import { Text } from "../Themed"
import { StackNavigationProp } from "@react-navigation/stack"
import { OnboardingAuthStackParameters } from "../../constants/types"
import { AuthContext } from "../../constants/context"
import { useNavigation } from "@react-navigation/native"

export const SignIn = ({ props }: Props) => {
	const { signIn } = React.useContext(AuthContext)
	const navigation = useNavigation()
	const [eMailText, oncChangeEmailText] = React.useState("")
	const [passwordText, onChangePasswordText] = React.useState("")

	//MARK: FAKE USER VALIDATION
	const onlogin = () => {
		if (eMailText == "" || passwordText == "") {
			Alert.alert("E-Mail Adresse und Passwort darf nicht leer sein")
		} else {
			if (
				(eMailText == "michi@rentit.com" || eMailText == "Michi@rentit.com") &&
				passwordText == "123456"
			) {
				signIn()
			} else {
				Alert.alert("E-Mail Adresse oder Passwort falsch")
			}
		}

		console.log(`email: ${eMailText} - password ${passwordText}`)
	}

	return (
		<ScreenContainer>
			<Text>RENT.IT</Text>
			<TextInput
				style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
				onChangeText={(text) => oncChangeEmailText(text)}
				value={eMailText}
				keyboardType={"email-address"}
				placeholder={"E-Mail Adresse"}
			/>
			<TextInput
				secureTextEntry={true}
				style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
				onChangeText={(text) => onChangePasswordText(text)}
				value={passwordText}
				placeholder={"Passwort"}
			/>
			<Button title="Anmelden" onPress={() => onlogin()} />
			<Button title="Create Account In" onPress={() => navigation.push("CreateAccount")} />
			<Button title="Passwort Vergessen" onPress={() => navigation.push("ForgotPassword")} />
		</ScreenContainer>
	)
}

interface Props {
	props: StackNavigationProp<OnboardingAuthStackParameters>
}

const styles = StyleSheet.create({})
