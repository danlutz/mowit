import React from "react"
import { Alert, Button } from "react-native"
import { ScreenContainer } from "react-native-screens"
import { View, Text } from "../Themed"
import { AuthContext } from "../../constants/context"
import { useNavigation } from "@react-navigation/native"

export const CreateAccount = () => {
	const { signUp } = React.useContext(AuthContext)
	const navigation = useNavigation()

	return (
		<ScreenContainer>
			<Text>Create Account Screen</Text>
			<Button title="SignUp" onPress={() => signUp()} />
			<Button title="E-Mail Verification" onPress={() => navigation.push("Verification")} />
		</ScreenContainer>
	)
}
