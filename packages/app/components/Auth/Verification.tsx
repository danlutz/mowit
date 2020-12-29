import React from "react"
import { Alert, Button } from "react-native"
import { ScreenContainer } from "react-native-screens"
import { View, Text } from "../Themed"

export const Verification = () => {
	return (
		<ScreenContainer>
			<Text>Verification Screen</Text>
			<Button title="Verivy click" onPress={() => Alert.alert("Verifx")} />
		</ScreenContainer>
	)
}
