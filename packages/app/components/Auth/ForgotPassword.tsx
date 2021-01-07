import React from "react"
import { Alert, Button, TextInput } from "react-native"
import { ScreenContainer } from "react-native-screens"
import { View, Text } from "../Themed"

export const ForgotPassword = () => {
	const [eMailText, oncChangeEmailText] = React.useState("E-Mail")

	return (
		<ScreenContainer>
			<Text>ForgotPassword Screen</Text>
			<TextInput
				style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
				onChangeText={(text) => oncChangeEmailText(text)}
				value={eMailText}
				keyboardType={"email-address"}
			/>
			<Button title="Zurücksetzen" onPress={() => Alert.alert("Forgot Password clicked")} />
		</ScreenContainer>
	)
}
