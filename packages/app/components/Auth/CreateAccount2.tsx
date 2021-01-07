import React from "react"
import { Alert, Button, TextInput } from "react-native"
import { ScreenContainer } from "react-native-screens"
import { View, Text } from "../Themed"
import { AuthContext } from "../../constants/context"
import { useNavigation } from "@react-navigation/native"

export const CreateAccount2 = () => {
	const navigation = useNavigation()
	const [email, oncChangeEmailText] = React.useState("")
	const [password, onChangePasswordText] = React.useState("")
	const [passwordRepeat, onchangePasswordRepeatText] = React.useState("")

	const registerFunction = () => {
		if (password != passwordRepeat) {
			Alert.alert("Die Passwörter stimmen nicht überein")
		} else {
			Alert.alert(
				"Verifiziere deine E-Mail Adresse",
				"Wir werden dir einen Verifizierung Code zu deiner angegeben Email Adresse Senden",
				[{ text: "OK", onPress: () => navigation.push("Verification") }],
				{ cancelable: false },
			)
		}
	}

	return (
		<ScreenContainer>
			<Text>Rent.it</Text>
			<TextInput
				style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
				onChangeText={(text) => oncChangeEmailText(text)}
				value={email}
				keyboardType={"email-address"}
				placeholder={"E-Mail"}
			/>
			<TextInput
				secureTextEntry={true}
				style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
				onChangeText={(text) => onChangePasswordText(text)}
				value={password}
				placeholder={"Passwort"}
			/>
			<TextInput
				secureTextEntry={true}
				style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
				onChangeText={(text) => onchangePasswordRepeatText(text)}
				value={passwordRepeat}
				placeholder={"Passwort bestätigen"}
			/>
			<Button title="Weiter" onPress={() => registerFunction()} />
		</ScreenContainer>
	)
}
