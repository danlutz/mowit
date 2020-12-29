import React from "react"
import { Alert, Button } from "react-native"
import { ScreenContainer } from "react-native-screens"
import { View, Text } from "../Themed"
import { AuthContext } from "../../constants/context"

export const CreateAccount = () => {
	const { signUp } = React.useContext(AuthContext)

	return (
		<ScreenContainer>
			<Text>Create Account Screen</Text>
			<Button title="Fertig" onPress={() => signUp()} />
		</ScreenContainer>
	)
}
