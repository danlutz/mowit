import React from "react"
import { Alert, Button } from "react-native"
import { ScreenContainer } from "react-native-screens"
import { View, Text } from "../Themed"

export const ProductDetailView = () => {
	return (
		<ScreenContainer>
			<Text>ProductDetail Screen</Text>
			<Button title="OK" onPress={() => Alert.alert("OK")} />
		</ScreenContainer>
	)
}
