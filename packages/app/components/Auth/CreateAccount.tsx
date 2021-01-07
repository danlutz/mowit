import React from "react"
import { Alert, Button, TextInput } from "react-native"
import { ScreenContainer } from "react-native-screens"
import { View, Text } from "../Themed"
import { AuthContext } from "../../constants/context"
import { useNavigation } from "@react-navigation/native"

export const CreateAccount = () => {
	const { signUp } = React.useContext(AuthContext)
	const navigation = useNavigation()
	const [vorname, oncChangeVornameText] = React.useState("")
	const [nachname, onChangeNachnameText] = React.useState("")

	return (
		<ScreenContainer>
			<Text>Create Account Screen</Text>
			<TextInput
				style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
				onChangeText={(text) => oncChangeVornameText(text)}
				value={vorname}
				placeholder={"Vorname"}
			/>
			<TextInput
				style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
				onChangeText={(text) => onChangeNachnameText(text)}
				value={nachname}
				placeholder={"Nachname"}
			/>
			<Button title="Weiter" onPress={() => navigation.push("CreateAccount2")} />
			<Text>Beim Registrieren, akzeptierst du unsere AGB und Datenschutzbestimmung </Text>
			<Button title="Du hast bereits einen Account?" onPress={() => navigation.goBack()} />
			<Button title="SignUp" onPress={() => signUp()} />
			<Button title="E-Mail Verification" onPress={() => navigation.push("Verification")} />
		</ScreenContainer>
	)
}
