import React from "react"
import { Alert, Button, TextInput } from "react-native"
import { ScreenContainer } from "react-native-screens"
import { View, Text } from "../Themed"
import { AuthContext } from "../../constants/context"
import { useNavigation } from "@react-navigation/native"

export const CreateAccount = () => {
	const { signUp } = React.useContext(AuthContext)
	const navigation = useNavigation()
	const [vorname, oncChangeVornameText] = React.useState("Vorname")
	const [nachname, onChangeNachnameText] = React.useState("Nachname")

	return (
		<ScreenContainer>
			<Text>Create Account Screen</Text>
			<TextInput
				style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
				onChangeText={(text) => oncChangeVornameText(text)}
				value={vorname}
			/>
			<TextInput
				style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
				onChangeText={(text) => onChangeNachnameText(text)}
				value={nachname}
			/>
			<Button title="Weiter" onPress={() => Alert.alert("Weiter")} />
			<Button title="SignUp" onPress={() => signUp()} />
			<Button title="E-Mail Verification" onPress={() => navigation.push("Verification")} />
		</ScreenContainer>
	)
}
