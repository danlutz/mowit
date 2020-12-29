import React from "react"
import { Alert, Button } from "react-native"
import { ScreenContainer } from "react-native-screens"
import { View, Text } from "../Themed"

export const CategoryDetailView = () => {
	return (
		<ScreenContainer>
			<Text>CategoryDetailView Screen</Text>
			<Button title="RENT IT" onPress={() => Alert.alert("RENT IT ")} />
		</ScreenContainer>
	)
}
