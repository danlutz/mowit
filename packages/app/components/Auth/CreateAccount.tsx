import React from "react"
import { Alert, Button } from "react-native"
import { ScreenContainer } from "react-native-screens"
import { View, Text } from "../Themed"

export const CreateAccount = () => {
	return (
		<ScreenContainer>
			<Text>Create Account Screen</Text>
			<Button title="Fertig" onPress={() => Alert.alert("Fertig")} />
		</ScreenContainer>
	)
}
