import React from "react"
import { Button, TextInput, StyleSheet } from "react-native"
import { ScreenContainer } from "react-native-screens"
import { Text } from "../Themed"
import { StackNavigationProp } from "@react-navigation/stack"
import { OnboardingAuthStackParameters } from "../../constants/types"
import { AuthContext } from "../../constants/context"
import { useNavigation } from "@react-navigation/native"

export const SignIn = ({ props }: Props) => {
	const { signIn } = React.useContext(AuthContext)
	const navigation = useNavigation()
	const [eMailText, oncChangeEmailText] = React.useState("E-Mail")
	const [passwordText, onChangePasswordText] = React.useState("Password")

	return (
		<ScreenContainer>
			<Text>RENT.IT</Text>
			<TextInput
				style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
				onChangeText={(text) => oncChangeEmailText(text)}
				value={eMailText}
				keyboardType={"email-address"}
			/>
			<TextInput
				secureTextEntry={true}
				style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
				onChangeText={(text) => onChangePasswordText(text)}
				value={passwordText}
			/>
			<Button title="Anmelden" onPress={() => signIn()} />
			<Button title="Create Account In" onPress={() => navigation.push("CreateAccount")} />
			<Button title="Passwort Vergessen" onPress={() => navigation.push("ForgotPassword")} />
		</ScreenContainer>
	)
}

interface Props {
	props: StackNavigationProp<OnboardingAuthStackParameters>
}

const styles = StyleSheet.create({})
