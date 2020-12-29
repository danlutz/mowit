import React from "react"
import { Alert, Button } from "react-native"
import { ScreenContainer } from "react-native-screens"
import { View, Text } from "../Themed"

export const AddListing = () => {
	return (
		<ScreenContainer>
			<Text>AddListingScreen Screen</Text>
			<Button title="Hinzufügen" onPress={() => Alert.alert("AddListing")} />
		</ScreenContainer>
	)
}
