import React from "react"
import { Alert, Button } from "react-native"
import { ScreenContainer } from "react-native-screens"
import { View, Text } from "../Themed"
import { AuthContext } from "../../constants/context"

export const Verification = () => {
	const { emailVerified } = React.useContext(AuthContext)

	return (
		<ScreenContainer>
			<Text>Verification Screen</Text>
			<Button title="Email Verified" onPress={() => emailVerified()} />
		</ScreenContainer>
	)
}
