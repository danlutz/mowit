import React from "react"
import { Alert, Button } from "react-native"
import { ScreenContainer } from "react-native-screens"
import { View, Text } from "../Themed"

export const ForgotPassword = () => {
	return (
		<ScreenContainer>
			<Text>ForgotPassword Screen</Text>
			<Button
				title="Forgot Password clicked"
				onPress={() => Alert.alert("Forgot Password clicked")}
			/>
		</ScreenContainer>
	)
}
