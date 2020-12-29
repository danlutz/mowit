import React from "react"
import { Alert, Button } from "react-native"
import { ScreenContainer } from "react-native-screens"
import { View, Text } from "../Themed"

export const AlreadyRented = () => {
	return (
		<ScreenContainer>
			<Text>Already Rented Screen</Text>
			<Button title="OK" onPress={() => Alert.alert("OK")} />
		</ScreenContainer>
	)
}
